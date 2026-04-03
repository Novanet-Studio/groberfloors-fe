import type { Metadata } from "next";
import commonData from "./common.json";

interface PageMetaParams {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  image?: string;
}

export function constructMetadata({
  title,
  description = commonData.defaultDescription,
  keywords = commonData.keywords,
  path = "",
  image = "",
}: PageMetaParams = {}): Metadata {
  const pageTitle = title ? `${title} | ${commonData.siteName}` : commonData.defaultTitle;
  const canonicalUrl = `${commonData.url}${path}`;

  return {
    title: pageTitle,
    description,
    keywords,
    authors: [{ name: commonData.author }],
    metadataBase: new URL(commonData.url),
    alternates: {
      canonical: canonicalUrl,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/favicon.ico",
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl,
      siteName: commonData.siteName,
      type: "website",
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: image ? [{ url: image }] : [],
    },
  };
}
