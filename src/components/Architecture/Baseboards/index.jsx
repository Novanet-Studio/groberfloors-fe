/* eslint-disable @next/next/no-img-element */
import products from "../../../data/architecture/products.json";

const Baseboards = () => {
  return (
    <section className="baseboards section-padding">
      <div className="container">
        <div className="row">
          <div className="flex">
            <div className="m-title valign">
              <h3>Baseboards</h3>
            </div>
          </div>
          <div className="baseboards">
            {products.baseboards.map((item, idx) => (
              <div className="item" key={idx}>
             
                  <div
                    className="image"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  ></div>
             
                <div className="mt-40">
                  <p className="mt-5 red-grober-color">{item.name}</p>
                  <ul className="mt-5">
                    {item.sizes.map((size, idx) => (
                      <li key={idx}>{size}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Baseboards;
