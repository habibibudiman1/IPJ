"use client";

import { Building2 } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const defaultPartners = [
  { name: "PT. Sarana Pangan Nusantara", category: "Snack Manufacturer" },
  { name: "PT. Roti & Bakery Indonesia", category: "Industrial Bakery" },
  { name: "PT. Food & Beverage Industri", category: "Confectionery" },
  { name: "PT. Sumber Pangan Jaya", category: "Food Processing" },
];

export function ClientsPartners() {
  const { ref, isVisible } = useScrollReveal();
  const t = useTranslations("clients");
  const partners = defaultPartners;

  return (
    <section className="py-24 lg:py-28 bg-white rounded-t-[48px] lg:rounded-t-[80px] mt-[-48px] lg:mt-[-80px] relative z-20 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-xs font-semibold rounded-full mb-4 font-body tracking-wider uppercase">
              {t("title")}
            </span>
            <p className="text-brand-stone font-body max-w-xl mx-auto text-base">
              {t("subtitle")}
            </p>
          </div>

          {/* ─── Infinite Autoplay Marquee Slider (Smooth Loop to Left) ─── */}
          <div 
            className={`relative w-full overflow-hidden py-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Soft gradient fading masks on the left and right edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white via-white/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white via-white/50 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track: Tripled array for seamless infinite looping */}
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-33.3333%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...partners, ...partners, ...partners].map((partner, i) => (
                <div
                  key={i}
                  className="w-[280px] shrink-0 group flex flex-col items-center justify-center p-6 bg-white hover:bg-brand-green hover:text-white border border-brand-green/5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-cream/80 text-brand-green flex items-center justify-center mb-4 transition-colors group-hover:bg-white/10 group-hover:text-white shadow-inner">
                    <Building2 className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  
                  <span className="text-sm font-bold text-brand-green text-center font-body group-hover:text-white transition-colors block w-full truncate px-2">
                    {partner.name}
                  </span>
                  
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-stone text-center font-body group-hover:text-white/60 transition-colors mt-2">
                    {partner.category}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
