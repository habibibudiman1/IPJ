"use client";

import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Sparkles,
  TrendingUp,
  Globe,
  Users2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function CompanyProfile() {
  const t = useTranslations("companyStats");
  const tAbout = useTranslations("about");

  const stats = [
    { icon: Building2, label: t("established"), value: t("establishedValue") },
    { icon: MapPin, label: t("location"), value: t("locationValue") },
    { icon: Globe, label: t("reach"), value: t("reachValue") },
    { icon: Users2, label: t("focus"), value: t("focusValue") },
  ];

  const coreProducts = ["Potato Flakes", "Glucose Syrup", "Margarine Cream"];

  const supportingProducts = [
    "Milk Powder (Whole & Skim)",
    "Maltodextrin",
    "Modified Starch",
    tAbout("supportingIngredients"),
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-primary mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              {t("tagline")}
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {t("heroTitle")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("heroSubtitle")}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-4 hover:shadow-lg transition-all border-2 hover:border-primary/50">
                      <Icon className="w-6 h-6 text-primary mb-2 mx-auto" />
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-0 opacity-20">
            <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-r from-primary to-secondary blur-3xl" />
          </div>
          <div className="absolute right-1/4 bottom-0 opacity-20">
            <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-r from-secondary to-accent blur-3xl" />
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-xl leading-relaxed">
                  <strong className="text-foreground">
                    PT Intiboga Pangan Jaya
                  </strong>{" "}
                  {t("description")}{" "}
                  <strong className="text-foreground">{t("location2")}</strong>,{" "}
                  {t("commitment")}
                </p>
              </div>
            </motion.div>

            {/* Product Categories */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Core Products */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full p-8 border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{t("coreProducts")}</h3>
                  </div>
                  <ul className="space-y-3">
                    {coreProducts.map((product, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="font-medium">{product}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              {/* Supporting Ingredients */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full p-8 border-2 border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      {t("supportingIngredients2")}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {supportingProducts.map((product, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>

            {/* Quality Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <Card className="p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-2 border-primary/20">
                <p className="text-xl text-center leading-relaxed">
                  <strong className="text-primary">
                    {t("qualityHighlight")}
                  </strong>{" "}
                  {t("qualityDescription")}{" "}
                  <strong className="text-secondary">
                    {t("premiumQuality")}
                  </strong>{" "}
                  {t("forSuccess")}
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
