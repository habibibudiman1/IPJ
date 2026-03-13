"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();

  const navItems = [
    { name: t("home"), href: `/${locale}` },
    { name: t("about"), href: `/${locale}/about` },
    { name: t("products"), href: `/${locale}/products` },
    { name: t("advantages"), href: `/${locale}/advantages` },
    { name: t("contact"), href: `/${locale}/contact` },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-dark-section shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">IPJ</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-bold text-white leading-none block">
                PT INTIBOGA
              </span>
              <span className="text-xs font-semibold text-primary leading-none block">
                PANGAN JAYA
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:text-primary rounded-md"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <LanguageSwitcher />
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5 rounded-md"
          >
            <Link href={`/${locale}/contact`}>
              {t("quote") ?? "REQUEST QUOTE"}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-3 text-sm font-medium text-gray-200 hover:text-primary hover:bg-white/5 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <LanguageSwitcher />
                <Button
                  asChild
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold flex-1"
                >
                  <Link
                    href={`/${locale}/contact`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("getQuote") ?? "REQUEST QUOTE"}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
