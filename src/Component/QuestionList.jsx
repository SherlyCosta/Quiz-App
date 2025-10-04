import React from 'react'

function QuestionList({question, options, handleClick, currAnswere}) {
  return (
    <div>
    <h2 className='text-2xl sm:text-3xl md:text-2xl font-semibold mt-1.5 mb-10'>{question}</h2>
    <ul className='space-y-4'>
        {options.map((option, index)=> (
            <li className={`px-6 py-4 border-2 border-white rounded-lg text-center hover:bg-gray-100 hover:text-gray-700 transition-colors cursor-pointer ${currAnswere === option ? 'bg-indigo-600' : ''}`}
            key={index} onClick={()=>handleClick(option)}>{option}</li>
        ))}
    </ul>
    </div>
  )
}

export default QuestionList
