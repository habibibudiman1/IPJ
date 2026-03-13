import { Metadata } from "next";
import { ProductsGrid } from "@/components/products/products-grid";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "productDetail" });

  return {
    title: `${t("title")} - PT Intiboga Pangan Jaya`,
    description: t("subtitle"),
  };
}

export default function ProductsPage() {
  return (
    <>
      <ProductsGrid />
    </>
  );
}
