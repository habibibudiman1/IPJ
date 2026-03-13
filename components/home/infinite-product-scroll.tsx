"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wheat, Droplets, Cookie, Star, Sparkles, Package } from "lucide-react";
import { useTranslations } from "next-intl";

const allProducts = [
  {
    title: "Potato Flakes",
    description: "Premium potato flakes for versatile food applications",
    icon: Wheat,
    gradient: "from-secondary/80 via-secondary to-accent",
  },
  {
    title: "Glucose Syrup",
    description: "High-quality liquid sweetener with DE 45.9",
    icon: Droplets,
    gradient: "from-primary/80 via-primary to-primary/60",
  },
  {
    title: "Margarine Cream",
    description: "Versatile cream for bakery and pastry production",
    icon: Cookie,
    gradient: "from-secondary via-accent to-secondary/70",
  },
  {
    title: "Milk Powder",
    description: "High-quality whole and skim milk powder",
    icon: Package,
    gradient: "from-accent via-secondary to-accent/70",
  },
  {
    title: "Maltodextrin",
    description: "Premium quality maltodextrin for food applications",
    icon: Star,
    gradient: "from-primary via-primary/70 to-primary/50",
  },
  {
    title: "Modified Starch",
    description: "Specialized starch for improved texture",
    icon: Sparkles,
    gradient: "from-secondary/70 via-secondary to-accent/80",
  },
  {
    title: "Cocoa Powder",
    description: "Premium cocoa powder for chocolate products",
    icon: Cookie,
    gradient: "from-secondary/90 via-secondary/70 to-accent/60",
  },
  {
    title: "Vanilla Extract",
    description: "Natural vanilla extract for flavoring",
    icon: Sparkles,
    gradient: "from-primary/70 via-primary to-primary/80",
  },
];

const products = [...allProducts, ...allProducts];

export function InfiniteProductScroll() {
  const t = useTranslations("infiniteScroll");

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />

        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={index}
                className="flex-shrink-0 w-[280px] overflow-hidden border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl group"
              >
                <div
                  className={`relative h-36 bg-gradient-to-br ${product.gradient} p-6 flex items-center justify-center`}
                >
                  <div className="absolute inset-0 bg-black/5"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      className="w-12 h-12 text-secondary"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-center group-hover:text-secondary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-center text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 pb-4">
                  <div className="flex items-center justify-center">
                    <div className="h-1 w-12 bg-gradient-to-r from-secondary via-primary to-secondary rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="relative mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />

        <motion.div
          className="flex gap-6"
          animate={{ x: [-1920, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...products].reverse().map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={`reverse-${index}`}
                className="flex-shrink-0 w-[280px] overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
              >
                <div
                  className={`relative h-36 bg-gradient-to-br ${product.gradient} p-6 flex items-center justify-center`}
                >
                  <div className="absolute inset-0 bg-black/5"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      className="w-12 h-12 text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-center group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-center text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 pb-4">
                  <div className="flex items-center justify-center">
                    <div className="h-1 w-12 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
