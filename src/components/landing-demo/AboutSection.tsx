import { aboutUs } from "./constants/images";

const AboutSection = () => {
  return (
    <section className="pt-16">
      <div className="mx-auto mb-24 flex max-w-7xl flex-col gap-4 pr-3 pl-3 text-2xl md:pr-10 md:pl-10 md:text-4xl lg:text-5xl xl:text-6xl">
        <div className="hidden md:block">We are a team of great designers,</div>
        <div className="hidden sm:self-end md:block">problem solvers, and passionate.</div>
        <div className="mx-auto max-w-112.5 text-center md:hidden">
          We are a team of great designers, problem solvers, and passionate.
        </div>
      </div>

      <div className="bg-orange-400 lg:pt-24 lg:pb-24">
        <div className="mx-auto grid grid-cols-1 justify-center gap-x-24 gap-y-8 md:grid-cols-[repeat(2,1fr)] lg:max-w-3xl">
          <div className="mx-auto max-w-sm px-10 py-16 lg:pb-0">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-0.5 w-6 bg-zinc-900"></div>
              <div className="text-lg font-bold text-zinc-900">About us</div>
            </div>

            <div className="text-gray-800">
              <p className="mb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, quibusdam.
              </p>
              <p className="mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia doloremque,
                laborum magnam sit quis quo optio aliquam quos? Laboriosam reiciendis ab inventore
                possimus rerum.
              </p>
            </div>

            <div>
              <a
                className="underline underline-offset-4 transition-colors hover:text-gray-700"
                href="#">
                Know more &raquo;
              </a>
            </div>
          </div>

          <div className="relative -order-1 md:order-1 lg:max-w-sm lg:px-10">
            <div className="h-96 w-full md:h-full lg:absolute lg:-top-32 lg:left-0 lg:h-auto lg:w-96">
              <img
                className="h-full w-full object-cover object-[50%_41%]"
                src={aboutUs.one.src}
                alt="team working on a project"
              />
            </div>
            <div className="absolute -bottom-16 -left-8 hidden w-36 lg:block">
              <img src={aboutUs.two.src} alt="team working on a project" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
