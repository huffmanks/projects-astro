import { useComment } from './CommentContext'

interface IProps {
    id: number
    score: number
}

const VoteButton = ({ id, score }: IProps) => {
    const { user, handleIncreaseVote, handleDecreaseVote } = useComment()

    return (
        <div className='flex md:flex-col items-center'>
            <button
                className={`group w-10 h-8 flex items-center justify-center rounded-tl-lg rounded-bl-lg md:rounded-tr-lg md:rounded-bl-none transition-all ease-in-out duration-300 hover:bg-moderate-blue ${
                    user.upvotes.includes(id) ? 'bg-moderate-blue' : 'bg-very-light-gray'
                }`}
                onClick={(e) => handleIncreaseVote(e, id)}>
                <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 24 24'
                    className={`transition-all ease-in-out duration-300 group-hover:fill-white ${user.upvotes.includes(id) ? 'fill-white' : ''}`}
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path fill='none' d='M0 0h24v24H0z'></path>
                    <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'></path>
                </svg>
            </button>
            <span className='w-10 h-8 flex items-center justify-center bg-very-light-gray text-moderate-blue font-bold'>{score}</span>
            <button
                className={`group w-10 h-8 flex items-center justify-center rounded-tr-lg rounded-br-lg md:rounded-bl-lg md:rounded-tr-none transition-all ease-in-out duration-300 hover:bg-moderate-blue ${
                    user.downvotes.includes(id) ? 'bg-moderate-blue' : 'bg-very-light-gray'
                }`}
                onClick={(e) => handleDecreaseVote(e, id)}>
                <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 24 24'
                    className={`transition-all ease-in-out duration-300 group-hover:fill-white ${user.downvotes.includes(id) ? 'fill-white' : ''}`}
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path fill='none' d='M0 0h24v24H0z'></path>
                    <path d='M19 13H5v-2h14v2z'></path>
                </svg>
            </button>
        </div>
    )
}

export default VoteButton
