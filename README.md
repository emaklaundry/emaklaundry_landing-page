# Emak Laundry - Jasa Laundry Kiloan & Satuan di Banjar

[![Version](https://img.shields.io/badge/version-1.1.1-blue)](package.json)
[![React](https://img.shields.io/badge/react-19.2.0-61dafb)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/typescript-5.8.2-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/vite-6.2.0-646cff)](https://vitejs.dev/)

> Landing page modern untuk layanan laundry kiloan & satuan terbaik di Kota Banjar dengan fitur tracking real-time, dark mode, dan integrasi WhatsApp.

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Quick Start](#-quick-start)
- [Struktur Folder](#-struktur-folder)
- [Tech Stack](#-tech-stack)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Dokumentasi Tambahan](#-dokumentasi-tambahan)

---

## 🌟 Fitur Utama

- ✨ **Responsive Design** - Mobile-friendly dengan dark mode support
- 🔍 **Track Laundry** - Cek status cucian secara real-time
- 🚀 **Performance** - Lazy loading & code splitting untuk load time optimal
- 📱 **WhatsApp Integration** - Pesan layanan langsung dengan satu klik
- 🔒 **Error Handling** - Error boundary untuk UX yang lebih baik
- 🎨 **Smooth Animations** - Ken Burns effect, pulse, marquee, auto-scroll
- 📊 **SEO Optimized** - JSON-LD structured data, meta tags, sitemap
- 💾 **Supabase Backend** - Database real-time dengan RPC support

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ dan npm
- Akun [Supabase](https://supabase.com) (gratis)
- [Gemini API Key](https://aistudio.google.com/app/apikey) (opsional untuk FAQ AI)

### Instalasi

```bash
# Clone repository
git clone https://github.com/yourusername/emaklaundry_landing-page.git
cd emaklaundry_landing-page

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env dengan kredensial Anda

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Environment Variables

Edit file `.env` dengan kredensial Anda:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_GEMINI_API_KEY=your-gemini-key-here
VITE_STORE_ID=your-store-id
```

⚠️ **PENTING**: Jangan commit file `.env` ke Git!

---

## 📁 Struktur Folder

```
emaklaundry_landing-page/
├── src/                     # Source code utama
│   ├── components/          # React components
│   │   ├── Hero.tsx         # Hero section dengan Ken Burns animation
│   │   ├── Header.tsx       # Navigation & theme toggle
│   │   ├── Footer.tsx       # Footer dengan feedback modal
│   │   ├── Services.tsx     # Layanan dari Supabase
│   │   ├── Pricing.tsx      # Harga laundry
│   │   ├── Testimonials.tsx # Auto-scroll testimonials
│   │   ├── Partners.tsx     # Marquee partners
│   │   ├── TrackLaundry.tsx # Form tracking cucian
│   │   ├── WhatsAppButton.tsx # Floating WhatsApp dengan pulse
│   │   └── ...
│   ├── config/              # Konfigurasi
│   │   ├── constants.ts     # Konstanta (contact, social links)
│   │   └── supabaseClient.ts # Supabase client setup
│   ├── context/             # React Context
│   │   └── ThemeContext.tsx # Dark/Light mode management
│   ├── pages/               # Pages
│   │   └── LayananPage.tsx  # Halaman layanan detail
│   ├── utils/               # Utility functions
│   │   └── useSmoothScroll.ts # Smooth scroll hook
│   ├── App.tsx              # Main app dengan routing
│   ├── index.tsx            # Entry point
│   ├── index.css            # Global styles & animations
│   └── types.ts             # TypeScript type definitions
├── public/                  # Static assets
│   ├── favicon/             # Favicon files
│   ├── robots.txt           # SEO robots
│   └── sitemap.xml          # Sitemap
├── .env.example             # Template environment variables
├── .gitignore               # Git ignore rules
├── index.html               # HTML entry point
├── package.json             # Dependencies & scripts
├── tailwind.config.js       # Tailwind + animations config
├── vite.config.ts           # Vite configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 🔧 Tech Stack

| Kategori       | Teknologi                    |
| -------------- | ---------------------------- |
| **Frontend**   | React 19 + TypeScript 5      |
| **Build Tool** | Vite 6 (SWC)                 |
| **Styling**    | TailwindCSS 3                |
| **Routing**    | React Router DOM 7           |
| **Backend**    | Supabase (PostgreSQL)        |
| **SEO**        | React Helmet Async + JSON-LD |
| **Utilities**  | date-fns                     |
| **AI**         | Google Gemini API            |

### Animasi yang Tersedia

- **Ken Burns** - Hero background zoom effect (30s)
- **Pulse** - WhatsApp button dengan shadow effect (2s)
- **Marquee** - Partners auto-scroll (30s)
- **Testimonials** - Horizontal scroll dengan pause on hover (60s)

---

## 🎨 Branding

- **Warna Utama**: Purple `#B740B7`
- **Font**: Poppins (Google Fonts)
- **Dark Mode**: Auto-detect sistem + toggle manual
- **Logo**: Tersedia di `/public/`

---

## 📦 Deployment

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Set environment variables di dashboard:
   ```
   VITE_SUPABASE_URL
   VITE_SUPABASE_ANON_KEY
   VITE_GEMINI_API_KEY
   VITE_STORE_ID
   ```
4. Deploy! 🚀

Vercel akan otomatis detect Vite dan build project.

### Build Manual

```bash
npm run build    # Build untuk produksi
npm run preview  # Preview build lokal
```

Output ada di folder `dist/`.

---

## 🐛 Troubleshooting

### Error: "supabaseUrl is required"

**Solusi**: Pastikan `.env` sudah dibuat dan terisi. Restart dev server.

### Error: "Store ID belum disetting"

**Solusi**: Tambahkan `VITE_STORE_ID` ke `.env`. Get ID dari Supabase `stores` table.

### Animasi tidak jalan

**Solusi**: Clear cache Vite dan restart:

```bash
rm -rf node_modules/.vite
npm run dev
```

### Build Error

**Solusi**:

```bash
# Clear semua cache
rm -rf node_modules dist .vite
npm install

# Check TypeScript errors
npx tsc --noEmit
```

### Module resolution error

**Solusi**: Pastikan struktur folder sesuai dengan `tsconfig.json` dan semua import path benar.

---

## 📝 Available Scripts

```bash
npm run dev         # Development server (http://localhost:3000)
npm run build       # Production build
npm run preview     # Preview production build
npm run type-check  # TypeScript type checking tanpa emit
npm run clean       # Clean dist dan Vite cache
```

---

## 🔒 Security

- ✅ Environment variables tidak di-commit
- ✅ `.env` di `.gitignore`
- ✅ Error boundary untuk error handling
- ✅ Security headers di `vercel.json`
- ✅ Input validation di forms
- ✅ XSS protection enabled

⚠️ **PENTING**: Jika `.env` pernah ter-commit, segera regenerate credentials! Lihat [SECURITY_WARNING.md](SECURITY_WARNING.md)

---

## 🎯 Roadmap

- [ ] Payment gateway integration (Midtrans/Xendit)
- [ ] Customer dashboard & order history
- [ ] Push notifications (FCM)
- [ ] Mobile app (React Native)
- [ ] Multi-language support (i18n)
- [ ] Admin panel untuk manajemen order

---

## 📄 License

© 2025 Emak Laundry. All rights reserved.

---

## 🤝 Contributing

Pull requests dan issues sangat diterima! Untuk perubahan besar, silakan buka issue terlebih dahulu.

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## � Dokumentasi Tambahan

- **[Mobile Optimization Guide](MOBILE_OPTIMIZATION.md)** - Panduan optimasi mobile lengkap
- **[Security Warning](SECURITY_WARNING.md)** - Panduan keamanan dan best practices
- **[Metadata](metadata.json)** - Metadata project dan konfigurasi

---

## �📞 Contact

- **Website**: [emaklaundry.my.id](https://www.emaklaundry.my.id)
- **WhatsApp**: [+62 851-7527-9659](https://wa.me/6285175279659)
- **Email**: Lihat di website

---

<div align="center">
  
**Dibuat dengan ❤️ untuk Emak Laundry Banjar**

⭐ Star repo ini jika bermanfaat!

</div>

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

**Dibuat dengan ❤️ untuk Emak Laundry, Kota Banjar**
