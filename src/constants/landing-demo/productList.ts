import { products } from './images'
import { getPreviousMonth } from '../../utils'

const { one, two, three } = products

const currentYear = new Date().getFullYear()
const previousMonth = getPreviousMonth()

export const productList = [
    {
        id: 1,
        title: 'E-commerce Website',
        image: one,
        category: 'Redesign',
        date: `${previousMonth}. 1, ${currentYear}`,
        link: '#',
    },
    {
        id: 2,
        title: 'Game Streaming App',
        image: two,
        category: 'Gaming',
        date: `${previousMonth}. 2, ${currentYear}`,
        link: '#',
    },
    {
        id: 3,
        title: 'Logos and Branding',
        image: three,
        category: 'Marketing',
        date: `${previousMonth}. 3, ${currentYear}`,
        link: '#',
    },
]
