import ActionGroup from './ActionGroup'
import Breadcrumbs from './Breadcrumbs'
import Categories from './Categories'

const NavBar = () => {
    return (
        <div className='py-8 px-5 sm:pr-8 sm:pl-10 bg-gradient-to-r from-[#041124] via-[#05244c] to-[#041124]'>
            <Breadcrumbs />
            <ActionGroup />
            <Categories />
        </div>
    )
}

export default NavBar
