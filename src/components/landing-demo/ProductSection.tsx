import Button from "./common/Button";
import { productList } from "./constants/productList";

const ProductSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-8 py-16">
      <div className="xs:flex-row xs:overflow-x-auto flex snap-x snap-mandatory flex-col gap-8">
        {productList.map((product) => (
          <div key={product.id} className="snap-center snap-always pb-4">
            <div className="xs:w-96 w-full">
              <img src={product.image.src} alt={product.title} />
            </div>

            <div className="xs:flex-row xs:items-center xs:pb-8 flex flex-col justify-between gap-2 pt-8">
              <div className="flex flex-col gap-2">
                <div className="text-xs text-gray-400 uppercase">
                  {product.category} - {product.date}
                </div>
                <div className="text-lg font-bold">{product.title}</div>
              </div>

              <div>
                <a
                  className="text-orange-400 underline underline-offset-4 transition-colors hover:text-gray-300"
                  href={product.link}>
                  Full details &raquo;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col-reverse items-center justify-center gap-x-24 gap-y-10 pt-16 sm:flex-row">
        <div>
          <Button color="light" text="View all projects" />
        </div>

        <div className="max-w-sm text-center text-gray-300 sm:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur, sed optio
          laudantium facere odit, eos quos deleniti nobis aliquam sunt, sequi eveniet mollitia?
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
