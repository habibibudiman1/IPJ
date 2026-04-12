"use client";

import { useState, useEffect } from "react";
import { Croissant, Cookie, Milk, GlassWater, Candy, Factory } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const defaultApplications = [
  {
    icon: Croissant,
    title: "Bakery Industry",
  },
  {
    icon: Cookie,
    title: "Snack Production",
  },
  {
    icon: Milk,
    title: "Dairy Products",
  },
  {
    icon: GlassWater,
    title: "Beverage Industry",
  },
  {
    icon: Candy,
    title: "Confectionery",
  },
];

export function ApplicationsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [applications, setApplications] = useState(defaultApplications);

  useEffect(() => {
    const saved = localStorage.getItem("ipj_applications");
    if (saved) {
      const parsed = JSON.parse(saved);
      // Map arbitrary strings from admin to the icons
      const mappedApps = parsed.map((app: string, index: number) => ({
        title: app,
        icon: defaultApplications[index]?.icon || Factory, // default fallback icon
      }));
      setApplications(mappedApps);
    }
  }, []);

  return (
    <section id="applications" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full mb-4 font-body tracking-wide">
              Industry Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-green mb-4 font-heading">
              Applications
            </h2>
            <p className="text-gray-500 font-body max-w-2xl mx-auto">
              Our ingredients serve diverse sectors of the food industry
            </p>
          </div>

          {/* Applications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {applications.map((app, i) => (
              <div
                key={i}
                className={`group text-center p-6 bg-brand-cream rounded-2xl hover:bg-brand-green transition-all duration-500 cursor-default border border-transparent hover:border-brand-green ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-green/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <app.icon className="w-8 h-8 text-brand-green group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-brand-green group-hover:text-white mb-1 font-body transition-colors">
                  {app.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
