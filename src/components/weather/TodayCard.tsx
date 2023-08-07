import type { TodayInfo } from '../../types'

const TodayCard = ({ today }: { today: TodayInfo }) => {
    const todayDate = new Date(today.dt * 1000)
    const sunriseDate = new Date(today.sys.sunrise! * 1000)
    const sunsetDate = new Date(today.sys.sunset! * 1000)

    const dayOfWeek = todayDate.toLocaleString('en-US', { weekday: 'long' })
    const todayTime = todayDate.toLocaleString('en-US', { timeStyle: 'short' })
    const sunriseTime = sunriseDate.toLocaleString('en-US', { timeStyle: 'short' })
    const sunsetTime = sunsetDate.toLocaleString('en-US', { timeStyle: 'short' })

    return (
        <div className='rounded-2xl bg-slate-800'>
            <div className='block xs:flex justify-between items-center bg-slate-900 p-4 rounded-t-lg text-lg'>
                <div>{dayOfWeek}</div>
                <div>{todayTime}</div>
            </div>

            <div className='p-4 xs:p-8'>
                <div className='flex flex-col-reverse xs:flex-row justify-between items-center'>
                    <div className='mb-6 text-6xl font-bold'>{Math.round(today.main.temp)}&deg;</div>
                    <div className='relative'>
                        <div className='flex justify-center'>
                            <div className='absolute text-sm'>{today.weather[0].description}</div>
                        </div>
                        <img className='object-cover h-32 w-32' src={`https://openweathermap.org/img/wn/${today.weather[0].icon}@4x.png`} alt='clouds' />
                    </div>
                </div>
                <div className='flex flex-col xms:flex-row justify-between items-center gap-x-2 text-sm'>
                    <div className='flex-1 w-full'>
                        <div>
                            <span className='text-gray-400 mr-2'>Real feel:</span>
                            <span className='font-bold'>{Math.round(today.main.feels_like)}&deg;</span>
                        </div>
                        <div>
                            <span className='text-gray-400 mr-2'>Sunrise:</span>
                            <span className='font-bold'>{sunriseTime}</span>
                        </div>
                        <div>
                            <span className='text-gray-400 mr-2'>Sunset:</span>
                            <span className='font-bold'>{sunsetTime}</span>
                        </div>
                    </div>
                    <div className='flex-1 w-full'>
                        <div>
                            <span className='text-gray-400 mr-2'>Wind:</span>
                            <span className='font-bold'>{Math.round(today.wind.speed)} MPH</span>
                        </div>
                        <div>
                            <span className='text-gray-400 mr-2'>Pressure:</span>
                            <span className='font-bold'>{today.main.pressure} MB</span>
                        </div>
                        <div>
                            <span className='text-gray-400 mr-2'>Humidity:</span>
                            <span className='font-bold'>{today.main.humidity}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodayCard
