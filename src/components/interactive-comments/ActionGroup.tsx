import { useComment } from './CommentContext'
import type { IStyles } from '../../types'

import ActionButton from './ActionButton'

interface IProps {
    comment: any
    viewport: string
}

const EditIcon = () => {
    return (
        <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' className='w-5 h-5 mb-0.5 fill-moderate-blue' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
            <path fill='none' d='M0 0h24v24H0z'></path>
            <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'></path>
        </svg>
    )
}

const UpdateIcon = () => {
    return (
        <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' className='w-5 h-5 mb-0.5 fill-moderate-blue' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
            <path fill='none' d='M0 0h24v24H0z'></path>
            <path d='M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z'></path>
        </svg>
    )
}

const ReplyIcon = () => {
    return (
        <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' className='w-5 h-5 mb-0.5 fill-moderate-blue' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
            <path fill='none' d='M0 0h24v24H0z'></path>
            <path d='M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z'></path>
        </svg>
    )
}

const ActionGroup = ({ comment, viewport }: IProps) => {
    const { user, edit, handleReplyComment, handleEditComment, handleDeleteComment } = useComment()

    const styles: IStyles = {
        mobile: 'flex md:hidden',
        desktop: 'hidden md:flex',
    }

    return (
        <div className={`items-center gap-4 ${styles[viewport]}`}>
            {user.name === comment.user ? (
                <div className='flex items-center gap-2 flex-wrap'>
                    <ActionButton color='red' buttonText='Delete' clickHandler={(e) => handleDeleteComment(e, comment.id)}>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 24 24'
                            className='w-5 h-5 mb-0.5 fill-soft-red'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path fill='none' d='M0 0h24v24H0z'></path>
                            <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'></path>
                        </svg>
                    </ActionButton>
                    <ActionButton color='blue' buttonText={edit.isEditing && edit.id === comment.id ? 'Update' : 'Edit'} clickHandler={(e) => handleEditComment(e, comment.id)}>
                        {edit.isEditing && edit.id === comment.id ? <UpdateIcon /> : <EditIcon />}
                    </ActionButton>
                </div>
            ) : (
                <ActionButton color='blue' buttonText='Reply' clickHandler={(e) => handleReplyComment(e, comment.id)}>
                    <ReplyIcon />
                </ActionButton>
            )}
        </div>
    )
}

export default ActionGroup
