import CommonSwiper from "@/components/common/MainSwiper";
import Hero from "@/components/common/Hero";
import Products from "@/components/common/Products";
import SwiperColors from "@/components/common/SwiperColors";
import WallpanelClassification from "@/components/wallpanel/WallpanelClassification";

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
