import { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'

import { shuffleArray } from '../../utils'
import type { Question } from '../../types'

interface Props {
    questions: Question[]
    currentQuestion: number
    // handlePrev: (e: React.MouseEvent<HTMLButtonElement>) => void
    handleNext: (selectedAnswer: string, e: React.MouseEvent<HTMLButtonElement>) => void
}

const QuestionCard = ({ questions, currentQuestion, handleNext }: Props) => {
    const [answers, setAnswers] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState('')

    const parsedQuestion = DOMPurify.sanitize(questions[currentQuestion].question)

    const isLastQuestion = currentQuestion === questions.length - 1

    useEffect(() => {
        const initialAnswers = shuffleArray([...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer])

        setAnswers(initialAnswers)

        return () => {
            setAnswers([])
            setSelectedAnswer('')
        }
    }, [currentQuestion])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAnswer(e.target.value)
    }

    return (
        <>
            <div className='text-balance px-3 mb-4'>
                <span className='text-purple-600 text-lg font-bold mr-2'>#{currentQuestion + 1}</span>
                <span dangerouslySetInnerHTML={{ __html: parsedQuestion }} />
            </div>
            <div className='grid md:grid-cols-2 gap-6 mb-4'>
                {answers.map((answer) => (
                    <div
                        key={answer}
                        className={`flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 cursor-pointer ${selectedAnswer === answer && 'bg-gray-700 border-transparent'}`}>
                        <input id={answer} type='radio' value={answer} checked={selectedAnswer === answer} onChange={handleChange} className='w-4 h-4 outline-none cursor-pointer' />
                        <label htmlFor={answer} className='w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer'>
                            {answer}
                        </label>
                    </div>
                ))}
            </div>
            <div className='w-full flex items-end justify-between gap-6'>
                {/* {currentQuestion > 0 && (
                    <>
                        <button
                            type='button'
                            className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg tracking-wider px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer'
                            onClick={handlePrev}>
                            PREV
                        </button>
                    </>
                )} */}
                <button
                    type='button'
                    disabled={!selectedAnswer}
                    className='ml-auto focus:outline-none text-white bg-purple-700 enabled:hover:bg-purple-800 focus:ring-4 enabled:focus:ring-purple-300 font-bold rounded-lg tracking-wider px-5 py-2.5 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:enabled:focus:ring-purple-900 disabled:opacity-60 enabled:cursor-pointer'
                    onClick={(e) => handleNext(selectedAnswer, e)}>
                    {isLastQuestion ? 'FINISH' : 'NEXT'}
                </button>
            </div>
        </>
    )
}

export default QuestionCard
