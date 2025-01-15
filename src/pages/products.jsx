// import React, { useEffect } from 'react';
// import Head from 'next/head';
// import AppLayout from '../../components/AppLayout';
// import ProductsPreview from '../../components/Products/preview';
// import Navbar from '../../data/navbar.json';
// import HomeArchitecture from '.';

// const HomeArchitecture = () => {
//     useEffect(() => {
//       document.body.classList.add("index-arch");
//     }, []);
  
// //   useEffect(() => {
// //     const element = document.getElementById('products-preview');
// //     if (element) {
// //       element.scrollIntoView({ behavior: 'smooth' });
// //     }
// //   }, []);

//   return (
//     <>
//       <Head>
//         <title>Products Preview - GroberFloors</title>
//       </Head>

//       <AppLayout type="architecture" links={Navbar}>
//         <main className="position-re">
//           <div
//             className="bg-pattern bg-img"
//             style={{ backgroundImage: "url('/arch/img/pattern-bg.svg')" }}
//           ></div>
//           <div id="products-preview">
//             <ProductsPreview />
//           </div>
//         </main>
//       </AppLayout>
//     </>
//   );
// };

// export default HomeArchitecture;


/* eslint-disable @next/next/no-css-tags */
import { useEffect } from "react";
import Head from "next/head";
//= Layout
import AppLayout from "../layouts/app-layout";
//= Components
import Swiper from "../components/Architecture/Swiper";
import ProductsPreview from "../components/Architecture/Products/productspreview";
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
        <title>Products Preview - GroberFloors</title>
      </Head>

      <AppLayout type="architecture" links={Navbar}>
        <main className="position-re">
          <div
            className="bg-pattern bg-img"
            style={{ backgroundImage: "url('/arch/img/pattern-bg.svg')" }}
          ></div>
          <div id="products-preview">
            <ProductsPreview />
          </div>
        </main>
      </AppLayout>
      <Contact />
    </>
  );
};

export default HomeArchitecture;
