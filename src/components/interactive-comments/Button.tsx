interface IProps {
    buttonText: string
    clickHandler: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
}

const Button = ({ buttonText, clickHandler, children }: IProps) => {
    return (
        <div>
            <button className='flex items-center justify-center gap-2 py-2 px-3 bg-moderate-blue rounded-lg transition-opacity ease-in-out duration-500 hover:opacity-50' onClick={clickHandler}>
                {children}
                <span className='text-white text-sm font-medium uppercase'>{buttonText}</span>
            </button>
        </div>
    )
}

export default Button
