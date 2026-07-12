"use client";

import { Leaf, Award, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();
  const t = useTranslations("workProcess");

  const steps = [
    {
      icon: Leaf,
      title: t("steps.step1.title"),
      desc: t("steps.step1.desc"),
    },
    {
      icon: Award,
      title: t("steps.step2.title"),
      desc: t("steps.step2.desc"),
    },
    {
      icon: Compass,
      title: t("steps.step3.title"),
      desc: t("steps.step3.desc"),
    },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-brand-green-dark text-white overflow-hidden" ref={ref}>
      {/* Decorative large step number in background */}
      <div
        className="absolute bottom-1/2 translate-y-1/2 left-0 select-none pointer-events-none hidden lg:block"
        aria-hidden
      >
        <span
          className="font-display font-bold text-white/2 leading-none"
          style={{ fontSize: "clamp(15rem, 25vw, 22rem)" }}
        >
          SOP
        </span>
      </div>

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-saffron/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          
          {/* Section label */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-brand-saffron" />
            <span className="text-white/40 text-xs font-semibold tracking-[0.25em] uppercase font-body">
              How We Operate
            </span>
          </div>

          {/* Heading */}
          <div className="grid lg:grid-cols-[1.2fr_1.5fr] gap-12 items-start mb-20">
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Our Operational <span className="italic text-brand-saffron">Workflow</span>
            </h2>
            <p className="text-white/50 font-body text-base leading-relaxed lg:mt-6">
              {t("subtitle")}
            </p>
          </div>

          {/* Flow cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative group"
              >
                {/* Connector line (desktop only) */}
                {idx < 2 && (
                  <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-0.5 bg-brand-saffron/20 hidden lg:block pointer-events-none" />
                )}

                <Card className="border border-white/5 shadow-2xl rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xs transition-all duration-300 hover:bg-white/10 hover:border-brand-saffron/30 h-full flex flex-col justify-between">
                  <CardContent className="p-8 flex flex-col justify-between h-full">
                    <div>
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-brand-saffron flex items-center justify-center mb-8 shadow-md group-hover:scale-105 transition-transform duration-300">
                        <step.icon className="w-6 h-6 text-brand-saffron" />
                      </div>
                      
                      {/* Text content */}
                      <h3 className="text-xl font-bold text-white mb-3 font-body">
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/55 font-body leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
