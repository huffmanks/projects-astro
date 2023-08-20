import type { IFooterLink, IFooterCol } from '../../constants/footerLinks'

import FooterLink from './FooterLink'

const FooterCol = (col: IFooterCol) => {
    return (
        <div>
            <div className='mb-4 text-black font-semibold'>{col.heading}</div>
            {col.links.map((link: IFooterLink) => (
                <FooterLink key={link.id} {...link} />
            ))}
        </div>
    )
}

export default FooterCol
