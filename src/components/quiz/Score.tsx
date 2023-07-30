interface Props {
    total: number
    score: number
    handleReset: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Score = ({ total, score, handleReset }: Props) => {
    const scorePercentage = Number(((score / total) * 100).toFixed(1))

    return (
        <>
            <div className='grid gap-8 items-center justify-center'>
                <div className='text-center'>
                    <div className='text-2xl sm:text-4xl mb-3'>{scorePercentage > 65 ? 'Congrats! 🎉' : 'You suck! 🤪'}</div>
                    <div className='text-4xl sm:text-7xl font-bold mb-6'>
                        <span className='text-purple-600'>{scorePercentage}</span>%
                    </div>
                    <div>You missed {total - score} questions.</div>
                </div>

                <div className='mx-auto'>
                    <button
                        type='button'
                        className='focus:outline-none text-white bg-purple-700 enabled:hover:bg-purple-800 focus:ring-4 enabled:focus:ring-purple-300 font-bold rounded-lg tracking-wider px-5 py-2.5 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:enabled:focus:ring-purple-900 disabled:opacity-60 enabled:cursor-pointer'
                        onClick={handleReset}>
                        PLAY AGAIN
                    </button>
                </div>
            </div>
        </>
    )
}

export default Score
