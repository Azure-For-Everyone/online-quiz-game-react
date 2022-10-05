import React from "react";

export default function Timesup({ userName, setTimeOut, setTimer, handleAnswer, handleNextQuestion, questionNumber, setGameOver }) {

    const handleClick = () => {
        if (questionNumber === 10) {
            setGameOver(true);
        }

        setTimeOut(false);
        setTimer(60);
        handleAnswer("");
    };

    return (
        <div className="run-out-of-time">
            <div className="timesup">
                <h1>You have no time left &#128336;!</h1><br/>
                <h3>No points for you this time</h3>
                <button 
                    onClick={handleClick}
                >Next question</button>
            </div>
        </div>
    );
}