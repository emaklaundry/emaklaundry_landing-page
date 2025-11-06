# Panduan Deployment Emak Laundry

## 📋 Checklist Sebelum Deploy

### 1. Aset Gambar
Pastikan semua gambar berikut ada di folder `public/image/`:
- ✅ `logo.png` - Logo utama Emak Laundry
- ✅ `hero-pakaian-wangi.jpg` - Hero image homepage
- ✅ Gambar galeri (galeri-*.jpg)
- ✅ Gambar mitra (mitra-*.png)

**Jika gambar belum siap:** Sementara gunakan placeholder atau sembunyikan section gallery dengan mengomentari kode di AboutPage.jsx.

### 2. Favicon & PWA Icons
Masukkan file ikon ke `public/fav-icon/`:
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

**Generate ikon:** Gunakan tools seperti [RealFaviconGenerator](https://realfavicongenerator.net/)

### 3. Environment Variables (API Key)

#### ⚠️ PENTING: Jangan Commit `.env` ke Git
```powershell
# Hapus .env dari tracking jika sudah ter-commit
git rm --cached .env
git commit -m "chore: remove .env from tracking"
```

#### Amankan API Key dengan Backend Proxy
API key Gemini saat ini terekspos di browser. **Sangat disarankan** gunakan backend proxy.

**Opsi 1: Vercel Serverless Function (Recommended)**
1. Buat file `api/ask-emak.js` di root project:
```javascript
// api/ask-emak.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: 'Question required' });
  }

  const apiKey = process.env.GEMINI_API_KEY; // Set di Vercel Dashboard
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: question }] }],
        systemInstruction: {
          parts: [{ text: 'Anda adalah "Emak", asisten AI dari Emak Laundry. Ramah, bijak, ahli merawat pakaian. Jawab singkat 3-4 kalimat.' }]
        }
      })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
```

2. Update `TanyaEmak.jsx`:
```javascript
// Ganti endpoint dari langsung ke Gemini menjadi:
const apiUrl = `/api/ask-emak`; // Local proxy
const response = await fetch(apiUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ question: pertanyaan })
});
```

3. Set environment variable di Vercel Dashboard:
   - Key: `GEMINI_API_KEY`
   - Value: (API key baru hasil rotasi)

**Opsi 2: Disable Fitur Tanya Emak**
Jika tidak ingin setup backend, nonaktifkan sementara dengan menghapus komponen `<TanyaEmak />` dari FAQPage.jsx.

### 4. Git Security Check
```powershell
# Pastikan .gitignore sudah benar
# Harus ada entry:
.env
node_modules
dist
```

### 5. Build & Test Lokal
```powershell
npm run build
npm run preview
```
Buka http://localhost:4173 dan test semua halaman.

---

## 🚀 Deploy ke Vercel

### Langkah Deploy
1. **Push ke GitHub:**
```powershell
git add .
git commit -m "feat: production-ready with security improvements"
git push origin main
```

2. **Import Project di Vercel:**
   - Buka [vercel.com/new](https://vercel.com/new)
   - Import repository `emaklaundry/emaklaundry_landing-page`
   - Framework Preset: **Vite**
   - Root Directory: `./`

3. **Set Environment Variables** (jika pakai backend proxy):
   - Dashboard → Settings → Environment Variables
   - Tambahkan: `GEMINI_API_KEY` = (API key baru)

4. **Deploy:**
   - Klik "Deploy"
   - Tunggu 1-2 menit
   - Site akan live di `https://emaklaundry-landing.vercel.app` (atau custom domain)

### Custom Domain (Opsional)
1. Dashboard → Settings → Domains
2. Tambahkan domain: `emaklaundry.com`
3. Update DNS records sesuai instruksi Vercel

---

## 🔒 Rotasi API Key (Wajib)
1. Buka [Google AI Studio](https://aistudio.google.com/app/apikey)
2. **Revoke** API key lama yang ter-commit
3. **Generate** key baru
4. Set di Vercel environment variables (jika pakai proxy)
5. **Jangan** simpan di `.env` yang di-commit

---

## 📊 Monitoring & Analytics (Opsional)
- **Vercel Analytics:** Aktifkan di Dashboard → Analytics
- **Google Analytics:** Tambahkan tag di `index.html`
- **Error Tracking:** Sentry atau Vercel Error Monitoring

---

## 🛠️ Troubleshooting

### Build Error: "Cannot find module"
```powershell
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Periksa path: harus `/image/...` bukan `./image/...`
- Pastikan file ada di `public/image/`

### API Errors (Gemini)
- Cek quota di [Google AI Studio](https://aistudio.google.com/)
- Pastikan endpoint stabil (bukan preview model)
- Verifikasi environment variable di Vercel

---

## 📝 Checklist Final
- [ ] Semua gambar ada di `public/image/`
- [ ] Favicon lengkap di `public/fav-icon/`
- [ ] `.env` tidak ter-commit (pastikan di .gitignore)
- [ ] API key lama sudah di-rotasi
- [ ] Build lokal sukses (`npm run build`)
- [ ] Test di preview (`npm run preview`)
- [ ] Push ke GitHub
- [ ] Deploy ke Vercel berhasil
- [ ] Test live site di semua halaman
- [ ] Custom domain (jika ada) sudah terhubung

---

**Selamat! Website Emak Laundry sudah siap melayani pelanggan online! 🎉**
