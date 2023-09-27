import React from 'react'
import { AnswerObject } from "../quizGame/quizGame";



type Props = {

  question:string;
  answers:string[];
  callback:(e:React.MouseEvent<HTMLButtonElement>) => void;
  useranswer:AnswerObject | undefined;
  questionNr:number;
  totalQuestions:number;

}

const QuestionCard = (props: Props) => {
  return (
    <div>
      <button className="number">Question {props.questionNr} / {props.totalQuestions}</button>
      
        <p className='question' dangerouslySetInnerHTML={{__html:props.question}}></p>
        
        <div >
          
          {props.answers.map(answer =>(
            <div key={answer}>
              <button className='answer-data' disabled={props.useranswer ? true:false} value={answer} onClick={props.callback}>{answer}</button>
              {/* <span dangerouslySetInnerHTML={{__html:answer}}></span> */}
            </div>
          ))}

        </div>
    </div>
    
  )
}

export default QuestionCard