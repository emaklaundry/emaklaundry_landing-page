import React from "react";

const partnerList = [
  "Hotel Asri Banjar",
  "Restoran Saung Kuring",
  "Villa Cempaka",
  "Klinik Harapan Bunda",
  "Salon Cantika",
  "Pondok Pesantren Al-Hidayah",
];

// Triple duplicate for seamless infinite scroll
const partners = [...partnerList, ...partnerList, ...partnerList];

const Partners: React.FC = () => {
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <section
      id="partners"
      className="py-12 sm:py-16 lg:py-20 bg-zinc-50 dark:bg-custom-purple-bg overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
            Dipercaya oleh Mitra Usaha
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-4 max-w-2xl mx-auto">
            Kami bangga menjadi partner kebersihan bagi berbagai usaha di Kota
            Banjar.
          </p>
        </div>
        <div className="mt-12 relative w-full overflow-hidden">
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-zinc-50 dark:from-custom-purple-bg to-transparent z-10 pointer-events-none" />

          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-zinc-50 dark:from-custom-purple-bg to-transparent z-10 pointer-events-none" />

          <div
            className="flex partner-scroll"
            style={{
              width: "max-content",
              animation: "marquee 35s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
              willChange: "transform",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {partners.map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="px-8 sm:px-10 lg:px-12 text-center flex-shrink-0"
              >
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-zinc-600 dark:text-zinc-300 whitespace-nowrap hover:text-custom-purple dark:hover:text-custom-purple-light transition-colors duration-300">
                  {partner}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
