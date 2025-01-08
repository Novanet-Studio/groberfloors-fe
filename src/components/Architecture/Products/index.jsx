import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Tab, TabList, TabPanel } from 'react-tabs';

import products from "../../../data/architecture/products.json";
import 'react-tabs/style/react-tabs.css';


const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }); // disable ssr

const Products = ({ productType = 'lvf' }) => {
  const product = products[productType]; // Seleccionar dinámicamente el producto

  if (!product) {
    return <p>Product not found.</p>; // Mostrar error si no existe el producto
  }

  // Títulos dinámicos para las pestañas
  const tabs = productType === 'wp'
    ? ['Warranty', 'Transport', 'Warranty Annulment']
    : ['Description', 'Benefits', 'Installation'];

  return (
    <section className="products section-padding" data-scroll-index="none">
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
              {tabs.map((tabTitle, idx) => (
                <Tab key={idx}>{tabTitle}</Tab>
              ))}
            </TabList>

            {/* Primera pestaña */}
            <TabPanel className="tab-content">
              <div className="pills-wrapper">
                 {productType === 'lvf' && product.description ? (
                  product.description.map((item, idx) => (
                    <p className="pill" key={idx}>
                      {item}
                    </p>
                  ))
                ) : null}

                {productType === 'wp' && product.description && product.description.text ? (
                  <div className="text">
                    <ul className="list-disc pl-5 space-y-4">
                      {product.description.text.map((item, idx) => (
                        <li key={idx} className="text-white">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </TabPanel>

            {/* Segunda pestaña */}
            <TabPanel className="tab-content">
              <div className="pills-wrapper">
                {productType === 'lvf' && product.benefits ? (
                  product.benefits.map((item, idx) => (
                    <p className="pill" key={idx}>{item}</p>
                  ))
                ) : null}

                {productType === 'wp' && product.benefits && product.benefits.text ? (
                  <div className="text">
                    <ul className="list-disc pl-5 space-y-4">
                      {product.benefits.text.map((item, idx) => (
                        <li key={idx} className="text-white">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </TabPanel>

            {/* Tercera pestaña: contenido dinámico */}
            <TabPanel className="tab-content">
              {productType === 'wp' ? (
                <div className="text">
                  <ul className="list-disc pl-5 space-y-4">
                    {product.installation.text.map((item, idx) => (
                      <li key={idx} className="text-white">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <>
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
                </>
              )}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Products;



