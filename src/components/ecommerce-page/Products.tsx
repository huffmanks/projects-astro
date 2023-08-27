import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react'

import { products } from './data'
import { useWindowSize } from 'usehooks-ts'

const Products = () => {
    const { width } = useWindowSize()

    const [isMounted, setIsMounted] = useState(false)
    const [productsVisible, setProductsVisible] = useState<number | null>(null)
    const [slideStart, setSlideStart] = useState(0)
    const [slideEnd, setSlideEnd] = useState<number | null>(null)

    const handlePrev = () => {
        setSlideStart((prev) => prev - productsVisible!)
        setSlideEnd((prev) => prev! - productsVisible!)
    }

    const handleNext = () => {
        setSlideStart((prev) => prev + productsVisible!)
        setSlideEnd((prev) => prev! + productsVisible!)
    }

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        const initial = width >= 1024 ? 3 : width < 1024 && width >= 768 ? 2 : 1
        setProductsVisible(initial)
        setSlideEnd(initial)
    }, [isMounted])

    return (
        <section className='mb-24'>
            <div className='max-w-[560px] mx-auto md:max-w-none flex items-center justify-between gap-8 mb-6'>
                <h2 className='text-3xl font-bold text-center lg:text-left'>Featured products</h2>
                <div className='flex'>
                    <button
                        disabled={slideStart === 0 || slideEnd === productsVisible! - 1}
                        className='group p-2 border-2 border-r border-gray-200 rounded-md rounded-r-none transition enabled:hover:bg-black enabled:focus:bg-black enabled:hover:border-black enabled:focus:border-black'
                        onClick={handlePrev}>
                        <ChevronLeft className='w-4 h-4 group-hover:stroke-white group-focus:stroke-white group-disabled:stroke-gray-400' />
                    </button>
                    <button
                        disabled={slideStart === products.length - productsVisible! || slideEnd === products.length}
                        className='group p-2 border-2 border-l border-gray-200 rounded-md rounded-l-none transition enabled:hover:bg-black enabled:focus:bg-black enabled:hover:border-black enabled:focus:border-black'
                        onClick={handleNext}>
                        <ChevronRight className='w-4 h-4 group-hover:stroke-white group-focus:stroke-white group-disabled:stroke-gray-400' />
                    </button>
                </div>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5'>
                {slideEnd &&
                    products.slice(slideStart, slideEnd).map((product, i) => (
                        <div key={product.id}>
                            <div className='relative rounded-lg overflow-hidden mb-3'>
                                <img src={product.image} alt={product.title} className='w-full object-cover' />
                                {product.isDiscounted && <div className='absolute top-4 left-4 bg-red-600 text-white py-1.5 px-2 uppercase text-xs font-bold tracking-widest rounded-md'>Sale</div>}
                            </div>
                            <div className='flex items-start justify-between gap-4 p-0.5'>
                                <div>
                                    <div className='mb-2'>{product.title}</div>
                                    <div className='flex gap-2'>
                                        <span className='text-2xl self-baseline'>${product.salePrice}</span>
                                        {product.isDiscounted && <span className='text-gray-500 line-through text-sm self-start'>${product.originalPrice}</span>}
                                    </div>
                                </div>
                                <button className='group p-2 rounded-md transition border-2 border-transparent bg-black hover:bg-white focus:bg-white hover:border-black focus:border-black'>
                                    <ShoppingCart className='w-5 h-5 stroke-white group-hover:stroke-black group-focus:stroke-black' />
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    )
}

export default Products
