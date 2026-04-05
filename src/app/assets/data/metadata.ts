import commonData from './common.json';

const DOMAIN = commonData.url.replace('https://', '');
const BASE_URL = (path: string) => `https://${DOMAIN}${path}`;

export const metadata: Record<string, any> = {
  home: {
    title: "Home",
    description: "Discover GroberFloors: Your source for premium 100% waterproof Luxury Vinyl flooring and sustainable, eco-friendly WPC wall panels.",
    ogTitle: "Home",
    ogDescription: "Discover GroberFloors: Your source for premium 100% waterproof Luxury Vinyl flooring and sustainable, eco-friendly WPC wall panels.",
    ogImage: "",
    ogUrl: BASE_URL("/"),
    ogType: "website",
    twitterCard: "summary_large_image",
  },
  vinyls: {
    title: "Luxury Vinyl Floors (100% Waterproof)",
    description: "Explore our Luxury Vinyl flooring collection. 100% waterproof, highly durable, and designed to replicate natural hardwood or stone floors with easy Uniclic installation.",
    ogTitle: "Luxury Vinyl Floors (100% Waterproof)",
    ogDescription: "Explore our Luxury Vinyl flooring collection. 100% waterproof, highly durable, and designed to replicate natural hardwood or stone floors with easy Uniclic installation.",
    ogImage: "",
    ogUrl: BASE_URL("/vinyls"),
    ogType: "website",
    twitterCard: "summary_large_image",
  },
  wallpanel: {
    title: "WPC Wall Panels (Sustainable & Eco-friendly)",
    description: "Discover our WPC (Wood Plastic Composite) Wall panels. An eco-friendly, sustainable alternative to traditional wood using recycled materials for creative interior designs.",
    ogTitle: "WPC Wall Panels (Sustainable & Eco-friendly)",
    ogDescription: "Discover our WPC (Wood Plastic Composite) Wall panels. An eco-friendly, sustainable alternative to traditional wood using recycled materials for creative interior designs.",
    ogImage: "",
    ogUrl: BASE_URL("/wallpanel"),
    ogType: "website",
    twitterCard: "summary_large_image",
  }
};

