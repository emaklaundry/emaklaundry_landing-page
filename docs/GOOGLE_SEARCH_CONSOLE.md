# Panduan Konfigurasi Google Search Console

Dokumen ini berisi langkah-langkah lengkap untuk mengintegrasikan website Emak Laundry dengan Google Search Console untuk monitoring performa SEO dan indexing di Google Search.

## Daftar Isi

1. [Persyaratan](#persyaratan)
2. [Langkah-langkah Konfigurasi](#langkah-langkah-konfigurasi)
3. [Verifikasi Kepemilikan Website](#verifikasi-kepemilikan-website)
4. [Submit Sitemap](#submit-sitemap)
5. [Monitoring dan Optimasi](#monitoring-dan-optimasi)
6. [Troubleshooting](#troubleshooting)

## Persyaratan

- Akun Google (Gmail)
- Website sudah deploy dan dapat diakses publik (https://emaklaundry.com)
- Akses ke file source code atau DNS management

## Langkah-langkah Konfigurasi

### 1. Membuat Akun Google Search Console

1. **Buka Google Search Console**

   - Kunjungi: https://search.google.com/search-console/
   - Login menggunakan akun Google Anda

2. **Tambahkan Property Baru**
   - Klik tombol **"Add Property"** atau **"Tambah Properti"**
   - Pilih tipe properti:
     - **Domain** (recommended): Mencakup semua subdomain dan protokol
       - Masukkan: `emaklaundry.com`
     - **URL prefix**: Hanya untuk URL spesifik
       - Masukkan: `https://emaklaundry.com`

### 2. Verifikasi Kepemilikan Website

#### Metode A: HTML Tag (Recommended untuk React Apps)

1. **Dapatkan Meta Tag Verifikasi**

   - Pilih metode **"HTML tag"**
   - Copy meta tag yang diberikan, contoh:
     ```html
     <meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXX" />
     ```

2. **Tambahkan ke SEO Component**

   - Buka file: `src/components/SEO.tsx`
   - Tambahkan meta tag di dalam `<Helmet>`:

   ```tsx
   <Helmet>
     {/* Existing meta tags */}
     <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   </Helmet>
   ```

3. **Deploy Perubahan**

   ```bash
   npm run build
   # Deploy ke production (Vercel/Netlify)
   ```

4. **Verifikasi**
   - Kembali ke Google Search Console
   - Klik tombol **"Verify"** atau **"Verifikasi"**

#### Metode B: HTML File Upload

1. **Download File Verifikasi**

   - Download file HTML dari Google Search Console
   - Contoh: `google1234567890abcdef.html`

2. **Upload ke Public Folder**

   - Pindahkan file ke folder `public/`
   - File akan tersedia di: `https://emaklaundry.com/google1234567890abcdef.html`

3. **Deploy dan Verifikasi**

#### Metode C: Domain Name Provider (Untuk Verifikasi Domain)

1. **Dapatkan TXT Record**

   - Google akan memberikan TXT record, contoh:
     ```
     google-site-verification=XXXXXXXXXXXXXXXXXXXXXX
     ```

2. **Tambahkan ke DNS Settings**

   - Login ke provider domain Anda (Namecheap, GoDaddy, dll)
   - Buka DNS Management
   - Tambahkan TXT record:
     - Type: `TXT`
     - Name: `@` atau kosong
     - Value: `google-site-verification=XXXXXXXXXXXXXXXXXXXXXX`
     - TTL: `Auto` atau `3600`

3. **Tunggu Propagasi DNS**

   - DNS propagasi memakan waktu 24-48 jam
   - Gunakan tools seperti https://dnschecker.org untuk cek status

4. **Verifikasi di Google Search Console**

### 3. Submit Sitemap

1. **Verifikasi Sitemap Tersedia**

   - Buka: `https://emaklaundry.com/sitemap.xml`
   - File sitemap sudah tersedia di `public/sitemap.xml`

2. **Submit Sitemap ke Google**

   - Di Google Search Console, pilih property Anda
   - Klik menu **"Sitemaps"** di sidebar kiri
   - Masukkan URL sitemap: `sitemap.xml` atau `https://emaklaundry.com/sitemap.xml`
   - Klik **"Submit"**

3. **Verifikasi Status**
   - Status akan berubah menjadi "Success" dalam beberapa menit
   - Google akan mulai crawl dan index halaman Anda

### 4. Submit URL untuk Indexing Cepat

1. **URL Inspection Tool**

   - Di Google Search Console, cari **"URL Inspection"** di bagian atas
   - Masukkan URL yang ingin di-index: `https://emaklaundry.com`
   - Klik **"Request Indexing"**

2. **Ulangi untuk Halaman Penting**
   - Homepage: `https://emaklaundry.com`
   - Services: `https://emaklaundry.com/#services`
   - Contact: `https://emaklaundry.com/#contact`

## Monitoring dan Optimasi

### 1. Performance Monitoring

**Menu yang Perlu Dipantau:**

1. **Overview**

   - Total clicks, impressions, average CTR, average position
   - Trend performa 3 bulan terakhir

2. **Performance**

   - Queries: Kata kunci yang membawa traffic
   - Pages: Halaman dengan performa terbaik
   - Countries: Negara asal pengunjung
   - Devices: Desktop vs Mobile traffic

3. **Coverage**

   - Valid pages: Halaman yang ter-index dengan baik
   - Errors: Halaman dengan masalah indexing
   - Warnings: Potensi masalah
   - Excluded: Halaman yang sengaja tidak di-index

4. **Enhancements**
   - Mobile Usability: Masalah tampilan mobile
   - Core Web Vitals: Metrik performa loading

### 2. Optimasi Berdasarkan Data

**Action Items:**

1. **Low CTR Pages**

   - Update meta title dan description untuk lebih menarik
   - Gunakan keywords yang relevan

2. **High Impressions, Low Clicks**

   - Improve meta description
   - Tambahkan rich snippets (structured data)

3. **Mobile Usability Issues**

   - Fix sesuai rekomendasi Google
   - Test dengan Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

4. **Core Web Vitals Issues**
   - Optimize image loading (lazy loading sudah implemented)
   - Minimize JavaScript bundle size
   - Improve server response time

## Troubleshooting

### Masalah: Verifikasi Gagal

**Solusi:**

- Pastikan meta tag atau file HTML sudah ter-deploy
- Clear cache browser dan coba lagi
- Tunggu 24-48 jam untuk DNS propagation (metode domain)

### Masalah: Sitemap Error

**Solusi:**

- Validasi sitemap dengan: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Pastikan semua URL di sitemap dapat diakses (status 200)
- Update sitemap jika ada perubahan struktur website

### Masalah: Halaman Tidak Ter-index

**Solusi:**

- Cek `robots.txt` tidak memblokir halaman
- Pastikan tidak ada `noindex` meta tag
- Submit URL manual via URL Inspection Tool
- Tunggu 1-2 minggu untuk Google crawl secara natural

### Masalah: Coverage Errors

**Solusi:**

- **404 errors**: Fix broken links atau redirect ke halaman yang benar
- **Server errors (5xx)**: Cek server/hosting stability
- **Redirect errors**: Pastikan redirect chain tidak lebih dari 3 hop

## Best Practices

1. **Regular Monitoring**

   - Cek Google Search Console minimal 1x per minggu
   - Set up email notifications untuk critical issues

2. **Content Updates**

   - Update sitemap setiap ada perubahan konten
   - Submit URL baru untuk indexing cepat

3. **Mobile-First**

   - Prioritaskan mobile experience (Google menggunakan mobile-first indexing)
   - Test semua fitur di berbagai device

4. **Structured Data**

   - Website sudah menggunakan JSON-LD structured data
   - Validasi dengan: https://search.google.com/test/rich-results

5. **Performance**
   - Target Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
   - Gunakan PageSpeed Insights untuk monitoring

## Resources

- **Google Search Console Help**: https://support.google.com/webmasters
- **SEO Starter Guide**: https://developers.google.com/search/docs/beginner/seo-starter-guide
- **Search Console API**: https://developers.google.com/webmasters/search-console-api-original
- **Structured Data Testing**: https://search.google.com/test/rich-results

## Kesimpulan

Dengan Google Search Console terkonfigurasi dengan baik, Anda dapat:

- ✅ Monitor performa SEO secara real-time
- ✅ Identify dan fix masalah indexing
- ✅ Optimize konten berdasarkan data actual search queries
- ✅ Improve ranking di Google Search
- ✅ Track Core Web Vitals dan mobile usability

**Status Implementasi:**

- ✅ Sitemap tersedia di `/sitemap.xml`
- ✅ Robots.txt configured
- ✅ Structured data implemented
- ⏳ Meta verification tag (perlu ditambahkan setelah mendapat code dari Google)

---

_Terakhir diupdate: Desember 2025_
