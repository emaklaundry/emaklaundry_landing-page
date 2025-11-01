/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Menambahkan font 'Inter' sebagai font utama
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Menyesuaikan palet warna fuchsia agar konsisten
      colors: {
        fuchsia: {
          50: '#fdf4f9',
          100: '#fbe8f3',
          200: '#f8d1e7',
          300: '#f3abc8',
          400: '#eb79a8',
          500: '#de4e89',
          600: '#c02e89', // Warna utama yang lebih kuat
          700: '#a52377',
          800: '#871f63',
          900: '#701d53',
          950: '#460c31',
        },
      },
    },
  },
  plugins: [],
}

