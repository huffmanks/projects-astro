const TaglineSection = () => {
    return (
        <section className='max-w-screen-xl flex flex-col sm:flex-row justify-center items-center gap-10 mx-auto px-10 py-16'>
            <div className='flex items-center gap-3'>
                <div className='w-6 h-0.5 bg-orange-400'></div>
                <div className='text-orange-400'>Latest works</div>
            </div>
            <div className='text-3xl font-bold text-center sm:text-left'>
                <div>Products that we</div>
                <div>build for solving problems</div>
            </div>
        </section>
    )
}

export default TaglineSection
