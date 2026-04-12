"use client";

import { useState, useEffect } from "react";
import { Lightbulb, Shield, Leaf, Heart, Users, Handshake } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const defaultValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously seeking new and better solutions",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Quality First",
    description: "Ensuring the highest standards in every product",
    color: "from-brand-green to-emerald-600",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to environmentally responsible practices",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Conducting business with honesty and transparency",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Prioritizing client satisfaction and needs",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Handshake,
    title: "Team Work",
    description: "Collaborating to achieve shared goals",
    color: "from-purple-500 to-violet-500",
  },
];

export function CoreValues() {
  const { ref, isVisible } = useScrollReveal();
  const [values, setValues] = useState(defaultValues);

  useEffect(() => {
    const saved = localStorage.getItem("ipj_core_values");
    if (saved) {
      const parsed = JSON.parse(saved);
      // Map stored text data to the default icons and colors
      setValues(defaultValues.map((def, i) => ({
        ...def,
        title: parsed[i]?.title || def.title,
        description: parsed[i]?.description || def.description,
      })));
    }
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full mb-4 font-body tracking-wide">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-green mb-4 font-heading">
              Core Values
            </h2>
            <p className="text-gray-500 font-body max-w-2xl mx-auto">
              The principles that guide every aspect of our business
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand-green/20 hover:shadow-xl transition-all duration-500 cursor-default ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-brand-green mb-2 font-heading">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 font-body leading-relaxed">
                  {value.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green to-brand-saffron rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
