"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { useTranslations } from "next-intl";

export function VisionMission() {
  const { ref, isVisible } = useScrollReveal();
  const tVision = useTranslations("vision");
  const tMission = useTranslations("mission");
  const tSection = useTranslations("visionMissionSection");

  const missionItems = tMission.raw("items") as string[];

  return (
    <section className="py-24 lg:py-36 bg-white relative overflow-hidden" ref={ref}>
      
      {/* Decorative subtle background circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cream/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Header & Vision */}
            <div 
              className={`lg:col-span-5 flex flex-col justify-between h-full transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div>
                {/* Header */}
                <div className="mb-10">
                  <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-xs font-semibold rounded-full mb-4 font-body tracking-wider uppercase">
                    Our Direction
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-display text-brand-green leading-[1.05] mb-4">
                    {tSection("title")}
                  </h2>
                  <p className="text-brand-stone text-sm md:text-base font-body leading-relaxed max-w-sm">
                    {tSection("subtitle")}
                  </p>
                </div>

                {/* Vision Box */}
                <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-brand-green/5 shadow-xs group hover:shadow-lg transition-shadow duration-500">
                  {/* Decorative quote mark */}
                  <span className="absolute -top-6 -left-2 text-[10rem] font-serif text-brand-green/5 leading-none select-none pointer-events-none">
                    “
                  </span>
                  
                  <span className="inline-block text-xs font-semibold tracking-wider text-brand-saffron uppercase mb-4 font-body">
                    {tVision("title") || tSection("visionTitle")}
                  </span>
                  
                  <blockquote className="text-lg md:text-xl font-display text-brand-green italic font-light leading-relaxed relative z-10">
                    "{tVision("text")}"
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Right Column: Mission */}
            <div 
              className={`lg:col-span-7 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-brand-green/5 shadow-xs hover:shadow-lg transition-shadow duration-500">
                <span className="inline-block text-xs font-semibold tracking-wider text-brand-saffron uppercase mb-8 font-body">
                  {tSection("missionTitle") || tMission("title")}
                </span>

                <div className="space-y-8">
                  {missionItems.map((mission, i) => {
                    const formattedNumber = String(i + 1).padStart(2, "0");
                    return (
                      <div key={i} className="group flex gap-6 items-start pb-6 border-b border-brand-green/5 last:border-0 last:pb-0">
                        {/* Number badge with micro-interaction */}
                        <span className="font-display font-bold text-2xl text-brand-green/30 group-hover:text-brand-saffron transition-colors duration-300 leading-none select-none">
                          {formattedNumber}
                        </span>
                        
                        {/* Description content */}
                        <p className="text-sm md:text-base text-brand-stone font-body leading-relaxed group-hover:text-brand-green transition-colors duration-300">
                          {mission}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
