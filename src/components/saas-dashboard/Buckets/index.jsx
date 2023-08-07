import { buckets } from '../constants'

import Bucket from './Bucket'
import Styles from './styles.module.css'

const Buckets = () => {
    return (
        <main className='w-full py-12 px-5 sm:pr-8 sm:pl-10'>
            <div className={`${Styles.scrollbar} flex flex-col md:flex-row gap-10 md:overflow-x-auto scroll-smooth snap-x snap-mandatory`}>
                {buckets.map((bucket, i) => (
                    <Bucket key={i} bucket={bucket} />
                ))}
            </div>
        </main>
    )
}

export default Buckets
