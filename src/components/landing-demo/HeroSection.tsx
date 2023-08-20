import Button from './common/Button'

import { headshots, hero } from '../../constants/landing-demo/images'

const HeroSection = () => {
    return (
        <section className='max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-center gap-x-8 gap-y-16 mx-auto pt-1 md:pt-8 pb-16 md:pl-10'>
            <div className='md:hidden'>
                <img className='w-full object-cover object-top max-h-[50vh]' src={hero.mobile} alt='hero' />
            </div>
            <div className='flex flex-col items-center px-8'>
                <div className='flex items-center gap-3 mb-8 lg:mb-12'>
                    <div className='w-0.5 h-6 lg:w-6 lg:h-0.5 bg-orange-400'></div>
                    <div className='text-sm xs:text-base lg:text-lg'>&ldquo;We help people to reshape their business.&rdquo;</div>
                </div>

                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-4 xs:gap-8'>
                        <div className='w-16 h-16 rounded-full border-2'>
                            <img className='rounded-full' src={headshots.one} alt='headshot one' />
                        </div>
                        <div className='text-4xl xs:text-6xl sm:text-7xl md:text-5xl lg:text-7xl'>We are</div>
                    </div>

                    <div className='flex flex-wrap items-end gap-x-4 gap-y-2'>
                        <span className='text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-light text-orange-400 leading-tight lg:leading-tight'>web3</span>
                        <span className='text-4xl xs:text-6xl sm:text-7xl md:text-5xl lg:text-7xl'>&</span>
                        <span className='text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-light text-orange-400 leading-tight lg:leading-tight'>nftbased</span>
                    </div>

                    <div className='flex items-center gap-4 xs:gap-8 mb-8 lg:mb-12'>
                        <div className='text-4xl xs:text-6xl sm:text-7xl md:text-5xl lg:text-7xl'>agency</div>
                        <div className='w-16 h-16 rounded-full border-2'>
                            <img className='rounded-full' src={headshots.two} alt='headshot two' />
                        </div>
                    </div>

                    <div className='flex flex-col-reverse lg:flex-row lg:items-center gap-x-16 gap-y-6'>
                        <div>
                            <Button color='primary' text='Let&rsquo;s talk' />
                        </div>
                        <div className='max-w-[26ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsa quis iste non mollitia quod, cupiditate eligendi repellat.</div>
                    </div>
                </div>
            </div>

            <div className='hidden md:flex justify-center'>
                <img className='max-h-[90vh]' src={hero.desktop} alt='hero' />
            </div>
        </section>
    )
}

export default HeroSection
