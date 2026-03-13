"use client";

import { motion } from "framer-motion";
import { Award, Shield, Lightbulb, Users, Leaf, Handshake } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const valuesConfig = [
  {
    icon: Award,
    key: "qualityFirst",
    gradient: "from-yellow-400 to-orange-500",
    iconBg: "from-yellow-100 to-orange-100",
  },
  {
    icon: Shield,
    key: "integrity",
    gradient: "from-blue-400 to-cyan-500",
    iconBg: "from-blue-100 to-cyan-100",
  },
  {
    icon: Lightbulb,
    key: "innovation",
    gradient: "from-purple-400 to-pink-500",
    iconBg: "from-purple-100 to-pink-100",
  },
  {
    icon: Users,
    key: "customerFocus",
    gradient: "from-green-400 to-emerald-500",
    iconBg: "from-green-100 to-emerald-100",
  },
  {
    icon: Leaf,
    key: "sustainability",
    gradient: "from-teal-400 to-green-500",
    iconBg: "from-teal-100 to-green-100",
  },
  {
    icon: Handshake,
    key: "teamwork",
    gradient: "from-indigo-400 to-purple-500",
    iconBg: "from-indigo-100 to-purple-100",
  },
];

export function CoreValues() {
  const t = useTranslations("values");
  const tSection = useTranslations("valuesSection");

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
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
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {tSection("subtitle2")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {valuesConfig.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group overflow-hidden relative">
                  {/* Gradient Background Decoration */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity -mr-16 -mt-16`}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div
                      className={`mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${value.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}
                    >
                      <Icon
                        className={`w-8 h-8 bg-gradient-to-br ${value.gradient} bg-clip-text text-transparent`}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {t(`${value.key}.title`)}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {t(`${value.key}.description`)}
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-4 h-1 w-12 bg-gradient-to-r from-primary via-secondary to-accent rounded-full group-hover:w-full transition-all duration-500" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
