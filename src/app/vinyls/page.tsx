import CommonSwiper from "@/components/common/MainSwiper";
import Hero from "@/components/common/Hero";
import SwiperColors from "@/components/common/SwiperColors";
import VinylsAccesoriesPreview from "@/components/vinil/VinylsAccesoriesPreview";
import VinylsBaseboards from "@/components/vinil/VinylsBaseboards";
import Products from "@/components/common/Products";
import { constructMetadata } from "../assets/data/metadata";

export const metadata = constructMetadata({
  title: "Luxury Vinyl Floors (100% Waterproof)",
  description: "Explore our Luxury Vinyl flooring collection. 100% waterproof, highly durable, and designed to replicate natural hardwood or stone floors with easy Uniclic installation.",
  path: "/vinyls",
});

export default function VinylsPage() {
  return (
    <>
      <CommonSwiper productType="lvf" />

      <Hero productType="lvf" />

      <Products productType="lvf" />

      <SwiperColors productType="lvf" />

      <VinylsAccesoriesPreview />

      <VinylsBaseboards />
    </>
  );
}
