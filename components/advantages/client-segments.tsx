"use client";

import { motion } from "framer-motion";
import { Factory, Croissant, Cookie, Hotel, PackageOpen } from "lucide-react";
import { useTranslations } from "next-intl";

export function ClientSegments() {
  const t = useTranslations("clientSegments");

  const segments = [
    {
      icon: Factory,
      nameKey: "item1",
    },
    {
      icon: Croissant,
      nameKey: "item2",
    },
    {
      icon: Cookie,
      nameKey: "item3",
    },
    {
      icon: Hotel,
      nameKey: "item4",
    },
    {
      icon: PackageOpen,
      nameKey: "item5",
    },
  ];

  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center rounded-lg border bg-card p-6 text-center transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <segment.icon size={32} className="text-primary" />
              </div>
              <p className="text-sm font-medium">{t(segment.nameKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
