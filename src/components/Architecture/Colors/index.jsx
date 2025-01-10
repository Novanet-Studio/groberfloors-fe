/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import colorsData from "../../../data/architecture/colors.json"; // Asegúrate de que la ruta sea correcta

const Portfolio = ({ productType = "lvf" }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const colors = colorsData[productType]; // Obtén los colores según el tipo de producto

  if (!colors) {
    return <p>No colors available for this product type.</p>;
  }

  const titles = {
    lvf: "Colors",
    wp: "WPC colors",
    default: "Colors"
  };

  // Selecciona el título correspondiente o usa el valor por defecto
  const title = titles[productType] || titles.default;

  return (
    <section className="work-crsol-clum section-padding pt-50">
      <div className="container">
        <div className="sec-head mb-50">
          <div className="flex">
            <div className="m-title valign">
            <h3>{title}</h3>
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
          {colors.map((color, idx) => (
            <SwiperSlide key={idx}>
              <div className="item">
                <div className="img">
                  <img src={`/${color.image}`} alt={color.title} />
                </div>
                <div className="cont text-center mt-40">
                  <p className="mt-5">{color.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="setting">
            <div className="controls">
              <div
                className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
                ref={navigationNextRef}
              ></div>
              <div
                className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
                ref={navigationPrevRef}
              ></div>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;

