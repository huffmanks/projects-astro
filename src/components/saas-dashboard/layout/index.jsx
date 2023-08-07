import AppBar from './AppBar'
import NavBar from './NavBar'
import PageContainer from './PageContainer'
import SideBar from './SideBar'

const Layout = ({ children }) => {
    return (
        <>
            <SideBar />
            <PageContainer>
                <AppBar />
                <NavBar />
                {children}
            </PageContainer>
        </>
    )
}

export default Layout
