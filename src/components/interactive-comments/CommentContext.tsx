import { createContext, PropsWithChildren, RefObject, useContext, useRef, useState } from 'react'

import type { IComment } from '../../types'

import { currentUser } from './data/data.json'
import { comments } from './data/data.json'

type ClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => void

interface IContext {
    contentRef: RefObject<HTMLDivElement>
    user: IUser
    data: IComment[]
    content: IContentState
    reply: IReplyState
    edit: IEditState
    handleUser: () => void
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    handleAddComment: React.MouseEventHandler<HTMLButtonElement>
    handleIncreaseVote: ClickHandler
    handleDecreaseVote: ClickHandler
    handleReplyComment: ClickHandler
    handleEditComment: ClickHandler
    handleDeleteComment: ClickHandler
}

interface IUser {
    name: string
    upvotes: number[]
    downvotes: number[]
}

interface IContentState {
    [key: string]: string
}

interface IReplyState {
    id: null | number
    isReplying: boolean
}

interface IEditState {
    id: null | number
    isEditing: boolean
}

const CommentContext = createContext({} as IContext)

const CommentContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const [user, setUser] = useState<IUser>(currentUser)
    const [data, setData] = useState(comments)
    const [content, setContent] = useState<IContentState>({ newComment: '', newReply: '' })
    const [reply, setReply] = useState<IReplyState>({ id: null, isReplying: false })
    const [edit, setEdit] = useState<IEditState>({ id: null, isEditing: false })

    const updateData = (obj: any, updates: any) => {
        const updateToApply = updates.find((upd: any) => upd.id === obj.id)
        if (updateToApply) {
            if (reply.isReplying) {
                obj.replies = [...obj.replies, { ...updates[0].newReply, replyingTo: obj.user }]
            } else if (edit.isEditing) {
                obj.content = updates[0].updatedContent
            } else {
                obj.score = obj.score + updateToApply.score
            }
        }

        for (let k in obj) {
            if (typeof obj[k] === 'object') {
                updateData(obj[k], updates)
            }
        }
    }

    const handleUser = () => {
        setUser({
            ...user,
            name: 'maxblagun',
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target

        setContent({
            ...content,
            [name]: value,
        })
    }

    const handleAddComment = () => {
        if (!content) return

        const date = new Date()
        const unixTimestamp = Math.floor(date.getTime() / 1000)

        if (reply.isReplying) {
            const newReply = {
                id: unixTimestamp,
                content: content.newReply,
                createdAt: 'Today',
                score: 0,
                user: user.name,
                replies: [],
            }

            const updated = [...data]
            const updateArr = [{ id: reply.id, newReply }]

            updateData(updated, updateArr)

            setData(updated)

            setReply({ id: null, isReplying: false })
        } else {
            setData([
                ...data,
                {
                    id: unixTimestamp,
                    content: content.newComment,
                    createdAt: 'Today',
                    score: 0,
                    user: user.name,
                    replies: [],
                },
            ])
        }
        setContent({ newComment: '', newReply: '' })
    }

    const handleIncreaseVote: ClickHandler = (e, id) => {
        if (user.upvotes.includes(id)) return

        const updated = [...data]
        const updateArr = [{ id, score: 1 }]

        updateData(updated, updateArr)

        setData(updated)

        const filteredDownVotes = user.downvotes.filter((vote) => vote !== id)

        setUser({
            ...user,
            ...(!user.downvotes.includes(id) && { upvotes: [...user.upvotes, id] }),
            downvotes: filteredDownVotes,
        })
    }

    const handleDecreaseVote: ClickHandler = (e, id) => {
        if (user.downvotes.includes(id)) return

        const updated = [...data]
        const updateArr = [{ id, score: -1 }]

        updateData(updated, updateArr)

        setData(updated)

        const filteredUpVotes = user.upvotes.filter((vote) => vote !== id)

        setUser({
            ...user,
            upvotes: filteredUpVotes,
            ...(!user.upvotes.includes(id) && { downvotes: [...user.downvotes, id] }),
        })
    }

    const handleReplyComment: ClickHandler = (e, id) => {
        setReply({
            id,
            isReplying: true,
        })
    }

    const handleEditComment: ClickHandler = (e, id) => {
        if (edit.isEditing) {
            const updated = [...data]
            const updateArr = [{ id, updatedContent: contentRef.current?.innerText }]

            updateData(updated, updateArr)

            setData(updated)

            setEdit({
                id: null,
                isEditing: false,
            })
        } else {
            setTimeout(() => {
                contentRef.current?.focus()

                const sel = document.getSelection()

                if (sel?.rangeCount) {
                    const firstChild = contentRef.current?.firstChild
                    if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
                        const textContent = firstChild.textContent
                        if (textContent) {
                            sel.getRangeAt(0).setEnd(firstChild, textContent.length)
                        }
                    }
                }
            }, 0)

            setEdit({
                id,
                isEditing: true,
            })
        }
    }

    const handleDeleteComment: ClickHandler = (e, id) => {
        e.preventDefault()

        const removeById = (arr: any, targetId: number) =>
            arr.reduce(
                (acc: any, obj: any) =>
                    obj.id === targetId
                        ? acc
                        : [
                              ...acc,
                              {
                                  ...obj,
                                  ...(obj.replies && { replies: removeById(obj.replies, targetId) }),
                              },
                          ],
                []
            )

        setData(removeById(data, id))
    }

    const contextValue: IContext = {
        contentRef,
        user,
        data,
        content,
        reply,
        edit,
        handleUser,
        handleChange,
        handleAddComment,
        handleIncreaseVote,
        handleDecreaseVote,
        handleReplyComment,
        handleEditComment,
        handleDeleteComment,
    }

    return <CommentContext.Provider value={contextValue}>{children}</CommentContext.Provider>
}

export default CommentContextProvider

export const useComment = () => {
    return useContext(CommentContext)
}
