import React, { useState } from 'react'
import QuestionList from './QuestionList'

function Quiz() {
    
    const questions=[
        {
            question: "Q1. During which phase of the SDLC should the QA team ideally start creating the Test Strategy document?",
            options: ['Requirements Gathering & Analysis', 'Development', 'Testing', 'Deployment'],
            answere: "Requirements Gathering & Analysis"
        },
        {
            question: "Q2. What is the correct sequence of activities in the Waterfall SDLC model?",
            options: [' Design → Requirements → Testing → Implementation', 'Requirements → Design → Implementation → Testing → Maintenance', 'Testing → Design → Requirements → Implementation', 'Requirements → Implementation → Design → Testing'],
            answere: "Requirements → Design → Implementation → Testing → Maintenance"
        },
        {
            question: "Q3. Which SQL command is used to retrieve data from a database?",
            options: [' INSERT', 'SELECT', 'UPDATE', 'DELETE'],
            answere: "SELECT"
        },
        {
            question: "Q4. What does the WHERE clause do in SQL?",
            options: [' Sorts the results', 'Filters records based on conditions', 'Joins tables', 'Groups records'],
            answere: "Filters records based on conditions"
        },
        {
            question: "Q5. Which SQL clause is used to remove duplicate records from results?",
            options: [' UNIQUE', 'DISTINCT', 'REMOVE', 'FILTER'],
            answere: "DISTINCT"
        },
        {
            question: "Q6. Which SQL JOIN returns all records when there's a match in either table?",
            options: [' INNER JOIN', 'LEFT JOIN', ' RIGHT JOIN', 'FULL OUTER JOIN'],
            answere: "FULL OUTER JOIN"
        },
        {
            question: "Q7. What is the output of console.log(2 + '2') ",
            options: [' 4', '22', 'NaN', 'undefined'],
            answere: "22"
        },
        {
            question: "Q8. Virtual DOM in React is:",
            options: [' A copy of the actual DOM stored in memory', 'The real browser DOM', ' A CSS object', 'A JavaScript event handler'],
            answere: "A copy of the actual DOM stored in memory"
        },
    ]
    const [currQuestionIndex, setCurrQuestionIndex]= useState(0);
    const [currAnswere, setCurrAnswere]= useState(null);
    const [score, setScore]= useState(1);
    const handleClick=(option)=>{
        setCurrAnswere(option);
        if(option === questions[currQuestionIndex].answere){
            setScore(score + 1);
        }
    }
    const handleNextQuestion=()=>{
        setCurrQuestionIndex(currQuestionIndex + 1);
        setCurrAnswere(null);
    }

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4 px-4 md:px-8 lg:mx-96'>

        {currQuestionIndex < questions.length 
        ? 
        <div className='w-full max-w-2xl border-2 border-gray-300 rounded-lg shadow-md p-6 bg-gray-700 text-white'>
        {/* <h1 className='text-3xl font-bold'>Quiz</h1> */}

        {/* pass the props in the QuestionList */}
        <QuestionList question={questions[currQuestionIndex].question} 
        options={questions[currQuestionIndex].options} handleClick={handleClick} currAnswere={currAnswere}
        />
        <div className='flex justify-center mt-8'>
            <button className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg ${currAnswere === null ? 'cursor-not-allowed' : 'bg-green-500 cursor-pointer'}`}
            disabled={currAnswere === null}
            onClick={handleNextQuestion}>
                Next Question
            </button>
        </div>
    
        </div> 
        : 
        <div className='text-3xl font-bold text-gray-800'>Your Score is: {score}/8</div>}

        

    </div>

    
    
  )
}

export default Quiz
