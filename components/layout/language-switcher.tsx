"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname if it exists
    const pathnameWithoutLocale = pathname.replace(/^\/(id|en)/, "");
    
    // Add new locale to pathname
    const newPath = `/${newLocale}${pathnameWithoutLocale || ""}`;
    
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Languages size={16} />
          <span className="hidden sm:inline">
            {locale === "id" ? "ID" : "EN"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => switchLanguage("id")}
          className={locale === "id" ? "bg-accent" : ""}
        >
          <span className="mr-2">🇮🇩</span>
          Bahasa Indonesia
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLanguage("en")}
          className={locale === "en" ? "bg-accent" : ""}
        >
          <span className="mr-2">🇬🇧</span>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
