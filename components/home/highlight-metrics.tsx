"use client";

import { motion } from "framer-motion";
import { Award, Users, Package, Factory } from "lucide-react";
import { useTranslations } from "next-intl";

export function HighlightMetrics() {
  const t = useTranslations("metrics");

  const metrics = [
    {
      icon: Award,
      number: "15+",
      label: "YEARS EXPERIENCE",
    },
    {
      icon: Users,
      number: "500+",
      label: "GLOBAL CLIENTS",
    },
    {
      icon: Package,
      number: "100+",
      label: "PREMIUM PRODUCTS",
    },
    {
      icon: Factory,
      number: "20+",
      label: "INDUSTRIES SERVED",
    },
  ];

  return (
    <section className="relative -mt-16 z-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="bg-dark-section rounded-xl shadow-2xl overflow-hidden border-t-4 border-primary">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center py-8 px-4 hover:bg-white/5 transition-colors"
              >
                <div className="mb-3">
                  <metric.icon size={28} className="text-primary" />
                </div>
                <span className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                  {metric.number}
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-400 tracking-wider uppercase">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
