import { useRef, useState } from 'react'
import { Dribbble, Facebook, Instagram } from 'lucide-react'

import IconButton from '../common/IconButton'
import { menuLinks } from '../constants/menuLinks'

const Navbar = () => {
    const backdropRef = useRef<HTMLDivElement>(null)
    const closeRef = useRef<HTMLButtonElement>(null)
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => {
        if (e.target === backdropRef.current || e.target === closeRef.current) {
            setIsOpen(false)
        }
    }

    return (
        <>
            <header className='max-w-screen-xl mx-auto py-4 md:py-8 px-6 md:px-10'>
                <div className='flex justify-between items-center gap-4'>
                    <button className='group flex justify-center items-center gap-2' onClick={handleOpen}>
                        <span className='text-sm uppercase leading-none'>Menu</span>

                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 24 24'
                            className='text-2xl group-hover:fill-orange-400'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z'></path>
                        </svg>
                    </button>
                    <div className='text-2xl'>Funflow</div>
                    <div className='hidden sm:flex gap-4'>
                        <IconButton path='https://facebook.com' color='light'>
                            <Facebook className='w-3 h-3 text-xs transition-all duration-300 stroke-transparent fill-white' />
                        </IconButton>
                        <IconButton path='https://dribbble.com' color='light'>
                            <Dribbble className='w-3 h-3 text-xs transition-all duration-300' />
                        </IconButton>
                        <IconButton path='https://instagram.com' color='light'>
                            <Instagram className='w-3 h-3 text-xs transition-all duration-300' />
                        </IconButton>
                    </div>
                </div>
            </header>

            {isOpen && (
                <div ref={backdropRef} className='fixed inset-0 bg-black/50 transition-all duration-1000' onClick={handleClose}>
                    <div className='absolute top-0 bottom-0 left-0 w-64 px-8 pt-14 pb-8 bg-orange-400'>
                        <button ref={closeRef} className='absolute top-2 right-3 text-4xl transition-colors duration-300 hover:text-black' onClick={handleClose}>
                            &times;
                        </button>
                        <div className='h-full flex flex-col'>
                            <div>
                                {menuLinks.map((link) => (
                                    <a key={link.id} href={link.path} className='block mb-4 tracking-wider transition-colors duration-300 hover:underline hover:underline-offset-4 hover:text-black'>
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                            <div className='flex justify-center gap-4 mt-auto'>
                                <IconButton path='https://facebook.com' color='dark'>
                                    <Facebook className='w-3 h-3 text-xs transition-all duration-300 stroke-transparent fill-black' />
                                </IconButton>
                                <IconButton path='https://dribbble.com' color='dark'>
                                    <Dribbble className='w-3 h-3 text-xs transition-all duration-300 stroke-black' />
                                </IconButton>
                                <IconButton path='https://instagram.com' color='dark'>
                                    <Instagram className='w-3 h-3 text-xs transition-all duration-300 stroke-black' />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
