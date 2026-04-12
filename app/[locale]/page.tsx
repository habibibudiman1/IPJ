import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { VisionMission } from "@/components/home/vision-mission";
import { CoreValues } from "@/components/home/core-values";
import { ProductsSection } from "@/components/home/products-section";
import { ApplicationsSection } from "@/components/home/applications-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ClientsPartners } from "@/components/home/clients-partners";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <VisionMission />
      <CoreValues />
      <ProductsSection />
      <ApplicationsSection />
      <WhyChooseUs />
      <ClientsPartners />
      <CTASection />
    </>
  );
}
