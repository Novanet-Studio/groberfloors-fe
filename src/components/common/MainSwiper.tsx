"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/parallax";
import { slidesData } from "../../../public/data/slides";

interface MainSwiperProps {
  productType?: "lvf" | "wp" | "main";
}

const MainSwiper = ({ productType = "lvf" }: MainSwiperProps) => {
  const [load, setLoad] = useState(true);
  const selectedSlides = slidesData[productType] || [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (load) return null;

  return (
    <div
      id="benefits"
      className="relative h-[calc(100vh-100px)] min-h-[600px] w-full overflow-hidden"
    >
      <Swiper
        modules={[Navigation, Parallax, Autoplay]}
        speed={1000}
        parallax={true}
        slidesPerView={1}
        loop={true}
        className="h-full w-full"
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {selectedSlides.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            className="relative h-full w-full overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.bg}')` }}
              data-swiper-parallax="0.75"
            >
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="container mx-auto h-full px-4">
              <div className="flex h-full items-center">
                <div className="w-full lg:w-10/12 xl:w-9/12">
                  <div className="relative z-10">
                    <h5
                      className="mb-6 inline-block bg-accent px-0.5 py-2 md:py-4 max-md:text-4xl! text-3xl! font-bold! text-base-alt2 opacity-0 transition-all duration-700 ease-out in-[.swiper-slide-active]:translate-y-0 in-[.swiper-slide-active]:opacity-100 motion-safe:translate-y-8"
                      data-swiper-parallax="-300"
                    >
                      {slide.number}
                    </h5>

                    <h1
                      className="mb-8 text-5xl font-bold leading-tight text-white opacity-0 transition-all duration-700 ease-out delay-100 md:text-6xl lg:text-7xl in-[.swiper-slide-active]:translate-y-0 in-[.swiper-slide-active]:opacity-100 motion-safe:translate-y-8"
                      data-swiper-parallax="-200"
                    >
                      {slide.title.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </h1>

                    <div
                      className="opacity-0 transition-all duration-700 ease-out delay-300 in-[.swiper-slide-active]:translate-y-0 in-[.swiper-slide-active]:opacity-100 motion-safe:translate-y-8"
                      data-swiper-parallax="-100"
                    >
                      <p className="caption text-lg text-gray-200">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute bottom-0 right-0 z-20 flex flex-col">
          <div className="custom-prev flex h-15 w-15 cursor-pointer items-center justify-center bg-base-alt2 text-white transition-colors hover:bg-accent">
            <FaChevronLeft className="h-4 w-4" />
          </div>
          <div className="custom-next flex h-15 w-15 cursor-pointer items-center justify-center bg-base-alt2 text-white transition-colors hover:bg-accent">
            <FaChevronRight className="h-4 w-4" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default MainSwiper;
