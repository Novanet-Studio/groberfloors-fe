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
import Accesories from "../components/Architecture/Accesories";
import Contact from "../components/Architecture/Contact";
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
        <Swiper Header productType="wp" />
        <main className="position-re">
          <div
            className="bg-pattern bg-img"
            style={{ backgroundImage: "url('arch/img/pattern-bg.svg')" }}
          ></div>
          <Hero  productType="wp"/>
          <Products productType="wp" />
          <Colors  productType="wp" />
          <Accesories productType="wp" />
        </main>
      </AppLayout>
      <Contact />
    </>
  );
};

export default HomeArchitecture;
