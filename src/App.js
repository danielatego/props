import Jokes from "./components/jokes";
import data from "./jokesData"
import React from "react";
export default function App(){
    const [messages, setMessages]= React.useState(['e',''])
    // const jokesListView = data.map(joke=>{
    //     return(
    //         <Jokes number={joke.Number} 
    //                 setup= {joke.Setup}
    //                 punchline ={joke.Punchline}
    //                 key = {joke.Number}
    //         />
    //         )
    // })
return(
    <div>
        {messages.length==0? <h1>
            You are all caught up
        </h1>:<h1>
            You have {messages.length} unread message{messages.length>1?'s':''}!
        </h1>}
    </div>
    // <>
    //     {jokesListView}
    // </>
)
}

/* <Jokes
        number='1'
        setup='I got my daughter a fridge for her birthday.'
        punchline="I can't wait to see her face light up when she opens it."/>
        <Jokes
        number='2'
        setup='How did the hacker escape the police?'
        punchline='He just ransomware'/>
        <Jokes
        number='3'
        setup="Why don't pirates travel on mountain roads"
        punchline='Scurvy'/>
        <Jokes
        number='4'
        setup='Why do bees stay in the hive in the winter'
        punchline='Swarm'/>
        <Jokes
        number='5'
        setup="What's the best thing about Switzerland"
        punchline='I do not know but the flag is a big plus'/>
        <Jokes
        number='6'
        setup='What did the cow say to the farmer on the cold winter morning?'
        punchline='Thanks for the warm hands'/> */