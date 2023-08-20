import type { IFooterLink } from '../../../../constants/landing-demo/footerLinks'

const FooterLink = (link: IFooterLink) => {
    return (
        <div className='mb-1 text-gray-600'>
            <>
                {link?.label && <span>{link.label}</span>}
                <a href={link.path} className='hover:text-orange-400 cursor-pointer'>
                    {link.text}
                </a>
            </>
        </div>
    )
}

export default FooterLink
