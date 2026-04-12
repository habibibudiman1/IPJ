"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const [content, setContent] = useState({
    headline: "Integrated Supply Service",
    subheadline: "Committed to supporting your business with high-quality food ingredients",
    ctaText: "Explore Our Products",
  });
  const [bgImage, setBgImage] = useState("/images/hero-bg.png");

  useEffect(() => {
    const savedContent = localStorage.getItem("ipj_hero");
    if (savedContent) {
      const data = JSON.parse(savedContent);
      setContent({
        headline: data.headline || "Integrated Supply Service",
        subheadline: data.subheadline || "Committed to supporting your business with high-quality food ingredients",
        ctaText: data.ctaText || "Explore Our Products",
      });
    }
    const savedImage = localStorage.getItem("ipj_hero_image");
    if (savedImage) setBgImage(savedImage);
  }, []);

  const handleScrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const words = content.headline.split(" ");

  return (
    <section id="home" className="relative min-h-screen flex items-stretch overflow-hidden bg-brand-green-dark">

      {/* ─── Background image (right 55%) ─── */}
      <div className="absolute inset-y-0 right-0 w-[55%] overflow-hidden">
        <Image
          src={bgImage}
          alt="Food ingredients"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Diagonal mask on left edge */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, #1F3A0F 0%, #1F3A0F 5%, transparent 45%)`,
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-green-dark to-transparent" />
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ─── Left content panel ─── */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[55%] px-6 sm:px-10 lg:px-20 xl:px-28 py-32 lg:py-0">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-saffron/20 border border-brand-saffron/30">
            <span className="w-1.5 h-1.5 bg-brand-saffron rounded-full animate-pulse" />
            <span className="text-brand-saffron text-xs font-semibold font-body tracking-widest uppercase">
              PT. Intiboga Pangan Jaya
            </span>
          </div>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-brand-saffron/40 to-transparent" />
        </motion.div>

        {/* Headline — oversized editorial */}
        <div className="mb-8">
          {words.map((word, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <span
                className={`block font-display leading-[0.9] tracking-tight ${
                  i === words.length - 1
                    ? "text-brand-saffron italic"
                    : "text-white"
                }`}
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
              >
                {word}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left w-24 h-px bg-brand-saffron mb-8"
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="text-base lg:text-lg text-white/60 mb-12 max-w-md font-body font-light leading-relaxed"
        >
          {content.subheadline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#products"
            onClick={handleScrollTo("products")}
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-brand-saffron text-white font-semibold text-sm rounded-full hover:bg-brand-saffron/90 transition-all duration-300 hover:shadow-xl hover:shadow-brand-saffron/25 hover:-translate-y-0.5 font-body"
          >
            {content.ctaText}
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#about"
            onClick={handleScrollTo("about")}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white/80 hover:text-white hover:border-white/40 text-sm font-semibold rounded-full transition-all duration-300 font-body"
          >
            Learn More
          </a>
        </motion.div>

        {/* Floating stats at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex gap-8 mt-16 pt-8 border-t border-white/10"
        >
          {[
            { num: "15+", label: "Years Experience" },
            { num: "500+", label: "Clients Served" },
            { num: "100+", label: "Products" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-bold text-white font-display">{stat.num}</p>
              <p className="text-[10px] text-white/40 font-body tracking-widest uppercase mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2"
      >
        <span className="text-white/30 text-[10px] font-body tracking-[0.3em] uppercase rotate-90 origin-center translate-y-4">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
