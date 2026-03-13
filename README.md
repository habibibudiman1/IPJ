<h1 align="center">🏭 PT Intiboga Pangan Jaya</h1>

<p align="center">
  <strong>Website Company Profile — Supplier Bahan Makanan B2B Terpercaya</strong>
</p>

<p align="center">
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js 15"/></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19"/></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/></a>
</p>

<p align="center">
  <a href="#-bilingual-support"><img src="https://img.shields.io/badge/🇮🇩_Bahasa_Indonesia-supported-red?style=flat-square" alt="ID"/></a>
  <a href="#-bilingual-support"><img src="https://img.shields.io/badge/🇬🇧_English-supported-blue?style=flat-square" alt="EN"/></a>
  <img src="https://img.shields.io/badge/Status-Production_Ready-brightgreen?style=flat-square" alt="Status"/>
  <img src="https://img.shields.io/badge/License-Proprietary-orange?style=flat-square" alt="License"/>
</p>

---

## 🎯 Apa Ini?

Website **company profile modern** untuk **PT Intiboga Pangan Jaya** — perusahaan supplier bahan makanan B2B yang berlokasi di Bandung, Jawa Barat. Website ini dibangun sebagai proyek mata kuliah Semester 5, menggunakan teknologi web terkini untuk menghasilkan website berkelas industri.

> 💡 **Bukan website biasa.** Website ini punya fitur **bilingual** (Indonesia & Inggris), **CMS** untuk edit konten tanpa coding, **contact form** yang tersimpan ke database & kirim email otomatis, dan **performa cepat** yang dioptimasi untuk SEO.

---

## ✨ Apa Yang Bisa Dilakukan Website Ini?

<table>
<tr>
<td width="50%">

### 🌍 Bilingual (2 Bahasa)

Pengunjung bisa memilih **Bahasa Indonesia** atau **English** lewat tombol language switcher. Setiap bahasa punya URL sendiri — SEO-friendly!

</td>
<td width="50%">

### 📧 Contact Form → Email + Database

Setiap inquiry yang masuk otomatis **tersimpan ke database** dan mengirim **email notifikasi** ke perusahaan. Tidak ada lead yang terlewat!

</td>
</tr>
<tr>
<td>

### 📝 Edit Konten Tanpa Coding

Semua teks dan gambar di website bisa diedit lewat **Sanity Studio** (CMS). Tim non-teknis bisa update konten kapan saja, langsung live.

</td>
<td>

### 📱 Responsive & Cepat

Tampil sempurna di **HP, tablet, dan desktop**. Dioptimasi dengan image compression, code splitting, dan CDN caching untuk loading super cepat.

</td>
</tr>
<tr>
<td>

### 🎨 Desain Modern & Animasi Halus

Menggunakan **Framer Motion** untuk animasi smooth dan **shadcn/ui** untuk komponen UI yang premium. Kesan profesional di setiap halaman.

</td>
<td>

### 🔍 SEO Ready

Dilengkapi **meta tags**, **OpenGraph** untuk social sharing, **sitemap.xml**, dan **robots.txt**. Siap ditemukan di Google!

</td>
</tr>
</table>

---

## 📄 Halaman Website

| Halaman           | Isi                                                                            |
| ----------------- | ------------------------------------------------------------------------------ |
| 🏠 **Home**       | Hero section, angka pencapaian perusahaan, highlight produk, proses kerja, CTA |
| 🏢 **About Us**   | Profil perusahaan, visi & misi, core values                                    |
| 📦 **Products**   | Katalog produk lengkap dengan detail & aplikasi penggunaan                     |
| 🏆 **Advantages** | Keunggulan perusahaan & segmen klien yang dilayani                             |
| 📞 **Contact**    | Informasi kontak + form inquiry yang fungsional                                |

---

## 🛠 Tech Stack

<table>
<tr>
<th align="center">⚛️ Frontend</th>
<th align="center">🗄 Backend & Data</th>
<th align="center">🚀 Infrastructure</th>
</tr>
<tr>
<td>

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 3.4**
- **Framer Motion** (Animasi)
- **shadcn/ui** (UI Components)
- **next-intl** (i18n)

</td>
<td>

- **Supabase** (PostgreSQL DB)
- **Drizzle ORM** (Type-safe queries)
- **Sanity.io** (Headless CMS)
- **Resend** (Email service)
- **Zod** (Validation)

</td>
<td>

- **Vercel** (Hosting & CDN)
- **Hostinger** (Domain)
- Auto HTTPS / SSL
- Edge Network CDN

</td>
</tr>
</table>

---

## 📁 Struktur Project

