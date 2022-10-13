import "./App.css";
import React from "react";
import {
  useParams
} from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react';
import { Questionnaire } from './components';
import Timer from "./components/Timer";
import Start from "./components/Start";
import Timesup from "./components/Timesup";
import questionsDevoxx from "./components/QuestionsDevoxx";
import questionsMicrosoft from "./components/QuestionsMicrosoft";
import questionsDatamindsConnect from "./components/QuestionsDatamindsConnect";
import questionsReact from "./components/QuestionsReact";
import Leaderboard from "./components/Leaderboard";

const apiUrl = "https://msft-quiz-api.azurewebsites.net";
const myName = "Microsoft";

let currentYear = new Date().getFullYear();

function App() {

  const params = useParams();
  let theme = "microsoft"
  if(params && params.event && params.event !== "") {
    const { event } = params
    theme = event;
  }

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
  const [answered, setAnswered] = useState(false);
  const [timer, setTimer] = useState(30);
  const [page, setPage] = useState("leaderboard");

  const [leaderboard, setLeaderboard] = useState([]);
  //Fetching the questions's API, Creating current question array and mix it
  useEffect(() => {
    fetch(apiUrl + "/leaderboard/" + theme)
    .then((res) => res.json())
    .then((data) => {
      if(data && data.leaderboard) {
        const players = data.leaderboard.map(u => {
          return {
            name: u.username,
            score: u.score,
            page: 1,
          }
        })
        setLeaderboard(players);
      }
    });
  }, []);


  // Timer and Life_Lines
  const [doubleTimeUsed, setDoubleTimeUsed] = useState(false);
  const [changeUsed, setChangeUsed] = useState(false);

  // const [fiftyFifty, setFiftyFifty] = useState(false);

  //Questions's earn values
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: 30 * 10 },
        { id: 2, amount: 30 * 10 },
        { id: 3, amount: 30 * 10 },
        { id: 4, amount: 30 * 10 },
        { id: 5, amount: 30 * 10 },
        { id: 6, amount: 30 * 10 },
        { id: 7, amount: 30 * 10 },
        { id: 8, amount: 30 * 10 },
        { id: 9, amount: 30 * 10 },
        { id: 10, amount: 30 * 10 },
      ].reverse(),
    []
  );
  



  useEffect(() => {
    refreshQuestions();
  }, []);


  const refreshQuestions = () => {
    let qs = questionsMicrosoft
    if(theme === 'devoxx') {
      qs = questionsDevoxx;
    } else if (theme === 'datamindsconnect'){
      qs = questionsDatamindsConnect
    } else if (theme === 'reactbrussels'){
      qs = questionsReact
    }

    const questions = qs.map((question) =>
    ({
      ...question,
      answers: [
        question.correct_answer,
        ...question.incorrect_answers,
      ].sort(() => Math.random() - 0.5),
    })).sort(() => Math.random() - 0.5)
    setQuestions(questions);
  }

  //handling answer: showing the correct answer & update the earn
  const handleAnswer = (answer) => {

   const response = {
    id: currIndex,
    question: questions[currIndex],
    answer,
    points: 0,
   }

   let totalScore = earn
   let points = timer * 10;

    //check for the answer
    if (answer === questions[currIndex].correct_answer) {
      //updating earn
      //need to decide how to end the game and update the earn calc
      totalScore += points
      setEarn(totalScore);
      response.points = points
    }

    const newAnswers = [...answers, response]
    setAnswers(newAnswers);
    handleNextQuestion(true, totalScore);

  };

  //launching next question and stop showing corrrect answer
  const handleNextQuestion = (changeQuestion, totalPoints) => {
    if (questionNumber === 10) {
      setGameOver(true);

      // Send answers to API!
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          username: userName,
          email: email, 
          score: totalPoints, 
        })
      };
      fetch(apiUrl + "/leaderboard/" + theme, requestOptions)
          .then(response => response.json())
          .then(data => {
            if(data && data.leaderboard) {
              const players = data.leaderboard.map(u => {
                return {
                  name: u.username,
                  score: u.score,
                  page: 1,
                }
              })
              setLeaderboard(players);
            }
        })

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
    setUserName("")
    setEmail("")
    setEarn(0)
    setQuestionNumber(1)
    setAnswers([]);
    setQuestions([]);
    refreshQuestions();
    setGameOver(false)
    setTimeOut(false)
    setCurrIndex(0);
  }
  
  //rendering screens and 
  return page === "leaderboard" ? <div className="leaderScreen">
    <Leaderboard users={leaderboard} event={theme} playGame={playGame} paginate={1000}/> 

    </div> : ( !email ?
    (

      <div className="startScreen" style={{"background-image": "url(./"+theme+"-bg.png)", "background-size": "contain"}}>
        <header>
          <h1>Test your knowledge<br/>Win a Surface Headphone</h1>
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
            <div className="main col-9" style={{"background": "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), #19191f), url(./"+theme+"-bg.png) center", "background-size": "contain"}}>
              {gameOver ? (

                <div className="answer-table">
                  <div className="timesup">

                      <div className="header">
                        <h1>You did great!</h1>
                        <h2><span>★ {earn}</span></h2>

                        <button onClick={showLeaderboard}>🏆 Go to leaderboard</button>


                        <h4>or</h4>


                        <img class="qr-code" src="./qr-code.png"/>
                        <h4 className="learn-more">Learn more about Java at Microsoft!</h4>
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
                  handleAnswer={handleAnswer}
                  questionNumber={questionNumber}
                  handleNextQuestion={handleNextQuestion}
                />
              ) : (

                <>

                  {/* Top container: Question#, Timer, LifeLines & QuitGame button  */}
                  <div className="top">

                    <div className="timer">

                      <Timer
                        answered={answered}
                        setAnswered={setAnswered}
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
                      setAnswered={setAnswered}
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
