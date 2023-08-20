import { useComment } from './CommentContext'

import Button from './Button'
import ProfileImage from './ProfileImage'
import Textarea from './Textarea'

interface IProps {
    [key: string]: string
}

const AddComment = ({ name }: IProps) => {
    const { user, handleAddComment } = useComment()

    return (
        <div className='w-full p-6 bg-white rounded-lg shadow-md'>
            <div className='w-full grid grid-cols-2 md:grid-cols-[40px_1fr_86px] justify-center gap-7'>
                <div className='col-span-1 order-2 md:order-none'>
                    <ProfileImage user={user.name} />
                </div>
                <div className='w-full col-span-2 md:col-span-1 order-1 md:order-none'>
                    <Textarea name={name} placeholder='Add a comment...' />
                </div>
                <div className='col-span-1 order-3 md:order-none justify-self-end'>
                    <Button buttonText='Send' clickHandler={handleAddComment}>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 24 24'
                            className='w-4 h-4 mb-0.5 fill-white'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path fill='none' d='M0 0h24v24H0z'></path>
                            <path d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z'></path>
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddComment
