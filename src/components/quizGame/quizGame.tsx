import React, { useState } from 'react'
import QuestionCard from "../QuestionCard/QuestionCard";
import { Difficulty, fetchQuestions, QuestionState } from '../ApiFetch/Api';
import { Globalstyle , Wrapper } from "../Styles/App.style";


export type AnswerObject = {
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string;
}

const totalQuestions = 10;

const QuizGame = () => {

  const [Loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState(true);

  const getDetails = async() =>{
    setLoading(true);
    setGameover(false);
    const newQuestions = await fetchQuestions(totalQuestions,Difficulty.EASY)
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setLoading(false);
  }

  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) =>{
    if(!gameover){
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer===answer;
      if(correct) setScore((prev)=>prev+1);
      
      const answerObject={
        question:questions[number].question,
        answer,
        correct,
        correctAnswer:questions[number].correct_answer
      }
      setUserAnswer((prev)=>[...prev,answerObject]);
    }
  }

  const nextQuestion = () =>{
    const nextQuestion = number+1;
    if(nextQuestion === totalQuestions){
      setGameover(true)
    }
    else{
      setNumber(nextQuestion)
    }
  }



  return (
    <>
    <Globalstyle />
    <Wrapper>
    <div>
      <h1 className='h1'>Quiz App</h1>

      {
        gameover || userAnswer.length === totalQuestions ? (
          <button className='start' onClick={getDetails}>Start</button>
        ):null
      }
      {
        !gameover ? (
          <button className='score'>Score:{score}</button>
        ):null
      }

      {Loading && <p className='load'>Loading...</p>}
      
      {
        !Loading && !gameover &&(
          <QuestionCard
            questionNr={number+1}
            totalQuestions={totalQuestions}
            question={questions[number].question}
            answers={questions[number].answers}
            useranswer={userAnswer ? userAnswer[number]: undefined}
            callback={checkAnswer}
          />
        )
      }

      {
        !gameover && !Loading && userAnswer.length === number+1 && number!== totalQuestions-1 ?(
          <button className='next' onClick={nextQuestion}>Next</button>
        ):null
      }

    </div>
    </Wrapper>
    </>
  )
}

export default QuizGame