import React, { useState } from "react";
import Image from 'next/image'
import accesoriesData from "../../../data/architecture/accesories.json";
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400&display=swap" rel="stylesheet"></link>

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
                  <p className="modal-description">{selectedItem.description}</p>
                </div>

                <div className="modal-size">
                  <h4 className="text-size">Size</h4>
                  <ul className="no-padding">
                    <li><strong>Long:</strong> {selectedItem.details?.long}</li>
                    <li><strong>Width:</strong> {selectedItem.details?.width}</li>
                    <li><strong>Depth:</strong> {selectedItem.details?.depth}</li>
                    <li><strong>Finish:</strong> {selectedItem.details?.finish}</li>
                    <li><strong>Weight:</strong> {selectedItem.details?.weight}</li>
                    <li><strong>Composition:</strong> {selectedItem.details?.composition}</li>
                  </ul>
                </div>

                <div className="composition-accessories">
                  <div className="composition">
                    <div className="modal-composition">
                      <h4 className="text-composition">Composition</h4>
                    </div>
                    <Image src={selectedItem.compositionImage} alt="Composition" className="composition-image" />
                  </div>
                  <div className="composition">
                    <div className="modal-composition">
                      <h4 className="text-composition">Accessories</h4>
                    </div>
                    <img src={selectedItem.accessoriesImage} alt="Accessories" className="composition-image" />
                  </div>
                </div>

              </div>

              {/* Sección Derecha */}
              <div className="modal-right">
                <div className="modal-image">
                  <img src={selectedItem.infoImage} alt={selectedItem.name} />
                </div>
                <div className="modal-info">
                  <h4>Additional Information</h4>
                  <p>{selectedItem.additionalInfo}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilos */}
      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: #2c2c2c;
          color: #fff;
          padding: 20px;
          border-radius: 10px;
          width: auto;
          height: 90vh;
          max-width: 90%;
          position: relative;
          text-align: left;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .modal-image img{
        width: auto;
        height: 70vh;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 24px;
          font-weight: bold;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        .modal-body {
          display: flex;
          gap: 20px;
          height: 100%;
        }

        .modal-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 50%;
        }

        .modal-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 50%;
        }

        .modal-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
          border-bottom: 0px;
        }

        .modal-number {
          background: #E31738;
          color: #23262D;
          width: 52.77px;
          height: 75px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .modal-size {
          background-color: #1F2229;
          padding: 20px;
          width: 489px;
          height: 331px;
        }

        .text-size {
          font-size: 24px;
          color: #E31738;
        }

        .modal-size ul {
          list-style: none;
          padding: 0;
        }

        .modal-size li {
          font-size: 16px;
          font-family: 'Syne', sans-serif;
          border-bottom: 1px solid #C4C6C7;
          width: 416px;
          margin-top: 10px;
        }

        .composition-accessories {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .composition {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .modal-composition {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 21px;
          border: 1px solid #FFFFFF;
          width: 10.289rem;
          height: 2.616rem;
        }

        .text-composition {
          font-size: 1rem;
        }

        .composition-image {
          width: 100%;
          max-width: 10.289rem;
          margin-top: 10px;
        }
      `}</style>
    </section>
  );
};

export default Accesories;
