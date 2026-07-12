"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { ArrowUpRight, Mail } from "lucide-react";

export function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-0 overflow-hidden bg-brand-offwhite">
      {/* Full-bleed CTA block */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative bg-brand-green-dark overflow-hidden py-24 lg:py-40"
      >
        {/* Large decorative text in background */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-display font-bold text-white/2.5 whitespace-nowrap leading-none"
            style={{ fontSize: "clamp(8rem, 18vw, 16rem)" }}
          >
            TOGETHER
          </span>
        </div>

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-saffron/40 to-transparent" />

        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-brand-saffron/50" />
            <span className="text-brand-saffron text-xs font-bold tracking-[0.3em] uppercase font-body">
              Let&apos;s Collaborate
            </span>
            <div className="h-px w-12 bg-brand-saffron/50" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-white leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            Let&apos;s Grow{" "}
            <span className="italic text-brand-saffron">Together</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-white/50 font-body text-base lg:text-lg max-w-xl mx-auto mb-12"
          >
            Partner with us for reliable, high-quality food ingredients and a supply chain you can count on.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-saffron text-white font-bold text-base rounded-full hover:bg-brand-saffron/90 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-saffron/30 hover:-translate-y-0.5 font-body"
            >
              <Mail className="w-5 h-5" />
              Contact Us Now
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>

            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/70 hover:text-white hover:border-white/40 text-base font-semibold rounded-full transition-all duration-300 font-body"
            >
              View Products
            </a>
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </motion.div>
    </section>
  );
}
