export interface INestedStyles {
    [key: string]: {
        [key: string]: string
    }
}

// Quiz

export interface Question {
    category: string
    type: string
    difficulty: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
}

// Weather
export interface TodayInfo {
    coord: Coord
    weather: Weather[]
    main: Main
    wind: Wind
    base: string
    visibility: number
    dt: number
    clouds: Clouds
    sys: Sys
    timezone: number
    id: number
    name: string
    cod: number
}

export interface ForecastInfo {
    dt: number
    main: Main
    weather: Weather[]
    clouds: Clouds
    wind: Wind
    visibility: number
    pop: number
    sys: Sys
    dt_txt: string
}

export interface Coord {
    lon: number
    lat: number
}

export interface Clouds {
    all: number
}

export interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level?: number
    grnd_level?: number
    humidity: number
    temp_kf?: number
}

export interface Sys {
    pod?: string
    type?: number
    id?: number
    country?: string
    sunrise?: number
    sunset?: number
}

export interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

export interface Wind {
    speed: number
    deg: number
    gust?: number
}

// Interactive comments
export interface IComment {
    id: number
    content: string
    createdAt: string
    score: number
    user: string
    replies?: IReply[]
}

export interface IReply extends IComment {
    replyingTo: string
}

export interface IStyles {
    [key: string]: string
}
