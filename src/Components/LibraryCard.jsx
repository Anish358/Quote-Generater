import React from 'react'
import {Card , CardContent , Typography } from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import "./LibraryCard.css"
import db from "../firebase"


const LibraryCard = ({quote , author  , id}) => {
    return (
        <div>
             <Card className="quotecard">
                <CardContent>
                    <Typography className = "quote" variant="h6" >{quote} </Typography>
                    <h5>{"- " + author} </h5>
                </CardContent>
                <button className = "deletebtn" onClick = {() => db.collection('quotes').doc(id).delete()} ><DeleteIcon/></button> 
            </Card>
        </div>
    )
}

export default LibraryCard
