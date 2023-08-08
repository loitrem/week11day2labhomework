import React from 'react'

function Magic(props) {

    const response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
  
    if (props.question){

          let prediction = response[Math.floor(Math.random()*21)]

    return (
    <div>
        <h1>Magic 8 Ball</h1>
        <p><h2><a href="/">Home</a></h2></p>
        <p><h1>Your Question: {props.question}</h1></p>
        <p><h2>Prediction:</h2></p>
        <p><h1>{prediction}</h1></p>

    </div>
  )
    } else {
      return (
        <div>
        <h1>Magic 8 Ball</h1>
        <p><h2><a href="/">Home</a></h2></p>
        <p><h1>No question asked</h1></p>

    </div>
        )
    }

    
}

export default Magic