/* eslint-disable @next/next/no-css-tags */
import { useEffect } from "react";
import Head from "next/head";
//= Layout
import AppLayout from "../layouts/app-layout";
//= Components
import Header from "../components/Architecture/Header";
import Hero from "../components/Architecture/Hero";
import Products from "../components/Architecture/Products";
import Colors from "../components/Architecture/Colors";
import Accesories from "../components/Architecture/Accesories";
import Baseboards from "../components/Architecture/Baseboards";
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
      name: "About our product",
      href: "#0",
    },
    {
      name: "Products",
      href: "#0",
    },
    {
      name: "Contact",
      href: "#0",
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
          <Products />
          <Colors />
          <Accesories />
          <Baseboards />
          <Highlight />
          <Contact />
          <Footer />
        </main>
      </AppLayout>
    </>
  );
};

export default HomeArchitecture;
