import { productList } from '../../constants/landing-demo/productList'
import Button from './common/Button'

const ProductSection = () => {
    return (
        <section className='max-w-screen-xl mx-auto py-16 px-8'>
            <div className='flex flex-col xs:flex-row gap-8 xs:overflow-x-auto snap-x snap-mandatory'>
                {productList.map((product) => (
                    <div key={product.id} className='snap-always snap-center pb-4'>
                        <div className='w-full xs:w-96'>
                            <img src={product.image} alt={product.title} />
                        </div>

                        <div className='flex flex-col xs:flex-row xs:items-center justify-between gap-2 pt-8 xs:pb-8'>
                            <div className='flex flex-col gap-2'>
                                <div className='uppercase text-xs text-gray-400'>
                                    {product.category} - {product.date}
                                </div>
                                <div className='text-lg font-bold'>{product.title}</div>
                            </div>

                            <div>
                                <a className='text-orange-400 underline underline-offset-4 transition-colors hover:text-gray-300' href={product.link}>
                                    Full details &raquo;
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex flex-col-reverse sm:flex-row items-center justify-center gap-x-24 gap-y-10 pt-16'>
                <div>
                    <Button color='light' text='View all projects' />
                </div>

                <div className='max-w-sm text-gray-300 text-center sm:text-left'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur, sed optio laudantium facere odit, eos quos deleniti nobis aliquam sunt, sequi eveniet mollitia?
                </div>
            </div>
        </section>
    )
}

export default ProductSection
