import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';
import {FaReact, FaExclamationCircle, FaRegGrinStars, FaHandPointDown} from "react-icons/fa";
import { Link } from '@material-ui/core';

export default function EndScreen() {
  const {score, setScore, setGameState} = useContext(QuizContext);
  const restartQuiz = () =>{
    setScore(0);
    setGameState("menu");
  } 
  return (
    <div className='EndScreen'>
      <h1>Quiz Completed</h1>
      <h3><FaReact className='icon' style={{verticalAlign:'middle',fontSize:'xx-larger'}}/> {score} / {Questions.length}</h3>
      <br></br>
      {score>3?(<h2><FaRegGrinStars className='icon' style={{verticalAlign:'middle',fontSize:'xx-larger'}}/> Wohooo you did it!!!</h2>)
      :
      (<div className='materials'>
        <h2><FaExclamationCircle className='icon' style={{verticalAlign:'middle',fontSize:'xx-larger'}}/> Improve your basics to hone your React skills</h2>
        <h2><FaHandPointDown className='icon' style={{verticalAlign:'middle',fontSize:'xx-larger'}}/> Here are few materials</h2>
        <Link href="https://www.w3schools.com/REACT/default.asp" onClick={() => {
              alert("Redirecting to W3 Schools");
            }}>
          Click w3schools
        </Link><br></br><br></br>
        <Link href="https://www.geeksforgeeks.org/learn-reactjs/" onClick={() => {
              alert("Redirecting to geeksforgeeks");
            }}>
          Click geeksforgeeks
        </Link>
      </div>
      )}
      <br></br>
      <div className='restartbtn'>
      <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    </div>
  )
}
