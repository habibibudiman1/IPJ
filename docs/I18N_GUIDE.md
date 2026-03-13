# Panduan Bilingual / Bilingual Guide

Website PT Intiboga Pangan Jaya sekarang mendukung 2 bahasa: **Bahasa Indonesia** dan **English**.

*PT Intiboga Pangan Jaya website now supports 2 languages: **Indonesian** and **English**.*

---

## 🌍 Fitur / Features

- ✅ **Bahasa Indonesia (ID)** - Bahasa default / Default language
- ✅ **English (EN)** - Bahasa alternatif / Alternative language
- ✅ **Language Switcher** - Tombol ganti bahasa di navigation bar
- ✅ **URL-based** - Bahasa ditentukan dari URL (contoh: `/id/about` atau `/en/about`)
- ✅ **Auto-detect** - Otomatis menggunakan bahasa Indonesia jika tidak ada locale di URL
- ✅ **SEO-friendly** - Setiap bahasa memiliki metadata dan OpenGraph tags sendiri

---

## 📁 Struktur File / File Structure

```
websiteIPJ/
├── i18n.ts                    # Konfigurasi i18n
├── middleware.ts              # Routing berdasarkan bahasa
├── messages/                  # File terjemahan
│   ├── id.json               # Terjemahan Bahasa Indonesia
│   └── en.json               # Terjemahan Bahasa Inggris
├── app/
│   └── [locale]/             # Dynamic route untuk bahasa
│       ├── layout.tsx         # Layout dengan locale
│       ├── page.tsx           # Homepage
│       ├── about/
│       ├── products/
│       ├── advantages/
│       └── contact/
└── components/
    └── language-switcher.tsx  # Komponen tombol ganti bahasa
```

---

## 🚀 Cara Menggunakan / How to Use

### Untuk Pengguna Website / For Website Users

1. **Ganti Bahasa / Switch Language:**
   - Klik tombol bendera 🇮🇩/🇬🇧 di navigation bar
   - Pilih bahasa yang diinginkan
   - Website akan otomatis reload dengan bahasa baru

2. **URL Format:**
   - Bahasa Indonesia: `https://intiboga.com/id/about`
   - English: `https://intiboga.com/en/about`
   - Default (tanpa locale): `https://intiboga.com/about` → redirect ke `/id/about`

### Untuk Developer / For Developers

#### 1. Menggunakan Terjemahan di Component / Using Translations in Components

```tsx
"use client";

import { useTranslations } from "next-intl";

export function MyComponent() {
  const t = useTranslations("nav"); // namespace from messages/*.json
  
  return (
    <div>
      <h1>{t("home")}</h1>
      <p>{t("about")}</p>
    </div>
  );
}
```

#### 2. Menggunakan Locale di Link / Using Locale in Links

```tsx
"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

export function MyComponent() {
  const locale = useLocale();
  
  return (
    <Link href={`/${locale}/about`}>
      About Us
    </Link>
  );
}
```

#### 3. Menambah Terjemahan Baru / Adding New Translations

**Langkah 1: Edit file terjemahan / Step 1: Edit translation files**

Edit `messages/id.json`:
```json
{
  "mySection": {
    "title": "Judul Baru",
    "description": "Deskripsi dalam Bahasa Indonesia"
  }
}
```

Edit `messages/en.json`:
```json
{
  "mySection": {
    "title": "New Title",
    "description": "Description in English"
  }
}
```

**Langkah 2: Gunakan di component / Step 2: Use in component**

```tsx
const t = useTranslations("mySection");

return (
  <div>
    <h2>{t("title")}</h2>
    <p>{t("description")}</p>
  </div>
);
```

---

## 📝 Daftar Terjemahan / Translation List

### Namespace yang Tersedia / Available Namespaces

1. **nav** - Navigasi menu
2. **hero** - Hero section homepage
3. **metrics** - Highlight metrics
4. **products** - Product sections
5. **howWeWork** - How we work section
6. **cta** - Call-to-action sections
7. **about** - About page
8. **vision** - Vision section
9. **mission** - Mission section
10. **values** - Core values
11. **productDetail** - Product detail pages
12. **advantages** - Advantages page
13. **clients** - Client segments
14. **contact** - Contact page
15. **footer** - Footer section
16. **common** - Common texts (loading, error, etc.)

