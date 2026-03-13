# 🔧 Troubleshooting: npm run dev Error

## Problem Yang Ditemukan

Error: **Failed to load SWC binary for win32/x64**

Ini adalah masalah umum di Next.js 15 di Windows karena SWC compiler binary tidak ter-install dengan benar.

---

## Solusi Cepat (Pilih Salah Satu)

### ✅ Solusi 1: Install Ulang Dependencies (Recommended)

```bash
# 1. Hapus node_modules dan package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json

# 2. Clear npm cache
npm cache clean --force

# 3. Install ulang
npm install

# 4. Try run dev
npm run dev
```

### ✅ Solusi 2: Install SWC Binary Manual

```bash
# Install @next/swc-win32-x64-msvc secara manual
npm install @next/swc-win32-x64-msvc --save-optional

# Try run dev
npm run dev
```

### ✅ Solusi 3: Gunakan Node Version Yang Tepat

```bash
# Check Node version
node --version

# Harus: v18.x.x atau v20.x.x
# Jika beda, install Node.js versi yang tepat dari nodejs.org
```

---

## Langkah-Langkah Detail

### Step 1: Backup .env.local (Penting!)

```bash
# Copy .env.local ke tempat aman
Copy-Item .env.local .env.local.backup
```

### Step 2: Clean Install

```bash
# 1. Close semua terminal yang running
# Ctrl+C untuk stop npm run dev jika masih jalan

# 2. Delete node_modules folder
Remove-Item -Recurse -Force node_modules

# 3. Delete package-lock.json
Remove-Item -Force package-lock.json

# 4. Delete .next folder (jika ada)
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# 5. Clear npm cache
npm cache clean --force

# 6. Install dependencies lagi
npm install
```

### Step 3: Verify Installation

```bash
# Check apakah SWC binary ter-install
Get-ChildItem -Recurse node_modules/@next | Where-Object {$_.Name -like "*swc*"}

# Harus ada folder: @next/swc-win32-x64-msvc
```

### Step 4: Run Dev Server

```bash
npm run dev
```

---

## Jika Masih Error

### Error: EPERM atau Permission Denied

**Penyebab:** Antivirus atau Windows Defender blocking.

**Solusi:**
```bash
# 1. Run PowerShell sebagai Administrator
# Klik kanan PowerShell → Run as Administrator

# 2. Disable real-time protection sementara
# Windows Security → Virus & threat protection → Manage settings → Off

# 3. Try install lagi
npm install

# 4. Enable protection lagi setelah selesai
```

### Error: Network timeout

**Solusi:**
```bash
# Gunakan npm registry yang lebih cepat
npm config set registry https://registry.npmjs.org/

# Atau gunakan yarn sebagai alternatif
npm install -g yarn
yarn install
yarn dev
```

### Error: Node version incompatible

**Solusi:**
```bash
# Check Node version
node --version

# Next.js 15 requires Node.js 18.17 or later
# Download dari: https://nodejs.org
```

---

## Alternative: Gunakan Yarn

Jika npm tetap bermasalah, coba gunakan Yarn:

```bash
# 1. Install Yarn
npm install -g yarn

# 2. Delete node_modules
Remove-Item -Recurse -Force node_modules

# 3. Install dengan Yarn
yarn install

# 4. Run dev dengan Yarn
yarn dev
```

---

## Quick Fix One-Liner

Copy-paste command ini di PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue; Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue; npm cache clean --force; npm install; npm run dev
```

---

## Verify Sukses

Jika berhasil, Anda akan melihat:

```
  ▲ Next.js 15.1.6
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Starting...
 ✓ Ready in 2.5s
```

Kemudian buka: http://localhost:3000/id

---

## Masih Bermasalah?

### Check Logs Detail

```bash
# Run dengan verbose logging
npm run dev --verbose

# Atau check error log
npm run dev 2>&1 | Out-File -FilePath error-log.txt
notepad error-log.txt
```

### Check Folder Permissions

```bash
# Check apakah folder bisa di-write
Test-Path -Path "node_modules" -PathType Container

# Fix permissions (Run as Admin)
icacls "C:\MATAKULIAH SEMESTER 5\websiteIPJ" /grant Everyone:F /T
```

### Reinstall Node.js

1. Uninstall Node.js dari Control Panel
2. Delete folder:
   - `C:\Program Files\nodejs`
   - `C:\Users\[YourName]\AppData\Roaming\npm`
3. Download Node.js LTS dari https://nodejs.org
4. Install dengan default settings
5. Restart komputer
6. Try lagi: `npm install && npm run dev`

---

## Checklist Sebelum Ask Help

- [ ] Node.js version 18+ installed
- [ ] npm cache cleaned
- [ ] node_modules deleted dan reinstall
- [ ] .next folder deleted
- [ ] Run PowerShell as Administrator
- [ ] Antivirus temporary disabled
- [ ] Internet connection stable
- [ ] Disk space available (minimum 2GB)

---

**Last Updated:** 29 Januari 2024  
**Common for:** Windows 10/11 + Next.js 15
