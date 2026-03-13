"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function ProductApplications() {
  const t = useTranslations("productDetail");

  const applications = [
    {
      product: t("potatoFlakes.title"),
      uses: t.raw("potatoFlakes.applications") as string[],
    },
    {
      product: t("glucoseSyrup.title"),
      uses: t.raw("glucoseSyrup.applications") as string[],
    },
    {
      product: t("margarineCream.title"),
      uses: t.raw("margarineCream.applications") as string[],
    },
  ];

  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            {t("applications")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("applicationsSubtitle")}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{app.product}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {app.uses.map((use, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          {i + 1}
                        </span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
