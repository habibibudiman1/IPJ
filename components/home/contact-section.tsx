"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Loader2, CheckCircle2, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { COMPANY_CONFIG } from "@/config/company";

export function ContactSection() {
  const t = useTranslations("contact");
  const tForm = useTranslations("contact.form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    website: "", // Honeypot field
  });

  useEffect(() => {
    const handlePrepopulate = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string }>;
      if (customEvent.detail?.message) {
        setFormData((prev) => ({
          ...prev,
          message: customEvent.detail.message,
        }));
      }
    };
    window.addEventListener("prepopulate-contact-message", handlePrepopulate);
    return () => {
      window.removeEventListener("prepopulate-contact-message", handlePrepopulate);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          website: "",
        });
      } else {
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactDetails = [
    {
      icon: MapPin,
      titleKey: "address",
      content: COMPANY_CONFIG.address.fullAddress,
    },
    {
      icon: Phone,
      titleKey: "phone",
      content: COMPANY_CONFIG.contact.phone,
      link: COMPANY_CONFIG.contact.phoneLink,
    },
    {
      icon: Mail,
      titleKey: "email",
      content: COMPANY_CONFIG.contact.email,
      link: COMPANY_CONFIG.contact.emailLink,
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-36 bg-brand-offwhite overflow-hidden">
      {/* Decorative large background text */}
      <div
        className="absolute bottom-1/2 translate-y-1/2 -right-12 select-none pointer-events-none"
        aria-hidden
      >
        <span
          className="font-display font-bold text-brand-green/4 leading-none"
          style={{ fontSize: "clamp(12rem, 20vw, 18rem)" }}
        >
          CONTACT
        </span>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-brand-saffron" />
            <span className="text-brand-stone text-xs font-semibold tracking-[0.25em] uppercase font-body">
              {t("title")}
            </span>
          </div>

          {/* Heading */}
          <div className="mb-16">
            <h2
              className="font-display text-brand-green leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Get In <span className="italic text-brand-saffron">Touch</span>
            </h2>
            <p className="text-brand-stone font-body text-base max-w-xl">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              <Card className="border-2 border-brand-green/5 shadow-xl bg-white p-8 rounded-2xl">
                <h3 className="text-2xl font-display text-brand-green mb-8">{t("getInTouch")}</h3>
                <div className="space-y-8">
                  {contactDetails.map((detail, index) => (
                    <div key={index} className="flex items-start gap-5 group">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-cream text-brand-green group-hover:bg-brand-saffron group-hover:text-white transition-colors duration-300 shadow-md">
                        <detail.icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-stone font-body mb-1">
                          {t(detail.titleKey)}
                        </h4>
                        {detail.link ? (
                          <a
                            href={detail.link}
                            className="text-base font-medium text-brand-green hover:text-brand-saffron transition-colors font-body leading-relaxed break-all"
                          >
                            {detail.content}
                          </a>
                        ) : (
                          <p className="text-base font-medium text-brand-green font-body leading-relaxed">
                            {detail.content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="border-2 border-brand-green/5 shadow-xl bg-white p-8 rounded-2xl">
                <h3 className="text-lg font-bold text-brand-green mb-4 font-body uppercase tracking-wider">{t("businessHours")}</h3>
                <div className="space-y-3 text-sm text-brand-stone font-body">
                  <div className="flex justify-between border-b border-brand-green/8 pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-brand-green">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-green/8 pb-2">
                    <span>Saturday</span>
                    <span className="font-semibold text-brand-green">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span>Sunday</span>
                    <span className="font-semibold text-red-500">Closed</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right: Contact Form */}
            <Card className="border-2 border-brand-green/5 shadow-2xl bg-white p-8 lg:p-10 rounded-2xl">
              <h3 className="text-2xl font-display text-brand-green mb-6">{tForm("title")}</h3>
              
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6 shadow-inner">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-green mb-3">{tForm("success.title")}</h3>
                  <p className="text-brand-stone max-w-md mb-8 font-body leading-relaxed">
                    {tForm("success.message")}
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    className="bg-brand-green text-white hover:bg-brand-green/90 px-8 py-5 rounded-full font-semibold font-body shadow-lg"
                  >
                    {tForm("success.sendAnother")}
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-body">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-semibold text-brand-stone uppercase tracking-wider">{tForm("name")} *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={tForm("namePlaceholder")}
                        className="rounded-xl border-brand-green/10 focus:border-brand-saffron focus:ring-brand-saffron"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-xs font-semibold text-brand-stone uppercase tracking-wider">{tForm("company")} *</Label>
                      <Input
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={tForm("companyPlaceholder")}
                        className="rounded-xl border-brand-green/10 focus:border-brand-saffron focus:ring-brand-saffron"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-semibold text-brand-stone uppercase tracking-wider">{tForm("email")} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={tForm("emailPlaceholder")}
                        className="rounded-xl border-brand-green/10 focus:border-brand-saffron focus:ring-brand-saffron"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs font-semibold text-brand-stone uppercase tracking-wider">{tForm("phone")} *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={tForm("phonePlaceholder")}
                        className="rounded-xl border-brand-green/10 focus:border-brand-saffron focus:ring-brand-saffron"
                      />
                    </div>
                  </div>

                  {/* Honeypot field hidden from users but visible to bots */}
                  <div className="hidden" aria-hidden="true">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-semibold text-brand-stone uppercase tracking-wider">{tForm("message")} *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={tForm("messagePlaceholder")}
                      rows={5}
                      className="rounded-xl border-brand-green/10 focus:border-brand-saffron focus:ring-brand-saffron resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-saffron text-white hover:bg-brand-saffron/90 py-6 rounded-full font-bold text-base shadow-lg transition-transform hover:-translate-y-0.5" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" size={18} />
                        {tForm("sending")}
                      </>
                    ) : (
                      <>
                        {tForm("submit")}
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
