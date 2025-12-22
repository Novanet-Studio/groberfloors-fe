"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Benefits", href: "#benefits" },
    { name: "Products", href: "#products" },
    { name: "Luxury Vinyl Flooring", href: "/vinyls" },
    { name: "Wall Panels", href: "/wallpanel" },
    { name: "Contact", href: "#contact" },
  ];

  /* State for mobile menu */
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);

      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 right-0 z-50 w-full transition-all duration-300 bg-base-alt py-6 shadow-lg shadow-black/10`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="block" onClick={() => setIsOpen(false)}>
            <div className="relative h-12 w-48 transition-all duration-300">
              <Image
                src="/brand/logos/groberfloor-logo-light.svg"
                alt="Grober Floors"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <div className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-sm font-semibold text-white transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-1 text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute left-0 top-full z-40 w-full bg-base-alt px-4 py-2 shadow-xl lg:hidden">
          <ul className="flex flex-col items-center gap-6">
            <li>
              <Link
                href="/"
                className="block w-full py-2 text-lg font-medium text-lite transition-colors hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link
                  href={link.href}
                  className="block w-full py-2 text-lg font-medium text-lite transition-colors hover:text-accent"
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
