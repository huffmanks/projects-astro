import DOMPurify from 'dompurify'
import { categories } from '../components/quiz/constants'
import type { QuizResults, SanitizedQuestion } from '../types'

export const domPurify = DOMPurify(window)

export const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

export const getLabelByValue = (value: string) => {
    const category = categories.find((category) => category.value === value)

    return category ? category.label : null
}

const formatDate = (date: Date) => {
    const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']

    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()

    return `${month} ${day}, ${year}`
}

export const getDates = () => {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    const twoDaysAgo = new Date(today)
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2)

    const formattedToday = formatDate(today)
    const formattedYesterday = formatDate(yesterday)
    const formattedTwoDaysAgo = formatDate(twoDaysAgo)

    return [formattedTwoDaysAgo, formattedYesterday, formattedToday]
}

// Quiz
export const sanitizeQuizData = (data: QuizResults) => {
    const transformedData: SanitizedQuestion[] = data.results.map((item, index) => {
        const transformedAnswers = shuffleArray([...item.incorrect_answers, item.correct_answer])

        const correctAnswer = transformedAnswers.indexOf(item.correct_answer)

        return {
            number: index + 1,
            question: item.question,
            answers: transformedAnswers,
            correctAnswer,
            selectedAnswer: 0,
        }
    })

    return transformedData
}
