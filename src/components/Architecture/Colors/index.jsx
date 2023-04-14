/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import portfolios from "../../../data/architecture/colors.json";

const Portfolio = () => {

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section
      className="work-crsol-clum section-padding pt-50"
    >
      <div className="container">
        <div className="sec-head mb-50">
          <div className="flex">
            <div className="m-title valign">
              <h3>SPC Floors Colors</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <Swiper
          id="content-carousel-container-unq-2"
          className="swiper-container"
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          speed={1000}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              for (var i = 0; i < swiper.slides.length; i++)
                swiper.slides[i].childNodes[0].setAttribute(
                  "data-swiper-parallax",
                  0.75 * swiper.width
                );

              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
        >
          {portfolios.map((portfolio, idx) => (
            <SwiperSlide key={idx}>
              <div className="item">
                <div className="img">
                  <img src={portfolio.image} alt="" />
                </div>
                <div className="cont text-center mt-40">
                  <p className="mt-5">{portfolio.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="setting">
            <div className="controls">
              <div
                className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
                ref={navigationNextRef}
              >
              </div>
              <div
                className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
                ref={navigationPrevRef}
              >
              </div>
            </div>
          </div>
        </Swiper>


      </div>
    </section>
  );
};

export default Portfolio;
