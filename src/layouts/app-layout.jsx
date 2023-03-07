/* eslint-disable @next/next/no-css-tags */
import { useEffect, useRef } from "react";
import Head from "next/head";

//= Components
import Navbar from "../components/Navbars/AppNavbar";

const AppLayout = ({ children, links, type, navTheme }) => {
  const navbarRef = useRef(null);

  useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
      else navbar.classList.remove("nav-scroll");
    });
  }, [navbarRef]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/arch/css/arch-style.css" />
      </Head>

      {["freelancer", "restaurant", "architecture"].includes(type) ? (
        <>
          {/* Navbar */}
          <Navbar
            navbarRef={navbarRef}
            logoTheme={navTheme}
            theme={navTheme ? navTheme : "light"}
            links={links}
            container={type}
          />

          {/* Page Components */}
          {children}
        </>
      ) : (
        <>
          <main>
            {/* Navbar */}
            <Navbar
              navbarRef={navbarRef}
              logoTheme={navTheme}
              theme={navTheme ? navTheme : "light"}
              links={links}
              container={type}
            />

            {/* Page Components */}
            {children}
          </main>
        </>
      )}
    </>
  );
};

export default AppLayout;
