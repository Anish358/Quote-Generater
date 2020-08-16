import React from 'react'
import {Card , CardContent , Typography , } from "@material-ui/core"
import "./QuoteCard.css"

const QuoteCard = ({quote , author }) => {
    return (
        <div className="quote_container">
            {quote 
                ?
            (<Card>
                <CardContent>
                    <Typography className="quotecard_text" variant="h5" >{quote} </Typography>
                    <Typography variant="h6" >{"- " + author} </Typography>
                </CardContent>
            </Card>)
            :
             (
                 <h3>Loading...</h3>
             )
            }
        </div>
    )
}

export default QuoteCard
