import { useRef, useState } from "react";

import IconButton from "../common/IconButton";
import { menuLinks } from "../constants/menuLinks";

const Navbar = () => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    if (e.target === backdropRef.current || e.target === closeRef.current) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <header className="mx-auto max-w-7xl px-6 py-4 md:px-10 md:py-8">
        <div className="flex items-center justify-between gap-4">
          <button className="group flex items-center justify-center gap-2" onClick={handleOpen}>
            <span className="text-sm leading-none uppercase">Menu</span>

            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-2xl group-hover:fill-orange-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
            </svg>
          </button>
          <div className="text-2xl">Funflow</div>
          <div className="hidden gap-4 sm:flex">
            <IconButton buttonPadding="p-1" path="https://facebook.com" color="light">
              <svg
                className="h-4 w-4 fill-white stroke-transparent text-xs transition-all duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 640 640">
                <path
                  fill="currentColor"
                  d="M240 363.3V576h116V363.3h86.5l18-97.8H356v-34.6c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4v42.1h-66v97.8z"></path>
              </svg>
            </IconButton>
            <IconButton buttonPadding="p-1" path="https://dribbble.com" color="light">
              <svg
                className="h-4 w-4 text-xs transition-all duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 640 640">
                <path
                  fill="currentColor"
                  d="M320 72C183 72 72 183 72 320s111 248 248 248s248-111 248-248S457 72 320 72m164 114.4c29.5 36 47.4 82 47.8 132c-7-1.5-77-15.7-147.5-6.8c-5.8-14-11.2-26.4-18.6-41.6c78.3-32 113.8-77.5 118.3-83.5zm-23.6-24.5c-3.8 5.4-35.7 48.3-111 76.5c-34.7-63.8-73.2-116.2-79-124c67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5c-99.1 26.3-186.4 25.9-195.8 25.8c13.7-65.7 58-120.4 117.3-148.3M108.2 320.3c0-2.2 0-4.3.1-6.5c9.3.2 111.9 1.5 217.7-30.1c6.1 11.9 11.9 23.9 17.2 35.9c-76.6 21.6-146.2 83.5-180.5 142.3c-33.8-37.6-54.5-87.2-54.5-141.6M190 487.4c22.1-45.2 82.2-103.6 167.6-132.8c29.7 77.3 42 142.1 45.2 160.6c-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151c66.4-10.6 124.7 6.8 131.9 9.1c-9.4 58.9-43.3 109.8-90.8 142z"></path>
              </svg>
            </IconButton>
            <IconButton buttonPadding="p-1" path="https://instagram.com" color="light">
              <svg
                className="h-4 w-4 text-xs transition-all duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 640 640">
                <path
                  fill="currentColor"
                  d="M320.3 205c-63.5-.2-115.1 51.2-115.3 114.7S256.2 434.8 319.7 435S434.8 383.8 435 320.3S383.8 205.2 320.3 205m-.6 40.4c41.2-.2 74.7 33.1 74.9 74.3s-33.1 74.7-74.3 74.9s-74.7-33.1-74.9-74.3s33.1-74.7 74.3-74.9m93.4-45.1c0-14.8 12-26.8 26.8-26.8s26.8 12 26.8 26.8s-12 26.8-26.8 26.8s-26.8-12-26.8-26.8m129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M495 452c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"></path>
              </svg>
            </IconButton>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          ref={backdropRef}
          className="fixed inset-0 bg-black/50 transition-all duration-1000"
          onClick={handleClose}>
          <div className="absolute top-0 bottom-0 left-0 w-64 bg-orange-400 px-8 pt-14 pb-8">
            <button
              ref={closeRef}
              className="absolute top-2 right-3 text-4xl transition-colors duration-300 hover:text-black"
              onClick={handleClose}>
              &times;
            </button>
            <div className="flex h-full flex-col">
              <div>
                {menuLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.path}
                    className="mb-4 block tracking-wider transition-colors duration-300 hover:text-black hover:underline hover:underline-offset-4">
                    {link.text}
                  </a>
                ))}
              </div>
              <div className="mt-auto flex justify-center gap-4">
                <IconButton buttonPadding="p-1" path="https://facebook.com" color="dark">
                  <svg
                    className="h-4 w-4 fill-black stroke-transparent text-xs transition-all duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 640 640">
                    <path
                      fill="currentColor"
                      d="M240 363.3V576h116V363.3h86.5l18-97.8H356v-34.6c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4v42.1h-66v97.8z"></path>
                  </svg>
                </IconButton>
                <IconButton buttonPadding="p-1" path="https://dribbble.com" color="dark">
                  <svg
                    className="h-4 w-4 stroke-black text-xs transition-all duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 640 640">
                    <path
                      fill="currentColor"
                      d="M320 72C183 72 72 183 72 320s111 248 248 248s248-111 248-248S457 72 320 72m164 114.4c29.5 36 47.4 82 47.8 132c-7-1.5-77-15.7-147.5-6.8c-5.8-14-11.2-26.4-18.6-41.6c78.3-32 113.8-77.5 118.3-83.5zm-23.6-24.5c-3.8 5.4-35.7 48.3-111 76.5c-34.7-63.8-73.2-116.2-79-124c67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5c-99.1 26.3-186.4 25.9-195.8 25.8c13.7-65.7 58-120.4 117.3-148.3M108.2 320.3c0-2.2 0-4.3.1-6.5c9.3.2 111.9 1.5 217.7-30.1c6.1 11.9 11.9 23.9 17.2 35.9c-76.6 21.6-146.2 83.5-180.5 142.3c-33.8-37.6-54.5-87.2-54.5-141.6M190 487.4c22.1-45.2 82.2-103.6 167.6-132.8c29.7 77.3 42 142.1 45.2 160.6c-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151c66.4-10.6 124.7 6.8 131.9 9.1c-9.4 58.9-43.3 109.8-90.8 142z"></path>
                  </svg>
                </IconButton>
                <IconButton buttonPadding="p-1" path="https://instagram.com" color="dark">
                  <svg
                    className="h-4 w-4 stroke-black text-xs transition-all duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 640 640">
                    <path
                      fill="currentColor"
                      d="M320.3 205c-63.5-.2-115.1 51.2-115.3 114.7S256.2 434.8 319.7 435S434.8 383.8 435 320.3S383.8 205.2 320.3 205m-.6 40.4c41.2-.2 74.7 33.1 74.9 74.3s-33.1 74.7-74.3 74.9s-74.7-33.1-74.9-74.3s33.1-74.7 74.3-74.9m93.4-45.1c0-14.8 12-26.8 26.8-26.8s26.8 12 26.8 26.8s-12 26.8-26.8 26.8s-26.8-12-26.8-26.8m129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M495 452c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"></path>
                  </svg>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
