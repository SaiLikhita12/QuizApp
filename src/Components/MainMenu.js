import React,{useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
import "../App.css";
import { FaAngleRight } from "react-icons/fa";

export default function MainMenu() {
    const {gameState, setGameState} = useContext(QuizContext);
  return (
    <div className='mainMenu'>
      <p className='heading'>Are you a beginner in react?</p>
      <p>Then this is the right place for you to test your basics...attempt our 5-question quiz and test yourself!</p>
      <br></br>
      <div className="Menu">
        <h1>Let's get started wohoo!!..</h1>
        <button onClick={()=>{
            setGameState("quiz");
        }}>Start quiz <FaAngleRight className='icon' style={{verticalAlign:'middle',fontSize:'large'}}/>
        </button>
      </div>
    </div>
  )
}
