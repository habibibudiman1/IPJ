import { Hero } from "@/components/home/hero";
import { HighlightMetrics } from "@/components/home/highlight-metrics";
import { ProductHighlight } from "@/components/home/product-highlight";
import { InfiniteProductScroll } from "@/components/home/infinite-product-scroll";
import { HowWeWork } from "@/components/home/how-we-work";
import { FinalCTA } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightMetrics />
      <ProductHighlight />
      <InfiniteProductScroll />
      <HowWeWork />
      <FinalCTA />
    </>
  );
}
