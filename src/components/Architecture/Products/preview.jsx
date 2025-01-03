import products from "../../../data/architecture/products.json";
import Image from "next/image";
import Link from "next/link";

const ProductsPreview = () => {
  return (
    <section className="products section-padding" data-scroll-index="1">
      <div className="row">
        <div className="container-title">
          <div className="m-title valign">
            <h3>Luxury Vinyl Floor (Waterproof)</h3>
          </div>
          <div className="m-title valign">
            <h3>Wall Panels</h3>
          </div>
        </div>

        <div className="container-preview">
          <div className="products main-image image-wrapper ">
            <a className="preview" href="/vinyls">
              <Image
                className="image"
                width="1160"
                height="800"
                src={`/${products.lvf.image}`}
              />
            </a>
          </div>
          <div className="products main-image image-wrapper ">
            <a className="preview" href="/wallpanel">
              <Image
                className="image"
                width="1160"
                height="800"
                src={`/${products.wp.image}`}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
