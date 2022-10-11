import { useEffect } from "react";




function Timer({ answered, setAnswered, setTimeOut, questionNumber, timer, setTimer, changeUsed }) {

    useEffect(() => {
        if (timer === 0) return setTimeOut(true);
        const interval = setInterval(() => {
            if(answered === false) {
                setTimer((prev) => prev - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [timer, answered, setTimeOut]);

    useEffect(() => {
        setAnswered(false)
        setTimer(30);
    }, [questionNumber, changeUsed]);
    return timer;
}

export default Timer;