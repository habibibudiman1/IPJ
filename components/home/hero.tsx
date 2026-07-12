"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { COMPANY_CONFIG } from "@/config/company";
import { useTranslations } from "next-intl";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  const t = useTranslations();
  const bgImage = "/images/hero-bg.png";

  const handleScrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-brand-green-dark">
      
      {/* ─── Full-Bleed Background Image (Unified Layout) ─── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Premium food ingredients"
          fill
          className="object-cover object-right"
          priority
          quality={95}
        />
        {/* Soft, rich horizontal gradient overlay from left to right */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#172c0b] via-[#1b320d]/95 to-brand-green-dark/30"
        />
        {/* Bottom vignette overlay to blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-green-dark via-brand-green-dark/40 to-transparent" />
        
        {/* Fine grain texture to feel premium and organic */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ─── Content Panel ─── */}
      <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-32 lg:py-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl">
          
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-saffron/15 border border-brand-saffron/20 backdrop-blur-xs">
              <span className="w-2 h-2 bg-brand-saffron rounded-full animate-pulse" />
              <span className="text-brand-saffron text-[10px] sm:text-xs font-bold font-body tracking-[0.2em] uppercase">
                PT. Intiboga Pangan Jaya
              </span>
            </div>
          </motion.div>

          {/* Headline Typography (Editorial & High-Scale) */}
          <h1 className="mb-6 font-display leading-[1.08] tracking-tight text-white" style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)" }}>
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {t("hero.titleLine1")}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block text-brand-saffron italic"
            >
              {t("hero.titleLine2")}
            </motion.span>
          </h1>

          {/* Accent divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="origin-left w-24 h-0.5 bg-brand-saffron mb-8"
          />

          {/* Subheadline description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-white/80 text-base sm:text-lg leading-relaxed font-body font-light max-w-xl mb-12"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap items-center gap-5"
          >
            <a
              href="#products"
              onClick={handleScrollTo("products")}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-saffron text-white hover:bg-brand-saffron/95 transition-all duration-300 font-body text-sm font-bold rounded-full shadow-lg shadow-brand-saffron/20 hover:shadow-xl hover:shadow-brand-saffron/30 hover:-translate-y-0.5 cursor-pointer"
            >
              {t("hero.inquireProducts")}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              onClick={handleScrollTo("about")}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 text-white hover:border-white/50 hover:bg-white/5 text-sm font-semibold rounded-full transition-all duration-300 font-body cursor-pointer"
            >
              {t("nav.about")}
            </a>
          </motion.div>

          {/* Stats dashboard panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap gap-12 mt-16 pt-10 border-t border-white/10"
          >
            {[
              { num: `${COMPANY_CONFIG.stats.experienceYears}+`, label: t("stats.experience") },
              { num: COMPANY_CONFIG.stats.clientsServed, label: t("stats.clients") },
              { num: COMPANY_CONFIG.stats.productsAvailable, label: t("stats.products") },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight leading-none mb-2">
                  {stat.num}
                </span>
                <span className="text-[10px] sm:text-xs text-white/50 font-body font-medium tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 right-16 hidden lg:flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-white text-[10px] font-body tracking-[0.3em] uppercase [writing-mode:vertical-lr] mb-2">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 text-white" />
      </motion.div>
    </section>
  );
}
