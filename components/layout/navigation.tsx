"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useTranslations } from "next-intl";

const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "products", href: "#products" },
  { key: "applications", href: "#applications" },
  { key: "whyUs", href: "#whyus" },
  { key: "contact", href: "#contact" },
];

export function Navigation() {
  const t = useTranslations("nav");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Track active section
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "bg-brand-green-dark/95 backdrop-blur-xl shadow-2xl shadow-black/20"
            : "bg-linear-to-b from-black/30 to-transparent"
        }`}
      />

      <div className="relative container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group z-10">
          <div className="relative w-10 h-10 transition-all duration-300 group-hover:scale-105">
            <Image
              src="/images/logoIPJ.png"
              alt="IPJ Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-bold text-white tracking-[0.2em] font-body leading-none">
              INTIBOGA
            </span>
            <span className="text-[10px] font-medium text-brand-saffron tracking-[0.15em] font-body leading-none mt-0.5">
              PANGAN JAYA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation — Pill style */}
        <div className="hidden lg:flex items-center">
          <div
            className={`flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500 ${
              scrolled
                ? "border-white/10 bg-white/5"
                : "border-white/20 bg-white/10 backdrop-blur-xs"
            }`}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative px-4 py-1.5 text-sm font-medium font-body transition-colors duration-200 rounded-full animate-fade-in-up"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-brand-saffron rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {t(item.key)}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Actions Desktop */}
        <div className="hidden lg:flex lg:items-center lg:gap-3 z-10">
          <LanguageSwitcher />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white text-brand-green font-semibold text-sm rounded-full hover:bg-brand-cream transition-all duration-300 hover:shadow-lg font-body focus:ring-2 focus:ring-brand-saffron focus:outline-hidden"
          >
            {t("getQuote")}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-10 text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-brand-green-dark/98 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="p-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="flex items-center gap-3 py-3 px-4 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all font-body"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-saffron/50" />
                  {t(item.key)}
                </motion.a>
              ))}
              <div className="pt-3 pb-1 border-t border-white/10 flex flex-col gap-2 px-1">
                <LanguageSwitcher />
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="block w-full text-center py-2.5 bg-brand-saffron text-white font-semibold text-sm rounded-xl hover:bg-brand-saffron/90 transition-all font-body"
                >
                  {t("getQuote")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
