/* eslint-disable @next/next/no-css-tags */
import { useEffect } from "react";
import Head from "next/head";
//= Layout
import AppLayout from "../layouts/app-layout";
//= Components
import Header from "../components/Architecture/Header";
import Hero from "../components/Architecture/Hero";
import Portfolio from "../components/Architecture/Portfolio";
import Highlight from "../components/Architecture/Highlight";
import Contact from "../components/Architecture/Contact";
import Footer from "../components/Footers/ArchitectureFooter";

const HomeArchitecture = () => {
  useEffect(() => {
    document.body.classList.add("index-arch");
  }, []);

  const nav_links = [
    {
      name: "Home",
      href: "#0",
    },
    {
      name: "About us",
      href: "#0",
    },
    {
      name: "Products",
      href: "#0",
    },
    {
      name: "Contact",
      href: "/contact-arch",
    },
  ];

  return (
    <>
      <Head>
        <title>GroberFloors</title>
      </Head>

      <AppLayout type="architecture" links={nav_links}>
        <Header />
        <main className="position-re">
          <div
            className="bg-pattern bg-img"
            style={{ backgroundImage: "url('arch/img/pattern-bg.svg')" }}
          ></div>
          <Hero />
          <Portfolio />
          <Highlight />
          <Contact />
          <Footer />
        </main>
      </AppLayout>
    </>
  );
};

export default HomeArchitecture;
