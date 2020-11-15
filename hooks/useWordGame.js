import {useState, useRef, useEffect} from 'react'

function useWordGame () {
    const STARTING_TIME = 15
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textareaRef = useRef(null)

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function calculateWordCount(text){
        const wordsArray = text.trim().split(' ')
        const filteredWords = wordsArray.filter(word => word !== "")
        return filteredWords.length
    }
    function startGame(){
        setIsTimeRunning(true)
        setTimeRemaining(STARTING_TIME)
        setText('')
        setWordCount(0)
        textareaRef.current.disabled = false
        textareaRef.current.focus()
    }
    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
    }
    
    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0){
            setTimeout(() => {
                setTimeRemaining(time => time - 1);
           }, 1000);
        } else if(timeRemaining === 0) {
            endGame()
        }
        return () => {
            clearTimeout(timeRemaining)
        }
    }, [timeRemaining, isTimeRunning]) 
    
    return {
        text, 
        timeRemaining, 
        isTimeRunning, 
        wordCount, 
        textareaRef, 
        handleChange, 
        startGame
    }
}

export default useWordGame