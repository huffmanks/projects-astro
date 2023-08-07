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
            document.body.classList.add('h-screen', 'overflow-y-hidden')
        } else {
            document.body.classList.remove('h-screen', 'overflow-y-hidden')
        }
    }, [sideBarExpanded])

    return (
        <>
            <div className={`w-full h-full bg-black fixed ${sideBarExpanded ? 'opacity-30 translate-x-0 z-20 pointer-events-none' : 'opacity-0 -translate-x-80'}`}></div>
            <aside className={`fixed z-30 from-[#031634] to-[#04000d] top-0 bottom-0 left-0 transition-all ease-linear duration-150 ${styles.sidebar}`}>
                <div className={`relative flex flex-col h-screen p-4 ${!sideBarExpanded && 'items-center'}`}>
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
