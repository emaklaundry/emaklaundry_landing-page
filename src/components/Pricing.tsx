import React from "react";
import type { PricingPlan } from "../types";
import { SOCIAL_LINKS } from "../config/constants";
import { SuitIcon, JacketIcon, BedIcon, ShoesIcon } from "./Icons";
import { useScrollAnimation } from "../utils/useScrollAnimation";

const plans: PricingPlan[] = [
  {
    name: "Reguler",
    price: "7.500",
    priceUnit: "/ kg",
    features: [
      "Cuci & Kering",
      "Setrika Rapi",
      "Pewangi Standar",
      "Selesai dalam 3 Hari",
    ],
    isPopular: false,
  },
  {
    name: "Kilat",
    price: "15.000",
    priceUnit: "/ kg",
    features: [
      "Cuci & Kering",
      "Setrika Uap",
      "Pewangi Premium",
      "Selesai dalam 1 Hari",
      "Prioritas Pengerjaan",
    ],
    isPopular: true,
  },
  {
    name: "Ekspres",
    price: "25.000",
    priceUnit: "/ kg",
    features: [
      "Cuci & Kering",
      "Setrika Uap Premium",
      "Pewangi Eksklusif",
      "Selesai dalam 3 Jam",
      "Layanan Super Cepat",
    ],
    isPopular: false,
  },
];

const satuanItems = [
  { name: "Jas / Setelan", price: "25.000", icon: <SuitIcon /> },
  { name: "Jaket Kulit", price: "20.000", icon: <JacketIcon /> },
  { name: "Bed Cover (King/Jumbo)", price: "25.000", icon: <BedIcon /> },
  { name: "Sepatu (Cuci Kering)", price: "20.000", icon: <ShoesIcon /> },
];

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-custom-purple"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const PricingCard: React.FC<{ plan: PricingPlan; index: number }> = ({
  plan,
  index,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  // Styling yang diperbarui dengan mobile optimization
  const cardClasses = `
        relative flex flex-col p-4 sm:p-6 lg:p-8 bg-white dark:bg-custom-purple-surface rounded-2xl transition-all duration-700
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        ${
          plan.isPopular
            ? "border-2 border-custom-purple shadow-2xl sm:scale-105 z-10 popular-card-glow"
            : "border border-zinc-100 dark:border-custom-purple-border shadow-lg hover:shadow-xl hover:-translate-y-1"
        }
    `;

  return (
    <div
      ref={ref}
      className={cardClasses}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {plan.isPopular && (
        <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-custom-purple to-pink-600 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 rounded-full shadow-md whitespace-nowrap">
            Paling Laris <span className="inline-block animate-flame">🔥</span>
          </span>
        </div>
      )}
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-zinc-800 dark:text-zinc-100">
        {plan.name}
      </h3>
      <p className="text-center text-zinc-500 dark:text-zinc-300 mt-2">
        <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
          Rp {plan.price}
        </span>
        <span className="text-sm sm:text-base lg:text-lg">
          {plan.priceUnit}
        </span>
      </p>
      <ul className="mt-4 sm:mt-6 lg:mt-8 space-y-2 sm:space-y-3 lg:space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckIcon />
            <span className="ml-3 text-zinc-600 dark:text-zinc-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center w-full mt-8 sm:mt-10 font-bold py-3 sm:py-3.5 px-6 rounded-lg transition-all duration-300 active:scale-95 text-sm sm:text-base ${
          plan.isPopular
            ? "bg-custom-purple text-white hover:bg-custom-purple-hover"
            : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-custom-purple-border/50 dark:text-zinc-100 dark:hover:bg-custom-purple-border"
        }`}
      >
        Pesan Sekarang
      </a>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="py-10 sm:py-14 lg:py-20 bg-zinc-50 dark:bg-custom-purple-bg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
            Paket Kiloan Harian
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-300 mt-2 sm:mt-3 lg:mt-4 max-w-2xl mx-auto px-4">
            Pilih paket kecepatan yang paling sesuai dengan kesibukan Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
