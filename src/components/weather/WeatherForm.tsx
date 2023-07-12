import { useState } from 'react'
import TodayCard from './TodayCard'
import ForecastCard from './ForecastCard'
import type { TodayInfo, ForecastInfo } from '../../types'

const WeatherForm = () => {
    const [zipCode, setZipCode] = useState('')
    const [error, setError] = useState('')
    const [today, setToday] = useState<TodayInfo | null>(null)
    const [forecast, setForecast] = useState<ForecastInfo[] | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (today || forecast) {
            setToday(null)
            setForecast(null)
        }
        setZipCode(e.target.value)
    }

    const handleCloseError = () => {
        setError('')
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const zipCodePattern = /^\d{5}$/
        if (!zipCodePattern.test(zipCode)) {
            setZipCode('')
            setError('Not a valid zip code.')

            setTimeout(() => {
                setError('')
            }, 5000)

            return
        }

        // ### TRY THIS API INSTEAD
        // https://www.weather.gov/documentation/services-web-api
        // https://api.weather.gov/gridpoints/TOP/31,80/forecast
        // ###

        // const API_KEY = import.meta.env.PUBLIC_OPEN_WEATHER_API_KEY
        // const todayUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${API_KEY}`
        // const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&cnt=40&units=imperial&appid=${API_KEY}`

        const todayResponse = await fetch(todayUrl)
        const todayData = await todayResponse.json()

        const forecastResponse = await fetch(forecastUrl)
        const forecastData = await forecastResponse.json()

        setToday(todayData)
        setForecast(forecastData.list)
        setZipCode('')
    }

    return (
        <>
            <header className='bg-zinc-800 py-6 px-8'>
                <div className='flex justify-between gap-4 items-center max-w-xl mx-auto'>
                    <form onSubmit={handleSubmit}>
                        <div className='bg-white rounded-lg'>
                            <input className='outline-none bg-transparent px-3 py-1 text-sm text-black' type='text' placeholder='Enter zip code' value={zipCode} onChange={handleChange} />
                            <button className='border-none outline-none bg-zinc-600 text-white text-sm px-3 py-1 rounded-r-lg' type='submit'>
                                Search
                            </button>
                        </div>
                    </form>
                    <h1 className='text-lg text-white'>Weather App</h1>
                </div>
            </header>

            <div className='max-w-4xl mx-auto p-5'>
                {today && forecast && (
                    <>
                        <h2 className='text-2xl text-center mb-8'>{today.name}</h2>
                        <section className='grid grid-cols-[repeat(auto-fill,_minmax(min(160px,_100%),_1fr))] gap-8'>
                            <div className='col-span-2'>
                                <TodayCard today={today} />
                            </div>
                            {forecast.map((item) => (
                                <ForecastCard key={item.dt} item={item} />
                            ))}
                        </section>
                    </>
                )}
            </div>

            {error && (
                <>
                    <div className='fixed bottom-6 right-6'>
                        <div className='flex items-center gap-3 w-full max-w-xs p-4 text-red-500 bg-red-100 rounded-lg shadow' role='alert'>
                            <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-200 rounded-lg'>
                                <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                                    <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z' />
                                </svg>
                                <span className='sr-only'>Warning icon</span>
                            </div>
                            <div className='text-sm font-normal'>{error}</div>
                            <button
                                type='button'
                                className='bg-red-200 text-red-500 hover:text-white rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-red-500 inline-flex items-center justify-center h-8 w-8'
                                aria-label='Close'
                                onClick={handleCloseError}>
                                <span className='sr-only'>Close</span>
                                <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
                                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6' />
                                </svg>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default WeatherForm
