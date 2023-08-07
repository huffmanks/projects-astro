const IconButton = ({ buttonSize, borderType, bgColor, isStackable, hasBadge, children }) => {
    const styles = {
        size: {
            small: 'w-6 h-6',
            normal: 'w-10 h-10 text-xl',
            large: 'w-12 h-12 text-3xl',
        },
        border: {
            dashed: 'border-dashed border-2 border-sky-500',
        },
        bg: {
            transparent: 'transparent',
            gray: 'bg-slate-800',
            frost: 'bg-gray-600/30',
            blue: 'bg-sky-500',
            purple: 'bg-purple-500',
        },
    }

    return (
        <>
            <div
                className={`relative flex justify-center items-center rounded-full cursor-pointer hover:opacity-70 ${styles.size[buttonSize]} ${styles.border[borderType]} ${styles.bg[bgColor]} ${
                    isStackable && '-mt-2 sm:mt-0'
                }`}>
                {children}
                {hasBadge && (
                    <div className='absolute -top-1 -right-1 w-4 h-4 flex justify-center items-center bg-red-500 rounded-full'>
                        <span className='text-xs'>4</span>
                    </div>
                )}
            </div>
        </>
    )
}

export default IconButton
