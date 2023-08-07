export const buckets = [
    {
        color: 'stroke-yellow-500',
        borderColor: 'border-yellow-500',
        icon: 'Lightbulb',
        title: 'Idea & Backlog',
        total: 15,
        cards: [
            {
                title: 'Generating DSM',
                team: 'Research',
                teamColor: 'purple',
                progress: 40,
                deadline: 'May 8',
            },
            {
                title: 'User Journey Mapping',
                team: 'Analytics',
                teamColor: 'orange',
                progress: 90,
                deadline: 'May 9',
            },
        ],
    },
    {
        color: 'stroke-orange-500',
        borderColor: 'border-orange-500',
        icon: 'Palette',
        title: 'In Progress',
        total: 9,
        cards: [
            {
                title: 'Style Guide New Rev.',
                team: 'Visual Design',
                teamColor: 'cyan',
                progress: 80,
                deadline: 'May 12',
            },
            {
                title: 'Purchase User Flow',
                team: 'Prototype',
                teamColor: 'green',
                progress: 40,
                deadline: 'May 16',
            },
        ],
    },
    {
        color: 'stroke-purple-500',
        borderColor: 'border-purple-500',
        icon: 'Flashlight',
        title: 'Test & QA',
        total: 7,
        cards: [
            {
                title: 'Refresh Loading',
                team: 'Motion Design',
                teamColor: 'pink',
                progress: 30,
                deadline: 'May 11',
            },
            {
                title: 'Persona & POV',
                team: 'Research',
                teamColor: 'purple',
                progress: 50,
                deadline: 'May 14',
            },
        ],
    },
    {
        color: 'stroke-green-500',
        borderColor: 'border-green-500',
        icon: 'PartyPopper',
        title: 'Done',
        total: 12,
        cards: [
            {
                title: 'Affinity Diagram',
                team: 'Analytics',
                teamColor: 'orange',
                progress: 100,
                deadline: 'May 6',
            },
            {
                title: 'Splash Screen',
                team: 'Visual Design',
                teamColor: 'cyan',
                progress: 100,
                deadline: 'May 7',
            },
        ],
    },
]

const baseUrl = '/saas-dashboard/profile-0'

export const profiles = [
    {
        image: baseUrl + '1.png',
        name: 'Till Lamar',
        team: 'Visual Design',
    },
    {
        image: baseUrl + '2.png',
        name: 'Alireza Kian',
        team: 'Prototype',
    },
    {
        image: baseUrl + '3.png',
        name: 'Noreen Beverly',
        team: 'Research',
    },
    {
        image: baseUrl + '4.png',
        name: 'Diklah Abramsson',
        team: 'Motion Design',
    },
    {
        image: baseUrl + '5.png',
        name: 'Rose Massey',
        team: 'Analytics',
    },
]

type Route = {
    label: string
    short: string
    path: string
    icon: React.ReactNode
    isActive?: boolean
}

export const routes: Route[] = [
    {
        label: 'Dashboard',
        short: 'D',
        path: '#',
        icon: 'LayoutDashboard',
        isActive: true,
    },
    {
        label: 'Analytics',
        short: 'A',
        path: '#',
        icon: 'BarChart3',
    },
    {
        label: 'Time Tracker',
        short: 'T',
        path: '#',
        icon: 'Timer',
    },
    {
        label: 'Chat Group',
        short: 'C',
        path: '#',
        icon: 'MessageSquare',
    },
    {
        label: 'Members',
        short: 'M',
        path: '#',
        icon: 'Users',
    },
    {
        label: 'Settings',
        short: 'S',
        path: '#',
        icon: 'Settings',
    },
]

export const workspaces = [
    {
        label: 'Personal',
        color: 'pink',
    },
    {
        label: 'Reverb',
        color: 'blue',
    },
    {
        label: 'Cross Team',
        color: 'red',
    },
]
