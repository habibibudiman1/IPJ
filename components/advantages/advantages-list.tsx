"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Wrench, Globe, MapPin, Headphones } from "lucide-react";
import { useTranslations } from "next-intl";

export function AdvantagesList() {
  const t = useTranslations("advantages");

  const advantages = [
    {
      icon: Award,
      titleKey: "consistentQuality.title",
      descKey: "consistentQuality.description",
    },
    {
      icon: Wrench,
      titleKey: "customSolutions.title",
      descKey: "customSolutions.description",
    },
    {
      icon: Globe,
      titleKey: "localExpertise.title",
      descKey: "localExpertise.description",
    },
    {
      icon: MapPin,
      titleKey: "strategicLocation.title",
      descKey: "strategicLocation.description",
    },
    {
      icon: Headphones,
      titleKey: "responsiveSupport.title",
      descKey: "responsiveSupport.description",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold md:text-5xl">{t("title")}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <advantage.icon size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">
                    {t(advantage.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t(advantage.descKey)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
