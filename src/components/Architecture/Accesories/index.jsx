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
                      <Image src={selectedItem.compositionImage} width={150} height={150} />
                    </div>
                  </div>

                  <div className="composition">
                    <div className="modal-composition">
                      <h4 className="text-composition">{selectedItem.accesories}</h4>
                    </div>
                    {selectedItem.accesoriesImage && (
                      <div className="composition-accesories-image">
                        <Image className="responsive-image" src={selectedItem.accesoriesImage} width={180} height={195} />
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
  background: #23262D;
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

.modal-description {
  font-size: 16px;
  padding-left: 27px;
}

.modal-image {
  display: flex;
  align-items: center;
}

.modal-image img {
  width: auto;
  height: 70vh;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 20px;
  font-weight: bold;
  background: red;
  border-radius: 50%;
  border: none;
  width: 30px;
  height: 30px;
  color: #fff;
  cursor: pointer;
  z-index: 1001; /* Ensure the close button is always on top */
}

.modal-body {
  display: flex;
  gap: 20px;
  height: 100%;
}

.modal-left {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 30%;
}

.modal-center {
  flex: 1;
  gap: 20px;
  width: 40%;
  display: flex;
}

.container-technical {
  height: 100%;
  padding-top: 30px;
}

.modal-right {
  width: 30%;
  padding-top: 38px;
}

.modal-info-content {
  background-color: #1F2229;
  padding: 30px;
  width: 489px;
  height: 331px;
}

.modal-header {
  display: flex;
  border-bottom: 0px;
  justify-content: left;
  gap: 15px;
}

.modal-number {
  background: #E31738;
  color: #23262D;
  font-size: 35px;
  width: 40px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-size {
  display: flex;
  justify-content: center;
}

.modal-size-content {
  background-color: #1F2229;
  padding: 20px;
  width: 445px;
  height: 275px;
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
  width: 400px;
  margin-top: 10px;
}

.composition-accesories-image {
  background-color: white;
  height: 190px;
  width: 190px;
  border-radius: 5%;
  display: flex;
  justify-content: center;
}

.composition-accessories {
  display: flex;
  justify-content: center;
  gap: 4rem;
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
  width: 10.289rem;
  height: 2.616rem;
}

.text-composition {
  font-size: 1rem;
}

.principal-division {
  width: 344px;
  height: 42px;
  border-radius: 20px;
  border: 1px solid;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.principal-text-tecnical {
  display: flex;
  justify-content: center;
}

.divisions {
  width: 165px;
  height: 42px;
  border-radius: 20px;
  border: 1px solid;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.divisions h4 {
  font-size: 16px;
}

.second-text-tecnical {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
}

.principal-text-tecnical h4 {
  font-size: 16px;
}

/* TABLET */
@media (max-width: 1024px) {

.close{
top: 30px;
right: 30px;
}

  .modal-content {
    padding: 10px;
    height: auto;
    max-height: 90vh;
    overflow-y: auto; /* Enable scrolling */
  }

  .modal-header {
   padding-left:40px;
  }
  .modal-body {
    flex-direction: column;
    padding: 50px;
    gap: 20px;
  }

  .modal-left, .modal-center, .modal-right {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;

  }

  .modal-center {
    padding-top: 80px;
  }

  .modal-description {

  font-size: 22px;
    padding-left: 43px;
    padding-right: 37px;
    }

  .modal-info-content {
    width: 60%;
    height: auto;
  }

  .modal-size-content {
    width: 90%;
  }

  .modal-size li {
    width: 100%;
  }

  .composition-accessories {
   flex-direction: flex;
   justify-content: space-between;
   padding-left: 45px;
   padding-right: 45px;
  }
  
  
  
  .text-composition  {
    font-size: 22px;
  }

  .composition-accesories-image{
  height: 250px;
  width: 300px;
  }

  .composition-accesories-image img {
    width: 300px; /* Adjust the width of the image */
    height: 300px; /* Maintain aspect ratio */
  }

  .second-text-tecnical {
    padding-left: 26px;
    padding-right: 26px;}



    /* TELEFONO */
@media (max-width: 480px) {
  .modal-content {
    padding: 20px;
    height: auto;
    max-height: 90vh;
    overflow-y: auto; /* Enable scrolling */
  }

  .modal-body {
   padding: 0px;
   gap: 0px;
  }

  .modal-header h2 {
    font-size: 20px;
  }
    .modal-header{
    padding: 0px;
    }

  .modal-description {
    font-size: 14px;
    padding-left: 4px;
    line-height: 14px;
  }

  .modal-size li {
    font-size: 12px;
  }

  .modal-size-content {
    width: 100%;
    height: 50%;
  }

  .text-size {
    font-size: 18px;
  }

  .modal-number {
    font-size: 24px;
    width: 30px;
    height: 40px;
  }

  .modal-info-content {
    width: 100%;
    height: auto;
    padding: 20px;
  }
  .composition-accesories-image {
    width: 90px;
    height: 90px;
  }

  .composition-accessories {
    flex-direction: row; /* Mantener en fila */
    gap: 0; /* Ajustar el espacio entre los elementos */
    padding: 0;
  }

  .principal-division {
    width: 250px;
    height: 30px;
  }

  .principal-division h4 {
    font-size: 12px;
  }

  .divisions {
    width: 350px;
    height: 30px;
  }

  .second-text-tecnical {
    padding: 0px;
    gap: 10px;
    padding-top: 10px;
  }

  .divisions h4 {
    font-size: 12px;
    text-align: center;
  }

  .container-technical {
    padding-top: 20px;
  }

  .composition {
    width: 40%;
}
    .text-composition {
    font-size: 12px;
    }






      `}</style>
    </section>
  );
};

export default Accesories;
