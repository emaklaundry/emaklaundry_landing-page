import React from "react";
import { useSmoothScroll } from "../utils/useSmoothScroll";
import { useScrollAnimation } from "../utils/useScrollAnimation";
import { useCountUp } from "../utils/useCountUp";
import { WhatsAppIcon } from "./Icons";
import { SOCIAL_LINKS } from "../config/constants";

const Hero: React.FC = () => {
  const handleLinkClick = useSmoothScroll();
  const { ref: statsRef, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const customerCount = useCountUp({ end: 1000, duration: 2500, start: 0 });
  const ratingCount = useCountUp({ end: 4.9, duration: 2000, decimals: 1 });

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center bg-white dark:bg-custom-purple-surface overflow-hidden">
      {/* Background Image dengan Ken Burns Effect */}
      <div
        className="absolute inset-0 z-0"
        aria-label="Laundry Banjar - Background Cuci Bersih"
      >
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform opacity-30 dark:opacity-20 hero-kenburns"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582735689369-4fe89db7fb15?q=80&w=2070&auto=format&fit=crop&fm=webp')",
            animation: "kenburns 30s ease-in-out infinite alternate",
          }}
          role="img"
          aria-label="Layanan Laundry Banjar Jawa Barat - Background Cuci Bersih"
        ></div>
        {/* Gradient Overlay agar teks terbaca jelas */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/80 to-white dark:from-custom-purple-bg/80 dark:via-custom-purple-bg/90 dark:to-custom-purple-bg"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-3 sm:mb-4 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-custom-purple/10 text-custom-purple dark:bg-custom-purple-light/10 dark:text-custom-purple-light font-semibold text-xs sm:text-sm tracking-wide animate-fade-in-up">
            ✨ Laundry Kiloan & Satuan Terbaik di Banjar
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-zinc-100 leading-tight mb-4 sm:mb-5 md:mb-6 tracking-tight">
            Kebersihan Terbaik <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-custom-purple to-pink-500">
              Sentuhan Kasih Ibu.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
            Serahkan urusan pakaian kotor pada ahlinya. Kami menjamin hasil cuci
            bersih, wangi tahan lama, dan rapi dalam waktu singkat.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 px-2 sm:px-0 mt-6 sm:mt-8">
            <a
              href="/layanan"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-custom-purple text-white font-bold text-sm sm:text-base md:text-lg rounded-full hover:bg-custom-purple-hover hover:shadow-lg hover:shadow-custom-purple/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-center min-h-[44px] flex items-center justify-center"
            >
              Lihat Layanan Kami
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2 bg-white text-custom-purple border-2 border-custom-purple/20 font-bold text-sm sm:text-base md:text-lg rounded-full hover:border-custom-purple hover:bg-custom-purple/5 transition-all duration-300 dark:bg-transparent dark:text-white dark:border-white/20 dark:hover:bg-white/10 active:scale-95 min-h-[44px]"
            >
              <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
              <span>Pesan via WhatsApp</span>
            </a>
          </div>

          <div
            ref={statsRef}
            className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 text-center max-w-2xl mx-auto"
          >
            <div
              className={`p-3 sm:p-4 rounded-lg bg-white/50 dark:bg-custom-purple-surface/50 backdrop-blur-sm transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-custom-purple">
                {isVisible ? customerCount : "0"}+
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 uppercase mt-1">
                Pelanggan
              </p>
            </div>
            <div
              className={`p-3 sm:p-4 rounded-lg bg-white/50 dark:bg-custom-purple-surface/50 backdrop-blur-sm transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-custom-purple">
                3 Jam
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 uppercase mt-1">
                Layanan Kilat
              </p>
            </div>
            <div
              className={`p-3 sm:p-4 rounded-lg bg-white/50 dark:bg-custom-purple-surface/50 backdrop-blur-sm transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-custom-purple">
                {isVisible ? ratingCount : "0"}
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 uppercase mt-1">
                Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
