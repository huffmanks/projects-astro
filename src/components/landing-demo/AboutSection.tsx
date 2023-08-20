import { aboutUs } from './constants/images'

const AboutSection = () => {
    return (
        <section className='pt-16'>
            <div className='max-w-screen-xl flex flex-col gap-4 mx-auto mb-24 pl-10 lg:pr-10 text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>
                <div className='hidden sm:block'>We are a team of great designers,</div>
                <div className='hidden sm:block sm:self-end'>problem solvers, and passionate.</div>
                <div className='sm:hidden text-center'>We are a team of great designers, problem solvers, and passionate.</div>
            </div>

            <div className='lg:pt-24 lg:pb-24 bg-orange-400'>
                <div className='lg:max-w-screen-md grid grid-cols-1 md:grid-cols-[repeat(2,_1fr)] justify-center gap-x-24 gap-y-8 mx-auto'>
                    <div className='max-w-sm mx-auto px-10 py-16 lg:pb-0'>
                        <div className='flex items-center gap-3 mb-8'>
                            <div className='w-6 h-0.5 bg-zinc-900'></div>
                            <div className='text-zinc-900 text-lg font-bold'>About us</div>
                        </div>

                        <div className='text-gray-800'>
                            <p className='mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, quibusdam.</p>
                            <p className='mb-16'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia doloremque, laborum magnam sit quis quo optio aliquam quos? Laboriosam reiciendis ab inventore
                                possimus rerum.
                            </p>
                        </div>

                        <div>
                            <a className='underline underline-offset-4 transition-colors hover:text-gray-700' href='#'>
                                Know more &raquo;
                            </a>
                        </div>
                    </div>

                    <div className='lg:max-w-sm relative lg:px-10 -order-1 md:order-1'>
                        <div className='w-full h-96 md:h-full lg:h-auto lg:absolute lg:w-96 lg:-top-32 lg:left-0'>
                            <img className='w-full h-full object-cover object-[50%_41%]' src={aboutUs.one} alt='team working on a project' />
                        </div>
                        <div className='hidden lg:block absolute w-36 -left-8 -bottom-16'>
                            <img src={aboutUs.two} alt='team working on a project' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
