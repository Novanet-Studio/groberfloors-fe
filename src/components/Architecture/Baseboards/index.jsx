/* eslint-disable @next/next/no-img-element */
import products from "../../../data/architecture/products.json";

const Accesories = () => {
  return (
    <section className="accesories section-padding">
      <div className="container">
        <div className="row">
          <div className="flex">
            <div className="m-title valign">
              <h3>Baseboards</h3>
            </div>
          </div>
          <div className="accesories">
            {products.baseboards.map((item, idx) => (
              <div className="item" key={idx}>
                <div className="image-wrapper">
                  <div className="image" style={{ backgroundImage: `url('${item.image}')`}}></div>
                </div>
                <div className="cont text-center mt-40">
                  <p className="mt-5">{item.name}</p>
                  <p className="mt-5">{item.sizes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accesories