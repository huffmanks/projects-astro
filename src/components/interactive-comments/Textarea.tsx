import { useComment } from './CommentContext'

interface IProps {
    name: string
    placeholder: string
}

const Textarea = ({ name, placeholder }: IProps) => {
    const { content, handleChange } = useComment()

    return (
        <div className='p-1 border border-1 border-moderate-blue rounded-lg'>
            <textarea rows={4} className='block w-full p-3 outline-none resize-none' name={name} placeholder={placeholder} value={content[name]} onChange={handleChange}></textarea>
        </div>
    )
}

export default Textarea
