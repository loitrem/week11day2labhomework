import React from 'react'

function Index() {
  return (
    <div>
        <h1>Menu</h1>
    <p><h2><a href="/greeting">Generic Greeting</a></h2></p>
    <p><h2><a href="/greeting/Erik">Specific Greeting</a></h2></p>
    <p><h2><a href="/tip">Tip Calculator No Values</a></h2></p>
    <p><h2><a href="/tip/100/10">Tip Calculator 10%</a></h2></p>
    <p><h2><a href="/tip/100/15">Tip Calculator 15%</a></h2></p>
    <p><h2><a href="/tip/100/20">Tip Calculator 20%</a></h2></p>
    <p><h2><a href="/magic">Magic 8 ball without question</a></h2></p>
    <p><h2><a href="/magic/will%20i%20be%20a%20millionaire">Magic 8 ball with question</a></h2></p>
    </div>
  )
}

export default Index