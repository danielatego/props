export default function Jokes(props) {

    return(
        <>
        <h1>Joke #{props.number}</h1>
        <p><strong>setup</strong>: {props.setup}</p>
        <p> <strong>punchline:</strong> {props.punchline}</p>
        </>
    
    )    
}
