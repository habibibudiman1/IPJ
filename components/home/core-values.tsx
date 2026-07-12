"use client";

import Image from "next/image";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useTranslations } from "next-intl";

const defaultValues = [
  { key: "innovation", image: "/images/cv-innovation.png" },
  { key: "qualityFirst", image: "/images/cv-quality.png" },
  { key: "sustainability", image: "/images/cv-sustainability.png" },
  { key: "integrity", image: "/images/cv-integrity.png" },
  { key: "customerFocus", image: "/images/cv-customer.png" },
  { key: "teamwork", image: "/images/cv-teamwork.png" },
];

export function CoreValues() {
  const { ref, isVisible } = useScrollReveal();
  const t = useTranslations("values");
  const values = defaultValues;

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={ref}>

      {/* Subtle organic background vector accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-cream/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative">
        <div className="w-full mx-auto">

          {/* Section Header */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-xs font-semibold rounded-full mb-4 font-body tracking-wider uppercase">
              Our Foundation
            </span>
            <h2
              className="font-display text-brand-green mb-4 leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              {t("title")}
            </h2>
            <p className="text-brand-stone font-body max-w-xl mx-auto text-base leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6 justify-center">
            {values.map((value, i) => {
              return (
                <div
                  key={i}
                  className={`flex flex-col items-center text-center transition-all duration-1000 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  {/* Image container - tall vertical box to fit standing characters */}
                  <div className="relative w-full h-[240px] md:h-[280px] lg:h-[320px] mb-5 overflow-hidden bg-white flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <Image
                      src={value.image}
                      alt={t(`${value.key}.title`)}
                      fill
                      className="object-contain p-0 scale-[1.35]"
                      sizes="(max-width: 768px) 200px, (max-width: 1024px) 260px, 300px"
                      priority={i < 3}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold text-brand-green mb-2 font-display">
                    {t(`${value.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-brand-stone font-body leading-relaxed max-w-[180px] md:max-w-none">
                    {t(`${value.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
