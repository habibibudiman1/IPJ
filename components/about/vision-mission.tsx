"use client";

import { motion } from "framer-motion";
import { Target, Compass } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function VisionMission() {
  const t = useTranslations("visionMissionSection");
  const tVision = useTranslations("vision");
  const tMission = useTranslations("mission");

  const missions = tMission.raw("items") as string[];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <Card className="p-8 border-2 border-primary/30 hover:border-primary/50 transition-all hover:shadow-2xl bg-gradient-to-br from-primary/5 to-transparent">
              {/* Icon Header */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg mb-4">
                  <Target size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold">{t("visionTitle")}</h3>
              </div>

              {/* Vision Statement */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-transparent rounded-full" />
                <blockquote className="pl-6 text-lg leading-relaxed italic text-foreground">
                  &ldquo;{tVision("text")}&rdquo;
                </blockquote>
              </div>

              {/* Decorative Element */}
              <div className="mt-8 flex gap-2">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <div className="h-1 w-8 bg-secondary rounded-full" />
                <div className="h-1 w-4 bg-accent rounded-full" />
              </div>
            </Card>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-2 border-secondary/30 hover:border-secondary/50 transition-all hover:shadow-2xl">
              {/* Icon Header */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg mb-4">
                  <Compass size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold">{t("missionTitle")}</h3>
              </div>

              {/* Mission Points */}
              <div className="space-y-4">
                {missions.map((mission, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    {/* Number Badge */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>

                    {/* Mission Text */}
                    <p className="text-base leading-relaxed group-hover:text-foreground transition-colors pt-1">
                      {mission}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
