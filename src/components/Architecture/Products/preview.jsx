import products from "../../../data/architecture/products.json";
import Image from "next/image";

const ProductsPreview = () => {
  return (
    <section className="products section-padding" data-scroll-index="2">
        <div className="row">
          <div className="container-title">
            <div className="m-title valign">
              <h3>Luxury Vinyl Floor (Waterproof)</h3>
            </div>
            <div className="m-title valign">
              <h3>Luxury Vinyl Floor (Waterproof)</h3>
            </div>
          </div>

          <div className="container-preview">
          <div className='products main-image image-wrapper '>
            <div className="preview ">
              <div> <Image className="image" width="1160" height="800" src={`/${products.lvf.image}`} /></div>   
            </div>
          </div>
          <div className='products main-image image-wrapper '>
            <div className="preview ">
              <div> <Image className="image" width="1160" height="800" src={`/${products.wp.image}`} /></div>
            </div>
          </div>

          </div>


        </div>
    </section>
  );
};

export default ProductsPreview;