import React , {useState , useEffect} from 'react';
import './App.css';
import QuoteCard from './Components/QuoteCard';
import {Button} from "@material-ui/core"
import axios from 'axios'
import db from "./firebase"
import LibraryCard from './Components/LibraryCard';
import firebase from 'firebase'


function App() {

  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [arrayofQuotes, setArrayofQuotes] = useState([])

  const fetchQuote = async () => {
    try {
       const data = await axios.get("https://api.quotable.io/random")
       setQuote(data.data.content);
       setAuthor(data.data.author)
    } catch (error) {
      console.log(error);
    }
  }

  const saveQuote = () => {
      db.collection("quotes").add({
        quote : quote ,
        author : author ,
        timestamp : firebase.firestore.FieldValue.serverTimestamp()
      })
  }

  const getQuotes = () => {
    db.collection("quotes").orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
      setArrayofQuotes(snapshot.docs.map(doc => ({quote: doc.data() , id: doc.id})))
    })
  }

  useEffect(() => {
    getQuotes();
    fetchQuote();
  },[])

  return (
    <div className="App">
        <h1 className="title" >Quote Generator</h1>
        <QuoteCard quote = {quote} author={author}/>
        <Button onClick={fetchQuote} variant="contained" color="primary" style={{marginTop:"20px"}}className="new_btn">New Quote</Button>
        <Button onClick={saveQuote} variant="contained" color="primary" style={{marginTop:"20px" , marginLeft:"20px"}} className="new_btn">Save</Button>
        {/* <Button onClick={clearQuotes} variant="contained" color="primary" style={{marginTop:"20px" , marginLeft:"20px"}} className="new_btn">Clear Library</Button> */}
        <h1 className="library" >Library</h1>
        {arrayofQuotes.map((data) => (<LibraryCard quote = {data.quote.quote} author={data.quote.author} id = {data.id} />))}
    </div>
  );
}

export default App;
