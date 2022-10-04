import React from "react";

export default function Timesup({ userName, setTimeOut, handleNextQuestion, questionNumber, setGameOver }) {

    const handleClick = () => {
        if (questionNumber === 10) {
            setGameOver(true);
        }
        handleNextQuestion(true);
    };

    return (
        <div>
            <div className="timesup">
                <h1>Time's UP &#128336;!</h1><br/>
                <button className="col-6 mt-6 btn btn-light btn-lg" data-bs-toggle="button"
                    onClick={handleClick}
                >Next question</button>
            </div>
        </div>
    );
}