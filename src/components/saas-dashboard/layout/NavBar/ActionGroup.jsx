import { Star, AlertCircle, Sliders, Plus, Filter, ArrowUpFromLine } from 'lucide-react'

import { useSAAS } from '../../SAASContext'
import { profiles } from '../../constants'

import Button from '../../common/Button'
import IconButton from '../../common/IconButton'
import Profile from '../../common/Profile'

const ActionGroup = () => {
    const { sideBarExpanded } = useSAAS()

    const styles = {
        group: sideBarExpanded ? 'xl:flex-row xl:items-center' : 'lg:flex-row lg:items-center',
        title: sideBarExpanded ? 'md:flex-row md:items-center' : 'sm:flex-row sm:items-center',
        options: sideBarExpanded ? 'lg:flex-row' : 'md:flex-row',
    }

    return (
        <div className={`flex flex-col gap-y-4 gap-x-8 mb-6 ${styles.group}`}>
            <div className={`flex flex-col gap-2 mb-2 lg:mb-0 ${styles.title}`}>
                <div className='text-3xl sm:mr-2'>Project Board</div>

                <div className='flex gap-2'>
                    <IconButton buttonSize='normal' bgColor='frost'>
                        <Star className='w-5 h-5 stroke-orange-500' />
                    </IconButton>
                    <IconButton buttonSize='normal' bgColor='frost'>
                        <AlertCircle className='w-5 h-5 stroke-white' />
                    </IconButton>
                    <IconButton buttonSize='normal' bgColor='frost'>
                        <Sliders className='w-5 h-5 stroke-white' />
                    </IconButton>
                </div>
            </div>

            <div className={`flex flex-col gap-y-4 gap-x-6 ${styles.options}`}>
                <div className='flex flex-col xws:flex-row xws:items-center gap-3 mb-2 md:mb-0'>
                    <div className='flex flex-wrap mt-2 sm:mt-0'>
                        {profiles.map((profile, i) => (
                            <Profile key={i} profile={profile} direction='top' />
                        ))}
                        <IconButton buttonSize='normal' borderType='dashed' bgColor='gray' isStackable>
                            <Plus className='w-4 h-4 stroke-sky-300' />
                        </IconButton>
                    </div>
                </div>

                <div className='flex flex-col xws:flex-row gap-2'>
                    <Button bgColor='frost' text='Filter &amp; Sort'>
                        <Filter />
                    </Button>
                    <Button bgColor='blue' text='Export CSV'>
                        <ArrowUpFromLine />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ActionGroup
