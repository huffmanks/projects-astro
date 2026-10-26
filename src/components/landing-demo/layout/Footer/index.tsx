import { footerLinks } from "../../constants/footerLinks";
import FooterCol from "./FooterCol";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-300 px-4 py-10 sm:px-10">
      <div className="mx-auto mb-10 grid max-w-screen-xl justify-between gap-x-12 gap-y-6 sm:gap-y-12 lg:grid-cols-[325px_auto]">
        <div className="text-center lg:text-left">
          <div className="mb-6 text-4xl text-black sm:mb-10 sm:text-6xl">
            Let&rsquo;s <span className="text-orange-400 underline">work</span>{" "}
            <span className="lg:mt-2 lg:block">together</span>
          </div>
          <p className="px-2 text-gray-600 sm:px-10 lg:px-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime modi at rerum commodi
            explicabo numquam?
          </p>
        </div>
        <div className="flex basis-full flex-col gap-x-12 gap-y-6 text-center sm:flex-row sm:justify-center sm:text-left">
          {footerLinks.map((col) => (
            <FooterCol key={col.id} {...col} />
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl border-t border-gray-500 py-8 text-center text-gray-600">
        Copyright &copy; Funflow {currentYear}. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
