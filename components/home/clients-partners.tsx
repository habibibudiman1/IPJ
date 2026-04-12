"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Building2 } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const defaultPartners = [
  { name: "Partner Company A", logo: null },
  { name: "Partner Company B", logo: null },
  { name: "Partner Company C", logo: null },
  { name: "Partner Company D", logo: null },
];

export function ClientsPartners() {
  const { ref, isVisible } = useScrollReveal();
  const [partners, setPartners] = useState(defaultPartners);

  useEffect(() => {
    const saved = localStorage.getItem("ipj_partners");
    
    if (saved) {
      const parsed = JSON.parse(saved);
      const withLogos = parsed.map((partner: any, index: number) => {
        const savedLogo = localStorage.getItem(`ipj_client_logo_${index}`);
        return {
          name: partner.name || `Partner ${index + 1}`,
          logo: savedLogo || null,
        };
      });
      setPartners(withLogos);
    } else {
      // Fallback: check if ipj_clients exists (for backward compatibility)
      const oldSaved = localStorage.getItem("ipj_clients");
      if (oldSaved) {
          const oldParsed = JSON.parse(oldSaved);
          const mappedOld = oldParsed.map((clientName: string, index: number) => ({
              name: clientName,
              logo: null
          }));
          setPartners(mappedOld);
      }
    }
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-brand-cream border-t border-brand-green/5">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Header */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full mb-4 font-body tracking-wide">
              Our Network
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-green mb-4 font-heading">
              Partner Companies
            </h2>
            <p className="text-gray-500 font-body max-w-xl mx-auto">
              We proudly collaborate and supply our ingredients to a diverse range of industry leaders
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {partners.map((partner, i) => (
              <div
                key={i}
                className="group flex flex-col items-center justify-center p-6 h-40 bg-white/60 hover:bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative w-full h-16 mb-4 flex justify-center items-center transition-all duration-500 group-hover:scale-105">
                  {(partner.logo && partner.logo !== "/images/placeholder.png") ? (
                    <Image 
                      src={partner.logo} 
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <Building2 className="w-10 h-10 text-brand-green/30 group-hover:text-brand-green/50 transition-colors" />
                  )}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-brand-green text-center font-body group-hover:text-brand-saffron transition-colors mt-auto w-full truncate px-2">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          {/* Trust indicator */}
          <div
            className={`mt-16 flex items-center justify-center gap-6 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-px flex-1 max-w-20 bg-brand-green/20" />
            <p className="text-xs text-gray-400 font-body tracking-widest uppercase">
              Trusted by industry leaders
            </p>
            <div className="h-px flex-1 max-w-20 bg-brand-green/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
