import CommonSwiper from "@/components/common/MainSwiper";
import ProductsPreview from "@/components/home/ProductsPreview";
import Highlight from "@/components/home/Highlight";
import { constructMetadata } from "./assets/data/metadata";

export const metadata = constructMetadata({
  title: "Home",
  description: "Discover GroberFloors: Your source for premium 100% waterproof Luxury Vinyl flooring and sustainable, eco-friendly WPC wall panels.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <CommonSwiper productType="main" />

      <ProductsPreview />

      <Highlight />
    </>
  );
}
