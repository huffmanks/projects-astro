import { useState } from 'react'

import Form from './Form'
import QuestionCard from './QuestionCard'
import Score from './Score'
import type { Question } from '../../types'
import { getLabelByValue } from '../../utils'

const initialOptions = {
    category: '',
    difficulty: '',
}

const QuizWrapper = () => {
    const [quizOptions, setQuizOptions] = useState(initialOptions)
    const [questions, setQuestions] = useState<Question[] | []>([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [isQuizOver, setIsQuizOver] = useState(false)
    const [isError, setIsError] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target

        setQuizOptions((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const apiUrl = `https://opentdb.com/api.php?amount=10&type=multiple&category=${quizOptions.category}&difficulty=${quizOptions.difficulty}`

            const res = await fetch(apiUrl)
            const data = await res.json()

            if (!data?.results || data?.results?.length < 1) {
                setIsError(true)

                setTimeout(() => {
                    setQuizOptions(initialOptions)
                    setIsError(false)
                }, 5000)

                return
            }

            setQuestions(data.results)
        } catch (err) {
            console.log(err)
        }
    }

    // const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     if (currentQuestion === 0) return

    //     setCurrentQuestion((prev) => prev - 1)
    // }

    const handleNext = (selectedAnswer: string, e: React.MouseEvent<HTMLButtonElement>) => {
        if (questions[currentQuestion].correct_answer === selectedAnswer) {
            setScore((prev) => prev + 1)
        }

        if (currentQuestion === questions.length - 1) {
            setIsQuizOver(true)
            return
        }

        setCurrentQuestion((prev) => prev + 1)
    }

    const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        setQuizOptions(initialOptions)
        setQuestions([])
        setCurrentQuestion(0)
        setScore(0)
        setIsQuizOver(false)
        setIsError(false)
    }

    return (
        <>
            <main className='grid place-items-center h-full'>
                <div className='max-w-xl w-full'>
                    <h1 className='text-3xl font-bold mb-8 text-center underline-offset-4 underline decoration-purple-600'>Quiz App</h1>
                    {!questions.length && <Form handleChange={handleChange} handleSubmit={handleSubmit} />}
                    {questions.length > 0 && !isQuizOver && <QuestionCard questions={questions} currentQuestion={currentQuestion} handleNext={handleNext} />}
                    {isQuizOver && <Score total={questions.length} score={score} handleReset={handleReset} />}
                    {isError && (
                        <div className='text-center px-2 text-balance max-w-xs mx-auto'>
                            <span className='text-red-600'>There are no </span>
                            {quizOptions?.difficulty && <span className='text-black dark:text-white capitalize'>{quizOptions.difficulty} </span>}
                            {quizOptions?.category && <span className='text-black dark:text-white'>{getLabelByValue(quizOptions.category)} </span>}
                            <span className='text-red-600'>quizzes yet! Please try another configuration.</span>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}

export default QuizWrapper
