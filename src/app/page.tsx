import CommonSwiper from "@/components/common/MainSwiper";
import ProductsPreview from "@/components/home/ProductsPreview";
import Highlight from "@/components/home/Highlight";

export default function HomePage() {
  return (
    <>
      <CommonSwiper productType="main" />

      <ProductsPreview />

      <Highlight />
    </>
  );
}
