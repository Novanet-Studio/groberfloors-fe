import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }); // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';
import Image from 'next/image';
import products from "../../../data/architecture/products.json";
import 'react-tabs/style/react-tabs.css';

const Products = ({ productType = 'lvf' }) => {
  const product = products[productType]; // Seleccionar dinámicamente el producto

  if (!product) {
    return <p>Product not found.</p>; // Mostrar error si no existe el producto
  }

  return (
    <section className="products section-padding" data-scroll-index="2">
      <div className="container">
        <div className="row">
          <div className="flex">
            <div className="m-title valign">
              <h3>{product.name}</h3>
            </div>
          </div>
          <div className="products main-image image-wrapper">
            <Image
              className="image"
              width="1160"
              height="800"
              src={`/${product.image}`}
              alt={product.name}
            />
          </div>

          <Tabs>
            <TabList>
              <Tab>Description</Tab>
              <Tab>Benefits</Tab>
              <Tab>Installation</Tab>
            </TabList>

            <TabPanel className="tab-content">
              <div className="pills-wrapper">
                {product.description.map((item, idx) => (
                  <p className="pill" key={idx}>{item}</p>
                ))}
              </div>
            </TabPanel>

            <TabPanel className="tab-content">
              <div className="pills-wrapper">
                {product.benefits.map((item, idx) => (
                  <p className="pill" key={idx}>{item}</p>
                ))}
              </div>
            </TabPanel>

            <TabPanel className="tab-content">
              <p className="text">{product.installation.text}</p>
              <div className="image-wrapper">
                <Image
                  width="640"
                  height="300"
                  src={`/${product.installation.imageA}`}
                  alt="Installation Step A"
                />
              </div>
              <div className="image-wrapper">
                <Image
                  width="640"
                  height="300"
                  src={`/${product.installation.imageB}`}
                  alt="Installation Step B"
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Products;
