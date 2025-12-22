import { heroData } from "../../../public/data/hero";

interface HeroProps {
  productType?: "lvf" | "wp";
}

const Hero = ({ productType = "lvf" }: HeroProps) => {
  const hero = heroData[productType as keyof typeof heroData];

  if (!hero) {
    return <p>Hero information not available for this product.</p>;
  }

  return (
    <section
      id="products"
      className="relative overflow-hidden py-20 lg:py-30"
      data-scroll-index="1"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row ">
          <div className="relative w-full lg:w-1/2">
            <div className="relative mx-auto flex flex-col md:flex-row max-w-[500px] items-center justify-center">
              <div className="max-md:mb-2 md:absolute md:-rotate-90  md:-left-27.5 md:bottom-45">
                <div className="flex gap-6">
                  <h2 className="text-4xl! md:text-6xl! font-bold leading-none text-accent">
                    {hero.percentage}
                  </h2>

                  <div className="uppercase tracking-[4px]">
                    quality <br /> products
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[220px] md:h-[520px] md:w-[320px] overflow-hidden rounded-[175px] border-4 border-base-alt bg-base-alt">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${hero.image}')`,
                  }}
                ></div>
              </div>

              <div className="water-mark absolute right-[-40px] top-[calc(50%-150px)] h-[300px] w-[300px] animate-[spin_10s_linear_infinite] opacity-50 lg:right-[-60px]">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 300 300"
                  className="h-full w-full"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    />
                  </defs>
                  <g>
                    <use xlinkHref="#circlePath" fill="none" />
                    <text
                      fill="#fff"
                      className="text-[14px] tracking-widest uppercase"
                    >
                      <textPath xlinkHref="#circlePath">
                        Our flooring is entirely Waterproof
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col text-center lg:text-left">
              <h6 className="badge-text hidden lg:block">About our product</h6>
              <h3 className="section-title mb-[30px]">{hero.text}</h3>
              <div className="text-gray-300 space-y-[10px] text-[1.25rem] md:text-[1.5rem] leading-none md:leading-tight">
                <p>{hero.text2}</p>
                {"text3" in hero && <p>{(hero as any).text3}</p>}
                {"text4" in hero && <p>{(hero as any).text4}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
