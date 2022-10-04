import React from "react";

export default function Timesup({ userName, setTimeOut, setTimer, handleNextQuestion, questionNumber, setGameOver }) {

    const handleClick = () => {
        if (questionNumber === 10) {
            setGameOver(true);
        }

        setTimeOut(false);
        setTimer(60);
        handleNextQuestion(true);
    };

    return (
        <div>
            <div className="timesup">
                <h1>You have no time left &#128336;!</h1><br/>
                <button 
                    onClick={handleClick}
                >Next question</button>
            </div>
        </div>
    );
}