import CommonSwiper from "@/components/common/MainSwiper";
import Hero from "@/components/common/Hero";
import SwiperColors from "@/components/common/SwiperColors";
import VinylsAccesoriesPreview from "@/components/vinil/VinylsAccesoriesPreview";
import VinylsBaseboards from "@/components/vinil/VinylsBaseboards";
import Products from "@/components/common/Products";

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
