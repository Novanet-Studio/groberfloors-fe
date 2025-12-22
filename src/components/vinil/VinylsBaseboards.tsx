import { productsData } from "../../../public/data/product";

const VinylsBaseboards = () => {
  const baseboards = productsData.lvf.baseboards;

  if (!baseboards) {
    return <p>Baseboards not found for this product.</p>;
  }

  return (
    <section className="py-10 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex">
            <div>
              <h3 className="section-title">Baseboards</h3>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-around gap-y-16">
          {baseboards.map((item, idx) => (
            <div className="w-[180px]" key={idx}>
              <div
                className="h-[180px] w-[180px] rounded-lg bg-cover bg-no-repeat"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
              <div className="mt-10">
                <p className="mt-2 text-2xl text-accent">{item.name}</p>
                <ul className="mt-2 text-md text-lite">
                  {item.sizes.map((size, index) => (
                    <li key={index}>{size}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VinylsBaseboards;
