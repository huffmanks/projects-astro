export interface IFooterLink {
    id: number
    path: string
    text: string
    label?: string
}

export interface IFooterCol {
    id: number
    heading: string
    links: IFooterLink[]
}

export const footerLinks: IFooterCol[] = [
    {
        id: 1,
        heading: 'Features',
        links: [
            {
                id: 11,
                path: '#',
                text: 'About Us',
            },
            {
                id: 12,
                path: '#',
                text: 'Our Projects',
            },
            {
                id: 13,
                path: '#',
                text: 'Why Us',
            },
            {
                id: 14,
                path: '#',
                text: 'Latest Blog',
            },
        ],
    },
    {
        id: 2,
        heading: 'Support',
        links: [
            {
                id: 21,
                path: '#',
                text: 'Privacy Policy',
            },
            {
                id: 22,
                path: '#',
                text: 'FAQ',
            },
            {
                id: 23,
                path: '#',
                text: 'Contact',
            },
        ],
    },
    {
        id: 3,
        heading: 'Contact Us',
        links: [
            {
                id: 31,
                path: '#',
                text: '767 5th Street, 21st Floor,',
            },
            {
                id: 32,
                path: '#',
                text: 'New York, USA',
            },
            {
                id: 33,
                path: '#',
                text: 'hello@qpox.com',
                label: 'Email us: ',
            },
            {
                id: 34,
                path: '#',
                text: '0998 3829 3920',
                label: 'Call us: ',
            },
        ],
    },
]
