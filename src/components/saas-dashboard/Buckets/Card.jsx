import { Calendar, Minus, MoreHorizontal } from 'lucide-react'

import { useSAAS } from '../SAASContext'
import { profiles } from '../constants'

import Chip from '../common/Chip'
import IconButton from '../common/IconButton'
import Profile from '../common/Profile'

const Card = ({ card }) => {
    const { sideBarExpanded } = useSAAS()

    const profile = profiles.find((profile) => profile.team === card.team)

    const progressHasBeenMade = (index) => {
        return index + 1 <= card.progress / 10
    }

    const styles = {
        textSm: sideBarExpanded ? 'md:text-sm' : 'sm:text-sm',
        textXl: sideBarExpanded ? 'md:text-xl' : 'sm:text-xl',
    }

    return (
        <>
            <div className='mb-4 px-6 pt-4 pb-6 bg-gray-600/30 rounded-2xl'>
                <div className='flex items-center justify-between gap-2 mb-2'>
                    <Chip text={card.team} size='normal' color={card.teamColor} />
                    <div className='-mr-2'>
                        <IconButton buttonSize='normal' bgColor='transparent'>
                            <MoreHorizontal className='w-5 h-5 stroke-white' />
                        </IconButton>
                    </div>
                </div>

                <div className={`mb-4 text-lg ${styles.textXl}`}>{card.title}</div>

                <div className='mb-1'>
                    <div className='flex justify-between gap-2 mb-2'>
                        <div className={`text-gray-400 text-xs ${styles.textSm}`}>Progress</div>
                        <div className={`text-sky-500 text-xs ${styles.textSm}`}>{card.progress}%</div>
                    </div>
                    <div className='w-full flex'>
                        {Array(10)
                            .fill(1)
                            .map((_, i) => (
                                <Minus key={i} className={`w-full h-8 ${progressHasBeenMade(i) ? 'stroke-sky-500' : 'stroke-gray-600'}`} />
                            ))}
                    </div>
                </div>

                <div className='flex justify-between gap-2'>
                    <div className='flex flex-wrap mt-2 sm:mt-0'>
                        <Profile profile={profile} direction='right' />
                    </div>

                    <div className='flex items-center gap-1'>
                        <IconButton buttonSize='normal' bgColor='transparent'>
                            <Calendar className='w-5 h-5 stroke-white' />
                        </IconButton>
                        <div className={`text-xs ${styles.textSm}`}>{card.deadline}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
