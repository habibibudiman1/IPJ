"use client";

import { MapPin, Factory, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { COMPANY_CONFIG } from "@/config/company";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal();
  const t = useTranslations("about");
  const tStats = useTranslations("companyStats");

  const statsList = [
    { 
      icon: MapPin, 
      label: tStats("location"), 
      value: `${COMPANY_CONFIG.address.city}, ${COMPANY_CONFIG.address.province}` 
    },
    { 
      icon: Factory, 
      label: tStats("focus"), 
      value: tStats("focusValue") 
    },
    { 
      icon: Award, 
      label: tStats("reach"), 
      value: tStats("reachValue") 
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-36 bg-white overflow-hidden">

      {/* Large decorative "01" background number */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -left-8 select-none pointer-events-none"
        aria-hidden
      >
        <span
          className="font-display font-bold text-brand-green/4 leading-none"
          style={{ fontSize: "clamp(14rem, 25vw, 22rem)" }}
        >
          01
        </span>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        <div className="max-w-6xl mx-auto">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="w-8 h-px bg-brand-saffron" />
            <span className="text-brand-stone text-xs font-semibold tracking-[0.25em] uppercase font-body">
              {t("title")}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">

            {/* Left: heading + vertical accent */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="font-display text-brand-green leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Who We <span className="italic text-brand-saffron">Are</span>
              </h2>

              <p className="text-lg text-brand-green/80 font-body font-medium leading-relaxed mb-4">
                {t("description1")}
              </p>
              <p className="text-base text-brand-stone font-body leading-relaxed mb-10">
                {t("description2")} {t("qualityStatement")}
              </p>

              {/* Decorative accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isVisible ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="origin-left w-20 h-0.5 bg-brand-saffron"
              />
            </motion.div>

            {/* Right: Stats — horizontal with left border */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-0 divide-y divide-brand-green/8"
            >
              {statsList.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="group flex items-center gap-6 py-7 cursor-default"
                >
                  {/* Left accent number */}
                  <span className="text-4xl font-display font-bold text-brand-green/10 group-hover:text-brand-saffron/20 transition-colors duration-300 w-10 shrink-0 text-right leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Vertical divider */}
                  <div className="w-px h-10 bg-brand-green/15 group-hover:bg-brand-saffron transition-colors duration-300" />

                  {/* Content */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-cream flex items-center justify-center group-hover:bg-brand-saffron transition-colors duration-300">
                      <stat.icon className="w-5 h-5 text-brand-green group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-stone font-body mb-0.5">
                        {stat.label}
                      </p>
                      <p className="text-base font-semibold text-brand-green font-body">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
