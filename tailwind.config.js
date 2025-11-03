/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '3rem',
        },
      },
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
      boxShadow: {
        elevated: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)'
      },
      keyframes: {
        'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        'slide-up': { '0%': { opacity: 0, transform: 'translateY(8px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
      },
      animation: {
        'fade-in': 'fade-in .5s ease-out both',
        'slide-up': 'slide-up .6s ease-out both',
      }
    },
  },
  plugins: [],
}

