import { LayoutDashboard, Timer, MessageSquare, Users, Settings, FileBarChart2 } from 'lucide-react'
import { useSAAS } from '../../SAASContext'
import { routes } from '../../constants'

import Link from './Link'

const Menu = () => {
    const { sideBarExpanded } = useSAAS()

    const styles = {
        menu: sideBarExpanded ? 'px-4' : '',
        display: sideBarExpanded ? 'opacity-1 visible' : 'absolute opacity-0 invisible',
        nav: sideBarExpanded ? '' : 'items-center',
    }
    return (
        <div className={`transition-all ease-in-out duration-400 delay-150 ${styles.menu}`}>
            <div className='w-max text-xs uppercase font-bold mb-4'>
                <span className={`text-gray-600 transition-opacity ease-in-out duration-100 ${styles.display}`}>Main </span>
                <span className='text-gray-600'>Menu</span>
            </div>
            <nav className={`flex flex-col gap-5 mb-8 ${styles.nav}`}>
                {routes.map((link, i) => (
                    <Link key={i} link={link}>
                        {link.icon === 'LayoutDashboard' ? (
                            <LayoutDashboard
                                className={`text-2xl group-hover:stroke-sky-500 group-hover:fill-sky-500 ${link.isActive ? 'stroke-sky-600 fill-sky-600' : 'stroke-gray-600 fill-gray-600'}`}
                            />
                        ) : link.icon === 'BarChart3' ? (
                            <FileBarChart2 className={`text-2xl group-hover:stroke-sky-500 ${link.isActive ? 'stroke-sky-600' : 'stroke-gray-600'}`} />
                        ) : link.icon === 'Timer' ? (
                            <Timer className={`text-2xl group-hover:stroke-sky-500 ${link.isActive ? 'stroke-sky-600' : 'stroke-gray-600'}`} />
                        ) : link.icon === 'MessageSquare' ? (
                            <MessageSquare className={`text-2xl group-hover:stroke-sky-500 ${link.isActive ? 'stroke-sky-600' : 'stroke-gray-600'}`} />
                        ) : link.icon === 'Users' ? (
                            <Users className={`text-2xl group-hover:stroke-sky-500 ${link.isActive ? 'stroke-sky-600' : 'stroke-gray-600'}`} />
                        ) : link.icon === 'Settings' ? (
                            <Settings className={`text-2xl group-hover:stroke-sky-500 ${link.isActive ? 'stroke-sky-600' : 'stroke-gray-600'}`} />
                        ) : (
                            ''
                        )}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default Menu
