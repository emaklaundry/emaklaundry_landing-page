/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": {
          DEFAULT: "#B740B7",
          hover: "#9F379F",
          light: "#D477D4",
          bg: "#2c1a3b",
          surface: "#3e2554",
          border: "#50306d",
          footer: "#1e1229",
        },
      },
      animation: {
        kenburns: "kenburns 30s ease-out alternate infinite",
        "pulse-custom": "pulse-custom 2s infinite",
        marquee: "marquee 30s linear infinite",
        "scroll-testimonials": "scroll-testimonials 60s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        fadeIn: "fadeIn 0.5s ease-out",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.15) translate(-2%, 2%)" },
        },
        "pulse-custom": {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(183, 64, 183, 0.7)",
          },
          "50%": {
            transform: "scale(1.05)",
            boxShadow: "0 0 0 10px rgba(183, 64, 183, 0)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        "scroll-testimonials": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        // Custom breakpoints for specific needs
        mobile: { max: "639px" },
        tablet: { min: "640px", max: "1023px" },
        desktop: { min: "1024px" },
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
    },
  },
  plugins: [],
};
