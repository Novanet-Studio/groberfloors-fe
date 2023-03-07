/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Highlight = () => {
  return (
    <section className="contact sub-bg section-padding mt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="cont">
              <h6 className="sub-title fw-200 red-grober-color mb-30">
                You may be interested in
              </h6>
              <h2>Visit our kitchen hardware partner</h2>
            </div>
          </div>
          <div className="col-lg-3 valign">
            <div className="d-flex justify-content-end full-width">
              <a href="https://eurogrober.com/" target="_blank" className="butn-dots mt-40">
                <span>Go to Eurogrober site</span>
                <span className="bord-round"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
