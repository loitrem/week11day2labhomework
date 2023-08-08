import React from 'react'

function Greeting(props) {

  return (
    <div>
        <h1>Greetings Page</h1>
        <p><h2><a href="/">Home</a></h2></p>
        <p>{props.name!=null ? <h1>Whats up {props.name}!!</h1>:<h1>Hello Stranger</h1>}</p>
    </div>
  )
}

export default Greeting