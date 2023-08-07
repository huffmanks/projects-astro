import { MessageSquare, FileBarChart2, Bell } from 'lucide-react'

import { useSAAS } from '../../../../context/SAASContext'

import IconButton from '../../common/IconButton'

const Notifications = () => {
    const { sideBarExpanded } = useSAAS()

    const styles = {
        notifications: sideBarExpanded ? 'md:flex' : 'sm:flex',
    }

    return (
        <div className={`gap-2 hidden ${styles.notifications}`}>
            <IconButton buttonSize='normal' bgColor='frost'>
                <MessageSquare className='w-5 h-5 stroke-white' />
            </IconButton>
            <IconButton buttonSize='normal' bgColor='frost'>
                <FileBarChart2 className='w-5 h-5 stroke-white' />
            </IconButton>
            <IconButton buttonSize='normal' bgColor='frost' hasBadge>
                <Bell className='w-5 h-5 stroke-white' />
            </IconButton>
        </div>
    )
}

export default Notifications
