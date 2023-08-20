import { products } from './images'
import { getDates } from '../../../utils'

const { one, two, three } = products

const dates = getDates()

export const productList = [
    {
        id: 1,
        title: 'E-commerce Website',
        image: one,
        category: 'Redesign',
        date: dates[0],
        link: '#',
    },
    {
        id: 2,
        title: 'Game Streaming App',
        image: two,
        category: 'Gaming',
        date: dates[1],
        link: '#',
    },
    {
        id: 3,
        title: 'Logos and Branding',
        image: three,
        category: 'Marketing',
        date: dates[2],
        link: '#',
    },
]
