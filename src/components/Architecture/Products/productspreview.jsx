import products from "../../../data/architecture/products.json";
import Image from "next/image";
import Link from "next/link";

const ProductsPreview = () => {
  return (
    <section className="products section-padding" data-scroll-index="none">
      <div className="row">
        <div className="container-title">
          <div className="m-title-valign">
            <h3 className="n-title-h3">Luxury Vinyl Floor (Waterproof)</h3>
          </div>
          <div className="m-title valign">
            <h3 className="w-title-h3">Wall Panels</h3>
          </div>
        </div>

        <div className="container-preview">
          <div className="products main-image image-wrapper">
            <Link href="/luxuryvinylflooring">
              <a className="preview">
                <Image
                  className="image"
                  width="1160"
                  height="800"
                  src={`/${products.lvf.image}`}
                  alt="Luxury Vinyl Floor"
                />
              </a>
            </Link>
          </div>
          <div className="products main-image image-wrapper">
            <Link href="/wallpanels">
              <a className="preview">
                <Image
                  className="image"
                  width="1160"
                  height="800"
                  src={`/${products.wp.image}`}
                  alt="Wall Panels"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
