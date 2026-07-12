"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { FileText, Download } from "lucide-react";
import { useTranslations } from "next-intl";

export function TechSpecsSection() {
  const { ref, isVisible } = useScrollReveal();
  const t = useTranslations("techSpecs");

  const headers = [
    t("headers.parameter"),
    t("headers.potatoFlakes"),
    t("headers.glucoseSyrup"),
    t("headers.margarine"),
  ];

  const rows = [
    {
      parameter: t("rows.moisture"),
      potato: t("rows.moisturePotato"),
      glucose: t("rows.moistureGlucose"),
      margarine: t("rows.moistureMargarine"),
    },
    {
      parameter: t("rows.packaging"),
      potato: t("rows.packagingPotato"),
      glucose: t("rows.packagingGlucose"),
      margarine: t("rows.packagingMargarine"),
    },
    {
      parameter: t("rows.moq"),
      potato: t("rows.moqPotato"),
      glucose: t("rows.moqGlucose"),
      margarine: t("rows.moqMargarine"),
    },
    {
      parameter: t("rows.shelfLife"),
      potato: t("rows.shelfLifePotato"),
      glucose: t("rows.shelfLifeGlucose"),
      margarine: t("rows.shelfLifeMargarine"),
    },
  ];

  const handleRequestCoa = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const event = new CustomEvent("prepopulate-contact-message", {
      detail: { message: t("coaRequestMessage") }
    });
    window.dispatchEvent(event);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="specifications" className="relative py-24 lg:py-36 bg-white overflow-hidden" ref={ref}>
      {/* Decorative vertical background line */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-brand-green/5 pointer-events-none hidden lg:block" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          
          {/* Section label */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-brand-saffron" />
            <span className="text-brand-stone text-xs font-semibold tracking-[0.25em] uppercase font-body">
              Parameters
            </span>
          </div>

          {/* Heading */}
          <div className="mb-16">
            <h2
              className="font-display text-brand-green leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Technical <span className="italic text-brand-saffron">Specifications</span>
            </h2>
            <p className="text-brand-stone font-body text-base max-w-xl">
              {t("subtitle")}
            </p>
          </div>

          {/* Table Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full overflow-hidden border border-brand-green/10 shadow-xl shadow-brand-green/2 rounded-[32px] bg-white mb-12"
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-brand-green/10">
                    {headers.map((header, idx) => (
                      <th
                        key={idx}
                        className={`p-6 text-sm font-bold tracking-wider font-body text-brand-green bg-brand-green/5 ${
                          idx === 0 ? "min-w-[200px]" : "min-w-[150px]"
                        }`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-green/5">
                  {rows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-brand-cream/15 transition-colors duration-200"
                    >
                      <td className="p-6 text-sm font-bold text-brand-green font-body bg-brand-cream/2">
                        {row.parameter}
                      </td>
                      <td className="p-6 text-sm font-medium text-brand-stone font-body">
                        {row.potato}
                      </td>
                      <td className="p-6 text-sm font-medium text-brand-stone font-body">
                        {row.glucose}
                      </td>
                      <td className="p-6 text-sm font-medium text-brand-stone font-body">
                        {row.margarine}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-5"
          >
            <button
              onClick={handleRequestCoa}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-green text-white hover:bg-brand-saffron hover:shadow-lg hover:shadow-brand-saffron/20 transition-all duration-300 font-body text-sm font-bold rounded-full shadow-lg cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              {t("requestCoa")}
            </button>
            <a
              href="/technical-specifications.pdf"
              download="IPJ_Technical_Specifications.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-brand-green/15 text-brand-green hover:border-brand-saffron hover:bg-brand-saffron/5 hover:text-brand-saffron transition-all duration-300 font-body text-sm font-bold rounded-full cursor-pointer"
            >
              <Download className="w-4 h-4 text-brand-saffron" />
              {t("downloadSpec")}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
