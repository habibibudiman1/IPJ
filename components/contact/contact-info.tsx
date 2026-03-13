"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function ContactInfo() {
  const t = useTranslations("contact");

  const contactDetails = [
    {
      icon: MapPin,
      titleKey: "address",
      content:
        "JL. Raya Rancaekek – Majalaya No. 254, Kel. Solokanjeruk, Kec. Solokanjeruk, Bandung, Jawa Barat 40376, Indonesia (Warehouse)",
    },
    {
      icon: Phone,
      titleKey: "phone",
      content: "+62 813 6119 6131",
      link: "tel:+6281361196131",
    },
    {
      icon: Mail,
      titleKey: "email",
      content: "faridalfarizi@intiboga.com",
      link: "mailto:faridalfarizi@intiboga.com",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Card>
        <CardContent className="p-6">
          <h2 className="mb-6 text-2xl font-bold">{t("getInTouch")}</h2>
          <div className="space-y-6">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <detail.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{t(detail.titleKey)}</h3>
                  {detail.link ? (
                    <a
                      href={detail.link}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {detail.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{detail.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="mb-4 font-semibold">{t("businessHours")}</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>{t("hours.weekday")}</p>
            <p>{t("hours.saturday")}</p>
            <p>{t("hours.sunday")}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
