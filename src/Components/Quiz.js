import React,{useState, useContext} from 'react'
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';

export default function Quiz() {

    const {score, setScore, setGameState} = useContext(QuizContext);

    const [curQuestion, setCurQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    console.log(score);
    const nextQuestion = () =>{
        if(Questions[curQuestion].answer == optionChosen){
            setScore(score+1);
        }
        console.log(score);
        setCurQuestion(curQuestion+1);
    };
    const prevQuestion = () => {
        setCurQuestion(curQuestion-1);
    }
    const finishquiz = () => {
        if(Questions[curQuestion].answer == optionChosen) {
            setScore(score+1);
        }
        setGameState("endScreen");
    }
  return (
    <div>
        <h2 id='head'>Quiz yourself on React!</h2>
        <br></br>
        <div className="Quiz">
            <h3>{Questions[curQuestion].prompt}</h3>

            <div className='options'>
                <button className="firstbtn buttons" onClick={()=> setOptionChosen("A")}>{Questions[curQuestion].optionA}</button>
                <button className="buttons" onClick={()=> setOptionChosen("B")}>{Questions[curQuestion].optionB}</button>
                <button className="buttons" onClick={()=> setOptionChosen("C")}>{Questions[curQuestion].optionC}</button>
                <button className="buttons" onClick={()=> setOptionChosen("D")}>{Questions[curQuestion].optionD}</button>
            </div>
            <p>click on the option to select</p>
        </div>
        <br></br>
        {curQuestion != 0 && <button className='nextbutton' onClick={prevQuestion}>Previous Question</button>}
        {curQuestion == Questions.length-1? (<button className='nextbutton' onClick={finishquiz}>Finish Quiz</button>):(<button className='nextbutton' onClick={nextQuestion}>Next Question</button>)}
    </div>
  );
}
