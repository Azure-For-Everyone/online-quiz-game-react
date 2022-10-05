import "./App.css";
import React from "react";
import { useEffect, useState, useMemo } from 'react';
import { Questionnaire } from './components';
import Timer from "./components/Timer";
import Change from "./components/Change";
import Start from "./components/Start";
import Timesup from "./components/Timesup";
import DoubleTime from "./components/DoubleTime";
import questionsDevoxx from "./components/QuestionsDevoxx";
import Leaderboard from "./components/Leaderboard";

const apiUrl = "https://opentdb.com/api.php?amount=100";

const myName = "Microsoft";
let currentYear = new Date().getFullYear();

function App() {

  //tracking if the user registered or not => if not -> showing welcome screen
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);


  //tracking question number, current array and currIndex of question 
  //from fatched questions's array
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  
  const [currIndex, setCurrIndex] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);


  //tracking current earn and game status => when gameOver = true -> game is end,
  // when time is out => the player need to press btn to continue
  const [earn, setEarn] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timeOut, setTimeOut] = useState(false);
  const [timer, setTimer] = useState(60);
  const [page, setPage] = useState("leaderboard");

  const [leaderboard, setLeaderboard] = useState([
    {name: "Cedric", score: 550},
    {name: "Joris", score: 4200},
    {name: "Dorien", score: 2000},
    {name: "Amandine", score: 5400},
    {name: "Patrick", score: 3200},
    {name: "Nico", score: 3600},
    {name: "Tim", score: 3200},
    {name: "Leen", score: 3200}
  ]);

  // Timer and Life_Lines
  const [doubleTimeUsed, setDoubleTimeUsed] = useState(false);
  const [changeUsed, setChangeUsed] = useState(false);

  // const [fiftyFifty, setFiftyFifty] = useState(false);

  //Questions's earn values
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: 60 * 10 },
        { id: 2, amount: 60 * 10 },
        { id: 3, amount: 60 * 10 },
        { id: 4, amount: 60 * 10 },
        { id: 5, amount: 60 * 10 },
        { id: 6, amount: 60 * 10 },
        { id: 7, amount: 60 * 10 },
        { id: 8, amount: 60 * 10 },
        { id: 9, amount: 60 * 10 },
        { id: 10, amount: 60 * 10 },

      ].reverse(),
    []
  );




  //Fetching the questions's API, Creating current question array and mix it
  useEffect(() => {
    const qs = questionsDevoxx;
    const questions = qs.map((question) =>
    ({
      ...question,
      answers: [
        question.correct_answer,
        ...question.incorrect_answers,
      ].sort(() => Math.random() - 0.5),
    }))
    setQuestions(questions);
  }, []);

  //handling answer: showing the correct answer & update the earn
  const handleAnswer = (answer) => {


   const response = {
    id: currIndex,
    question: questions[currIndex],
    answer,
    points: 0,
   }



    //check for the answer
    if (answer === questions[currIndex].correct_answer) {
      //updating earn
      //need to decide how to end the game and update the earn calc
      setEarn(timer * 10 + earn);
      response.points = timer * 10
    }

    const newAnswers = [...answers, response]
    setAnswers(newAnswers);
    handleNextQuestion(true);

  };

  //lunching next question and stop showing corrrect answer
  const handleNextQuestion = (changeQuestion) => {
    if (questionNumber === 10) {
      setGameOver(true);
    }
    if (changeQuestion) {
      setQuestionNumber(questionNumber + 1);
    }
    //show another question
    setCurrIndex(currIndex + 1);
  }


  //change page
  const playGame = () => {
    setPage("game");
  }
  const showLeaderboard = () => {
    setPage("leaderboard");
  }
  
  
  //rendering screens and 
  return page === "leaderboard" ? <div className="leaderScreen">
      <Leaderboard users={leaderboard} playGame={playGame} paginate={1000}/>
    </div> : ( !email ?
    (

      <div className="startScreen">
        <header>
      <h1>Test your knowledge<br/>Win in a Surface Pro 8</h1>

                        <button className="go-to" onClick={showLeaderboard}>🏆 Go to leaderboard</button>
        </header>
        <Start setUsername={setUserName} setEmail={setEmail} />
      </div>
    ) : (

      //checking if data already fetched => if not -> showing loading message
      questions.length > 0 ? (

        // Main app div
        <div className="app">

          <>

            {/* Main (Left) container: Top & Bottom containers, and if game is over => Over container  */}
            <div className="main col-9">
              {gameOver ? (

                <div className="answer-table">
                  <div className="timesup">

                      <div className="header">
                        <h1>You did great!</h1>
                        <h2><span>★ {earn}</span></h2>
                        <button onClick={showLeaderboard}>🏆 Go to leaderboard</button>
                      </div>

                      <div className="answer-table">
                        { answers.map((a, idx) => {
                            
                            const qAnsers = [ ...a.question.incorrect_answers, a.question.correct_answer]

                            return <div>
                              {a.question.question}
                              <div className="row-answers"> {
                                qAnsers.map((qa, id)  => {

                                  const isCorrect = a.answer === a.question.correct_answer
                                  const isCurrentAnswer = qa === a.answer

                                  return <div className="td-answers">
                                    
                                    { isCorrect && isCurrentAnswer && <span className='selected correct'>{qa}</span> }
                                    { !isCorrect && isCurrentAnswer && <span className='selected not-correct'>{qa}</span> }
                                    { !isCurrentAnswer && <span>{qa}</span> }
                                    
                                  </div>
                                })}
                                </div>
                                { (idx < answers.length-1) && <div><hr/><br/></div> }
                            </div>
                            })
                        }
                      </div>
                  </div>
                </div>

              ) : timeOut ? (


                //sadely i have an unfixed problem:
                //when player's time is up he needs to click the btn to continue the game
                //right now when he does, the state of the useState const - timeOut
                //change only by the 2nd click, what lead to another click and skiping a question
                //i read that it's because of some problem in react changing state 
                //and because Because setState() is an asynchronous function but wouldn't found a solution
                //so at this moment the player needs to click 2 times and he loses another question.

                <Timesup
                  userName={userName}
                  setTimeOut={setTimeOut}
                  setTimer={setTimer}
                  timeOut={timeOut}
                  setGameOver={setGameOver}
                  questionNumber={questionNumber}
                  handleNextQuestion={handleNextQuestion}
                />
              ) : (

                <>

                  {/* Top container: Question#, Timer, LifeLines & QuitGame button  */}
                  <div className="top">

                    <div className="timer">

                      <Timer
                        setTimeOut={setTimeOut}
                        questionNumber={questionNumber}
                        timer={timer}
                        setTimer={setTimer}
                        changeUsed={changeUsed}
                      />

                    </div>


                  </div>

                  {/* Bottom container: Questions & Answers container */}
                  <div className="bottom">

                    <Questionnaire
                      data={questions[currIndex]}
                      handleAnswer={handleAnswer}
                      setTimeOut={setTimeout}

                    />

                  </div>

                </>
              )}

            </div>

            {/* Pyramid (Right container): game progress & question's value */}
            <div className="pyramid col-3">

              <div className="moneyList vh-100">
              {moneyPyramid.map((m, idx) => (
                 
                 <div
                    className={
                      questionNumber === m.id
                        ? "moneyListItem active row"
                        : (questionNumber < m.id) ? "moneyListItem row" : "moneyListItem row answered"
                    }
                    key={idx}
                  >

                    {/* money pyramid div with seperation for Quest.# & amount */}


                    <div className="moneyListItemNumber col-3 d-flex align-items-center">
                      {m.id}
                    </div>

                    { questionNumber === m.id && <div className="moneyListItemAmount col-9 d-flex align-items-center">
                      ★ { questionNumber === m.id ? timer * 10 : m.amount}
                    </div> }

                    { questionNumber < m.id && <div className="moneyListItemAmount col-9 d-flex align-items-center">
                      ★ { m.amount }
                    </div> }

                    { questionNumber > m.id && <div className="moneyListItemAmount col-9 d-flex align-items-center">
                      ★ { answers[m.id-1] ? answers[m.id-1].points : 0 }
                    </div> }

                  </div> 
                ))}
                

                <div className="yourpoints">Your points ★ {earn}</div>

              </div>

            </div>

          </>

        </div>

      ) : (
        <h2 className='big'>Loading...</h2>
      )//questions.length > 0 ?

    ));//return

}//function App

export default App;
