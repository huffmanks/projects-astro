import { useState } from 'react'

export default function WeatherOutput() {
    const [zipCode, setZipCode] = useState('')
    const [data, setData] = useState()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setZipCode(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!zipCode) return

        const API_KEY = import.meta.env.OPEN_WEATHER_API_KEY

        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid=${API_KEY}`

        const response = await fetch(url)
        const weatherData = await response.json()

        setData(weatherData)
        console.log(weatherData)
        setZipCode('')
    }

    return (
        <>
            <header className='bg-purple-800 py-6 px-8'>
                <div className='flex justify-between gap-4 items-center max-w-xl mx-auto'>
                    <form onSubmit={handleSubmit}>
                        <div className='bg-white rounded-lg'>
                            <input className='outline-none bg-transparent px-3 py-1 text-sm' type='text' placeholder='Enter zip code' onChange={handleChange} />
                            <button className='border-none outline-none bg-purple-600 text-white text-sm px-3 py-1 rounded-r-lg' type='submit'>
                                Search
                            </button>
                        </div>
                    </form>
                    <h1 className='text-lg text-white'>Weather App</h1>
                </div>
            </header>

            <div className='max-w-4xl mx-auto'>
                <section>output</section>
            </div>
        </>
    )
}
