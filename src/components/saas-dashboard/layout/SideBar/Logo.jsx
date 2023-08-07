import { useSAAS } from '../../../../context/SAASContext'

const Logo = () => {
    const { sideBarExpanded } = useSAAS()

    const styles = {
        header: sideBarExpanded ? 'mt-2 mb-10 px-4' : 'mt-5 mb-8 sm:mt-2 sm:mb-10 justify-center',
        logo: sideBarExpanded ? 'w-4' : 'w-5',
        display: sideBarExpanded ? 'opacity-1 visible' : 'absolute opacity-0 invisible',
    }

    return (
        <header className={`flex gap-2 items-center transition-[padding] ease-in-out duration-400 delay-150 ${styles.header}`}>
            <div className={`transition-all ease-linear duration-100 ${styles.logo}`}>
                <img className='block max-w-full h-auto' src='/saas-dashboard/logo.png' alt='logo' />
            </div>
            <div className={`text-lg font-medium transition-opacity ease-in-out duration-400 delay-150 ${styles.display}`}>Protion</div>
        </header>
    )
}

export default Logo
