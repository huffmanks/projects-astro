import { useSAAS } from '../../../../context/SAASContext'

const Link = ({ link, children }) => {
    const { sideBarExpanded } = useSAAS()

    const styles = {
        display: sideBarExpanded ? 'opacity-1 visible duration-400 delay-150' : 'absolute opacity-0 invisible duration-100',
        linkColor: link.isActive ? 'text-sky-600' : '',
    }

    return (
        <a className='flex justify-between items-center gap-1 group' href={link.path}>
            <div className='flex items-center gap-3 text-sm'>
                {children}
                <span className={`w-max group-hover:text-sky-500 transition-opacity ease-in-out ${styles.display} ${styles.linkColor}`}>{link.label}</span>
            </div>

            <div className={`w-5 h-5 flex justify-center items-center bg-gray-600/30 text-[10px] leading-none rounded-md transition-all ease-in-out group-hover:bg-sky-500 ${styles.display}`}>
                <span>{link.short}</span>
            </div>
        </a>
    )
}

export default Link
