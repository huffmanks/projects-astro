import { blogStories } from './constants/blogStories'

import Button from './common/Button'

const BlogSection = () => {
    return (
        <section className='max-w-screen-xl mx-auto px-10 pb-24'>
            <div className='flex flex-col lg:flex-row items-center lg:items-end justify-between gap-16 mb-24'>
                <div className='max-w-[400px] text-3xl xms:text-5xl font-bold text-center xms:text-left'>
                    <div className='text-balance'>Always keep up to date with our daily news</div>
                </div>

                <div className='flex flex-col xms:flex-row xms:items-end gap-x-16 gap-y-8'>
                    <div className='max-w-[275px]'>
                        <div className='flex items-center gap-3 mb-4'>
                            <div className='w-6 h-0.5 bg-orange-400'></div>
                            <div className='text-orange-400'>Latest blogs</div>
                        </div>

                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore saepe vero deserunt consequuntur ab animi.</div>
                    </div>

                    <div>
                        <Button color='light' text='All articles' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col xs:flex-row justify-between gap-x-16 gap-y-8 xs:overflow-x-auto snap-x snap-mandatory pb-12'>
                {blogStories.map((blog) => (
                    <div key={blog.id} className='relative snap-always snap-center'>
                        <div className='w-full xs:w-80'>
                            <img src={blog.image} alt={blog.title} />
                            <div className='absolute left-0 right-0 bottom-0 p-4 bg-black/70'>
                                <div className='mb-2 text-lg font-bold text-orange-400'>{blog.title}</div>
                                <div className='text-sm'>{blog.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BlogSection
