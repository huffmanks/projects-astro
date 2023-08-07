import { Lightbulb, Palette, Flashlight, PartyPopper, Plus } from 'lucide-react'

import IconButton from '../common/IconButton'
import Card from './Card'

const Bucket = ({ bucket }) => {
    return (
        <div className='w-full md:min-w-[350px] snap-center'>
            <div className={`flex items-center justify-between gap-2 mb-4 pb-4 border-b-4 ${bucket.borderColor}`}>
                <div className='flex items-center gap-3'>
                    <IconButton buttonSize='normal' bgColor='frost'>
                        {bucket.icon === 'Lightbulb' ? (
                            <Lightbulb className={bucket.color} />
                        ) : bucket.icon === 'Palette' ? (
                            <Palette className={bucket.color} />
                        ) : bucket.icon === 'Flashlight' ? (
                            <Flashlight className={bucket.color} />
                        ) : bucket.icon === 'PartyPopper' ? (
                            <PartyPopper className={bucket.color} />
                        ) : (
                            ''
                        )}
                    </IconButton>
                    <div className='flex items-center gap-2'>
                        <div className='text-sm'>{bucket.title}</div>
                        <div className='py-1 px-1.5 flex justify-center items-center bg-gray-600/30 text-[10px] leading-none rounded-md'>
                            <span>{bucket.total}</span>
                        </div>
                    </div>
                </div>
                <IconButton buttonSize='small' bgColor='frost'>
                    <Plus className='w-4 h-4 stroke-white' />
                </IconButton>
            </div>
            {bucket.cards.map((card, i) => (
                <Card key={i} card={card} />
            ))}
        </div>
    )
}

export default Bucket
