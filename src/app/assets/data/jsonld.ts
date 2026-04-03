import commonData from "./common.json";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": commonData.siteName,
    "url": commonData.url,
    "logo": `${commonData.url}/favicon.ico`,
    "description": commonData.defaultDescription,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": commonData.contact.phone,
      "contactType": "customer service",
      "email": commonData.contact.email,
    },
    "sameAs": [
      commonData.socials.facebook,
      commonData.socials.instagram
    ]
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": commonData.siteName,
    "url": commonData.url,
    "description": commonData.defaultDescription
  };
}
