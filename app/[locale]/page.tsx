import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { VisionMission } from "@/components/home/vision-mission";
import { CoreValues } from "@/components/home/core-values";
import { ProductsSection } from "@/components/home/products-section";
import { ApplicationsSection } from "@/components/home/applications-section";

import { ClientsPartners } from "@/components/home/clients-partners";
import { CTASection } from "@/components/home/cta-section";
import { ContactSection } from "@/components/home/contact-section";

// New B2B components
import { CertificationsSection } from "@/components/home/certifications-section";
import { TechSpecsSection } from "@/components/home/tech-specs-section";
import { ProcessSection } from "@/components/home/process-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsPartners />
      <AboutSection />
      <VisionMission />
      <CoreValues />
      <CertificationsSection />
      <ProductsSection />
      <ApplicationsSection />
      <TechSpecsSection />

      <ProcessSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
