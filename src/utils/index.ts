import { categories } from '../components/quiz/constants'

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

export const getPreviousMonth = () => {
    const now = new Date()
    now.setMonth(now.getMonth() - 1)

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const previousMonth = months[now.getMonth()]

    return previousMonth
}
