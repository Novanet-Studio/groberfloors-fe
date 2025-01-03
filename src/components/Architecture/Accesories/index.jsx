import React, { useState } from "react";
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

            {/* Encabezado */}
            <div className="modal-header">
              <h5 className="modal-number">{selectedItem.number || "01"}</h5>
              <h2>{selectedItem.name}</h2>
            </div>

            <p className="modal-description">{selectedItem.description}</p>

            {/* Cuerpo del Modal */}
            <div className="modal-body">
              {/* Sección Izquierda */}
              <div className="modal-size">
                <h4>Size</h4>
                <ul>
                  <li><strong>Long:</strong> {selectedItem.size?.long}</li>
                  <li><strong>Width:</strong> {selectedItem.size?.width}</li>
                  <li><strong>Depth:</strong> {selectedItem.size?.depth}</li>
                  <li><strong>Finish:</strong> {selectedItem.size?.finish}</li>
                  <li>
                    <strong>Composition:</strong>{" "}
                    {selectedItem.size?.composition}
                  </li>
                </ul>
              </div>

              {/* Sección Central */}
              <div className="modal-diagram">
                <img
                  src={selectedItem.diagram}
                  alt="Technical Diagram"
                  className="diagram-image"
                />
              </div>

              {/* Sección Derecha */}
              <div className="modal-technical">
                <h4>Technical Data</h4>
                <ul>
                  {selectedItem.technicalData?.map((data, idx) => (
                    <li key={idx}>{data}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tabs Inferiores */}
            <div className="modal-tabs">
              <button className="tab-button">Composition</button>
              <button className="tab-button">Accessories</button>
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
          width: 90%;
          max-width: 800px;
          position: relative;
          text-align: left;
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

        .modal-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .modal-number {
          background: #ff0000;
          color: #fff;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 15px;
        }

        .modal-description {
          margin-bottom: 20px;
          font-size: 16px;
          line-height: 1.7;
          color: #c0c0c0;
        }

        .modal-body {
          display: flex;
          gap: 20px;
        }

        .modal-size,
        .modal-technical {
          flex: 1;
        }

        .modal-diagram {
          flex: 1.5;
          text-align: center;
        }

        .diagram-image {
          max-width: 100%;
          border-radius: 5px;
        }

        .modal-tabs {
          margin-top: 20px;
          text-align: center;
        }

        .tab-button {
          background: #ff0000;
          color: #fff;
          border: none;
          padding: 10px 20px;
          margin: 0 5px;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default Accesories;



