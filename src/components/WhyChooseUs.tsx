import React from "react";
import { TruckIcon, ShieldCheckIcon, SparklesIconV2, ClockIcon } from "./Icons";

const features = [
  {
    icon: <TruckIcon />,
    title: "Antar-Jemput Gratis",
    description:
      "Hemat waktu berharga Anda. Kami siap menjemput dan mengantar cucian bersih langsung ke depan pintu Anda (min. order 5kg).",
  },
  {
    icon: <SparklesIconV2 />,
    title: "Higienis & Wangi Tahan Lama",
    description:
      "Kami menggunakan deterjen premium dan parfum berkualitas untuk hasil yang tidak hanya bersih, tapi juga wangi menyegarkan.",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Garansi Kepuasan Pelanggan",
    description:
      "Kepuasan Anda adalah prioritas kami. Jika tidak puas dengan hasilnya, kami akan cuci ulang pakaian Anda secara gratis.",
  },
  {
    icon: <ClockIcon />,
    title: "Tepat Waktu & Cepat",
    description:
      "Andalkan paket Ekspres 3 Jam kami untuk kebutuhan mendesak. Cucian Anda selesai cepat tanpa kompromi kualitas.",
  },
];

const FeatureCard: React.FC<{ feature: (typeof features)[0] }> = ({
  feature,
}) => {
  return (
    <div className="bg-white dark:bg-custom-purple-surface p-4 sm:p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl h-full">
      <div className="mb-3 sm:mb-4 inline-block">{feature.icon}</div>
      <h3 className="text-lg sm:text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">
        {feature.title}
      </h3>
      <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-300">
        {feature.description}
      </p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="why-us"
      className="py-10 sm:py-14 lg:py-20 bg-zinc-50 dark:bg-custom-purple-bg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
            Kenapa Memilih Emak Laundry?
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mt-3 sm:mt-4 max-w-2xl mx-auto">
            Kami memberikan lebih dari sekadar cucian bersih.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
