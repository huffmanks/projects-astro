import { useSAAS } from '../../SAASContext'

import { ChevronsRight } from 'lucide-react'

const Expand = () => {
    const { sideBarExpanded, handleSidebar } = useSAAS()

    const styles = {
        circle: sideBarExpanded ? 'absolute top-[22px] -right-3 bg-gray-800 sm:bg-gray-600/30' : 'sm:absolute sm:top-5 sm:-right-4 bg-gray-600/30',
        icon: sideBarExpanded ? 'rotate-180' : 'rotate-0',
    }

    return (
        <div className={`w-7 h-7 flex justify-center items-center text-sm rounded-full cursor-pointer ${styles.circle}`} onClick={handleSidebar}>
            <ChevronsRight className={`w-4 h-4 stroke-gray-400 transition-all ease-in duration-100 ${styles.icon}`} />
        </div>
    )
}

export default Expand
