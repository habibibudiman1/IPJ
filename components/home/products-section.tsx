"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const defaultProducts = [
  {
    title: "Potato Flakes",
    image: "/images/potato-flakes.png",
    description:
      "High-quality dehydrated potato flakes, ideal for snack production, bakery fillings, and ready-to-eat food applications. Available in various specifications to meet your production needs.",
    details: [
      "Excellent texture and flavor retention",
      "Easily rehydratable",
      "Available in multiple mesh sizes",
      "Long shelf life and easy storage",
      "Consistent quality for industrial production",
    ],
    tag: "Featured",
  },
  {
    title: "Glucose Syrup",
    image: "/images/glucose-syrup.png",
    description:
      "Versatile glucose syrup suitable for confectionery, beverages, bakery, and dairy products. Provides sweetness, texture, and moisture retention.",
    details: [
      "High clarity and neutral taste",
      "Improves product texture and mouthfeel",
      "Controls crystallization and viscosity",
      "Enhances color and flavor stability",
      "Customizable DE (Dextrose Equivalent) levels",
    ],
    tag: "Premium",
  },
  {
    title: "Supporting Ingredients",
    image: "/images/supporting-ingredients.png",
    description:
      "A range of complementary food ingredients including margarine cream and specialty items to support diverse food manufacturing needs.",
    details: [
      "Premium quality margarine and shortening",
      "Specialty cream for bakery applications",
      "Consistent melting profiles",
      "Enhances volume and structure in baked goods",
      "Tailored solutions for specific recipes",
    ],
    tag: "Specialty",
  },
];

export function ProductsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [products, setProducts] = useState(defaultProducts);

  useEffect(() => {
    const saved = localStorage.getItem("ipj_products");
    if (saved) {
      const parsed = JSON.parse(saved);
      const withImages = parsed.map((prod: any, i: number) => {
        const savedImage = localStorage.getItem(`ipj_product_image_${i}`);
        return {
          ...prod,
          image: savedImage || defaultProducts[i]?.image || "/images/placeholder.png",
          details: prod.details || defaultProducts[i]?.details || [],
          tag: defaultProducts[i]?.tag || "Product",
        };
      });
      setProducts(withImages);
    }
  }, []);

  return (
    <section id="products" className="relative py-24 lg:py-36 bg-white overflow-hidden">

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cream/50 -skew-x-6 origin-top-right pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        <div className="max-w-6xl mx-auto">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-8 h-px bg-brand-saffron" />
            <span className="text-brand-stone text-xs font-semibold tracking-[0.25em] uppercase font-body">
              What We Offer
            </span>
          </motion.div>

          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-brand-green leading-[1.0]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Our{" "}
              <span className="italic text-brand-saffron">Products</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-brand-stone font-body max-w-xs text-sm leading-relaxed"
            >
              Premium food ingredients to power your production line across all industries.
            </motion.p>
          </div>

          {/* Mosaic Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1fr] gap-5">
            {products.map((product, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                      i === 0
                        ? "lg:row-span-2 min-h-[500px]"
                        : "min-h-[230px]"
                    }`}
                  >
                    {/* Image */}
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:from-black/90 transition-all duration-500" />

                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-brand-saffron/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase rounded-full font-body">
                        {product.tag}
                      </span>
                    </div>

                    {/* Arrow icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-white mb-2 leading-tight"
                        style={{ fontSize: i === 0 ? "1.75rem" : "1.25rem" }}
                      >
                        {product.title}
                      </h3>
                      <p
                        className={`text-white/70 font-body text-sm leading-relaxed transition-all duration-300 ${
                          i === 0 ? "line-clamp-3" : "line-clamp-2"
                        } group-hover:text-white/90`}
                      >
                        {product.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-brand-saffron text-sm font-semibold font-body opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span>View Details</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </DialogTrigger>

                {/* Dialog */}
                <DialogContent className="max-w-4xl overflow-hidden p-0 border-0 rounded-2xl bg-white">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="relative h-64 md:h-full min-h-[300px] w-full">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/30 md:from-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-brand-saffron text-white text-xs font-bold tracking-widest uppercase rounded-full font-body">
                          {product.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <DialogHeader className="mb-6 text-left">
                        <DialogTitle className="text-3xl font-display text-brand-green mb-3 text-left leading-tight">
                          {product.title}
                        </DialogTitle>
                        <DialogDescription className="text-base text-brand-stone font-body leading-relaxed text-left">
                          {product.description}
                        </DialogDescription>
                      </DialogHeader>

                      {product.details && product.details.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="font-body font-bold text-brand-green text-sm uppercase tracking-widest">
                            Key Features
                          </h4>
                          <ul className="space-y-2.5">
                            {product.details.map((detail: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-brand-saffron shrink-0 mt-0.5" />
                                <span className="text-sm font-body text-brand-stone">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
