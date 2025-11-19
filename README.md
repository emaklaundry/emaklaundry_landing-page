# Emak Laundry - Jasa Laundry Kiloan & Satuan di Banjar

Aplikasi landing page untuk Emak Laundry, layanan laundry kiloan & satuan di Kota Banjar.

## Fitur Utama

- **Responsive Design**: Tampilan modern, mobile-friendly, dan dark mode.
- **Navigasi SPA**: Navigasi antar halaman tanpa reload.
- **Pencarian & Filter Layanan**: Cari dan filter layanan secara instan.
- **Tampilan Grid/List**: Toggle tampilan layanan (galeri atau daftar).
- **Order via WhatsApp**: Pesan layanan langsung ke admin.
- **Bagikan Layanan**: Fitur share ke sosial media/clipboard.
- **SEO & Social Meta**: Sudah dioptimasi untuk SEO dan social sharing.
- **Lazy Loading**: Komponen berat di-load secara dinamis.
- **Syarat & Ketentuan**: Modal popup untuk Terms.

## Instalasi & Pengembangan

1. **Clone repo**
   ```bash
   git clone https://github.com/yourusername/emaklaundry_landing-page.git
   cd emaklaundry_landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Atur environment**
   - Copy `.env.local` dan isi variabel Supabase & Store ID sesuai kebutuhan.

4. **Jalankan lokal**
   ```bash
   npm run dev
   ```

5. **Build untuk produksi**
   ```bash
   npm run build
   ```

## Struktur Folder

- `src/components/` - Komponen UI (Header, Footer, Services, dsb)
- `src/pages/` - Halaman utama & layanan
- `public/favicon/` - Favicon & text-logo.png
- `index.html` - Entry point
- `index.css` - Global styles

## Branding

- Logo text: gunakan `/favicon/text-logo.png` di header & footer.
- Warna utama: Ungu (`#B740B7`), mendukung dark mode.

## Versioning

- **Versi saat ini:** `1.0.0`
- Lihat bagian bawah footer untuk info versi aplikasi.

## Kontribusi

Pull request & issue sangat diterima!

---

**Copyright**
&copy; Emak Laundry. All rights reserved.
