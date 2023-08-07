import { MoreHorizontal } from 'lucide-react'

import { useSAAS } from '../../../../context/SAASContext'

import IconButton from '../../common/IconButton'
import Chip from '../../common/Chip'

const Footer = () => {
    const { sideBarExpanded } = useSAAS()

    const styles = {
        footer: sideBarExpanded ? 'justify-between pr-4' : 'justify-center',
        display: sideBarExpanded ? 'opacity-1 visible' : 'absolute opacity-0 invisible',
    }

    return (
        <div className={`relative flex items-center gap-1 mt-auto mb-2 transition-all ease-in-out duration-400 delay-150 ${styles.footer}`}>
            <div className={`flex items-center gap-3 transition-opacity ease-in-out duration-400 delay-150 ${styles.display}`}>
                <div className='w-10 h-10 text-xl bg-sky-500 relative flex justify-center items-center rounded-full cursor-pointer hover:opacity-70'>
                    <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' className='fill-white' height='1em' width='1em'>
                        <path fill='none' d='M0 0h24v24H0z'></path>
                        <circle cx='7.2' cy='14.4' r='3.2'></circle>
                        <circle cx='14.8' cy='18' r='2'></circle>
                        <circle cx='15.2' cy='8.8' r='4.8'></circle>
                    </svg>
                </div>

                <div>
                    <div className='flex gap-2'>
                        <div className='text-sm'>Alireza Kian</div>
                        <Chip text='Free' size='small' color='green' />
                    </div>
                    <div className='text-gray-600 text-xs'>alirezakian.me</div>
                </div>
            </div>

            <div className='w-6 flex justify-center items-center text-lg cursor-pointer'>
                <IconButton buttonSize='normal' bgColor='transparent'>
                    <MoreHorizontal className='w-5 h-5 stroke-white' />
                </IconButton>
            </div>
        </div>
    )
}

export default Footer
