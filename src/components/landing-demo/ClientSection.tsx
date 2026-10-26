import { clientLogos } from "./constants/clientLogos";

const ClientSection = () => {
  return (
    <section className="xs:pt-16 mx-auto max-w-7xl px-8 pt-8 pb-16">
      <div className="mb-8 text-center text-sm lg:text-base">_Trusted by</div>
      <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
        {clientLogos.map((logo) => (
          <div className="w-32" key={logo.id}>
            <img src={logo.path.src} alt={logo.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
