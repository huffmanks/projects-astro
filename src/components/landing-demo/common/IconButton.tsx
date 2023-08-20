import type { INestedStyles } from '../../../types'

interface IProps {
    path: string
    color: string
    children: React.ReactNode
}

const IconButton = ({ path, color, children }: IProps) => {
    const styles: INestedStyles = {
        link: {
            base: 'group rounded-full border cursor-pointer transition-all duration-300 hover:border-transparent hover:scale-105',
            light: 'border-gray-300 hover:bg-orange-400',
            dark: 'border-black hover:bg-white',
        },
    }

    return (
        <a href={path} className={`${styles.link.base} ${styles.link[color]}`}>
            <button className='flex justify-center items-center p-1.5'>{children}</button>
        </a>
    )
}

export default IconButton
