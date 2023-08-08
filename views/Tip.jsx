import React from 'react'

function Tip(props) {

if (props.custom===true){

}
    return (
        <div>
            <h1>Tip Calculator Page</h1>
            <p><h2><a href="/">Home</a></h2></p>
            <p>{props.total && props.percent ? <h1>Your Total was: {props.total}<p>Your tip percent is: {props.percent}</p>
            <p>Your tip is: {props.total*(props.percent/100)}</p></h1>:<h1>Nothing to calculate</h1>}</p>
        </div>
    )
}

export default Tip