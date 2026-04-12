"use client";

import { useState, useEffect } from "react";
import { Wrench, Globe, MapPin, ShieldCheck, Truck, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";

const defaultAdvantages = [
  {
    icon: Wrench,
    title: "Custom Solutions",
    description: "Tailored products to meet specific client requirements across all food manufacturing sectors.",
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description: "Deep understanding of the Indonesian food market with relationships built over 15+ years.",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Based in Surabaya with access to major logistics networks across the archipelago.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    description: "Strict quality assurance at every stage, from sourcing to final delivery.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description: "Consistent stock availability and on-time delivery guaranteed for every order.",
  },
];

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal();
  const [advantages, setAdvantages] = useState(defaultAdvantages);

  useEffect(() => {
    const saved = localStorage.getItem("ipj_advantages");
    if (saved) {
      const parsed = JSON.parse(saved);
      const mappedAdvs = parsed.map((adv: any, index: number) => ({
        ...adv,
        icon: defaultAdvantages[index]?.icon || Star,
      }));
      setAdvantages(mappedAdvs);
    }
  }, []);

  return (
    <section id="whyus" className="relative py-24 lg:py-36 bg-brand-green overflow-hidden">
      {/* Large decorative "03" */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 select-none pointer-events-none"
        aria-hidden
      >
        <span
          className="font-display font-bold text-white/[0.03] leading-none"
          style={{ fontSize: "clamp(18rem, 30vw, 28rem)" }}
        >
          03
        </span>
      </div>

      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-saffron/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start mb-20">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-8 h-px bg-brand-saffron" />
                <span className="text-white/40 text-xs font-semibold tracking-[0.25em] uppercase font-body">
                  Our Advantages
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-white leading-[1.05]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Why Choose{" "}
                <span className="italic text-brand-saffron">Us</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/50 font-body text-base leading-relaxed lg:mt-16"
            >
              We go beyond supplying ingredients — we deliver partnership, consistency, and excellence at every touchpoint of your supply chain.
            </motion.p>
          </div>

          {/* Numbered Manifest List */}
          <div className="space-y-0 divide-y divide-white/[0.07]">
            {advantages.map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group grid grid-cols-[80px_1fr_auto] lg:grid-cols-[120px_1fr_auto] items-center gap-6 lg:gap-12 py-8 cursor-default hover:bg-white/[0.03] -mx-4 px-4 lg:-mx-8 lg:px-8 rounded-xl transition-colors duration-300"
              >
                {/* Large number */}
                <span
                  className="font-display font-bold text-white/[0.08] group-hover:text-brand-saffron/25 transition-colors duration-500 leading-none select-none"
                  style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-display text-white mb-1.5 group-hover:text-brand-saffron/90 transition-colors duration-300">
                    {adv.title}
                  </h3>
                  <p className="text-sm lg:text-base text-white/50 font-body leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-saffron group-hover:border-brand-saffron transition-all duration-300 shrink-0">
                  <adv.icon className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-saffron/20 to-transparent" />
    </section>
  );
}
