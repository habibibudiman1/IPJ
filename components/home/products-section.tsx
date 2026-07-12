"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
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
    title: "Margarine Cream",
    image: "/images/supporting-ingredients.png",
    description:
      "Premium margarine cream and shortening with consistent melting profiles, perfect for industrial bakery and high-volume pastry production.",
    details: [
      "Excellent volume and structure builder",
      "Consistent melting profile",
      "Enhances baked goods aroma and taste",
      "Soft crumb texture development",
      "Ideal for laminating and dough mixing",
    ],
    tag: "Specialty",
  },
  {
    title: "Modified Starch",
    image: "/images/potato-flakes.png",
    description:
      "High-performance modified food starch acting as an excellent binder, texturizer, and stabilizer in gravies, sauces, and bakery items.",
    details: [
      "High temperature and acid stability",
      "Prevents syneresis (water separation)",
      "Enhances sauce viscosity and gloss",
      "Clean neutral flavor profile",
      "Improves shelf-life freeze-thaw stability",
    ],
    tag: "Specialty",
  },
  {
    title: "Maltodextrin",
    image: "/images/glucose-syrup.png",
    description:
      "Premium spray-drying carrier powder and bulking agent. Widely used for flavor encapsulation, powder drinks, and viscosity regulation.",
    details: [
      "Highly soluble in cold water",
      "Excellent encapsulation properties",
      "Very low sweetness index (DE 10-15)",
      "Acts as a clean energy carbohydrate source",
      "Improves mouthfeel and product body",
    ],
    tag: "Specialty",
  },
];

