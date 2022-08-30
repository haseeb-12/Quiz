import React, { useState } from 'react'
import question from './Data'
import './Quiz.css'
function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0)
    const[showScore,setShowScore]=useState(false)

    const nextQusetion = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQusetion = currentQuestion + 1
        if (nextQusetion < question.length) {
            setCurrentQuestion(nextQusetion)
        }
        else
            setShowScore(true)
    }
    return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {question.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{question.length}
						</div>
						<div className='question-text'>{question[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{question[currentQuestion].answerOptions.map((option) => (
							<button onClick={() => nextQusetion(option.isCorrect)}>{option.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz