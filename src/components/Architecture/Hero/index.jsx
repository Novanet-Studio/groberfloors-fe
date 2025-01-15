import heroData from "../../../data/architecture/hero.json";

const Hero = ({ productType = "lvf" }) => {
  const hero = heroData[productType]; // Obtén los datos del producto según el tipo

  if (!hero) {
    return <p>Hero information not available for this product.</p>; // Validación
  }

  return (
    <section className="hero-cr section-padding" data-scroll-index="none">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img-exp">
              <div
                className="img bg-img"
                style={{
                  backgroundImage: `url('${hero.image}')`,
                  backgroundPosition: "center",
                }}
              ></div>
              <div id="circle">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="300px"
                  height="300px"
                  viewBox="0 0 300 300"
                  enableBackground="new 0 0 300 300"
                  xmlSpace="preserve"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    />
                  </defs>
                  <circle cx="150" cy="100" r="75" fill="none" />
                  <g>
                    <use xlinkHref="#circlePath" fill="none" />
                    <text fill="#fff">
                      <textPath xlinkHref="#circlePath">
                        Our flooring is entirely Waterproof
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
              <div className="rotate-exp">
                <h2 className="red-grober-color lh-base">{hero.percentage}</h2>
                <h6>
                  quality <br /> products
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h6 className="fz-12 text-u ls4 red-grober-color mb-10">
                About our product
              </h6>
              <h3 className="mb-30">{hero.text}</h3>
              <p className="mb-10">{hero.text2}</p>
              <p className="mb-10">{hero.text3}</p>
              <p>{hero.text4}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

