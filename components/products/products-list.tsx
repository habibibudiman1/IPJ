"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export function ProductsList() {
  const t = useTranslations("productDetail");

  const products = [
    {
      title: t("potatoFlakes.title"),
      description: t("potatoFlakes.description"),
      features: t.raw("potatoFlakes.features") as string[],
      gradient: "from-amber-100 via-yellow-50 to-orange-50",
      accentColor: "text-amber-600",
      borderColor: "border-amber-200",
    },
    {
      title: t("glucoseSyrup.title"),
      description: t("glucoseSyrup.description"),
      features: t.raw("glucoseSyrup.features") as string[],
      gradient: "from-yellow-100 via-amber-50 to-yellow-50",
      accentColor: "text-yellow-600",
      borderColor: "border-yellow-200",
    },
    {
      title: t("margarineCream.title"),
      description: t("margarineCream.description"),
      features: t.raw("margarineCream.features") as string[],
      gradient: "from-orange-100 via-amber-50 to-yellow-50",
      accentColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {t("title")}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card
                className={`overflow-hidden border-2 ${product.borderColor} hover:shadow-2xl transition-all duration-300`}
              >
                <div className={`bg-gradient-to-r ${product.gradient} p-1`}>
                  <div className="bg-background rounded-t-lg">
                    <CardHeader className="pb-6 pt-8">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                            {product.title}
                          </CardTitle>
                          <CardDescription className="text-lg leading-relaxed">
                            {product.description}
                          </CardDescription>
                        </div>
                        <div
                          className={`hidden md:block w-16 h-16 rounded-full bg-gradient-to-br ${product.gradient.replace("from-", "from-").replace("via-", "via-").replace("to-", "to-")} opacity-20`}
                        />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4
                        className={`text-lg font-semibold mb-6 ${product.accentColor} flex items-center gap-2`}
                      >
                        <Sparkles className="w-5 h-5" />
                        {t("keyFeatures")}
                      </h4>
                      <div className="grid gap-4 md:grid-cols-2">
                        {product.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="flex items-start gap-3 group"
                          >
                            <div
                              className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors`}
                            >
                              <Check
                                size={16}
                                className="text-primary font-bold"
                                strokeWidth={3}
                              />
                            </div>
                            <span className="text-base leading-relaxed group-hover:text-foreground transition-colors">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
