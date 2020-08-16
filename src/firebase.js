import firebase from "firebase"

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBaFBRACpGBirZEsIvOtBaxveJ91C0cwbs",
        authDomain: "quote-generater.firebaseapp.com",
        databaseURL: "https://quote-generater.firebaseio.com",
        projectId: "quote-generater",
        storageBucket: "quote-generater.appspot.com",
        messagingSenderId: "742793229137",
        appId: "1:742793229137:web:d95ff7c7f3135fefbd9970",
        measurementId: "G-LBC0VW89HY"
      }
);

const db = firebase.firestore();

export default db;