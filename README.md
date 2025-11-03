Pengembangan Website React Emak Laundry

Panduan ini menjelaskan langkah-langkah untuk mengambil kode app.jsx dari Canvas dan menjalankannya secara lokal di komputer Anda menggunakan Visual Studio Code (VS Code) dan Vite.

1. Prasyarat (Yang Anda Butuhkan)

Sebelum memulai, pastikan Anda telah menginstal:

Node.js: Versi 18 atau lebih baru. Ini akan otomatis menyertakan npm.

Visual Studio Code: Editor kode Anda.

Logo: Pastikan Anda memiliki file logo (Head w Text Putih.jpg).

2. Langkah-Langkah Setup Proyek

Langkah 1: Buat Proyek React Baru (Menggunakan Vite)

Buka terminal (Command Prompt, PowerShell, atau Terminal di VS Code) dan jalankan perintah berikut untuk membuat proyek React baru:

# Ganti 'emak-laundry-web' dengan nama folder yang Anda inginkan
npm create vite@latest emak-laundry-web -- --template react


Langkah 2: Masuk ke Folder Proyek

Setelah proyek dibuat, masuk ke direktori folder tersebut:

cd emak-laundry-web


Langkah 3: Buka Proyek di VS Code

Buka seluruh folder proyek di VS Code dengan perintah:

code .


Langkah 4: Instal Ketergantungan (Dependencies)

Di terminal VS Code (buka dengan `Ctrl + ``), instal semua paket dasar React:

npm install


Langkah 5: Instal Paket Tambahan

Proyek ini membutuhkan Tailwind CSS (untuk styling) dan Lucide React (untuk ikon). Instal paket-paket tersebut:

npm install -D tailwindcss postcss autoprefixer
npm install lucide-react


Langkah 6: Konfigurasi Tailwind CSS

Jalankan perintah ini untuk membuat file konfigurasi Tailwind:

npx tailwindcss init -p


Ini akan membuat dua file: tailwind.config.js dan postcss.config.js.

Buka file tailwind.config.js dan perbarui bagian content agar Tailwind tahu file mana yang harus dipindai:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Pastikan baris ini ada
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


Langkah 7: Tambahkan CSS Dasar Tailwind

Buka file src/index.css. Hapus semua isinya dan ganti dengan tiga baris arahan Tailwind ini:

@tailwind base;
@tailwind components;
@tailwind utilities;


Langkah 8: Tempatkan Logo Anda

Di dalam folder proyek Anda, temukan folder public. Salin file logo Anda (Head w Text Putih.jpg) ke dalam folder public tersebut.

Langkah 9: Ganti Kode App.jsx

Buka folder src.

Hapus file App.css (kita tidak membutuhkannya lagi).

Buka file src/App.jsx.

Hapus semua kode yang ada di dalamnya.

Salin seluruh kode dari Canvas "Emak Laundry Website" dan tempelkan ke dalam file src/App.jsx Anda.

3. Konfigurasi Environment (Tanya Emak)

Fitur Tanya Emak membutuhkan API key Google Generative Language.

- Buat file `.env` di root proyek dengan isi:

```
VITE_GEMINI_API_KEY=ISI_API_KEY_ANDA_DI_SINI
```

- Simpan. Jalankan ulang dev server setelah mengubah `.env`.

4. Menjalankan Proyek Secara Lokal

Setelah semua langkah di atas selesai, jalankan server pengembangan lokal Anda:

npm run dev


Buka browser Anda dan kunjungi http://localhost:5173 (atau alamat apa pun yang muncul di terminal). Anda sekarang akan melihat website Emak Laundry berjalan!

5. Deployment ke Vercel

Buat repository baru di GitHub.

Unggah (push) seluruh folder proyek Anda ke repository GitHub tersebut.

Daftar atau masuk ke Vercel.

Hubungkan akun GitHub Anda ke Vercel.

Pilih "Import Project" dan pilih repository website Emak Laundry Anda.

Vercel akan otomatis mendeteksi bahwa ini adalah proyek Vite/React.

Klik "Deploy". Website Anda akan online dalam beberapa menit!