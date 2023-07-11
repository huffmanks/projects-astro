import type { ForecastInfo } from '../../types'

const ForecastCard = ({ item }: { item: ForecastInfo }) => {
    const date = new Date(item.dt * 1000)

    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' })
    const timeWithMinutes = date.toLocaleString('en-US', { timeStyle: 'short' })

    const [hour, timeSuffix] = timeWithMinutes.split(':')
    const meridiem = timeSuffix.split(' ')[1]

    const timeWithoutMinutes = `${hour} ${meridiem}`

    return (
        <div className='rounded-2xl bg-slate-800'>
            <div className='flex justify-between items-center bg-slate-900 p-4 rounded-t-lg text-lg'>
                <div>{dayOfWeek}</div>
                <div>{timeWithoutMinutes}</div>
            </div>

            <div className='flex flex-col items-center justify-center px-8 pb-8 pt-4'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <div>
                        <img className='object-cover h-32 w-32' src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`} alt='clouds' />
                    </div>
                    <div className='text-5xl font-bold text-center tracking-tighter pl-1.5'>{Math.round(item.main.temp)}&deg;</div>
                </div>
            </div>
        </div>
    )
}

export default ForecastCard