```
websiteIPJ/
│
├── 📂 app/                       # Halaman & routing
│   ├── [locale]/                 # Route dinamis (id/en)
│   │   ├── page.tsx              # Home
│   │   ├── about/                # About Us
│   │   ├── products/             # Products
│   │   ├── advantages/           # Advantages
│   │   └── contact/              # Contact
│   └── api/contact/              # API endpoint form kontak
│
├── 📂 components/                # Komponen React
│   ├── ui/                       # Komponen dasar (Button, Card, Input)
│   ├── layout/                   # Navigation & Footer
│   ├── home/                     # Section-section homepage
│   ├── about/                    # Section halaman About
│   ├── products/                 # Section halaman Products
│   ├── advantages/               # Section halaman Advantages
│   └── contact/                  # Section halaman Contact
│
├── 📂 messages/                  # File terjemahan
│   ├── id.json                   # 🇮🇩 Bahasa Indonesia
│   └── en.json                   # 🇬🇧 English
│
├── 📂 lib/                       # Utility & konfigurasi
├── 📂 sanity/                    # CMS schemas (9 tipe konten)
├── 📂 supabase/                  # Migration database
├── 📂 docs/                      # Dokumentasi lengkap
└── 📄 package.json               # Dependencies & scripts
```

---

## 🚀 Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Copy & isi environment variables
cp .env.example .env.local

# 3. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) dan website siap! 🎉

> 📖 Butuh panduan lebih detail? Baca [docs/QUICKSTART.md](docs/QUICKSTART.md) (English) atau [docs/PANDUAN_SETUP_LENGKAP.md](docs/PANDUAN_SETUP_LENGKAP.md) (Bahasa Indonesia)

---

## 🌍 Bilingual Support

Website mendukung **2 bahasa** dengan sistem URL:

```
🇮🇩 Bahasa Indonesia     →  /id/about, /id/products, /id/contact
🇬🇧 English              →  /en/about, /en/products, /en/contact
```

Pengunjung tinggal klik tombol 🌐 di navigation bar untuk ganti bahasa. URL langsung berubah dan halaman otomatis ter-translate!

> 📖 Developer guide: [docs/I18N_GUIDE.md](docs/I18N_GUIDE.md)

---

## 📝 Content Management (CMS)

Semua konten website bisa diedit lewat **Sanity Studio** tanpa perlu coding:

| Konten               | Yang Bisa Diedit                           |
| -------------------- | ------------------------------------------ |
| 🏢 Profil Perusahaan | Deskripsi, focus supply, quality statement |
| 🎯 Visi & Misi       | Pernyataan visi, item misi                 |
| 💎 Core Values       | 6 nilai perusahaan                         |
| 📦 Produk            | Detail, fitur, spesifikasi, gambar         |
| ⚙️ Aplikasi Produk   | Use-case per produk                        |
| 🏆 Keunggulan        | Kelebihan perusahaan                       |
| 👥 Segmen Klien      | Target market                              |
| 📞 Kontak            | Alamat, telepon, email, jam kerja          |
| 🖼️ Galeri            | Foto perusahaan                            |

> 📖 Panduan untuk editor konten: [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md)

---

## 🚢 Deployment

Website di-deploy ke **Vercel** dengan langkah:

1. Push kode ke GitHub
2. Import repository di [vercel.com](https://vercel.com)
3. Set environment variables
4. Deploy ✅ — otomatis live!

> 📖 Panduan deployment lengkap: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)

---

## 📚 Dokumentasi

| Dokumen                                                          | Deskripsi                      |
| ---------------------------------------------------------------- | ------------------------------ |
| 📖 [QUICKSTART.md](docs/QUICKSTART.md)                           | Mulai dalam 10 menit           |
| 🚢 [DEPLOYMENT.md](docs/DEPLOYMENT.md)                           | Panduan deploy ke production   |
| ✏️ [CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md)                     | Panduan edit konten via CMS    |
| 🌍 [I18N_GUIDE.md](docs/I18N_GUIDE.md)                           | Panduan developer bilingual    |
| ✅ [SETUP_CHECKLIST.md](docs/SETUP_CHECKLIST.md)                 | Checklist setup & deploy       |
| 📘 [PANDUAN_SETUP_LENGKAP.md](docs/PANDUAN_SETUP_LENGKAP.md)     | Panduan setup lengkap (Bahasa) |
| 📋 [PROJECT_SUMMARY.md](docs/PROJECT_SUMMARY.md)                 | Ringkasan arsitektur project   |
| 🔧 [TROUBLESHOOTING_NPM_DEV.md](docs/TROUBLESHOOTING_NPM_DEV.md) | Troubleshooting npm di Windows |

---

## 🏢 Tentang PT Intiboga Pangan Jaya

|                   |                                                                          |
| ----------------- | ------------------------------------------------------------------------ |
| **Perusahaan**    | PT Intiboga Pangan Jaya                                                  |
| **Industri**      | Supplier Bahan Makanan (B2B FMCG)                                        |
| **Lokasi**        | JL. Raya Rancaekek – Majalaya No. 254, Bandung, Jawa Barat               |
| **Produk Utama**  | Potato Flakes, Glucose Syrup, Milk Powder, Maltodextrin, Modified Starch |
| **Target Market** | Pabrik makanan, Bakery, Produsen snack, Horeca, Distributor              |
| 📧 **Email**      | faridalfarizi@intiboga.com                                               |
| 📱 **Phone**      | +62 813 6119 6131                                                        |

---

<p align="center">
  <strong>Built with ❤️ using Next.js 15, React 19 & TypeScript</strong><br/>
  © 2024 PT Intiboga Pangan Jaya — All rights reserved
</p>
