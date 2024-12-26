/* eslint-disable @next/next/no-img-element */
import accesoriesData from "../../../data/architecture/accesories.json";

const Accesories = ({ productType = "lvf" }) => {
  const accesories = accesoriesData[productType]; // Obtén los accesorios según el tipo de producto

  if (!accesories) {
    return <p>No accesories available for this product type.</p>; // Validación
  }

  // Títulos definidos para cada tipo de producto
  const titles = {
    lvf: "Accessories",
    wp: "Classification",
    default: "Accessories"
  };

  // Selecciona el título correspondiente o usa el valor por defecto
  const title = titles[productType] || titles.default;

  return (
    <section className="accesories section-padding">
      <div className="container">
        <div className="row">
          <div className="flex">
            <div className="m-title valign">
              <h3>{title}</h3>
            </div>
          </div>
          <div className="accesories">
            {accesories.map((item, idx) => (
              <div className="item" key={idx}>
                <div className="image-wrapper">
                  <div
                    className="image"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  ></div>
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
  );
};

export default Accesories;


