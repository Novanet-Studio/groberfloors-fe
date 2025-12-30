"use client";

import { useState } from "react";
import { productsData } from "../../../public/data/product";

interface ProductsProps {
  productType?: "lvf" | "wp";
}

const Products = ({ productType = "lvf" }: ProductsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const product = productsData[productType];
  const lvfProduct =
    productType === "lvf" ? (product as typeof productsData.lvf) : null;
  const wpProduct =
    productType === "wp" ? (product as typeof productsData.wp) : null;

  if (!product) {
    return <p>Product not found.</p>;
  }

  const tabs =
    productType === "wp"
      ? ["Warranty", "Transport", "Warranty Annulment"]
      : ["Description", "Benefits", "Installation"];

  return (
    <section id="product-details" className="py-10 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-4 md:mb-12">
          <h3 className="section-title">{product.name}</h3>
        </div>

        <div className="mb-6 flex justify-center rounded-3xl bg-lite p-8">
          <div className="relative max-h-[400px] w-full max-w-[1160px] lg:max-h-[600px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="p-6 bg-base-alt rounded-2xl">
          <div className="mb-6 border-b border-white/10">
            <div className="flex gap-4 sm:gap-8">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`pb-2 md:pb-4 text-sm md:text-lg font-medium transition-colors ${
                    activeTab === index
                      ? "border-b-2 border-accent text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[100px]">
            {lvfProduct && (
              <>
                {activeTab === 0 && (
                  <div className="flex flex-wrap gap-4 place-content-center">
                    {lvfProduct.description?.map((item, index) => (
                      <span
                        key={index}
                        className="rounded-full text-lg md:text-2xl border border-gray-600 px-6 py-2 text-lite text-center"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                {activeTab === 1 && (
                  <div className="flex flex-wrap gap-4 place-content-center">
                    {lvfProduct.benefits?.map((item, index) => (
                      <span
                        key={index}
                        className="rounded-full text-2xl border border-gray-600 px-6 py-2 text-lite text-center"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="space-y-8">
                    <p className="text-lg md:text-2xl text-gray-300">
                      {lvfProduct.installation.text}
                    </p>
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-lite p-4">
                        <img
                          src={lvfProduct.installation.imageA}
                          alt="Installation Step A"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-lite p-4">
                        <img
                          src={lvfProduct.installation.imageB}
                          alt="Installation Step B"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {wpProduct && (
              <div className="space-y-4">
                {activeTab === 0 && (
                  <ul className="customTabList">
                    {wpProduct.description.text.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {activeTab === 1 && (
                  <ul className="customTabList">
                    {wpProduct.benefits.text.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {activeTab === 2 && (
                  <ul className="customTabList">
                    {wpProduct.installation.text.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
