import type { Metadata } from "next";

import "../styles/globals.css";
import Contact from "@/components/common/Contact";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export const metadata: Metadata = {
  title: "GroberFloors",
  description:
    "Luxury Vinyl flooring is a type of rigid vinyl flooring that is designed to mimic the look and feel of natural materials like wood or stone. It is a popular cho",

  authors: [{ name: "GroberFloors" }],

  keywords: ["Luxury Vinyl flooring", "rigid vinyl flooring"],

  icons: {
    icon: "../public/favicon.ico",
  },

  openGraph: {
    title: "GroberFloors",
    description:
      "Luxury Vinyl flooring is a type of rigid vinyl flooring that is designed to mimic the look and feel of natural materials like wood or stone. It is a popular cho",
    url: "https://groberfloors.com/",
    siteName: "GroberFloors",
    type: "website",
    images: [
      {
        url: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GroberFloors",
    description:
      "Luxury Vinyl flooring is a type of rigid vinyl flooring that is designed to mimic the look and feel of natural materials like wood or stone. It is a popular cho",
    images: [
      {
        url: "",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <body
        className="antialiased overflow-y-auto [&::-webkit-scrollbar]:w-0.5"
        suppressHydrationWarning
      >
        <Header />

        <main>{children}</main>

        <Contact />

        <Footer />
      </body>
    </html>
  );
}
