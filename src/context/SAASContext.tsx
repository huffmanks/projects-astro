import { createContext, useContext, useRef, useState } from 'react'

import { useHotkeys } from 'react-hotkeys-hook'
import { useWindowSize } from 'usehooks-ts'

import Layout from '../components/saas-dashboard/layout'
import Buckets from '../components/saas-dashboard/Buckets'

const SAASContext = createContext({})

const SAASContextProvider = ({ children }: { children: React.ReactNode }) => {
    const searchInputRef = useRef<HTMLInputElement>(null)

    const { width } = useWindowSize()

    const [sideBarExpanded, setSideBarExpanded] = useState(width > 600 ? true : false)

    useHotkeys('ctrl+k, cmd+k', (e) => {
        e.preventDefault()
        if (!searchInputRef?.current) return

        searchInputRef.current.focus()
    })

    const handleSidebar = () => {
        setSideBarExpanded((prev) => !prev)
    }

    const contextValue = {
        searchInputRef,
        sideBarExpanded,
        handleSidebar,
    }

    return <SAASContext.Provider value={contextValue}>{children}</SAASContext.Provider>
}

export default SAASContextProvider

export const useSAAS = () => {
    return useContext(SAASContext)
}
