import { useSAAS } from '../../../../context/SAASContext'
import { workspaces } from '../../constants'

import Workspace from './Workspace'

const Workspaces = () => {
    const { sideBarExpanded } = useSAAS()

    const styles = {
        workspaces: sideBarExpanded ? 'px-4' : '',
        display: sideBarExpanded ? 'opacity-1 visible' : 'absolute opacity-0 invisible',
        workspace: sideBarExpanded ? '' : 'items-center',
    }

    return (
        <div className={`transition-all ease-in-out duration-400 delay-150 ${styles.workspaces}`}>
            <div className='w-max text-xs uppercase font-bold mb-4'>
                <span className={`text-gray-600 transition-opacity ease-in-out duration-100 ${styles.display}`}>Work</span>
                <span className='text-gray-600'>spaces</span>
            </div>

            <div className={`flex flex-col gap-4 mb-8 ${styles.workspace}`}>
                {workspaces.map((space, i) => (
                    <Workspace key={i} space={space} />
                ))}
            </div>
        </div>
    )
}

export default Workspaces
