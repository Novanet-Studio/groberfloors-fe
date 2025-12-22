"use client";

import Image from "next/image";
import Link from "next/link";

import { productsData } from "../../../public/data/product";

const ProductsPreview = () => {
  return (
    <section
      id="products"
      className="mx-auto mt-12 py-12 max-md:px-4"
      data-scroll-index="1"
    >
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex items-end">
            <h3 className="section-title">Luxury Vinyl Floor (Waterproof)</h3>
          </div>
          <div className="group relative overflow-hidden rounded-4xl bg-lite transition-transform duration-500 hover:scale-99">
            <Link href="/vinyls" className="block">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={productsData.lvf.image}
                  alt="Luxury Vinyl Floor"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center">
            <h3 className="section-title">Wall Panels</h3>
          </div>
          <div className="group relative overflow-hidden rounded-4xl bg-lite transition-transform duration-500 hover:scale-99">
            <Link href="/wallpanel" className="block">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={productsData.wp.image}
                  alt="Wall Panels"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
