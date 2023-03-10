/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import portfolios from "../../../data/architecture/colors.json";

const Portfolio = () => {
  return (
    <section
      className="work-crsol-clum section-padding pt-50"      
    >
      <div className="container">
        <div className="sec-head mb-50">
          <div className="flex">
            <div className="m-title valign">
              <h3>Colors</h3>
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
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
