import { categories, difficulties } from './constants'

interface Props {
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = ({ handleChange, handleSubmit }: Props) => {
    return (
        <>
            <form onSubmit={handleSubmit} className='max-w-xs mx-auto px-3'>
                <div className='mb-4'>
                    <label htmlFor='categories' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Select a category
                    </label>
                    <select
                        id='categories'
                        name='category'
                        onChange={handleChange}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                        {categories.map((category) => (
                            <option key={category.label} value={category.value}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='mb-6'>
                    <label htmlFor='difficulties' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Select the difficulty
                    </label>
                    <select
                        id='difficulties'
                        name='difficulty'
                        onChange={handleChange}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                        {difficulties.map((difficulty) => (
                            <option key={difficulty.label} value={difficulty.value}>
                                {difficulty.label}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type='submit'
                    className='w-full mb-4 focus:outline-none text-white bg-purple-700 enabled:hover:bg-purple-800 focus:ring-4 enabled:focus:ring-purple-300 font-bold rounded-lg tracking-wider px-5 py-2.5 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:enabled:focus:ring-purple-900 disabled:opacity-60 enabled:cursor-pointer'>
                    BEGIN
                </button>
            </form>
        </>
    )
}

export default Form
