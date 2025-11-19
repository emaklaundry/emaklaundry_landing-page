/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': {
          DEFAULT: '#B740B7',
          hover: '#9F379F',
          light: '#D477D4',
          bg: '#2c1a3b',
          surface: '#3e2554',
          border: '#50306d',
          footer: '#1e1229',
        }
      },
      animation: {
        'kenburns': 'kenburns 30s ease-out alternate infinite',
        'pulse-custom': 'pulse-custom 2s infinite',
        'marquee': 'marquee 30s linear infinite',
        'scroll-testimonials': 'scroll-testimonials 60s linear infinite',
      }
    },
  },
  plugins: [],
}

