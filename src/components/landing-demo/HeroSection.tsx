import Button from "./common/Button";
import { headshots, hero } from "./constants/images";

const HeroSection = () => {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-8 gap-y-16 pt-1 pb-16 md:grid-cols-2 md:pt-8 md:pl-10">
      <div className="md:hidden">
        <img
          className="max-h-[50vh] w-full object-cover object-top"
          src={hero.mobile.src}
          alt="hero"
        />
      </div>
      <div className="flex flex-col items-center px-8">
        <div className="mb-8 flex items-center gap-3 lg:mb-12">
          <div className="h-6 w-0.5 bg-orange-400 lg:h-0.5 lg:w-6"></div>
          <div className="xs:text-base text-sm lg:text-lg">
            &ldquo;We help people to reshape their business.&rdquo;
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="xs:gap-8 flex items-center gap-4">
            <div className="h-16 w-16 rounded-full border-2">
              <img className="rounded-full" src={headshots.one.src} alt="headshot one" />
            </div>
            <div className="xs:text-6xl text-4xl sm:text-7xl md:text-5xl lg:text-7xl">We are</div>
          </div>

          <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
            <span className="text-3xl leading-tight font-light text-orange-400 sm:text-4xl md:text-3xl lg:text-4xl lg:leading-tight">
              web3
            </span>
            <span className="xs:text-6xl text-4xl sm:text-7xl md:text-5xl lg:text-7xl">&</span>
            <span className="text-3xl leading-tight font-light text-orange-400 sm:text-4xl md:text-3xl lg:text-4xl lg:leading-tight">
              nftbased
            </span>
          </div>

          <div className="xs:gap-8 mb-8 flex items-center gap-4 lg:mb-12">
            <div className="xs:text-6xl text-4xl sm:text-7xl md:text-5xl lg:text-7xl">agency</div>
            <div className="h-16 w-16 rounded-full border-2">
              <img className="rounded-full" src={headshots.two.src} alt="headshot two" />
            </div>
          </div>

          <div className="flex flex-col-reverse gap-x-16 gap-y-6 lg:flex-row lg:items-center">
            <div>
              <Button color="primary" text="Let&rsquo;s talk" />
            </div>
            <div className="max-w-[26ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsa quis iste non
              mollitia quod, cupiditate eligendi repellat.
            </div>
          </div>
        </div>
      </div>

      <div className="hidden justify-center md:flex">
        <img className="max-h-[90vh]" src={hero.desktop.src} alt="hero" />
      </div>
    </section>
  );
};

export default HeroSection;
