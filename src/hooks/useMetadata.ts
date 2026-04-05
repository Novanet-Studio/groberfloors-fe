import type { Metadata } from "next";

export function constructMetadata(metaItem: any): Metadata {
  if (!metaItem) return {};

  return {
    title: metaItem.title,
    description: metaItem.description,
    alternates: {
      canonical: metaItem.ogUrl,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/favicon.ico",
    },
    openGraph: {
      title: metaItem.ogTitle,
      description: metaItem.ogDescription,
      url: metaItem.ogUrl,
      type: metaItem.ogType,
      images: metaItem.ogImage ? [{ url: metaItem.ogImage }] : [],
    },
    twitter: {
      card: metaItem.twitterCard as any,
      title: metaItem.ogTitle,
      description: metaItem.ogDescription,
      images: metaItem.ogImage ? [{ url: metaItem.ogImage }] : [],
    },
  };
}
