/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Footer = ({ hideTop }) => {
  return (
    <footer className="sub-bg">
      <div className={`container ${hideTop ? "" : "pt-100"}`}>
        <div className="sub-f">
          <div className="row">
            <div className="col-md-3">
              <div className="logo">
                <Link href="/landing-preview">
                  <a>
                    <img src="img/groberfloor-logo-light.svg" alt="" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-9">
              <div className="copyrights d-flex justify-content-end">
                <p>
                  © 2023 All rights reserved - Published by
                  <span className="underline">
                    <a
                      href="https://novanet.studio"
                      rel="noreferrer"
                      target="_blank"
                      className="blue-novanet-color ms-1"
                    >
                      Novanet Studio
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
