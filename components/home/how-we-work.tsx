"use client";

import { motion } from "framer-motion";
import { Search, Cog, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Ingredient Sourcing",
    description: "Strict raw material selection with rigorous quality standards",
  },
  {
    number: "02",
    icon: Cog,
    title: "Controlled Processing",
    description: "Hygiene & sanitation SOP throughout production",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Quality Control & Delivery",
    description: "Reliable delivery to clients with consistent quality assurance",
  },
];

export function HowWeWork() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">How We Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our commitment to quality from source to delivery
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-secondary p-4 shadow-lg">
                  <step.icon size={32} className="text-white" />
                </div>
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-6xl font-bold text-secondary/10">
                {step.number}
              </div>
              <h3 className="relative z-10 mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
