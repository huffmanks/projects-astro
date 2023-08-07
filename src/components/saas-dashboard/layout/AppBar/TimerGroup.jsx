import { Timer, Pause, RotateCcw } from 'lucide-react'

import IconButton from '../../common/IconButton'

const TimerGroup = () => {
    return (
        <div className='gap-6 items-center hidden lg:flex'>
            <div className='flex gap-2 items-center'>
                <div>
                    <IconButton buttonSize='large' bgColor='transparent'>
                        <Timer className='w-7 h-7 stroke-sky-300' />
                    </IconButton>
                </div>
                <div>
                    <div className='text-sm text-gray-400'>Total:</div>
                    <div>02:38:24</div>
                </div>
            </div>
            <div className='flex gap-2'>
                <IconButton buttonSize='normal' bgColor='frost'>
                    <Pause className='w-4 h-4 fill-red-500 stroke-red-500' />
                </IconButton>
                <IconButton buttonSize='normal' bgColor='frost'>
                    <RotateCcw className='w-4 h-4 stroke-white' />
                </IconButton>
            </div>
        </div>
    )
}

export default TimerGroup
