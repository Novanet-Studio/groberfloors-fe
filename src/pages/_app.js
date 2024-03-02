/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import React from "react";
import Script from "next/script";
import Head from "next/head";
import ProgressScroll from "../components/Progress-Scroll";
import "../styles/globals.css";
import initGA from "../common/google-analytics";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    initGA("G-259FMWPGZF");
  }, []);

  return (
    <>
      <Head>
        <title>Grober Floors</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <Component {...pageProps} />
      <ProgressScroll />

      <Script
        strategy="beforeInteractive"
        src="/js/bootstrap.bundle.min.js"
      ></Script>
      <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/js/simpleParallax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/landing-preview/js/parallax.min.js"
      ></Script>
      <Script strategy="afterInteractive" src="/js/metrics.js"></Script>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-259FMWPGZF"
      ></Script>
      <Script strategy="lazyOnload" src="/js/main.js"></Script>
    </>
  );
}

export default MyApp;
