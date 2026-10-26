import { whyUs } from "./constants/images";
import { whyStats } from "./constants/whyStats";

const WhySection = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-10">
      <div className="grid-col-1 grid items-center justify-between sm:gap-16 md:grid-cols-[1fr_2fr] md:border-b-2 md:pb-24 lg:gap-24">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="h-0.5 w-6 bg-orange-400"></div>
            <div className="text-orange-400">Why us</div>
          </div>

          <div className="mb-10 text-5xl font-bold">Why Funflow</div>

          <p className="mb-16 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quidem totam rem
            officia vitae facere.
          </p>

          <div>
            <img
              className="h-96 w-full object-cover object-[50%_60%] md:h-auto"
              src={whyUs.src}
              alt="employees in an office"
            />
          </div>
        </div>

        <div>
          {whyStats.map((stat) => (
            <div
              key={stat.id}
              className="border-b border-gray-400 py-12 sm:px-8 sm:first:border-t-2">
              <div className="flex flex-col items-center justify-between gap-x-12 gap-y-6 sm:flex-row">
                <div className="bg-orange-40 flex w-full flex-col items-center justify-center bg-linear-to-l from-gray-100 to-gray-400 px-5 py-10 text-zinc-900">
                  <div className="text-4xl font-bold">{stat.number}</div>
                  <div className="text-center text-sm">{stat.name}</div>
                </div>

                <p className="max-w-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A sit laborum maxime
                  cumque error itaque assumenda doloremque labore blanditiis vitae!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
