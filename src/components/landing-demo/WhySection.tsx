import { whyStats } from './constants/whyStats'
import { whyUs } from './constants/images'

const WhySection = () => {
    return (
        <section className='max-w-screen-xl mx-auto px-5 sm:px-10 py-24'>
            <div className='grid grid-col-1 md:grid-cols-[1fr_2fr] sm:gap-16 lg:gap-24 justify-between items-center md:pb-24 md:border-b-2'>
                <div>
                    <div className='flex items-center gap-3 mb-8'>
                        <div className='w-6 h-0.5 bg-orange-400'></div>
                        <div className='text-orange-400'>Why us</div>
                    </div>

                    <div className='mb-10 text-5xl font-bold'>Why Funflow</div>

                    <p className='mb-16 text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quidem totam rem officia vitae facere.</p>

                    <div>
                        <img className='w-full h-96 md:h-auto object-cover object-[50%_60%]' src={whyUs} alt='employees in an office' />
                    </div>
                </div>

                <div>
                    {whyStats.map((stat) => (
                        <div key={stat.id} className='sm:px-8 py-12 sm:first:border-t-2 border-b border-gray-400'>
                            <div className='flex flex-col sm:flex-row items-center justify-between gap-y-6 gap-x-12'>
                                <div className='w-full flex flex-col items-center justify-center px-5 py-10 bg-orange-40 text-zinc-900 bg-gradient-to-l from-gray-100 to-gray-400'>
                                    <div className='text-4xl font-bold'>{stat.number}</div>
                                    <div className='text-sm text-center'>{stat.name}</div>
                                </div>

                                <p className='max-w-sm text-gray-300'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A sit laborum maxime cumque error itaque assumenda doloremque labore blanditiis vitae!
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhySection
