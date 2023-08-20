import AppWrapper from './AppWrapper'
import CommentContextProvider from './CommentContext'

const InteractiveComments = () => {
    return (
        <CommentContextProvider>
            <AppWrapper />
        </CommentContextProvider>
    )
}

export default InteractiveComments
