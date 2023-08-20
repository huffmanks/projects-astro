import { Fragment } from 'react'

import type { IComment, IReply } from '../../types'
import { useComment } from './CommentContext'

import AddComment from './AddComment'
import Attribution from './Attribution'
import Comment from './Comment'
import NestedCommentContainer from './NestedCommentContainer'

const AppWrapper = () => {
    const { data } = useComment()

    return (
        <div className='max-w-screen-md min-h-screen flex flex-col justify-center items-center gap-6 mx-auto px-4'>
            <h1 className='text-moderate-blue text-3xl'>Interactive comments</h1>
            {data.map((comment: IComment) => (
                <Fragment key={comment.id}>
                    <Comment comment={comment} />
                    {comment?.replies?.length !== 0 && (
                        <NestedCommentContainer classes='w-[calc(100%_-_12px)] xws:w-[calc(100%_-_32px)]'>
                            {comment?.replies?.map((reply: IReply) => (
                                <Fragment key={reply.id}>
                                    <Comment comment={reply} />
                                    {reply?.replies?.length !== 0 && (
                                        <NestedCommentContainer>
                                            {reply?.replies?.map((nestedReply) => (
                                                <Fragment key={nestedReply.id}>
                                                    <Comment comment={nestedReply} />
                                                </Fragment>
                                            ))}
                                        </NestedCommentContainer>
                                    )}
                                </Fragment>
                            ))}
                        </NestedCommentContainer>
                    )}
                </Fragment>
            ))}

            <AddComment name='newComment' />
            <Attribution />
        </div>
    )
}

export default AppWrapper
