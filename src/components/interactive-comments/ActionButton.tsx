import type { INestedStyles } from '../../types'

interface IProps {
    color: string
    buttonText: string
    clickHandler?: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
}

const ActionButton = ({ color, buttonText, clickHandler, children }: IProps) => {
    const styles: INestedStyles = {
        textColor: {
            blue: 'text-moderate-blue',
            red: 'text-soft-red',
        },
    }
    return (
        <button className='flex items-center justify-center gap-1 transition-opacity ease-in-out duration-500 hover:opacity-50' onClick={clickHandler}>
            {children}
            <span className={`font-medium ${styles.textColor[color]}`}>{buttonText}</span>
        </button>
    )
}

export default ActionButton
