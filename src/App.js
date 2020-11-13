import React, {useState, useEffect} from "react"

function App(){
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(15)


    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function calculateWordCount(text){
        const wordsArray = text.trim().split(' ')
        const filteredWords = wordsArray.filter(word => word !== "")
        return filteredWords.length
    }
   
    useEffect(() => {
        if(timeRemaining > 0){
            setTimeout(() => {
                setTimeRemaining(time => time - 1);
           }, 1000);
        }
        return () => {
            clearTimeout(timeRemaining)
        }
    }, [timeRemaining])

    return (
        <div>
            <h1>
                Speed Typing Game
            </h1>
            <textarea 
                onChange={handleChange}
                value={text}
            />

            <h4>Time Remaining: {timeRemaining}</h4>
            <button onClick={() => console.log(calculateWordCount(text)) }>
                Start
            </button>
            <h1>Word Count: ???</h1>
        </div>
    )

}

export default App