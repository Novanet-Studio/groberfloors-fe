import CommonSwiper from "@/components/common/MainSwiper";
import Hero from "@/components/common/Hero";
import Products from "@/components/common/Products";
import SwiperColors from "@/components/common/SwiperColors";
import WallpanelClassification from "@/components/wallpanel/WallpanelClassification";
import { constructMetadata } from "../assets/data/metadata";

export const metadata = constructMetadata({
  title: "WPC Wall Panels (Sustainable & Eco-friendly)",
  description: "Discover our WPC (Wood Plastic Composite) Wall panels. An eco-friendly, sustainable alternative to traditional wood using recycled materials for creative interior designs.",
  path: "/wallpanel",
});

export default function WallpanelPage() {
  return (
    <>
      <CommonSwiper productType="wp" />

      <Hero productType="wp" />

      <Products productType="wp" />

      <SwiperColors productType="wp" />

      <WallpanelClassification />
    </>
  );
}
