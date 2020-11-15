import React, {useState, useEffect, useRef} from "react"
import useWordGame from "../hooks/useWordGame"

function App(){

    const { 
        text, 
        timeRemaining, 
        isTimeRunning, 
        wordCount, 
        textareaRef, 
        handleChange, 
        startGame 
    } = useWordGame()
    
    return (
        <div>
            <h1>
                Speed Typing Game
            </h1>
            <textarea 
                ref={textareaRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />

            <h4>Time Remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame} 
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    )

}

export default App