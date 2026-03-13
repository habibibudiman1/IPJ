"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wheat, Droplets, Cookie } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export function ProductHighlight() {
  const t = useTranslations("products");
  const locale = useLocale();

  const products = [
    {
      title: t("potatoFlakes.title"),
      description: t("potatoFlakes.description"),
      applications: t.raw("potatoFlakes.applications") as string[],
      icon: Wheat,
      gradient: "from-secondary/80 via-secondary to-accent",
    },
    {
      title: t("glucoseSyrup.title"),
      description: t("glucoseSyrup.description"),
      applications: t.raw("glucoseSyrup.applications") as string[],
      icon: Droplets,
      gradient: "from-primary/80 via-primary to-primary/60",
    },
    {
      title: t("margarineCream.title"),
      description: t("margarineCream.description"),
      applications: t.raw("margarineCream.applications") as string[],
      icon: Cookie,
      gradient: "from-secondary via-accent to-secondary/70",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-2 border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  {/* Gradient Header with Icon */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${product.gradient} p-8 flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="relative"
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                        <Icon
                          className="w-20 h-20 text-secondary"
                          strokeWidth={1.5}
                        />
                      </div>
                    </motion.div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-center group-hover:text-secondary transition-colors">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-center text-base mt-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-secondary uppercase tracking-wide">
                        Applications:
                      </p>
                      <div className="space-y-2">
                        {product.applications.slice(0, 3).map((app, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {app}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-md font-semibold text-lg hover:bg-secondary/90 transition-all hover:gap-3 hover:shadow-xl"
          >
            {t("viewAll")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
