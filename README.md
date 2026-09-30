# MH Travel Agency Indonesia

Solusi Visa & Dokumen Perjalanan Anda. Website resmi layanan jasa konsultasi visa, pembuatan itinerary perjalanan, invitation letter, penerjemahan dokumen, appointment assistance, dan legalitas dokumen perjalanan mancanegara.

## Features

* Visa services
* Document assistance
* WhatsApp consultation
* Official payment information
* Payment confirmation
* Mobile-first
* Safari optimized
* Responsive
* SEO ready
* Netlify ready

## Informasi Bisnis Resmi

* **Nama Perusahaan:** MH TRAVEL AGENCY INDONESIA
* **WhatsApp Resmi:** 087899804147 (Internasional: +62 878-9980-4147)
* **Bank Pembayaran Resmi:** Bank Central Asia (BCA)
* **Nomor Rekening:** 2941084780
* **Atas Nama:** MUHAMMAD HIDAYAT

## Panduan Perubahan & Kustomisasi

Seluruh data bisnis, nomor WhatsApp, dan rekening resmi terpusat dalam satu file konfigurasi sehingga sangat mudah dimodifikasi:

* **File Konfigurasi Utama:** `src/config.ts` (dan `src/config.js`)
  * Ubah nama bisnis: properti `BUSINESS_NAME`
  * Ubah nomor WhatsApp: properti `WHATSAPP_NUMBER` dan `WHATSAPP_DISPLAY`
  * Ubah rekening pembayaran: properti `BANK_NAME`, `BANK_ACCOUNT_NUMBER`, dan `BANK_ACCOUNT_NAME`
  * Ubah email & kontak: properti `EMAIL`, `ADDRESS`, dan `OPERATIONAL_HOURS`
  * Ubah tautan media sosial: properti `INSTAGRAM_URL`, `TIKTOK_URL`, dan `FACEBOOK_URL`

* **Daftar Layanan & Konten:**
  * Daftar 12 Layanan: `src/data/services.ts`
  * Destinasi Negara & Persyaratan: `src/data/countries.ts`
  * Tanya Jawab (FAQ) & Dokumen Umum: `src/data/faqAndDocs.ts`

* **Logo & Favicon:**
  * Favicon SVG: `public/favicon.svg`
  * Logo teks & badge di Navbar: `src/components/Navbar.tsx`

* **Gambar Hero & Visual:**
  * Gambar hero: `src/assets/images/hero_travel_passport_1790756596114.jpg`
  * Gambar meja konsultasi: `src/assets/images/visa_consultation_desk_1790756616969.jpg`

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Aplikasi akan berjalan secara lokal di `http://localhost:3000`.

## Build

```bash
npm run build
```

Hasil build statis siap deploy akan dihasilkan pada folder `dist/`.

## Deploy

Push repository ke GitHub kemudian hubungkan repository dengan Netlify. Konfigurasi SPA rewrite telah disediakan di `netlify.toml`.
