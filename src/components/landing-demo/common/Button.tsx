interface IProps {
    color: string
    text: string
}

interface INestedStyles {
    [key: string]: {
        [key: string]: string
    }
}

const Button = ({ color, text }: IProps) => {
    const styles: INestedStyles = {
        button: {
            base: 'w-max py-3 px-6 uppercase transition-all duration-300 hover:brightness-110',
            primary: 'bg-orange-400 text-black',
            light: 'bg-gray-300 text-black',
        },
    }
    return (
        <>
            <button className={`${styles.button.base} ${styles.button[color]}`}>{text}</button>
        </>
    )
}

export default Button
