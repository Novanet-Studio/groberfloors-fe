"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { colorsData } from "../../../public/data/colors";

import "swiper/css";
import "swiper/css/navigation";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

interface SwiperColorsProps {
  productType?: "lvf" | "wp";
}

const titles = {
  lvf: "Colors",
  wp: "WPC colors",
};

const SwiperColors = ({ productType = "lvf" }: SwiperColorsProps) => {
  const colors = colorsData?.[productType];
  const title = titles[productType];

  if (!colors) return null;

  return (
    <section className="relative py-10 md:py-24">
      <div className="container mx-auto mb-12 px-4">
        <div className="flex items-center">
          <h3 className="section-title">{title}</h3>
        </div>
      </div>

      <div className="container-fluid relative px-4 text-white">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={1000}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            prevEl: `.prev-${productType}`,
            nextEl: `.next-${productType}`,
          }}
          className="swip-colors"
        >
          {colors.map((color, idx) => (
            <SwiperSlide key={idx}>
              <div className="group relative">
                <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-800">
                  <img
                    src={color.image}
                    alt={color.title}
                    className="h-full w-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="mt-6 text-center text-white">
                  <p className="text-[1.5rem] font-light text-base-light">
                    {color.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`prev-${productType} cursor-pointer absolute left-2 top-[calc(30%)] z-10 border-none flex items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-all hover:text-accent disabled:opacity-50`}
        >
          <GoChevronLeft className="w-20 h-20" />
        </button>
        <button
          className={`next-${productType} cursor-pointer absolute right-2 top-[calc(30%)] z-10 border-none flex items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-all hover:text-accent disabled:opacity-50`}
        >
          <GoChevronRight className="w-20 h-20" />
        </button>
      </div>
    </section>
  );
};

export default SwiperColors;
