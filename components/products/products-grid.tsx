"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Wheat, Droplets, Cookie, X, Check } from "lucide-react";
import { useTranslations } from "next-intl";

interface ProductModalProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
}

function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const tGrid = useTranslations("productGrid");

  if (!isOpen) return null;

  const Icon = product.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header with Gradient */}
              <div
                className={`relative bg-gradient-to-br ${product.gradient} p-8`}
              >
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>

                <div className="flex items-center gap-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <Icon
                      className="w-16 h-16 text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                      {product.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-3 flex items-center gap-2">
                    <div className="w-1 h-6 bg-secondary rounded-full" />
                    {tGrid("description")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-secondary rounded-full" />
                    {tGrid("keyFeatures")}
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {product.features.map((feature: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Check
                            size={14}
                            className="text-primary font-bold"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-secondary rounded-full" />
                    {tGrid("mainIngredients")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map(
                      (ingredient: string, i: number) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary/10 transition-colors"
                        >
                          {ingredient}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-secondary rounded-full" />
                    {tGrid("applications")}
                  </h3>
                  <div className="grid gap-2 md:grid-cols-2">
                    {product.applications
                      .slice(0, 4)
                      .map((app: string, i: number) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">
                            {app}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export function ProductsGrid() {
  const t = useTranslations("productDetail");
  const tGrid = useTranslations("productGrid");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      title: t("potatoFlakes.title"),
      description: t("potatoFlakes.description"),
      features: t.raw("potatoFlakes.features") as string[],
      applications: t.raw("potatoFlakes.applications") as string[],
      ingredients: [
        "100% Selected Potatoes",
        "Natural Emulsifiers",
        "Antioxidants",
      ],
      icon: Wheat,
      gradient: "from-amber-400 via-yellow-500 to-orange-500",
    },
    {
      title: t("glucoseSyrup.title"),
      description: t("glucoseSyrup.description"),
      features: t.raw("glucoseSyrup.features") as string[],
      applications: t.raw("glucoseSyrup.applications") as string[],
      ingredients: [
        "Corn Starch (DE 45.9)",
        "Purified Water",
        "Food Grade Enzymes",
      ],
      icon: Droplets,
      gradient: "from-yellow-300 via-amber-400 to-yellow-500",
    },
    {
      title: t("margarineCream.title"),
      description: t("margarineCream.description"),
      features: t.raw("margarineCream.features") as string[],
      applications: t.raw("margarineCream.applications") as string[],
      ingredients: [
        "Refined Vegetable Oils",
        "Emulsifiers",
        "Salt",
        "Natural Butter Flavor",
        "Vitamins A & D",
      ],
      icon: Cookie,
      gradient: "from-orange-300 via-amber-300 to-yellow-400",
    },
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
              {t("title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    onClick={() => setSelectedProduct(product)}
                    className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl cursor-pointer group h-full"
                  >
                    {/* Product Image/Gradient Box */}
                    <div
                      className={`relative h-64 bg-gradient-to-br ${product.gradient} p-8 flex items-center justify-center`}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
                      >
                        <Icon
                          className="w-24 h-24 text-primary"
                          strokeWidth={1.5}
                        />
                      </motion.div>
                    </div>

                    {/* Product Name */}
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-center group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-center text-sm text-muted-foreground mt-2">
                        {tGrid("clickToSee")}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
