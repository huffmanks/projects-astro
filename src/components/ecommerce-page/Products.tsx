import { useEffect, useState } from "react";

import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useWindowSize } from "usehooks-ts";

import { products } from "./data";

const Products = () => {
  const { width } = useWindowSize();

  const [isMounted, setIsMounted] = useState(false);
  const [productsVisible, setProductsVisible] = useState<number | null>(null);
  const [slideStart, setSlideStart] = useState(0);
  const [slideEnd, setSlideEnd] = useState<number | null>(null);

  const handlePrev = () => {
    setSlideStart((prev) => prev - productsVisible!);
    setSlideEnd((prev) => prev! - productsVisible!);
  };

  const handleNext = () => {
    setSlideStart((prev) => prev + productsVisible!);
    setSlideEnd((prev) => prev! + productsVisible!);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const initial = width >= 1024 ? 3 : width < 1024 && width >= 768 ? 2 : 1;
    setProductsVisible(initial);
    setSlideEnd(initial);
  }, [isMounted]);

  return (
    <section className="mb-16">
      <div className="mx-auto mb-2 block max-w-[560px] items-center justify-between gap-8 sm:mb-6 sm:flex md:max-w-none">
        <h2 className="mb-4 text-center text-3xl font-bold sm:mb-0 lg:text-left">
          Featured products
        </h2>
        <div className="ml-auto flex w-fit">
          <button
            disabled={slideStart === 0 || slideEnd === productsVisible! - 1}
            className="group rounded-md rounded-r-none border-2 border-r border-gray-200 p-2 transition enabled:hover:border-black enabled:hover:bg-black enabled:focus:border-black enabled:focus:bg-black"
            onClick={handlePrev}>
            <ChevronLeft className="h-4 w-4 group-hover:stroke-white group-focus:stroke-white group-disabled:stroke-gray-400" />
          </button>
          <button
            disabled={
              slideStart === products.length - productsVisible! || slideEnd === products.length
            }
            className="group rounded-md rounded-l-none border-2 border-l border-gray-200 p-2 transition enabled:hover:border-black enabled:hover:bg-black enabled:focus:border-black enabled:focus:bg-black"
            onClick={handleNext}>
            <ChevronRight className="h-4 w-4 group-hover:stroke-white group-focus:stroke-white group-disabled:stroke-gray-400" />
          </button>
        </div>
      </div>

      <div className="relative mb-12 grid items-center justify-center gap-5 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
        {slideEnd &&
          products.map((product, i) => (
            <div
              key={product.id}
              className={`transition-opacity duration-300 ${
                !(i >= slideStart && i < slideEnd)
                  ? "invisible absolute translate-x-[2500px] opacity-0 duration-0"
                  : "visible opacity-100"
              }`}>
              <div className="relative mb-3 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="aspect-[14/15] w-[560px] object-cover"
                />
                {product.isDiscounted && (
                  <div className="absolute top-4 left-4 rounded-md bg-red-600 px-2 py-1.5 text-xs font-bold tracking-widest text-white uppercase">
                    Sale
                  </div>
                )}
              </div>
              <div className="flex items-start justify-between gap-4 p-0.5">
                <div>
                  <div className="mb-2">{product.title}</div>
                  <div className="flex gap-2">
                    <span className="self-baseline text-2xl">${product.salePrice}</span>
                    {product.isDiscounted && (
                      <span className="self-start text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <button className="group rounded-md border-2 border-transparent bg-black p-2 transition hover:border-black hover:bg-white focus:border-black focus:bg-white">
                  <ShoppingCart className="h-5 w-5 stroke-white group-hover:stroke-black group-focus:stroke-black" />
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="mx-auto flex w-fit max-w-full">
        {productsVisible &&
          Array.from(Array(products.length / productsVisible)).map((_, index) => (
            <div
              key={`indicator-${index}`}
              style={{ maxWidth: "100%", width: 300 / (products.length / productsVisible) + "px" }}
              className={`h-2 transition-all duration-300 first:rounded-l-lg last:rounded-r-lg ${index * productsVisible === slideStart ? "bg-black" : "bg-gray-200"}`}></div>
          ))}
      </div>
    </section>
  );
};

export default Products;
