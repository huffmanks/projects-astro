import { Play, RotateCcw } from 'lucide-react'

import { domPurify } from '../../utils'
import type { SanitizedQuestion } from '../../types'

interface Props {
    questions: SanitizedQuestion[]
    score: number
    handleRetry: (e: React.MouseEvent<HTMLButtonElement>) => void
    handleNewQuiz: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Score = ({ questions, score, handleRetry, handleNewQuiz }: Props) => {
    const total = questions.length
    const scorePercentage = Number(((score / total) * 100).toFixed(1))

    const incorrectQuestions = questions.filter((question) => question.correctAnswer !== question.selectedAnswer)

    return (
        <>
            <div className='grid gap-8 items-center justify-center px-4'>
                <div className='text-center'>
                    <div className='text-2xl sm:text-4xl mb-3'>{scorePercentage > 65 ? 'Congrats! 🎉' : 'You suck! 🤪'}</div>
                    <div className='text-4xl sm:text-7xl font-bold mb-6'>
                        <span className='text-purple-600'>{scorePercentage}</span>%
                    </div>
                    <div>You missed {total - score} questions.</div>
                </div>

                {incorrectQuestions &&
                    incorrectQuestions.map((item) => (
                        <div key={item.question}>
                            <div className='text-balance px-3 mb-2'>
                                <span className='text-purple-600 text-lg font-bold mr-2'>#{item.number}</span>
                                <span dangerouslySetInnerHTML={{ __html: domPurify.sanitize(item.question) }} />
                            </div>

                            <div className='px-3'>
                                <div className='flex items-center gap-3'>
                                    <span>Selected:</span>
                                    <span className='font-bold text-red-600' dangerouslySetInnerHTML={{ __html: domPurify.sanitize(item.answers[item.selectedAnswer]) }} />
                                </div>
                                <div className='flex items-center gap-3'>
                                    <span>Correct:</span>
                                    <span className='font-bold text-green-600' dangerouslySetInnerHTML={{ __html: domPurify.sanitize(item.answers[item.correctAnswer]) }} />
                                </div>
                            </div>
                        </div>
                    ))}

                <div className='flex flex-col sm:flex-row items-center justify-end gap-x-4 gap-y-7'>
                    <button
                        type='button'
                        className='flex items-center gap-2 focus:outline-none text-white border border-purple-700 enabled:hover:bg-gray-800 enabled:hover:border-transparent focus:ring-4 enabled:focus:ring-purple-300 font-bold rounded-lg tracking-wider px-5 py-2.5 dark:border-purple-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-transparent dark:enabled:focus:ring-purple-900 disabled:opacity-60 enabled:cursor-pointer'
                        onClick={handleRetry}>
                        <RotateCcw className='w-5 h-5' />
                        <span>RETRY</span>
                    </button>
                    <button
                        type='button'
                        className='flex items-center gap-2 focus:outline-none text-white border border-transparent bg-purple-700 enabled:hover:bg-purple-800 focus:ring-4 enabled:focus:ring-purple-300 font-bold rounded-lg tracking-wider px-5 py-2.5 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:enabled:focus:ring-purple-900 disabled:opacity-60 enabled:cursor-pointer'
                        onClick={handleNewQuiz}>
                        <Play className='w-5 h-5' />
                        <span>NEW QUIZ</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Score