export function ProductsSection() {
  const { ref, isVisible } = useScrollReveal();
  const products = defaultProducts;
  
  // Separate indices for desktop & mobile to prevent layout syncing issues
  const [desktopIdx, setDesktopIdx] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);

  // Desktop slider config: shows 3 cards at once. Max translation index is products.length - 3 (5 - 3 = 2)
  const maxDesktopIdx = products.length - 3;

  const nextDesktop = () => {
    setDesktopIdx((prev) => (prev + 1) % (maxDesktopIdx + 1));
  };

  const prevDesktop = () => {
    setDesktopIdx((prev) => (prev - 1 + (maxDesktopIdx + 1)) % (maxDesktopIdx + 1));
  };

  const nextMobile = () => {
    setMobileIdx((prev) => (prev + 1) % products.length);
  };

  const prevMobile = () => {
    setMobileIdx((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="products" className="relative py-24 lg:py-36 bg-white overflow-hidden" ref={ref}>
      
      {/* Background accent shape */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-cream/40 -skew-x-12 origin-top-right pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-brand-saffron" />
            <span className="text-brand-stone text-xs font-semibold tracking-[0.25em] uppercase font-body">
              What We Offer
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <h2
              className="font-display text-brand-green leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Our <span className="italic text-brand-saffron">Products</span>
            </h2>
            <p className="text-brand-stone font-body max-w-md text-base leading-relaxed">
              Premium food ingredients to power your production line across all industries.
            </p>
          </div>

          {/* ─── Gojek-Inspired Carousel (Desktop - 3 Cards Visible) ─── */}
          <div className="hidden md:block relative px-12">
            
            {/* Left Chevron */}
            <button
              onClick={prevDesktop}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-brand-green/5 flex items-center justify-center text-brand-green hover:bg-brand-cream transition-colors cursor-pointer"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slider Viewport */}
            <div className="overflow-hidden w-full">
              <motion.div
                className="flex gap-6"
                animate={{ x: `calc(-${desktopIdx * 33.3333}% - ${desktopIdx * 8}px)` }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                {products.map((product, i) => (
                  <Dialog key={i}>
                    <DialogTrigger asChild>
                      <div className="w-[calc(33.3333%-16px)] shrink-0 relative overflow-hidden rounded-[32px] h-[480px] cursor-pointer shadow-xl shadow-brand-green/3 hover:shadow-2xl transition-all duration-300 group">
                        {/* Full-bleed background image */}
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Dark gradient overlay matching Gojek card shadow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-all duration-500" />

                        {/* Tag badge */}
                        <div className="absolute top-6 left-6">
                          <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase rounded-full font-body">
                            {product.tag}
                          </span>
                        </div>

                        {/* Content text overlaid in bottom-left */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-1/2">
                          <h3 className="font-body font-bold text-white text-xl mb-2 transition-colors duration-300 group-hover:text-brand-saffron">
                            {product.title}
                          </h3>
                          <p className="text-white/80 font-body text-xs leading-relaxed line-clamp-3">
                            {product.description}
                          </p>
                          
                          {/* Interactive hover arrow */}
                          <div className="mt-3 flex items-center gap-2 text-brand-saffron text-xs font-bold font-body opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <span>Learn More</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>

                    {/* Dialog detail modal */}
                    <DialogContent className="w-[92vw] max-w-4xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto md:overflow-hidden p-0 border-0 rounded-[24px] md:rounded-[32px] bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 h-full md:max-h-[85vh] overflow-y-auto md:overflow-hidden">
                        <div className="relative h-48 sm:h-64 md:h-[600px] w-full shrink-0">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/30 md:from-black/40 to-transparent" />
                          <div className="absolute bottom-6 left-6">
                            <span className="px-4 py-1.5 bg-brand-saffron text-white text-xs font-bold tracking-widest uppercase rounded-full font-body">
                              {product.tag}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-brand-offwhite md:overflow-y-auto md:h-[600px]">
                          <div>
                            <DialogHeader className="mb-6 text-left">
                              <DialogTitle className="text-2xl sm:text-3xl font-display text-brand-green mb-3 text-left leading-tight">
                                {product.title}
                              </DialogTitle>
                              <DialogDescription className="text-sm sm:text-base text-brand-stone font-body leading-relaxed text-left">
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

                            {/* Packaging & MOQ details */}
                            <div className="mt-6 pt-5 border-t border-brand-green/8 grid grid-cols-2 gap-4">
                              <div>
                                <span className="text-[10px] uppercase font-bold text-brand-stone tracking-wider block">Packaging</span>
                                <span className="text-sm font-semibold text-brand-green font-body">
                                  {product.title.includes("Potato") ? "25 kg Multi-ply Paper Bag" :
                                   product.title.includes("Glucose") ? "300 kg Drum / IBC Tank" :
                                   product.title.includes("Margarine") ? "15 kg / 25 kg Carton Box" :
                                   "25 kg Woven / Multi-ply Bag"}
                                </span>
                              </div>
                              <div>
                                <span className="text-[10px] uppercase font-bold text-brand-stone tracking-wider block">MOQ</span>
                                <span className="text-sm font-semibold text-brand-green font-body">
                                  {product.title.includes("Potato") ? "1 Pallet (1,000 kg)" :
                                   product.title.includes("Glucose") ? "4 Drums (1,200 kg)" :
                                   product.title.includes("Margarine") ? "50 Cases (750 kg)" :
                                   "1 Pallet (1,000 kg)"}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* B2B Call to Actions */}
                          <div className="mt-8 flex flex-wrap gap-3 pb-2">
                            <DialogClose asChild>
                              <button
                                onClick={() => {
                                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="px-5 py-2.5 bg-brand-saffron text-white hover:bg-brand-saffron/90 transition-colors font-body text-xs font-bold rounded-full shadow-md cursor-pointer flex-1 sm:flex-initial text-center justify-center"
                              >
                                Request Quote
                              </button>
                            </DialogClose>
                            <DialogClose asChild>
                              <button
                                onClick={() => {
                                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="px-5 py-2.5 border border-brand-green/15 text-brand-green hover:bg-brand-green/5 transition-colors font-body text-xs font-bold rounded-full cursor-pointer flex-1 sm:flex-initial text-center justify-center"
                              >
                                Request Sample
                              </button>
                            </DialogClose>
                            <DialogClose asChild>
                              <button
                                className="md:hidden px-5 py-2.5 bg-brand-stone/10 text-brand-stone hover:bg-brand-stone/20 transition-colors font-body text-xs font-bold rounded-full cursor-pointer w-full text-center justify-center"
                              >
                                Kembali / Tutup
                              </button>
                            </DialogClose>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </motion.div>
            </div>

            {/* Right Chevron */}
            <button
              onClick={nextDesktop}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-brand-green/5 flex items-center justify-center text-brand-green hover:bg-brand-cream transition-colors cursor-pointer"
              aria-label="Next product"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination dots (Desktop) */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxDesktopIdx + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setDesktopIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    desktopIdx === i
                      ? "bg-brand-green w-6"
                      : "bg-brand-stone/20"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ─── Gojek-Inspired Carousel (Mobile) ─── */}
          <div className="md:hidden relative px-4">
            
            {/* Left Chevron */}
            <button
              onClick={prevMobile}
              className="absolute left-[-8px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-brand-green/5 flex items-center justify-center text-brand-green active:scale-95 transition-transform"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Carousel card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative overflow-hidden rounded-[32px] h-[400px] shadow-xl bg-brand-green-dark">
                  <Image
                    src={products[mobileIdx].image}
                    alt={products[mobileIdx].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                  
                  {/* Tag */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-block px-3.5 py-1 bg-white/15 backdrop-blur-md text-white text-[9px] font-bold tracking-widest uppercase rounded-full font-body">
                      {products[mobileIdx].tag}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                    <h3 className="font-body font-bold text-white text-xl mb-1.5">
                      {products[mobileIdx].title}
                    </h3>
                    <p className="text-white/80 font-body text-xs leading-relaxed line-clamp-3">
                      {products[mobileIdx].description}
                    </p>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="w-[92vw] max-w-4xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto md:overflow-hidden p-0 border-0 rounded-[24px] md:rounded-[32px] bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full md:max-h-[85vh] overflow-y-auto md:overflow-hidden">
                  <div className="relative h-48 sm:h-64 md:h-[600px] w-full shrink-0">
                    <Image
                      src={products[mobileIdx].image}
                      alt={products[mobileIdx].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/30 md:from-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="px-4 py-1.5 bg-brand-saffron text-white text-xs font-bold tracking-widest uppercase rounded-full font-body">
                        {products[mobileIdx].tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-brand-offwhite md:overflow-y-auto md:h-[600px]">
                    <div>
                      <DialogHeader className="mb-6 text-left">
                        <DialogTitle className="text-2xl sm:text-3xl font-display text-brand-green mb-3 text-left leading-tight">
                          {products[mobileIdx].title}
                        </DialogTitle>
                        <DialogDescription className="text-sm sm:text-base text-brand-stone font-body leading-relaxed text-left">
                          {products[mobileIdx].description}
                        </DialogDescription>
                      </DialogHeader>

                      {products[mobileIdx].details && products[mobileIdx].details.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="font-body font-bold text-brand-green text-sm uppercase tracking-widest">
                            Key Features
                          </h4>
                          <ul className="space-y-2.5">
                            {products[mobileIdx].details.map((detail: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-brand-saffron shrink-0 mt-0.5" />
                                <span className="text-sm font-body text-brand-stone">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Packaging & MOQ details */}
                      <div className="mt-6 pt-5 border-t border-brand-green/8 grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-brand-stone tracking-wider block">Packaging</span>
                          <span className="text-sm font-semibold text-brand-green font-body">
                            {products[mobileIdx].title.includes("Potato") ? "25 kg Multi-ply Paper Bag" :
                             products[mobileIdx].title.includes("Glucose") ? "300 kg Drum / IBC Tank" :
                             products[mobileIdx].title.includes("Margarine") ? "15 kg / 25 kg Carton Box" :
                             "25 kg Woven / Multi-ply Bag"}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-brand-stone tracking-wider block">MOQ</span>
                          <span className="text-sm font-semibold text-brand-green font-body">
                            {products[mobileIdx].title.includes("Potato") ? "1 Pallet (1,000 kg)" :
                             products[mobileIdx].title.includes("Glucose") ? "4 Drums (1,200 kg)" :
                             products[mobileIdx].title.includes("Margarine") ? "50 Cases (750 kg)" :
                             "1 Pallet (1,000 kg)"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* B2B Call to Actions */}
                    <div className="mt-8 flex flex-wrap gap-3 pb-2">
                      <DialogClose asChild>
                        <button
                          onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="px-5 py-2.5 bg-brand-saffron text-white hover:bg-brand-saffron/90 transition-colors font-body text-xs font-bold rounded-full shadow-md cursor-pointer flex-1 sm:flex-initial text-center justify-center"
                        >
                          Request Quote
                        </button>
                      </DialogClose>
                      <DialogClose asChild>
                        <button
                          onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="px-5 py-2.5 border border-brand-green/15 text-brand-green hover:bg-brand-green/5 transition-colors font-body text-xs font-bold rounded-full cursor-pointer flex-1 sm:flex-initial text-center justify-center"
                        >
                          Request Sample
                        </button>
                      </DialogClose>
                      <DialogClose asChild>
                        <button
                          className="md:hidden px-5 py-2.5 bg-brand-stone/10 text-brand-stone hover:bg-brand-stone/20 transition-colors font-body text-xs font-bold rounded-full cursor-pointer w-full text-center justify-center"
                        >
                          Kembali / Tutup
                        </button>
                      </DialogClose>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Right Chevron */}
            <button
              onClick={nextMobile}
              className="absolute right-[-8px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-brand-green/5 flex items-center justify-center text-brand-green active:scale-95 transition-transform"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Pagination dots (Mobile) */}
            <div className="flex justify-center gap-2 mt-6">
              {products.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    mobileIdx === i
                      ? "bg-brand-green w-6"
                      : "bg-brand-stone/20"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
