import { Metadata } from "next";
import Script from "next/script";

import "../styles/globals.css";
import Contact from "@/components/common/Contact";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { constructMetadata } from "@/hooks/useMetadata";
import { metadata as staticMeta } from "./assets/data/metadata";
import { constructJsonLd } from "@/hooks/useJsonLd";
import { jsonld } from "./assets/data/jsonld";

export const metadata: Metadata = constructMetadata(staticMeta.home);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = constructJsonLd(jsonld.organization);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased overflow-y-auto [&::-webkit-scrollbar]:w-0.5 "
        suppressHydrationWarning
      >
        <Header />

        <main>{children}</main>

        <Contact />

        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>

      <Script strategy="afterInteractive" src="/scripts/metrics.js"></Script>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-259FMWPGZF"
      ></Script>
    </html>
  );
}
