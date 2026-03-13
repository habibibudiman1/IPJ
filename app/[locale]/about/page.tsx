import { Metadata } from "next";
import { CompanyProfile } from "@/components/about/company-profile";
import { VisionMission } from "@/components/about/vision-mission";
import { CoreValues } from "@/components/about/core-values";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: `${t("title")} - PT Intiboga Pangan Jaya`,
    description: t("description1"),
  };
}

export default function AboutPage() {
  return (
    <>
      <CompanyProfile />
      <VisionMission />
      <CoreValues />
    </>
  );
}
