import React, { useEffect, useState } from "react";
import characteristicsData from "../../../data/architecture/characteristics.json";
import Image from "next/image";
import Link from "next/link";

const PagesProducts = () => {
  const [characteristics, setCharacteristics] = useState({});

  useEffect(() => {
    setCharacteristics(characteristicsData);
  }, []);

  const luxuryVinyl = characteristics.lvf;
  const wallPanels = characteristics.wp;

  const splitCharacteristics = (characteristics) => {
    const leftColumn = characteristics.slice(0, 5);
    const rightColumn = characteristics.slice(5, 10);
    return { leftColumn, rightColumn };
  };

  return (
    <section className="products section-padding" data-scroll-index="none">
      <div className="products-container">
        <div className="container-title">
          <div className="m-title">
            <h3 className="n-title-h3">Luxury Vinyl Floor (Waterproof)</h3>
          </div>
        </div>
        <div className="container-title">
          <div className="m-title">
            <h3 className="w-title-h3">Wall Panels</h3>
          </div>
        </div>
      </div>

      <div className="products-container">
        <div className="column">
          <div className="container-preview">
            <div className="products main-image image-wrapper">
              <Link href="/luxuryvinylflooring">
                <a className="preview">
                  {luxuryVinyl && (
                    <Image
                      className="image"
                      width="1160"
                      height="800"
                      src={`/${luxuryVinyl.image}`}
                      alt="Luxury Vinyl Floor"
                    />
                  )}
                </a>
              </Link>
            </div>
          </div>

          <div className="m-title-valign">
            <h3 className="n-title-h3">Characteristics</h3>
          </div>
          {luxuryVinyl && (
            <div className="characteristics">
              <ul className="characteristics-list">
                {splitCharacteristics(luxuryVinyl.characteristics).leftColumn
                  .map((char, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                        color: " #C4C6C7",
                      }}
                    >
                      <img
                        src={`/${char.image}`}
                        alt="Characteristic"
                        className="characteristic-img"
                      />
                      <div>{char.text}</div>
                    </li>
                  ))}
              </ul>
              <ul className="characteristics-list">
                {splitCharacteristics(luxuryVinyl.characteristics).rightColumn
                  .map((char, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                        color: " #C4C6C7",
                      }}
                    >
                      <img
                        src={`/${char.image}`}
                        alt="Characteristic"
                        className="characteristic-img"
                      />
                      <div>{char.text}</div>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
        <div className="column">
          <div className="container-preview">
            <div className="products main-image image-wrapper">
              <Link href="/wallpanels">
                <a className="preview">
                  {wallPanels && (
                    <Image
                      className="image"
                      width="1160"
                      height="800"
                      src={`/${wallPanels.image}`}
                      alt="Wall Panels"
                    />
                  )}
                </a>
              </Link>
            </div>
          </div>

          <div className="m-title-valign">
            <h3 className="n-title-h3">Characteristics</h3>
          </div>
          {wallPanels && (
            <div className="characteristics">
              <ul className="characteristics-list">
                {splitCharacteristics(wallPanels.characteristics).leftColumn
                  .map((char, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                        color: " #C4C6C7",
                      }}
                    >
                      <img
                        src={`/${char.image}`}
                        alt="Characteristic"
                        className="characteristic-img"
                      />
                      <div>{char.text}</div>
                    </li>
                  ))}
              </ul>
              <ul className="characteristics-list">
                {splitCharacteristics(wallPanels.characteristics).rightColumn
                  .map((char, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                        color: " #C4C6C7",
                      }}
                    >
                      <img
                        src={`/${char.image}`}
                        alt="Characteristic"
                        className="characteristic-img"
                      />
                      <div>{char.text}</div>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PagesProducts;

