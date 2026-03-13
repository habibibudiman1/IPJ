# 📘 Panduan Setup Lengkap - PT Intiboga Pangan Jaya Website

## Daftar Isi

1. [Pengenalan](#pengenalan)
2. [Persiapan Sistem](#persiapan-sistem)
3. [Instalasi Project](#instalasi-project)
4. [Setup Environment Variables](#setup-environment-variables)
5. [Setup Supabase (Database)](#setup-supabase-database)
6. [Setup Sanity.io (CMS)](#setup-sanityio-cms)
7. [Setup Resend (Email)](#setup-resend-email)
8. [Menjalankan Development Server](#menjalankan-development-server)
9. [Testing Website](#testing-website)
10. [Deploy ke Vercel](#deploy-ke-vercel)
11. [Setup Domain Custom](#setup-domain-custom)
12. [Troubleshooting](#troubleshooting)

---

## Pengenalan

### Tentang Project Ini

Website company profile B2B untuk **PT Intiboga Pangan Jaya**, perusahaan supplier bahan makanan berkualitas tinggi di Indonesia.

### Teknologi Yang Digunakan

**Frontend:**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

**Backend & Database:**
- Supabase (PostgreSQL database)
- Drizzle ORM

**CMS:**
- Sanity.io (untuk manage content)

**Email:**
- Resend (untuk kirim email dari contact form)

**Deployment:**
- Vercel (hosting website)
- Domain dari Hostinger

**Fitur Tambahan:**
- 🌍 **Bilingual** (Bahasa Indonesia & English)
- 📧 Contact form dengan email notification
- 💾 Lead capture ke database
- 🎨 Modern UI dengan animasi halus

---

## Persiapan Sistem

### 1. Persyaratan Minimum

**Hardware:**
- RAM: Minimal 4GB (Recommended 8GB+)
- Storage: Minimal 2GB free space
- Internet: Koneksi stabil untuk download dependencies

**Software:**
- Operating System: Windows 10/11, macOS, atau Linux
- Browser: Chrome, Firefox, Safari, atau Edge (versi terbaru)

### 2. Install Software Yang Diperlukan

#### A. Install Node.js

**Versi yang diperlukan:** Node.js 18 atau lebih baru

**Cara Install:**

1. **Windows & macOS:**
   - Buka https://nodejs.org
   - Download versi LTS (Long Term Support)
   - Jalankan installer dan ikuti petunjuk
   - Restart komputer setelah instalasi

2. **Verifikasi Instalasi:**
   ```bash
   node --version
   # Harus menampilkan: v18.x.x atau lebih tinggi
   
   npm --version
   # Harus menampilkan: 9.x.x atau lebih tinggi
   ```

#### B. Install Git (Opsional tapi Recommended)

**Untuk Windows:**
1. Download dari https://git-scm.com/download/win
2. Install dengan pengaturan default
3. Verifikasi: `git --version`

**Untuk macOS:**
```bash
# Install via Homebrew (recommended)
brew install git

# Atau gunakan Xcode Command Line Tools
xcode-select --install
```

**Untuk Linux:**
```bash
# Ubuntu/Debian
sudo apt-get install git

# CentOS/RHEL
sudo yum install git
```

#### C. Install Code Editor (Recommended)

**Visual Studio Code** (Recommended):
1. Download dari https://code.visualstudio.com
2. Install dengan pengaturan default

**Extensions VS Code yang Recommended:**
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)

#### D. Install Terminal/Command Line

**Windows:**
- PowerShell (sudah built-in)
- Atau install Windows Terminal dari Microsoft Store (recommended)

**macOS:**
- Terminal (sudah built-in)
- Atau install iTerm2 (recommended)

**Linux:**
- Terminal (sudah built-in)

---

## Instalasi Project

### 1. Download/Clone Project

**Pilihan A: Jika sudah ada folder project**
```bash
# Buka terminal/command prompt
# Navigate ke folder project
cd "C:\MATAKULIAH SEMESTER 5\websiteIPJ"
```

**Pilihan B: Clone dari Git (jika menggunakan Git)**
```bash
# Clone repository
git clone <repository-url>
cd websiteIPJ
```

### 2. Install Dependencies

```bash
# Pastikan Anda berada di folder project
# Lihat apakah ada file package.json

# Install semua dependencies
npm install
```

**Proses ini akan:**
- Download semua package yang diperlukan
- Membuat folder `node_modules/`
- Membuat file `package-lock.json`
- Memakan waktu 2-5 menit tergantung koneksi internet

**Output yang diharapkan:**
```
added 500+ packages in 2m
```

**Jika ada warning:** Itu normal, abaikan saja selama tidak ada ERROR.

**Jika ada error EPERM (Windows):**
```bash
# Jalankan PowerShell atau CMD sebagai Administrator
# Atau coba command ini:
npm cache clean --force
npm install
```

### 3. Verifikasi Instalasi

Pastikan folder-folder ini sudah ada:
```
websiteIPJ/
├── node_modules/     ← Harus ada (berisi 500+ package)
├── app/              ← Harus ada
├── components/       ← Harus ada
├── lib/              ← Harus ada
├── messages/         ← Harus ada
├── package.json      ← Harus ada
└── package-lock.json ← Harus ada (setelah npm install)
```

---

## Setup Environment Variables

Environment variables adalah pengaturan rahasia yang tidak boleh di-share ke public.

### 1. Buat File `.env.local`

Di folder root project (websiteIPJ), buat file baru bernama `.env.local`

**Cara membuat:**

**Windows (PowerShell/CMD):**
```bash
# Di folder project
type nul > .env.local
```

**macOS/Linux:**
```bash
touch .env.local
```

**Atau via VS Code:**
- File → New File
- Save As: `.env.local`

### 2. Isi Template Environment Variables

Buka file `.env.local` dan copy-paste template ini:

```env
# ============================================
# SUPABASE CONFIGURATION
# ============================================
# Get dari: https://supabase.com/dashboard/project/YOUR_PROJECT/settings/api

NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxxxxxxxxxx
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxxxxxxxxxx

# ============================================
# SANITY.IO CONFIGURATION
# ============================================
# Get dari: https://sanity.io/manage/personal/project/YOUR_PROJECT

NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# ============================================
# RESEND CONFIGURATION
# ============================================
# Get dari: https://resend.com/api-keys

RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=faridalfarizi@intiboga.com
```

**PENTING:** Jangan commit file `.env.local` ke Git! File ini sudah ada di `.gitignore`.

### 3. Penjelasan Setiap Variable

| Variable | Penjelasan | Dimana Mendapatkan |
|----------|------------|-------------------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL project Supabase Anda | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public key untuk akses database | Supabase Dashboard → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Secret key (jangan di-share!) | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ID project Sanity Anda | Sanity Dashboard |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset name (biasanya "production") | Sanity Dashboard |
| `SANITY_API_TOKEN` | Token untuk akses Sanity API | Sanity Dashboard → API |
| `RESEND_API_KEY` | API key untuk kirim email | Resend Dashboard |
| `CONTACT_EMAIL` | Email tujuan untuk inquiry | Email perusahaan |

**Note:** Variable yang diawali `NEXT_PUBLIC_` akan terekspos ke browser (aman untuk public). Variable tanpa prefix hanya ada di server (rahasia).

---

## Setup Supabase (Database)

Supabase adalah backend-as-a-service yang menyediakan PostgreSQL database.

### 1. Buat Account Supabase

1. Buka https://supabase.com
2. Klik "Start your project"
3. Sign up dengan:
   - GitHub (recommended)
   - Email
   - Google

### 2. Buat Project Baru

1. Klik "New Project"
2. Isi form:
   - **Name:** `intiboga-website` (atau nama lain)
   - **Database Password:** Buat password yang kuat (SIMPAN password ini!)
   - **Region:** Singapore (recommended untuk Indonesia)
   - **Pricing Plan:** Free (cukup untuk development)
3. Klik "Create new project"
4. Tunggu 1-2 menit sampai project ready

### 3. Setup Database Table

1. Di Supabase Dashboard, klik **"SQL Editor"** di sidebar
2. Klik **"New Query"**
3. Copy-paste SQL script ini:

```sql
-- =============================================
-- CREATE TABLE LEADS
-- Table untuk menyimpan data inquiry dari website
-- =============================================

CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  company VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- =============================================
-- ENABLE ROW LEVEL SECURITY (RLS)
-- Keamanan agar data tidak bisa diakses sembarangan
-- =============================================

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- =============================================
-- CREATE POLICIES
-- Policy untuk mengatur siapa yang bisa akses data
-- =============================================

-- Policy 1: Siapa saja bisa INSERT (submit form)
CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy 2: Hanya authenticated users yang bisa READ
CREATE POLICY "Authenticated users can read leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- =============================================
-- CREATE INDEXES
-- Index untuk mempercepat query
-- =============================================

-- Index untuk sort by created_at
CREATE INDEX IF NOT EXISTS idx_leads_created_at 
  ON leads(created_at DESC);

-- Index untuk search by email
CREATE INDEX IF NOT EXISTS idx_leads_email 
  ON leads(email);

-- Index untuk search by company
CREATE INDEX IF NOT EXISTS idx_leads_company 
  ON leads(company);

-- =============================================
-- SUCCESS MESSAGE
-- =============================================

SELECT 'Database setup completed successfully!' as status;
```

4. Klik **"Run"** atau tekan `Ctrl+Enter`
5. Jika berhasil, akan muncul pesan: "Database setup completed successfully!"

### 4. Verifikasi Table

1. Klik **"Table Editor"** di sidebar
2. Anda harus melihat table bernama **"leads"**
3. Klik table tersebut untuk lihat struktur:
   - ✅ Column: id, name, email, phone, company, message, created_at
   - ✅ RLS: Enabled
   - ✅ Policies: 2 policies

### 5. Dapatkan API Keys

1. Klik **"Settings"** di sidebar (icon gear)
2. Klik **"API"**
3. Copy informasi berikut ke `.env.local`:

**Project URL:**
```
https://xxxxxxxxxxxxx.supabase.co
```
→ Paste ke `NEXT_PUBLIC_SUPABASE_URL`

**anon/public key:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxxxxxxx
```
→ Paste ke `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**service_role key:** (Scroll ke bawah, klik "Reveal")
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxxxxxxx
```
→ Paste ke `SUPABASE_SERVICE_ROLE_KEY`

**PENTING:** Service role key adalah SECRET! Jangan share atau commit ke Git!

### 6. Test Connection (Opsional)

Di SQL Editor, jalankan query test:
```sql
-- Test insert data
INSERT INTO leads (name, email, phone, company, message) 
VALUES ('Test User', 'test@example.com', '081234567890', 'Test Company', 'Test message');

-- Test read data
SELECT * FROM leads;

-- Delete test data
DELETE FROM leads WHERE email = 'test@example.com';
```

---

## Setup Sanity.io (CMS)

Sanity.io adalah Headless CMS untuk mengelola content website.

### 1. Install Sanity CLI

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Verifikasi instalasi
sanity --version
# Harus muncul: @sanity/cli version 3.x.x
```

**Jika error permission (macOS/Linux):**
```bash
sudo npm install -g @sanity/cli
```

### 2. Buat Account & Login

```bash
# Login ke Sanity
sanity login

# Akan membuka browser untuk login
# Login dengan:
# - GitHub (recommended)
# - Google
# - Email
```

Setelah login sukses, terminal akan menampilkan: "Login successful"

### 3. Buat Project Sanity

**Pilihan A: Via Terminal (Recommended)**

```bash
# Di folder project, masuk ke folder sanity
cd sanity

# Initialize Sanity project
sanity init

# Jawab pertanyaan:
# ? Select project to use: Create new project
# ? Your project name: PT Intiboga Pangan Jaya
# ? Use the default dataset configuration? Yes
# ? Project output path: (tekan Enter untuk default)
# ? Select project template: Clean project with no predefined schemas
```

**Pilihan B: Via Dashboard (Manual)**

1. Buka https://www.sanity.io/manage
2. Klik "Create New Project"
3. Isi form:
   - **Project name:** PT Intiboga Pangan Jaya
   - **Dataset:** production
4. Klik "Create"

### 4. Dapatkan Project ID

**Via Terminal:**
```bash
# Di folder sanity
sanity debug --secrets
```

Atau

**Via Dashboard:**
1. Buka https://www.sanity.io/manage
2. Klik project Anda
3. Klik "Settings"
4. Copy **Project ID**

```
Project ID: abc123xyz
```
→ Paste ke `NEXT_PUBLIC_SANITY_PROJECT_ID` di `.env.local`

### 5. Generate API Token

1. Di Sanity Dashboard, klik **"API"** di sidebar
2. Klik **"Tokens"** tab
3. Klik **"Add API Token"**
4. Isi form:
   - **Name:** Website Access Token
   - **Permissions:** Editor (atau Viewer jika hanya baca)
5. Klik **"Save"**
6. **COPY TOKEN SEKARANG!** (tidak bisa dilihat lagi setelah close)

```
sk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
→ Paste ke `SANITY_API_TOKEN` di `.env.local`

### 6. Deploy Sanity Studio

```bash
# Di folder sanity
cd sanity

# Deploy studio ke Sanity hosting
sanity deploy

# Jawab pertanyaan:
# ? Studio hostname: intiboga-cms (atau nama lain, harus unique)
```

Jika berhasil, akan muncul:
```
✔ Deployed to: https://intiboga-cms.sanity.studio
```

**Simpan URL ini!** Ini adalah URL untuk akses CMS.

### 7. Verifikasi Setup Sanity

1. Buka browser
2. Akses URL studio: `https://intiboga-cms.sanity.studio`
3. Login dengan account Sanity Anda
4. Anda harus melihat Sanity Studio interface
5. Di sidebar, Anda akan melihat semua content types:
   - Company Profile
   - Vision & Mission
   - Core Values
   - Products
   - Product Applications
   - Advantages
   - Client Segments
   - Contact Information
   - Gallery

### 8. Populate Initial Content (Opsional)

Anda bisa mulai mengisi content via Sanity Studio:

1. Klik "Company Profile" di sidebar
2. Klik "Create new Company Profile"
3. Isi form dengan data perusahaan
4. Klik "Publish"

Ulangi untuk content types lainnya.

**Note:** Content ini akan otomatis muncul di website setelah di-publish.

---

## Setup Resend (Email)

Resend adalah service untuk mengirim email dari website.

### 1. Buat Account Resend

1. Buka https://resend.com
2. Klik "Sign Up"
3. Sign up dengan:
   - GitHub (recommended)
   - Google
   - Email

### 2. Verifikasi Email

1. Check email inbox Anda
2. Klik link verifikasi dari Resend
3. Email Anda akan terverifikasi

### 3. Add Domain (Production) atau Test dengan Default

**Untuk Development/Testing:**
- Anda bisa langsung menggunakan domain default Resend
- Email akan terkirim dari: `onboarding@resend.dev`
- **Limitation:** Hanya bisa kirim ke email yang terdaftar

**Untuk Production:**

1. Di Resend Dashboard, klik **"Domains"**
2. Klik **"Add Domain"**
3. Masukkan domain Anda: `intiboga.com`
4. Tambahkan DNS records yang diberikan ke Hostinger:
   - SPF record
   - DKIM record
   - DMARC record (optional)
5. Klik **"Verify"**
6. Tunggu sampai status: "Verified" (5-30 menit)

### 4. Generate API Key

1. Di Resend Dashboard, klik **"API Keys"**
2. Klik **"Create API Key"**
3. Isi form:
   - **Name:** Website Contact Form
   - **Permission:** Sending access
   - **Domain:** All domains (atau pilih domain specific)
4. Klik **"Create"**
5. **COPY API KEY SEKARANG!** (tidak bisa dilihat lagi)

```
re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
→ Paste ke `RESEND_API_KEY` di `.env.local`

### 5. Test Email (Opsional)

**Via Resend Dashboard:**

1. Klik **"Emails"** di sidebar
2. Klik **"Send Test Email"**
3. Isi:
   - **To:** email Anda
   - **Subject:** Test Email
   - **Body:** Hello from Resend!
4. Klik **"Send"**
5. Check inbox Anda

**Via API (Advanced):**
```bash
curl -X POST https://api.resend.com/emails \
  -H 'Authorization: Bearer re_your_api_key' \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "onboarding@resend.dev",
    "to": "your-email@example.com",
    "subject": "Test Email",
    "html": "<p>Hello from Resend!</p>"
  }'
```

---

## Menjalankan Development Server

Setelah semua setup di atas selesai, saatnya menjalankan website!

### 1. Verifikasi Environment Variables

Pastikan file `.env.local` sudah terisi lengkap:

```bash
# Check apakah file ada
# Windows
dir .env.local

# macOS/Linux
ls -la .env.local
```

Buka `.env.local` dan pastikan semua variable sudah terisi (tidak ada yang masih `xxxxx`).

### 2. Jalankan Development Server

```bash
# Pastikan berada di folder root project
cd "C:\MATAKULIAH SEMESTER 5\websiteIPJ"

# Jalankan development server
npm run dev
```

**Output yang diharapkan:**
```
  ▲ Next.js 15.1.6
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Starting...
 ✓ Ready in 2.5s
```

### 3. Akses Website

Buka browser dan akses:

**Bahasa Indonesia:**
```
http://localhost:3000/id
```

**English:**
```
http://localhost:3000/en
```

**Default (auto-redirect ke /id):**
```
http://localhost:3000
```

### 4. Verifikasi Halaman-Halaman

Test semua halaman berfungsi:

- ✅ `http://localhost:3000/id` - Homepage (Bahasa Indonesia)
- ✅ `http://localhost:3000/id/about` - About page
- ✅ `http://localhost:3000/id/products` - Products page
- ✅ `http://localhost:3000/id/advantages` - Advantages page
- ✅ `http://localhost:3000/id/contact` - Contact page
- ✅ `http://localhost:3000/en` - Homepage (English)
- ✅ `http://localhost:3000/en/about` - About page (English)

### 5. Test Language Switcher

1. Di navigation bar, klik tombol bahasa (icon 🌐)
2. Pilih bahasa lain
3. Pastikan:
   - URL berubah dari `/id/` ke `/en/` (atau sebaliknya)
   - Teks di halaman berubah sesuai bahasa
   - Tidak ada error di console browser

### 6. Monitoring Development Server

**Terminal akan menampilkan:**
- Request yang masuk
- Compilation status
- Error jika ada

**Jika ada error:** Baca error message di terminal, biasanya menunjukkan:
- Missing environment variable
- Syntax error di code
- Missing dependency

**Stop Development Server:**
```bash
# Tekan Ctrl+C di terminal
# Konfirmasi dengan Y jika ditanya
```

**Restart Development Server:**
```bash
# Setelah stop, jalankan lagi
npm run dev
```

---

## Testing Website

### 1. Test Functionality

#### A. Test Navigation

- [ ] Klik semua menu di navigation bar
- [ ] Pastikan semua link berfungsi
- [ ] Test di desktop dan mobile view
- [ ] Test language switcher

#### B. Test Contact Form

1. Buka halaman Contact (`/id/contact`)
2. Isi form dengan data test:
   - **Nama:** Test User
   - **Email:** your-email@example.com (email ASLI Anda)
   - **Phone:** 081234567890
   - **Company:** Test Company
   - **Message:** This is a test message from contact form.
3. Klik **"Kirim Pesan"** / **"Send Message"**
4. Tunggu beberapa detik
5. Pastikan:
   - [ ] Muncul success message
   - [ ] Form ter-reset
   - [ ] Tidak ada error

#### C. Verifikasi Data Tersimpan

1. Buka Supabase Dashboard
2. Klik **"Table Editor"**
3. Klik table **"leads"**
4. Pastikan ada data baru dengan info yang Anda submit
5. Check semua field terisi dengan benar

#### D. Verifikasi Email Terkirim

1. Check inbox email yang Anda masukkan di form
2. Pastikan ada email baru dari website
3. Check isi email sesuai dengan data yang Anda submit

**Note:** Jika email tidak masuk:
- Check spam folder
- Tunggu 1-2 menit
- Pastikan RESEND_API_KEY sudah benar
- Check Resend Dashboard → Emails untuk log

### 2. Test Responsive Design

#### Desktop (1920px)
```bash
# Buka DevTools: F12
# Toggle device toolbar: Ctrl+Shift+M
# Pilih: Responsive
# Set width: 1920px
```

Test:
- [ ] Navigation tidak terpotong
- [ ] Hero section terlihat bagus
- [ ] Cards/components align dengan baik
- [ ] Footer tidak berantakan

#### Tablet (768px)
```bash
# Set width: 768px
```

Test:
- [ ] Layout berubah jadi 2 columns atau stack
- [ ] Navigation tetap berfungsi
- [ ] Images tidak pecah
- [ ] Text readable

#### Mobile (375px)
```bash
# Set width: 375px
```

Test:
- [ ] Hamburger menu muncul
- [ ] Mobile menu berfungsi
- [ ] Content stack vertical
- [ ] Buttons ukuran pas
- [ ] Form inputs ukuran pas

### 3. Test Browser Compatibility

Test di browser yang berbeda:

- [ ] **Chrome** (Desktop & Mobile)
- [ ] **Firefox**
- [ ] **Safari** (macOS & iOS)
- [ ] **Edge**

Pastikan:
- Tidak ada error di console
- Layout tidak rusak
- Semua fitur berfungsi
- Animasi berjalan smooth

### 4. Test Performance

1. Buka Chrome DevTools (F12)
2. Klik tab **"Lighthouse"**
3. Klik **"Analyze page load"**
4. Tunggu hasil

**Target Score:**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

**Jika score rendah:**
- Optimize images (compress, resize)
- Remove unused code
- Enable caching
- Lazy load images

---

## Deploy ke Vercel

Setelah testing lokal berhasil, deploy ke production!

### 1. Persiapan Deploy

#### A. Buat Account Vercel

1. Buka https://vercel.com
2. Klik **"Sign Up"**
3. Sign up dengan:
   - **GitHub** (recommended, paling mudah)
   - GitLab
   - Bitbucket
   - Email

#### B. Install Vercel CLI (Opsional)

```bash
npm install -g vercel

# Verifikasi
vercel --version
```

#### C. Push Code ke Git (Jika Menggunakan Git)

```bash
# Initialize git (jika belum)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: PT Intiboga Pangan Jaya website"

# Add remote (GitHub/GitLab/Bitbucket)
git remote add origin <your-repository-url>

# Push
git push -u origin main
```

**PENTING:** Pastikan `.env.local` ada di `.gitignore`! Jangan commit file rahasia!

### 2. Deploy via Vercel Dashboard

#### Method 1: Import dari Git (Recommended)

1. Login ke Vercel Dashboard
2. Klik **"Add New Project"**
3. Klik **"Import Git Repository"**
4. Pilih repository Anda (GitHub/GitLab/Bitbucket)
5. Klik **"Import"**

#### Method 2: Deploy via CLI

```bash
# Di folder project
vercel

# Jawab pertanyaan:
# ? Set up and deploy "~/websiteIPJ"? Y
# ? Which scope do you want to deploy to? (pilih account Anda)
# ? Link to existing project? N
# ? What's your project's name? intiboga-website
# ? In which directory is your code located? ./
```

### 3. Configure Project

Di Vercel Dashboard:

1. Klik project Anda
2. Klik **"Settings"**
3. Configure build settings:

**Framework Preset:** Next.js

**Build Command:**
```bash
npm run build
```

**Output Directory:**
```
.next
```

**Install Command:**
```bash
npm install
```

**Development Command:**
```bash
npm run dev
```

### 4. Add Environment Variables

**SANGAT PENTING!** Tanpa ini, website tidak akan berfungsi.

1. Di Vercel Dashboard, klik **"Settings"**
2. Klik **"Environment Variables"**
3. Add semua variables dari `.env.local`:

**Format:**
| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxx.supabase.co` | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGc...` | Production, Preview, Development |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGc...` | Production, Preview |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `abc123` | Production, Preview, Development |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Production, Preview, Development |
| `SANITY_API_TOKEN` | `sk...` | Production, Preview |
| `RESEND_API_KEY` | `re_...` | Production, Preview |
| `CONTACT_EMAIL` | `faridalfarizi@intiboga.com` | Production, Preview, Development |

**Tips:**
- Copy-paste dari `.env.local` untuk menghindari typo
- Double-check tidak ada spasi di awal/akhir value
- Pastikan semua environment selected (Production, Preview, Development)

### 5. Deploy!

1. Klik **"Deployments"** tab
2. Klik **"Redeploy"** (jika diperlukan)
3. Atau push ke Git, Vercel akan auto-deploy

**Proses Deploy:**
- Building: 2-3 menit
- Status akan berubah dari "Building" → "Ready"

**Jika berhasil:**
```
✅ Deployment Ready
🌐 https://intiboga-website.vercel.app
```

### 6. Test Production Website

1. Buka URL yang diberikan Vercel
2. Test semua halaman
3. Test contact form
4. Verifikasi email terkirim
5. Check Supabase untuk data baru

**URLs to test:**
- `https://your-project.vercel.app/id`
- `https://your-project.vercel.app/en`
- `https://your-project.vercel.app/id/about`
- `https://your-project.vercel.app/id/contact`

---

## Setup Domain Custom

Ganti URL default Vercel dengan domain sendiri.

### 1. Beli Domain (Jika Belum Punya)

**Recommended Registrar:**
- Hostinger (untuk Indonesia)
- Namecheap
- GoDaddy
- Cloudflare

**Tips Memilih Domain:**
- Gunakan `.com` atau `.id` atau `.co.id`
- Pendek dan mudah diingat
- Sesuai dengan nama perusahaan

**Contoh:**
- `intiboga.com` (recommended)
- `intiboga.co.id`
- `intibogapangan.com`

### 2. Add Domain di Vercel

1. Di Vercel Dashboard, pilih project Anda
2. Klik **"Settings"**
3. Klik **"Domains"**
4. Klik **"Add Domain"**
5. Masukkan domain: `intiboga.com`
6. Klik **"Add"**

Vercel akan memberikan DNS configuration:

**Untuk Root Domain (@):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Untuk WWW:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. Configure DNS di Hostinger

#### Login ke Hostinger

1. Buka https://hostinger.com
2. Login ke account Anda
3. Klik **"Domains"**
4. Pilih domain Anda

#### Update DNS Records

1. Klik **"Manage"**
2. Klik **"DNS / Name Servers"**
3. Scroll ke **"DNS Records"**

**Delete existing A record dan CNAME (jika ada):**
- Delete yang pointing ke old hosting

**Add new records:**

**Record 1 - Root Domain:**
```
Type: A
Name: @ (atau leave blank)
Value: 76.76.21.21
TTL: 14400 (atau 3600)
```

**Record 2 - WWW Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 14400
```

4. Klik **"Save"** atau **"Add Record"**

### 4. Verify Domain di Vercel

1. Kembali ke Vercel Dashboard
2. Di Domains settings, klik **"Verify"**
3. Tunggu 5-60 menit untuk DNS propagation
4. Jika berhasil, status akan: **"Valid Configuration"**

**Check DNS Propagation:**
- Buka https://dnschecker.org
- Masukkan domain Anda
- Check A record dan CNAME record
- Harus menunjuk ke Vercel

### 5. Configure SSL (HTTPS)

Vercel otomatis menyediakan SSL certificate gratis!

1. Setelah domain verified
2. Tunggu 1-2 menit
3. SSL certificate akan otomatis di-issue
4. Website otomatis jadi HTTPS

**Verify SSL:**
```
https://intiboga.com
```

Browser harus menampilkan **padlock icon** 🔒

### 6. Redirect Configuration

**Recommended Setup:**

**Redirect www → non-www** (atau sebaliknya)

Di Vercel, otomatis ter-setup:
- `www.intiboga.com` → redirect ke → `intiboga.com`
- Atau sebaliknya tergantung preferensi

**Force HTTPS:**
Vercel otomatis redirect HTTP → HTTPS

### 7. Test Domain

Test semua URL:

- [ ] `http://intiboga.com` → redirect ke → `https://intiboga.com`
- [ ] `http://www.intiboga.com` → redirect ke → `https://intiboga.com`
- [ ] `https://intiboga.com/id` → Website homepage
- [ ] `https://intiboga.com/en` → English homepage
- [ ] Semua halaman accessible

---

## Troubleshooting

### Problem 1: `npm install` Error

**Error: EPERM (Windows)**
```
Error: EPERM: operation not permitted
```

**Solution:**
```bash
# Jalankan PowerShell/CMD sebagai Administrator
# Atau:
npm cache clean --force
npm install
```

**Error: EACCES (macOS/Linux)**
```
Error: EACCES: permission denied
```

**Solution:**
```bash
sudo npm install
# Atau fix npm permissions:
sudo chown -R $USER ~/.npm
```

---

### Problem 2: Development Server Error

**Error: Port 3000 already in use**
```
Error: Port 3000 is already in use
```

**Solution:**
```bash
# Kill process di port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Atau gunakan port lain:
npm run dev -- -p 3001
```

---

### Problem 3: Environment Variables Tidak Terbaca

**Error: Cannot connect to Supabase**
```
Error: supabaseUrl is required
```

**Solution:**
1. Pastikan file `.env.local` ada di root folder
2. Restart development server (stop dan `npm run dev` lagi)
3. Check typo di variable name (case-sensitive!)
4. Pastikan tidak ada spasi di awal/akhir value
5. Gunakan double quotes jika value ada spasi

---

### Problem 4: Sanity Content Tidak Muncul

**Problem:** Content dari Sanity tidak tampil di website

**Solution:**
1. Pastikan content sudah di-**Publish** di Sanity Studio (bukan draft)
2. Check `NEXT_PUBLIC_SANITY_PROJECT_ID` benar
3. Check `SANITY_API_TOKEN` valid dan punya permission
4. Restart development server
5. Clear browser cache (Ctrl+Shift+R)

---

### Problem 5: Contact Form Tidak Mengirim Email

**Problem:** Form submit berhasil tapi email tidak terkirim

**Check:**
1. **Resend API Key**
   - Pastikan `RESEND_API_KEY` benar
   - Check di Resend Dashboard → API Keys
   - Generate new key jika perlu

2. **Email Verified**
   - Jika pakai default domain, only verified emails bisa receive
   - Add email Anda di Resend Dashboard → Settings

3. **Check Logs**
   - Buka Resend Dashboard → Emails
   - Lihat log email yang terkirim
   - Check error message

4. **Check Browser Console**
   - Buka DevTools (F12)
   - Tab Console
   - Lihat error message

---

### Problem 6: Build Error di Vercel

**Error: Build failed**
```
Error: Module not found
```

**Solution:**
1. **Check Dependencies**
   ```bash
   npm install
   npm run build # Test build locally
   ```

2. **Check Environment Variables**
   - Pastikan semua variables ada di Vercel
   - Copy exact dari `.env.local`

3. **Check Logs**
   - Di Vercel Dashboard → Deployments
   - Klik failed deployment
   - Read error message
   - Fix accordingly

---

### Problem 7: Domain Tidak Pointing ke Vercel

**Problem:** Domain masih menunjuk ke old hosting

**Solution:**
1. **Check DNS Records**
   - Buka Hostinger DNS management
   - Pastikan A record = `76.76.21.21`
   - Pastikan CNAME www = `cname.vercel-dns.com`

2. **Clear DNS Cache**
   ```bash
   # Windows
   ipconfig /flushdns
   
   # macOS
   sudo dscacheutil -flushcache
   
   # Linux
   sudo systemd-resolve --flush-caches
   ```

3. **Wait for Propagation**
   - DNS propagation bisa 5 menit - 48 jam
   - Check https://dnschecker.org

4. **Try Incognito/Private Browsing**
   - Clear browser cache
   - Try different device/network

---

### Problem 8: Language Switcher Tidak Berfungsi

**Problem:** Klik language switcher tidak ganti bahasa

**Solution:**
1. **Check Middleware**
   - Pastikan file `middleware.ts` ada
   - Check tidak ada typo

2. **Check Browser Console**
   - Buka DevTools (F12)
   - Lihat error message
   - Biasanya ada clue

3. **Restart Server**
   ```bash
   # Stop server (Ctrl+C)
   # Start again
   npm run dev
   ```

4. **Clear Cache**
   - Clear browser cache
   - Hard refresh (Ctrl+Shift+R)

---

## Appendix

### A. Struktur Project Lengkap

```
websiteIPJ/
├── app/
│   ├── [locale]/              # Dynamic locale routes
│   │   ├── layout.tsx         # Locale layout
│   │   ├── page.tsx           # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   └── page.tsx
│   │   ├── advantages/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Contact form API
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   └── dropdown-menu.tsx
│   ├── layout/
│   │   ├── navigation.tsx
│   │   └── footer.tsx
│   ├── home/                  # Homepage sections
│   │   ├── hero.tsx
│   │   ├── highlight-metrics.tsx
│   │   ├── product-highlight.tsx
│   │   ├── how-we-work.tsx
│   │   └── final-cta.tsx
│   ├── about/                 # About page sections
│   ├── products/              # Products page sections
│   ├── advantages/            # Advantages page sections
│   ├── contact/               # Contact page sections
│   └── language-switcher.tsx
├── lib/
│   ├── utils.ts
│   ├── supabase.ts
│   ├── sanity.ts
│   ├── drizzle.ts
│   └── schema.ts
├── messages/
│   ├── id.json                # Indonesian translations
│   └── en.json                # English translations
├── public/                    # Static files
├── sanity/                    # Sanity CMS
│   ├── schemas/
│   │   ├── index.ts
│   │   ├── companyProfile.ts
│   │   ├── visionMission.ts
│   │   ├── coreValues.ts
│   │   ├── products.ts
│   │   ├── productApplications.ts
│   │   ├── advantages.ts
│   │   ├── clientSegments.ts
│   │   ├── contactInfo.ts
│   │   └── gallery.ts
│   ├── sanity.config.ts
│   └── package.json
├── supabase/
│   └── migrations/
│       └── 001_create_leads_table.sql
├── .env.local                 # Environment variables (local)
├── .env.example               # Environment template
├── .gitignore
├── drizzle.config.ts
├── i18n.ts                    # i18n configuration
├── middleware.ts              # Locale routing
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── [Documentation files].md
```

### B. Command Reference

**Development:**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run linter
```

**Database:**
```bash
npm run db:generate  # Generate migrations
npm run db:migrate   # Run migrations
npm run db:studio    # Open Drizzle Studio
```

**Sanity:**
```bash
cd sanity
sanity dev           # Start Sanity Studio locally
sanity deploy        # Deploy Sanity Studio
sanity dataset       # Manage datasets
```

**Vercel:**
```bash
vercel               # Deploy to Vercel
vercel --prod        # Deploy to production
vercel logs          # View deployment logs
vercel env           # Manage environment variables
```

### C. Useful Links

**Documentation:**
- Next.js: https://nextjs.org/docs
- TypeScript: https://www.typescriptlang.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion
- next-intl: https://next-intl-docs.vercel.app

**Services:**
- Supabase: https://supabase.com/docs
- Sanity: https://www.sanity.io/docs
- Resend: https://resend.com/docs
- Vercel: https://vercel.com/docs

**Tools:**
- VS Code: https://code.visualstudio.com
- Git: https://git-scm.com/doc
- Node.js: https://nodejs.org/docs

### D. Support & Contact

**Project Documentation:**
- README.md
- I18N_GUIDE.md
- DEPLOYMENT.md
- FITUR_BILINGUAL.md

**Business Contact:**
- Email: faridalfarizi@intiboga.com
- Phone: +62 813 6119 6131

**Technical Support:**
- Check documentation files
- Search error in Google
- Ask in community forums

---

## Penutup

Selamat! Anda telah menyelesaikan setup website PT Intiboga Pangan Jaya.

### Checklist Final

Pastikan semua sudah beres:

- [x] ✅ Node.js installed
- [x] ✅ Project dependencies installed
- [x] ✅ Environment variables configured
- [x] ✅ Supabase setup complete
- [x] ✅ Sanity.io setup complete
- [x] ✅ Resend setup complete
- [x] ✅ Development server running
- [x] ✅ All pages working
- [x] ✅ Contact form functional
- [x] ✅ Bilingual working
- [ ] ⏳ Deployed to Vercel
- [ ] ⏳ Custom domain configured
- [ ] ⏳ SSL certificate active
- [ ] ⏳ Production testing complete

### Next Steps

1. **Populate Content**
   - Fill Sanity CMS dengan content real
   - Upload images
   - Publish all content

2. **Test Thoroughly**
   - Test di berbagai device
   - Test di berbagai browser
   - Test contact form multiple times

3. **SEO Optimization**
   - Submit sitemap ke Google Search Console
   - Add Google Analytics (optional)
   - Optimize meta descriptions

4. **Monitor**
   - Check Vercel analytics
   - Monitor Supabase usage
   - Check email deliverability

### Maintenance

**Weekly:**
- Check contact form submissions
- Review leads in Supabase
- Monitor website uptime

**Monthly:**
- Update content via Sanity
- Review analytics
- Backup database

**Quarterly:**
- Update dependencies
- Security audit
- Performance review

---

**Terima kasih telah menggunakan panduan ini!**

Jika ada pertanyaan, jangan ragu untuk menghubungi tim development atau check dokumentasi lainnya.

**Good luck! 🚀**

---

**Last Updated:** 29 Januari 2024  
**Version:** 1.0.0  
**Author:** Development Team  
**For:** PT Intiboga Pangan Jaya
