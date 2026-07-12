"use client";

import { Award, ShieldCheck, CheckSquare, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function CertificationsSection() {
  const { ref, isVisible } = useScrollReveal();
  const t = useTranslations("certifications");

  const certList = [
    {
      icon: Award,
      title: t("halal.title"),
      desc: t("halal.desc"),
      code: t("halal.code"),
    },
    {
      icon: ShieldCheck,
      title: t("bpom.title"),
      desc: t("bpom.desc"),
      code: t("bpom.code"),
    },
    {
      icon: CheckSquare,
      title: t("haccp.title"),
      desc: t("haccp.desc"),
      code: t("haccp.code"),
    },
    {
      icon: FileCheck,
      title: t("iso.title"),
      desc: t("iso.desc"),
      code: t("iso.code"),
    },
  ];

  return (
    <section id="compliance" className="relative py-24 lg:py-36 bg-white overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-96 h-96 bg-brand-cream/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        <div className="max-w-6xl mx-auto">
          
          {/* Section label */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-brand-saffron" />
            <span className="text-brand-stone text-xs font-semibold tracking-[0.25em] uppercase font-body">
              Compliance
            </span>
          </div>

          {/* Heading */}
          <div className="mb-16">
            <h2
              className="font-display text-brand-green leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Quality & <span className="italic text-brand-saffron">Compliance</span>
            </h2>
            <p className="text-brand-stone font-body text-base max-w-xl">
              {t("subtitle")}
            </p>
          </div>

          {/* Grid of Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certList.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card className="border-0 shadow-lg shadow-brand-green/3 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full bg-white rounded-3xl overflow-hidden flex flex-col justify-between">
                  <CardContent className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-brand-cream/80 text-brand-green flex items-center justify-center mb-6 shadow-inner">
                        <cert.icon className="w-6 h-6" />
                      </div>
                      
                      {/* Text content */}
                      <h3 className="text-lg font-bold text-brand-green mb-2 font-body">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-brand-stone font-body leading-relaxed mb-4">
                        {cert.desc}
                      </p>
                    </div>

                    {/* Verification Code block */}
                    <div className="pt-4 border-t border-brand-green/5 mt-auto">
                      <span className="text-[10px] uppercase tracking-wider text-brand-stone font-bold block mb-1">
                        Reg No / Status
                      </span>
                      <span className="text-xs font-mono font-medium text-brand-green bg-brand-cream/60 px-2.5 py-1 rounded-md block text-center truncate">
                        {cert.code}
                      </span>
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
