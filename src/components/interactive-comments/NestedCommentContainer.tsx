import type { ReactNode } from 'react'

interface IProps {
    classes?: string
    children?: ReactNode | undefined
}

const NestedCommentContainer = ({ classes, children }: IProps) => {
    return <div className={`flex flex-col gap-6 ml-3 pl-3 xws:ml-8 xws:pl-8 border-l-2 border-light-gray ${classes ? classes : ''}`}>{children}</div>
}

export default NestedCommentContainer
