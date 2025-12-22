"use client";

import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { accesoriesData } from "../../../public/data/accesories";

type WallPanelItem = {
  name: string;
  image: string;
  number?: string;
  composition?: string;
  infoImage?: string;
  compositionImage?: string;
  accesories?: string;
  accesoriesImage?: string;
  description?: string;
  details?: {
    long: string;
    width: string;
    depth: string;
    finish: string;
    weight: string;
    composition: string;
  };
  technicalData?: {
    applications: string;
    interiorDesign: string;
    divisions: string;
    pergolas: string;
    ceiling?: string;
  };
};

const WallpanelClassification = () => {
  const [selectedItem, setSelectedItem] = useState<WallPanelItem | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const accesories = accesoriesData.wp as WallPanelItem[];

  if (!accesories) {
    return <p>No accessories available for this product type.</p>;
  }

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";

      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeModal();
      };

      window.addEventListener("keydown", handleEsc);

      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [modalIsOpen]);

  const openModal = (item: WallPanelItem) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalIsOpen(false);
  };

  return (
    <section className="py-10 md:py-24py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h3 className="section-title">Classification</h3>
        </div>

        <div className="flex w-full flex-wrap justify-around gap-y-16">
          {accesories.map((item, idx) => (
            <div
              className="flex cursor-pointer flex-col items-center group"
              key={idx}
              onClick={() => openModal(item)}
            >
              <div className="relative inline-block">
                <div
                  className="h-[240px] w-[240px] rounded-full bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>

                <div className="absolute -inset-[15px] rounded-full border border-white/5 content-[''] transition-colors duration-300 group-hover:border-accent/50"></div>
              </div>

              <div className="mt-10 text-center">
                <p className="mt-2 text-xl font-light text-lite">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalIsOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <button
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white hover:bg-accent-alt transition-colors z-50"
            onClick={closeModal}
          >
            <FaTimes />
          </button>

          <div className="modal relative h-[90dvh] w-full max-w-7xl overflow-y-auto [&::-webkit-scrollbar]:w-0.5 bg-base-alt2 p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className=" bg-accent px-0.5 py-2 text-4xl font-bold! text-base-alt2">
                      {selectedItem.number || "01"}
                    </span>
                    <h2 className="text-4xl font-bold text-white">
                      {selectedItem.name}
                    </h2>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-accent mb-4 uppercase tracking-wider">
                    Size
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>
                      <strong className="text-white uppercase mr-1">
                        Long:
                      </strong>{" "}
                      {selectedItem.details?.long}
                    </li>
                    <li className="border-t border-white/10 pt-2">
                      <strong className="text-white uppercase mr-1">
                        Width:
                      </strong>{" "}
                      {selectedItem.details?.width}
                    </li>
                    <li className="border-t border-white/10 pt-2">
                      <strong className="text-white uppercase mr-1">
                        Depth:
                      </strong>{" "}
                      {selectedItem.details?.depth}
                    </li>
                    <li className="border-t border-white/10 pt-2">
                      <strong className="text-white uppercase mr-1">
                        Finish:
                      </strong>{" "}
                      {selectedItem.details?.finish}
                    </li>
                    <li className="border-t border-white/10 pt-2">
                      <strong className="text-white uppercase mr-1">
                        Weight:
                      </strong>{" "}
                      {selectedItem.details?.weight}
                    </li>
                    <li className="border-t border-white/10 pt-2">
                      <strong className="text-white uppercase mr-1">
                        Composition:
                      </strong>{" "}
                      {selectedItem.details?.composition}
                    </li>
                  </ul>
                </div>

                <div className="flex gap-6">
                  {selectedItem.composition && (
                    <div>
                      <h4 className="text-white font-bold mb-2">Composition</h4>
                      {selectedItem.compositionImage && (
                        <div className="bg-white p-2 w-[120px] rounded-lg h-[120px] flex items-center justify-center">
                          <img
                            src={selectedItem.compositionImage}
                            alt="composition"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                  )}
                  {selectedItem.accesories && (
                    <div>
                      <h4 className="text-white font-bold mb-2">Accesories</h4>
                      {selectedItem.accesoriesImage && (
                        <div className="bg-white p-2 w-[120px] rounded-lg h-[120px] flex items-center justify-center">
                          <img
                            src={selectedItem.accesoriesImage}
                            alt="accesories"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-6 flex items-center justify-center border border-white/5 rounded-lg">
                {selectedItem.infoImage && (
                  <div className="relative w-full h-full min-h-[400px] max-h-[80dvh]">
                    <img
                      src={selectedItem.infoImage}
                      alt={selectedItem.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>

              <div className="lg:col-span-3">
                <div className="bg-base-alt p-6 rounded-lg h-full">
                  <h4 className="text-xl font-bold text-accent mb-6">
                    Technical data
                  </h4>
                  <div className="flex flex-col gap-4">
                    {selectedItem.technicalData?.applications && (
                      <div className="border border-white/20 rounded-full px-4 py-2 text-center text-sm text-white uppercase hover:border-accent transition-colors">
                        {selectedItem.technicalData.applications}
                      </div>
                    )}
                    <div className="flex gap-4">
                      {selectedItem.technicalData?.interiorDesign && (
                        <div className="flex-1 border border-white/20 rounded-full px-4 py-2 text-center text-sm text-white uppercase hover:border-accent transition-colors">
                          {selectedItem.technicalData.interiorDesign}
                        </div>
                      )}
                      {selectedItem.technicalData?.divisions && (
                        <div className="flex-1 border border-white/20 rounded-full px-4 py-2 text-center text-sm text-white uppercase hover:border-accent transition-colors">
                          {selectedItem.technicalData.divisions}
                        </div>
                      )}
                    </div>

                    {selectedItem.technicalData?.pergolas && (
                      <div className="w-1/2 border border-white/20 rounded-full px-4 py-2 text-center text-sm text-white uppercase hover:border-accent transition-colors">
                        {selectedItem.technicalData.pergolas}
                      </div>
                    )}
                    {selectedItem.technicalData?.ceiling && (
                      <div className="w-1/2 border border-white/20 rounded-full px-4 py-2 text-center text-sm text-white uppercase hover:border-accent transition-colors">
                        {selectedItem.technicalData.ceiling}
                      </div>
                    )}
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

export default WallpanelClassification;
