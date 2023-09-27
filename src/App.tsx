import React from 'react'
import QuizGame from './components/quizGame/quizGame'
// https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple

type Props = {}

const App = (props: Props) => {
  return (
    <div>
      <QuizGame />
    </div>
  )
}

export default App