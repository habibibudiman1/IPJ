"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  return (
    <footer className="bg-dark-section">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Home Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-primary text-sm uppercase tracking-wider">
              Home
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/products`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("products")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-bold text-primary text-sm uppercase tracking-wider">
              {t("products")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Potato Flakes</li>
              <li>Glucose Syrup</li>
              <li>Margarine Cream</li>
              <li>Milk Powder</li>
            </ul>
          </div>

          {/* Advantages */}
          <div className="space-y-4">
            <h4 className="font-bold text-primary text-sm uppercase tracking-wider">
              {tNav("advantages")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/advantages`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Quality
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-primary text-sm uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="mt-1 flex-shrink-0 text-primary"
                />
                <span className="text-gray-400">
                  PT Intiboga Pangan Jaya
                  <br />
                  JL. Raya Rancaekek – Majalaya No. 254
                  <br />
                  Bandung, Jawa Barat, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a
                  href="tel:+6281361196131"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +62 813 6119 6131
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:faridalfarizi@intiboga.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  faridalfarizi@intiboga.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-bold text-primary text-sm uppercase tracking-wider">
              Social Media
            </h4>
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PT Intiboga Pangan Jaya.{" "}
            {t("copyright")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
