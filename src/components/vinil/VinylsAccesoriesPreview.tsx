import { accesoriesData } from "../../../public/data/accesories";

const VinylsAccesoriesPreview = () => {
  const accesories = accesoriesData["lvf"];

  if (!accesories) {
    return <p>No accesories available for this product type.</p>;
  }

  return (
    <section className="py-10 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex">
            <div>
              <h3 className="section-title">Accessories</h3>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-around gap-y-16">
          {accesories.map((item, idx) => (
            <div className="item flex flex-col items-center" key={idx}>
              <div className="relative inline-block">
                <div
                  className="h-[240px] w-[240px] rounded-full bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
              </div>

              <div className="mt-10 text-center">
                <p className="mt-2 text-xl font-light text-lite">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VinylsAccesoriesPreview;
