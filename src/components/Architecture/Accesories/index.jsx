/* eslint-disable @next/next/no-img-element */
import accesories from "../../../data/architecture/accesories.json";

const Accesories = () => {
  return (
    <section className="accesories section-padding">
      <div className="container">
        <div className="row">
          <div className="flex">
            <div className="m-title valign">
              <h3>Accesories</h3>
            </div>
          </div>
          <div className="accesories">
            {accesories.map((item, idx) => (
              <div className="item" key={idx}>
                <div className="image-wrapper">
                  <div className="image" style={{ backgroundImage: `url('${item.image}')`}}>
                  </div>

                </div>
                <div className="cont text-center mt-40">
                  <p className="mt-5">{item.name}</p>
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