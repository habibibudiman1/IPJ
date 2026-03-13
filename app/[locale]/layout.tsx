import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/request";
import "../globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

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
  verification: {
    google: "your-google-verification-code",
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
  // Await params in Next.js 15
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
