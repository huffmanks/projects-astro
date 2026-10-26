import type { IFooterCol, IFooterLink } from "../../constants/footerLinks";
import FooterLink from "./FooterLink";

const FooterCol = (col: IFooterCol) => {
  return (
    <div>
      <div className="mb-4 font-semibold text-black">{col.heading}</div>
      {col.links.map((link: IFooterLink) => (
        <FooterLink key={link.id} {...link} />
      ))}
    </div>
  );
};

export default FooterCol;
