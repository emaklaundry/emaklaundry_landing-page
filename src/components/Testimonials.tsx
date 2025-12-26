import React from "react";
import type { Testimonial } from "../types";

const testimonials: Testimonial[] = [
  {
    quote:
      "Layanannya cepat dan hasilnya luar biasa bersih! Pakaian wangi dan rapi. Sangat merekomendasikan Emak Laundry untuk para ibu rumah tangga.",
    name: "Ibu Rina",
    role: "Ibu Rumah Tangga, Banjar",
    avatar:
      "https://api.dicebear.com/7.x/adventurer/svg?seed=Rina&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
  },
  {
    quote:
      "Fitur antar jemputnya sangat membantu di tengah kesibukan kerja. Timnya ramah dan profesional. Laundry jadi tidak merepotkan lagi. Mantap!",
    name: "Ahmad Fauzi",
    role: "Karyawan Swasta",
    avatar:
      "https://api.dicebear.com/7.x/adventurer/svg?seed=AhmadFauzi&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
  },
  {
    quote:
      "Sebagai mitra, kami sangat puas dengan kualitas dan ketepatan waktu Emak Laundry. Linen hotel kami selalu bersih dan wangi. Pelayanan B2B terbaik!",
    name: "Manajer Hotel Asri",
    role: "Mitra Usaha",
    avatar:
      "https://api.dicebear.com/7.x/adventurer/svg?seed=HotelAsri&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf",
  },
];

// Duplicate for seamless infinite scroll
const scrollingTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <figure className="bg-white dark:bg-custom-purple-border/50 rounded-xl shadow-lg p-6 sm:p-8 w-full h-full flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1">
    <blockquote className="text-zinc-600 dark:text-zinc-300 mb-6 italic">
      <p className="leading-relaxed">"{testimonial.quote}"</p>
    </blockquote>
    <figcaption className="flex items-center mt-auto">
      <img
        className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-custom-purple-surface transition-transform duration-300 group-hover:scale-110"
        src={testimonial.avatar}
        alt={`Foto profil ${testimonial.name}, ${testimonial.role}`}
        loading="lazy"
        decoding="async"
      />
      <div className="ml-4">
        <cite className="font-bold text-zinc-800 dark:text-zinc-100 not-italic">
          {testimonial.name}
        </cite>
        <p className="text-sm text-zinc-500 dark:text-zinc-300">
          {testimonial.role}
        </p>
      </div>
    </figcaption>
  </figure>
);

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-8 sm:py-10 lg:py-10 bg-white dark:bg-custom-purple-surface overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
            Apa Kata Pelanggan Kami?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-4 max-w-2xl mx-auto">
            Kami bangga dapat memberikan kepuasan bagi pelanggan setia kami.
          </p>
        </div>
      </div>
      {/* Scroller Container with Fade Edges */}
      <div className="mt-8 sm:mt-12 w-full relative">
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white dark:from-custom-purple-surface to-transparent z-10 pointer-events-none" />

        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white dark:from-custom-purple-surface to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div
          className="flex items-stretch gap-4 sm:gap-6 md:gap-8 py-4 pl-4 md:pl-8 testimonial-scroll"
          style={{
            width: "max-content",
            animation: "scroll-testimonials 40s linear infinite",
            willChange: "transform",
          }}
        >
          {scrollingTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 group"
              style={{ width: "clamp(280px, 85vw, 450px)" }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
