# Emak Laundry Landing Page

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)

Landing page untuk Emak Laundry - Jasa Laundry Kiloan & Satuan di Banjar.

## Versioning

Versi aplikasi mengikuti [Semantic Versioning](https://semver.org/).  
Lihat dan ubah versi pada field `"version"` di `package.json` setiap ada perubahan mayor/minor/patch.

## Fitur
- Pelacakan status laundry dengan progress bar visual
- Hero section dengan efek glassmorphism dan gradient
- Kartu harga dengan highlight paket populer
- Mode terang/gelap (dark mode)
- Responsive dan modern UI

## Instalasi & Pengembangan

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Jalankan development server:**
   ```
   npm run dev
   ```

3. **Build untuk produksi:**
   ```
   npm run build
   ```

4. **Preview hasil build:**
   ```
   npm run preview
   ```

## Struktur Versioning

- Versi aplikasi mengikuti format di `package.json` pada field `"version"`.
- Setiap perubahan besar/minor/patch harap update versi di `package.json`.
- Contoh update versi:
  - Patch: `0.0.1` → `0.0.2`
  - Minor: `0.0.2` → `0.1.0`
  - Major: `0.1.0` → `1.0.0`

## Folder Penting

- `src/` atau `components/` — Komponen utama React
- `public/favicon/` — Favicon dan aset publik
- `index.html` — Entry point HTML
- `index.css` — Styling global (Tailwind + custom CSS)
- `tailwind.config.js` — Konfigurasi Tailwind

## Lisensi

MIT
