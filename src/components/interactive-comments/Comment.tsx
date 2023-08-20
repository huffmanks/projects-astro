import { useComment } from './CommentContext'

import ActionGroup from './ActionGroup'
import AddComment from './AddComment'
import NestedCommentContainer from './NestedCommentContainer'
import ProfileImage from './ProfileImage'
import VoteButton from './VoteButton'

const Comment = ({ comment }: any) => {
    const { contentRef, user, reply, edit } = useComment()

    return (
        <>
            <div className='w-full p-4 xws:p-6 bg-white rounded-lg shadow-md'>
                <div className='flex flex-col-reverse md:flex-row gap-7'>
                    <div className='flex flex-wrap justify-between gap-5'>
                        <VoteButton id={comment.id} score={comment.score} />
                        <ActionGroup comment={comment} viewport='mobile' />
                    </div>

                    <div className='w-full flex flex-col'>
                        <div className='flex justify-between items-center gap-6 mb-4'>
                            <div className='flex flex-wrap items-center gap-4'>
                                <ProfileImage user={comment.user} />

                                <div className='text-dark-blue font-medium'>{comment.user}</div>

                                {user.name === comment.user && <div className='py-1 px-2 bg-moderate-blue text-white text-xs'>you</div>}

                                <div className='text-sm'>{comment.createdAt}</div>
                            </div>
                            <ActionGroup comment={comment} viewport='desktop' />
                        </div>

                        {edit.isEditing && edit.id === comment.id ? (
                            <div
                                className='flex-1 focus:border-none focus:outline-none active:border-none active:outline-none rounded-md shadow-[0_0_0_8px_#fff,_0_0_5px_9px_hsl(238_40%_52%_/_0.8)]'
                                ref={contentRef}
                                tabIndex={1}
                                contentEditable='true'
                                suppressContentEditableWarning={true}>
                                {comment.content}
                            </div>
                        ) : (
                            <div className='flex-1'>
                                {comment?.replyingTo && <span className='text-moderate-blue font-medium'>@{comment.replyingTo} </span>}
                                <span>{comment.content}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {reply.isReplying && reply.id === comment.id && (
                <NestedCommentContainer classes='w-[calc(100%_-_32px)]'>
                    <AddComment name='newReply' />
                </NestedCommentContainer>
            )}
        </>
    )
}

export default Comment
