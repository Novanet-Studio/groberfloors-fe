import CommonSwiper from "@/components/common/MainSwiper";
import ProductsPreview from "@/components/home/ProductsPreview";
import Highlight from "@/components/home/Highlight";
import { constructMetadata } from "@/hooks/useMetadata";
import { metadata as staticMeta } from "./assets/data/metadata";

export const metadata = constructMetadata(staticMeta.home);

export default function HomePage() {
  return (
    <>
      <CommonSwiper productType="main" />

      <ProductsPreview />

      <Highlight />
    </>
  );
}
