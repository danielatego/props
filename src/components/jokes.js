import React from "react";
export default function Jokes(props) {

    const[isShown, setIsShown]= React.useState(false)
     function Shown(){
        setIsShown(rada=>!rada)
     }
     console.log(isShown)
    return(
        <>
        <h1>Joke #{props.number}</h1>
        <p><strong>setup</strong>: {props.setup}</p>
        {/* {isShown ? <p> <strong>punchline:</strong> {props.punchline}</p> : '' } */}
        {isShown && <p> <strong>punchline:</strong> {props.punchline}</p> }
        <button onClick={Shown}>{isShown?'Hide':'Show'}</button>
        
        </>
    
    )    
}
