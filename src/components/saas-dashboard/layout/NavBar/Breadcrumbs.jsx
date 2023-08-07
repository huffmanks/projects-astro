import { ChevronRight } from 'lucide-react'

const Breadcrumbs = () => {
    return (
        <div className='flex flex-wrap gap-y-1 gap-x-2 mb-6'>
            <div className='flex items-center gap-2'>
                <div className='text-sky-500'>Project</div>
                <div className='w-5 h-5 flex items-center justify-center bg-gray-600/30 rounded-full'>
                    <ChevronRight className='w-3.5 h-3.5 stroke-sky-500' />
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='text-sky-500'>Dashboard</div>
                <div className='w-5 h-5 flex items-center justify-center bg-gray-600/30 rounded-full'>
                    <ChevronRight className='w-3.5 h-3.5 stroke-sky-500' />
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='text-gray-400'>Project Board</div>
            </div>
        </div>
    )
}

export default Breadcrumbs
