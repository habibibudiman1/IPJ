"use client";

import Image from "next/image";
import { useScrollReveal } from "@/lib/useScrollReveal";

const defaultApplications = [
  {
    title: "Bakery Industry",
    description: "Croissants, bread, pastries, and cakes powered by our premium potato flakes & margarine cream.",
    image: "/images/bakery-industry.png",
  },
  {
    title: "Snack Production",
    description: "Chips, crackers, and extruded snacks manufactured with our high-performance starch & flakes.",
    image: "/images/snack-production.png",
  },
  {
    title: "Dairy Products",
    description: "Yogurt, ice cream, and milk-based drinks stabilized with our glucose syrup & maltodextrin.",
    image: "/images/dairy-products.png",
  },
  {
    title: "Beverage Industry",
    description: "Juice, soft drinks, and powder drinks utilizing our syrup & encapsulation solutions.",
    image: "/images/beverage-industry.png",
  },
  {
    title: "Confectionery",
    description: "Candies, chocolates, and jelly products enhanced by our glucose syrup & modified starch.",
    image: "/images/confectionery.png",
  },
];

export function ApplicationsSection() {
  const { ref, isVisible } = useScrollReveal();
  const applications = defaultApplications;

  return (
    <section id="applications" className="py-24 lg:py-36 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-brand-saffron" />
            <span className="text-brand-stone text-xs font-semibold tracking-[0.25em] uppercase font-body">
              Industry Solutions
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <h2
              className="font-display text-brand-green leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Our <span className="italic text-brand-saffron">Applications</span>
            </h2>
            <p className="text-brand-stone font-body max-w-md text-base leading-relaxed">
              Our ingredients serve diverse sectors of the food industry across Indonesia.
            </p>
          </div>

          {/* ─── Gojek-Style Full-Bleed Image Cards Grid ─── */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
            {applications.map((app, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-[32px] cursor-default shadow-lg shadow-brand-green/3 hover:shadow-2xl transition-all duration-500 ${
                  i < 2 ? "h-[340px] lg:col-span-1" : "h-[340px]"
                } ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Full-bleed background image */}
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-all duration-500" />

                {/* Content overlaid in bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
                  <h3 className="font-body font-bold text-white text-base lg:text-lg mb-1 transition-colors duration-300 group-hover:text-brand-saffron leading-tight">
                    {app.title}
                  </h3>
                  <p className="text-white/70 font-body text-[11px] leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
