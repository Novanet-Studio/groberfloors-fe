/* eslint-disable @next/next/no-css-tags */
import { useEffect } from "react";
import Head from "next/head";
//= Layout
import AppLayout from "../layouts/app-layout";
//= Components
import Swiper from "../components/Architecture/Swiper";
import ProductsPreview from "../components/Architecture/Products/preview";
import Highlight from "../components/Architecture/Highlight";
import Contact from "../components/Architecture/Contact";
import Footer from "../components/Footers/ArchitectureFooter";
import Navbar from "../data/architecture/navbar.json";

const HomeArchitecture = () => {
  useEffect(() => {
    document.body.classList.add("index-arch");
  }, []);



  return (
    <>
      <Head>
        <title>GroberFloors</title>
      </Head>

      <AppLayout type="architecture" links={Navbar}>
        <Swiper productType="main" />
        <main className="position-re">
          <div
            className="bg-pattern bg-img"
            style={{ backgroundImage: "url('arch/img/pattern-bg.svg')" }}
          ></div>
          <ProductsPreview />
          <Highlight />
          <Contact />
     
          <Footer />
        </main>
      </AppLayout>
    </>
  );
};

export default HomeArchitecture;
