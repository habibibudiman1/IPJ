"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/company";

export function Footer() {
  const contact = {
    companyName: COMPANY_CONFIG.legalName,
    address: COMPANY_CONFIG.address.fullAddress,
    email: COMPANY_CONFIG.contact.email,
    phone: COMPANY_CONFIG.contact.phone,
  };

  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-brand-green-dark overflow-hidden">

      {/* Decorative wordmark */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-display font-bold text-white/2.5 leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(6rem, 14vw, 12rem)" }}
        >
          INTIBOGA
        </span>
      </div>

      {/* Top accent */}
      <div className="h-px bg-linear-to-r from-transparent via-brand-saffron/30 to-transparent" />

      <div className="relative container mx-auto px-4 lg:px-8 pt-16 pb-8">
        
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 mb-16">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logoIPJ.png"
                  alt="IPJ Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-sm font-bold text-white tracking-[0.2em] font-body block leading-none">
                  INTIBOGA
                </span>
                <span className="text-xs font-medium text-brand-saffron tracking-[0.15em] font-body block leading-none mt-0.5">
                  PANGAN JAYA
                </span>
              </div>
            </div>
            <p className="text-sm text-white/40 font-body leading-relaxed mb-8 max-w-xs">
              Your trusted partner for high-quality food ingredients in Indonesia. Serving the food industry for {COMPANY_CONFIG.stats.experienceYears} years.
            </p>
            {/* Email CTA */}
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-brand-saffron transition-colors font-body"
            >
              <Mail className="w-4 h-4" />
              {contact.email}
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[10px] font-bold text-brand-saffron uppercase tracking-[0.3em] font-body mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Products", id: "products" },
                { label: "Why Us", id: "whyus" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={scrollTo(item.id)}
                    className="group flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors font-body"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-brand-saffron transition-all duration-300" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[10px] font-bold text-brand-saffron uppercase tracking-[0.3em] font-body mb-6">
              Products
            </h4>
            <ul className="space-y-3 text-sm text-white/40 font-body">
              {["Potato Flakes", "Glucose Syrup", "Margarine Cream", "Specialty Ingredients"].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-saffron/30" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold text-brand-saffron uppercase tracking-[0.3em] font-body mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm font-body">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-saffron mt-0.5 shrink-0" />
                <span className="text-white/40 leading-relaxed">{contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-saffron shrink-0" />
                <a
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-saffron shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25 font-body tracking-wide">
            © {new Date().getFullYear()} PT. Intiboga Pangan Jaya. All rights reserved.
          </p>
          <a
            href="#home"
            onClick={scrollTo("home")}
            className="group flex items-center gap-2 text-[11px] text-white/25 hover:text-white/60 transition-colors font-body"
          >
            Back to top
            <span className="w-5 h-5 rounded-full border border-white/20 group-hover:border-white/40 flex items-center justify-center transition-colors -rotate-90">
              <ArrowUpRight className="w-2.5 h-2.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
