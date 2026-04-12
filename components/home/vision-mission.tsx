"use client";

import { useState, useEffect } from "react";
import { Eye, Target, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function VisionMission() {
  const { ref, isVisible } = useScrollReveal();
  const [content, setContent] = useState({
    vision: "To become a leading and trusted food ingredient supplier in Indonesia, known for quality, innovation, and reliability.",
    missions: [
      "Provide high-quality food ingredients at competitive prices",
      "Build long-term partnerships based on trust and mutual growth",
      "Continuously innovate to meet evolving market demands",
      "Ensure consistent supply chain and timely delivery",
    ]
  });

  useEffect(() => {
    const saved = localStorage.getItem("ipj_vision_mission");
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-brand-cream">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full mb-4 font-body tracking-wide">
              Our Direction
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-green font-heading">
              Vision & Mission
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div
              className={`bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-green/5 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-brand-saffron/10 flex items-center justify-center group-hover:bg-brand-saffron transition-colors duration-300">
                  <Eye className="w-7 h-7 text-brand-saffron group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-brand-green font-heading">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 font-body leading-relaxed text-base whitespace-pre-wrap">
                {content.vision}
              </p>
              <div className="mt-6 w-full h-1 bg-gradient-to-r from-brand-saffron to-brand-saffron/20 rounded-full" />
            </div>

            {/* Mission Card */}
            <div
              className={`bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-green/5 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green transition-colors duration-300">
                  <Target className="w-7 h-7 text-brand-green group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-brand-green font-heading">
                  Our Mission
                </h3>
              </div>
              <ul className="space-y-4">
                {content.missions.map((mission, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-saffron mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 font-body text-sm leading-relaxed">
                      {mission}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 w-full h-1 bg-gradient-to-r from-brand-green to-brand-green/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
