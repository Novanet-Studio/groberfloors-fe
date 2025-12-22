"use client";

import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  hideTop?: boolean;
}

const Footer = ({ hideTop }: FooterProps) => {
  return (
    <footer className="w-full bg-base-alt">
      <div
        className={`container mx-auto px-4 ${
          hideTop ? "" : "pt-24"
        } border-t border-base-light/20`}
      >
        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
          <div className="shrink-0">
            <Link href="/">
              <span className="block cursor-pointer">
                <Image
                  src="/brand/logos/groberfloor-logo-light.svg"
                  alt="Grober Floors"
                  className="h-12 w-auto"
                  width={80}
                  height={80}
                />
              </span>
            </Link>
          </div>
          <div className="text-center  text-gray-400 md:text-right flex flex-col sm:flex-row items-center gap-2">
            <p className="text-xl flex items-center gap-2">
              © {new Date().getFullYear()} All rights reserved
            </p>

            <p className="text-md flex items-center gap-2">
              <span className="hidden sm:block">-</span> Published by
              <a href="https://novanet.studio" rel="noreferrer" target="_blank">
                <Image
                  src="/novanet-logo.svg"
                  alt="Novanet Studio"
                  className="h-4 sm:h-6 w-auto"
                  width={80}
                  height={80}
                />
                <span className="sr-only">Novanet Studio</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
