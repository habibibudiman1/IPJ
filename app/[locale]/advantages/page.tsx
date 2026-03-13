import { Metadata } from "next";
import { AdvantagesList } from "@/components/advantages/advantages-list";
import { ClientSegments } from "@/components/advantages/client-segments";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "advantages" });

  return {
    title: `${t("title")} - PT Intiboga Pangan Jaya`,
    description: t("subtitle"),
  };
}

export default function AdvantagesPage() {
  return (
    <>
      <AdvantagesList />
      <ClientSegments />
    </>
  );
}