---

## 🔧 Konfigurasi / Configuration

### Supported Locales

File: `i18n.ts`

```typescript
export const locales = ["id", "en"] as const;
```

### Default Locale

File: `middleware.ts`

```typescript
export default createMiddleware({
  locales: locales,
  defaultLocale: "id",  // Bahasa Indonesia sebagai default
  localePrefix: "as-needed",
});
```

### Menambah Bahasa Baru / Adding New Language

**1. Update i18n.ts:**
```typescript
export const locales = ["id", "en", "zh"] as const; // Tambah "zh"
```

**2. Buat file terjemahan baru:**
```
messages/zh.json
```

**3. Update middleware.ts:**
```typescript
locales: ["id", "en", "zh"],
```

---

## 🎨 Language Switcher Component

Komponen `LanguageSwitcher` menampilkan dropdown untuk ganti bahasa.

**Lokasi:** `components/language-switcher.tsx`

**Fitur:**
- Dropdown menu dengan bendera
- Menampilkan bahasa saat ini
- Auto-redirect ke URL dengan locale baru
- Responsive untuk mobile dan desktop

---

## 🌐 SEO untuk Multilingual

### Metadata per Bahasa / Metadata per Language

Setiap halaman memiliki metadata yang berbeda berdasarkan bahasa:

```typescript
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "about" });
  
  return {
    title: `${t("title")} - PT Intiboga Pangan Jaya`,
    description: t("description1"),
  };
}
```

### Sitemap untuk Multilingual

Update `app/sitemap.ts` untuk include semua locale:

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/products", "/advantages", "/contact"];
  const locales = ["id", "en"];
  
  const urls = [];
  
  for (const locale of locales) {
    for (const page of pages) {
      urls.push({
        url: `https://intiboga.com/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }
  
  return urls;
}
```

---

## ✅ Testing Checklist

- [ ] Semua halaman bisa diakses di kedua bahasa
- [ ] Language switcher berfungsi dengan baik
- [ ] URL redirect bekerja dengan benar
- [ ] Tidak ada teks yang tidak ter-translate
- [ ] Metadata berbeda per bahasa
- [ ] Navigation menu ter-translate
- [ ] Footer ter-translate
- [ ] Contact form berfungsi di kedua bahasa
- [ ] Email notification dalam bahasa yang sesuai

---

## 🐛 Troubleshooting

### Issue: Terjemahan tidak muncul
**Solusi:** 
- Pastikan key ada di file `messages/id.json` dan `messages/en.json`
- Restart development server
- Clear browser cache

### Issue: Language switcher tidak bekerja
**Solusi:**
- Check middleware.ts sudah di-configure dengan benar
- Pastikan `next-intl` sudah ter-install

### Issue: URL tidak berubah saat ganti bahasa
**Solusi:**
- Pastikan semua Link menggunakan locale: `/{locale}/page`
- Check implementation di `language-switcher.tsx`

---

## 📚 Resources

- **next-intl Documentation:** https://next-intl-docs.vercel.app/
- **Next.js i18n:** https://nextjs.org/docs/app/building-your-application/routing/internationalization

---

## 🎯 Best Practices

1. **Selalu gunakan useTranslations() untuk teks**
   - Jangan hard-code teks dalam bahasa tertentu
   - Semua teks harus ada di messages/*.json

2. **Konsisten dengan locale di URL**
   - Semua internal link harus include locale
   - Gunakan `useLocale()` hook untuk mendapatkan current locale

3. **Test di kedua bahasa**
   - Setiap feature harus di-test di Bahasa Indonesia dan English
   - Pastikan layout tidak rusak dengan teks yang lebih panjang/pendek

4. **Keep translation files synced**
   - Jika tambah key di id.json, tambahkan juga di en.json
   - Gunakan struktur yang sama di kedua file

---

## 📞 Support

Jika ada pertanyaan tentang bilingual feature:
- Email: faridalfarizi@intiboga.com
- Phone: +62 813 6119 6131

---

**Last Updated:** January 29, 2024  
**Version:** 1.0.0
