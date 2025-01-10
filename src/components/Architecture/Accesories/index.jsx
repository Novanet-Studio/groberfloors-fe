import React, { useState } from "react";
import Image from 'next/image';
import accesoriesData from "../../../data/architecture/accesories.json";

const Accesories = ({ productType = "lvf" }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const accesories = accesoriesData[productType];

  if (!accesories) {
    return <p>No accessories available for this product type.</p>;
  }

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalIsOpen(false);
  };

  return (
    <section className="accesories section-padding">
      <div className="container">
        <div className="row">
          <div className="flex">
            <div className="m-title valign">
              <h3>{productType === "wp" ? "Classification" : "Accessories"}</h3>
            </div>
          </div>
          <div className="accesories">
            {accesories.map((item, idx) => (
              <div
                className="item cursor-pointer"
                key={idx}
                onClick={() => openModal(item)}
              >
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

      {/* Modal */}
      {modalIsOpen && selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-body">
              {/* Sección Izquierda */}
              <div className="modal-left">
                <div className="modal-header">
                  <h5 className="modal-number">{selectedItem.number || "01"}</h5>
                  <h2>{selectedItem.name}</h2>
                </div>
                <div>
                  <p className="modal-description">{selectedItem.description}</p>
                </div>

                <div className="modal-size">
                  <div className="modal-size-content">
                    <h4 className="text-size">Size</h4>
                    <ul className="no-padding">
                      <li><strong>LONG:</strong> {selectedItem.details?.long}</li>
                      <li><strong>WIDTH:</strong> {selectedItem.details?.width}</li>
                      <li><strong>DEPTH:</strong> {selectedItem.details?.depth}</li>
                      <li><strong>FINISH:</strong> {selectedItem.details?.finish}</li>
                      <li><strong>WEIGHT:</strong> {selectedItem.details?.weight}</li>
                      <li><strong>COMPOSITION:</strong> {selectedItem.details?.composition}</li>
                    </ul>
                  </div>
                </div>

                <div className="composition-accessories">
                  <div className="composition">
                    <div className="modal-composition">
                      <h4 className="text-composition">{selectedItem.composition}</h4>
                    </div>
                    <div className="composition-accesories-image">
                      <Image src={selectedItem.compositionImage} width={150} height={150} alt={selectedItem.name} />
                    </div>
                  </div>

                  <div className="composition">
                    <div className="modal-composition">
                      <h4 className="text-composition">{selectedItem.accesories}</h4>
                    </div>
                    {selectedItem.accesoriesImage && (
                      <div className="composition-accesories-image">
                        <Image className="responsive-image" src={selectedItem.accesoriesImage} width={180} height={195} alt={selectedItem.name} />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Sección Derecha */}
              <div className="modal-center">
                <div className="modal-image">
                  <Image src={selectedItem.infoImage} width={900} height={900} alt={selectedItem.name} />
                </div>
              </div>

              <div className="modal-right">
                <div className="modal-info-content">
                  <h4 className="text-size">Technical data</h4>
                  <div className="container-technical">
                    <div className="principal-text-tecnical">
                      <div className="principal-division">
                        <h4>{selectedItem.technicalData?.applications}</h4>
                      </div>
                    </div>
                    <div className="second-text-tecnical">
                      <div className="divisions">
                        <h4>{selectedItem.technicalData?.interiorDesign}</h4>
                      </div>
                      <div className="divisions">
                        <h4>{selectedItem.technicalData?.divisions}</h4>
                      </div>
                    </div>
                    <div className="second-text-tecnical">
                      <div className="divisions">
                        <h4>{selectedItem.technicalData?.pergolas}</h4>
                      </div>
                      {selectedItem.technicalData?.ceiling && (
                        <div className="divisions">
                          <h4>{selectedItem.technicalData.ceiling}</h4>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Accesories;