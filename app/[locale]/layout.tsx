import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/request";
import "../globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "PT Intiboga Pangan Jaya - Integrated Supply Service for Food Ingredients",
  description: "Leading food ingredient supplier in Indonesia providing high-quality Potato Flakes, Glucose Syrup, and supporting ingredients for food, beverage, and snack manufacturers.",
  keywords: ["food ingredients", "potato flakes", "glucose syrup", "food supplier Indonesia", "B2B food ingredients", "bahan baku makanan", "supplier bahan makanan"],
  authors: [{ name: "PT Intiboga Pangan Jaya" }],
  creator: "PT Intiboga Pangan Jaya",
  publisher: "PT Intiboga Pangan Jaya",
  metadataBase: new URL("https://intiboga.com"),
  alternates: {
    canonical: "/",
    languages: {
      id: "/id",
      en: "/en",
    },
  },
  openGraph: {
    title: "PT Intiboga Pangan Jaya",
    description: "Integrated Supply Service for High-Quality Food Ingredients",
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    siteName: "PT Intiboga Pangan Jaya",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Intiboga Pangan Jaya",
    description: "Integrated Supply Service for High-Quality Food Ingredients",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
