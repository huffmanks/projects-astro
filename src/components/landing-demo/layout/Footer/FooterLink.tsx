import type { IFooterLink } from "../../constants/footerLinks";

const FooterLink = (link: IFooterLink) => {
  return (
    <div className="mb-1 text-gray-600">
      <>
        {link?.label && <span>{link.label}</span>}
        <a href={link.path} className="cursor-pointer hover:text-orange-400">
          {link.text}
        </a>
      </>
    </div>
  );
};

export default FooterLink;
