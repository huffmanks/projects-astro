import { Search, Mic } from 'lucide-react'
import { useSAAS } from '../../../../context/SAASContext'

import IconButton from '../../common/IconButton'

const SearchBar = () => {
    const { searchInputRef } = useSAAS()
    console.log(searchInputRef.current)

    return (
        <div className='w-full max-w-xl flex items-center bg-gray-600/30 rounded-full focus-within:ring-2 focus-within:ring-sky-500'>
            <div className='py-0.5 pl-1 bg-gray-600/30 rounded-tl-full rounded-bl-full'>
                <IconButton buttonSize='normal' bgColor='transparent'>
                    <Search className='w-4 h-4 stroke-white' />
                </IconButton>
            </div>

            <input ref={searchInputRef} className='flex-1 w-full py-3 px-2 bg-gray-600/30 text-sm outline-none' type='text' placeholder='Search something...' />

            <div className='hidden md:flex min-w-ma justify-center items-center py-2 bg-inherit'>
                <span className='py-2 px-3 bg-gray-800 text-xs leading-none rounded-md'>CMD + K</span>
            </div>

            <div className='py-0.5 pr-1 bg-gray-600/30 rounded-tr-full rounded-br-full'>
                <IconButton buttonSize='normal' bgColor='transparent'>
                    <Mic className='w-4 h-4 stroke-sky-300' />
                </IconButton>
            </div>
        </div>
    )
}

export default SearchBar
