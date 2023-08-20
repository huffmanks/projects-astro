import { clientLogos } from './constants/clientLogos'

const ClientSection = () => {
    return (
        <section className='max-w-screen-xl mx-auto px-8 pt-8 xs:pt-16 pb-16'>
            <div className='text-sm lg:text-base text-center mb-8'>_Trusted by</div>
            <div className='flex flex-wrap items-center justify-center gap-x-16 gap-y-8'>
                {clientLogos.map((logo) => (
                    <div className='w-32' key={logo.id}>
                        <img src={logo.path} alt={logo.name} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ClientSection
