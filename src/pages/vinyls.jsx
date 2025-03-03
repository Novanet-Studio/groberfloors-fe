/* eslint-disable @next/next/no-css-tags */
import { useEffect } from "react";
import Head from "next/head";
//= Layout
import AppLayout from "../layouts/app-layout";
//= Components
import Swiper from "../components/Architecture/Swiper";
import Hero from "../components/Architecture/Hero";
import Products from "../components/Architecture/Products";
import Colors from "../components/Architecture/Colors";
import Baseboards from "../components/Architecture/Baseboards";
import Contact from "../components/Architecture/Contact";
import Navbar from "../data/architecture/navbar.json";
import AccesoriesPreview from "../components/Architecture/Accesories/preview";


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
        <Swiper />
        <main className="position-re">
          <div
            className="bg-pattern bg-img"
            style={{ backgroundImage: "url('arch/img/pattern-bg.svg')" }}
          ></div>
          <Hero productType="lvf"/>
          <Products productType="lvf" />
          <Colors productType="lvf" />
          <AccesoriesPreview productType="lvf" />
          <Baseboards productType="lvf"  />
        </main>
      </AppLayout>
      <Contact />
    </>
  );
};

export default HomeArchitecture;
