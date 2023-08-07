import { useEffect } from 'react'
import { useSAAS } from '../../../../context/SAASContext'

import Expand from './Expand'
import Footer from './Footer'
import Logo from './Logo'
import Menu from './Menu'
import Workspaces from './Workspaces'

const SideBar = () => {
    const { sideBarExpanded } = useSAAS()

    const styles = {
        sidebar: sideBarExpanded ? 'w-11/12 xws:w-72 bg-gradient-to-br' : 'w-16 sm:w-20 bg-gradient-to-b',
    }

    useEffect(() => {
        if (sideBarExpanded) {
            document.body.classList.add('overflow-y-hidden', 'sm:overflow-y-auto')
        } else {
            document.body.classList.remove('overflow-y-hidden', 'sm:overflow-y-auto')
        }
    }, [sideBarExpanded])

    return (
        <>
            <div className={`bg-black absolute inset-0 opacity-30 ${sideBarExpanded ? 'block sm:hidden' : 'hidden'}`}></div>
            <aside className={`fixed z-30 from-[#031634] to-[#04000d] top-0 bottom-0 left-0 transition-all ease-linear duration-150 ${styles.sidebar}`}>
                <div className={`relative flex flex-col h-full p-4 ${!sideBarExpanded && 'items-center'}`}>
                    <Expand />

                    <Logo />

                    <Menu />

                    <Workspaces />

                    <Footer />
                </div>
            </aside>
        </>
    )
}

export default SideBar
