
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
    {
        quote: "Layanannya cepat dan hasilnya luar biasa bersih! Pakaian wangi dan rapi. Sangat merekomendasikan Emak Laundry untuk para ibu rumah tangga.",
        name: 'Ibu Rina',
        role: 'Ibu Rumah Tangga, Banjar',
        avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Rina&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf'
    },
    {
        quote: "Fitur antar jemputnya sangat membantu di tengah kesibukan kerja. Timnya ramah dan profesional. Laundry jadi tidak merepotkan lagi. Mantap!",
        name: 'Ahmad Fauzi',
        role: 'Karyawan Swasta',
        avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=AhmadFauzi&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf'
    },
    {
        quote: "Sebagai mitra, kami sangat puas dengan kualitas dan ketepatan waktu Emak Laundry. Linen hotel kami selalu bersih dan wangi. Pelayanan B2B terbaik!",
        name: 'Manajer Hotel Asri',
        role: 'Mitra Usaha',
        avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=HotelAsri&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf'
    }
];

// Duplicate for seamless scroll
const scrollingTestimonials = [...testimonials, ...testimonials];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <figure className="bg-white dark:bg-custom-purple-border/50 rounded-xl shadow-lg p-6 sm:p-8 w-full h-full flex flex-col justify-between">
        <blockquote className="text-zinc-600 dark:text-zinc-300 mb-6 italic">
            <p>"{testimonial.quote}"</p>
        </blockquote>
        <figcaption className="flex items-center mt-auto">
            <img 
                className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-custom-purple-surface" 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                loading="lazy"
                decoding="async"
            />
            <div className="ml-4">
                <cite className="font-bold text-zinc-800 dark:text-zinc-100 not-italic">{testimonial.name}</cite>
                <p className="text-sm text-zinc-500 dark:text-zinc-300">{testimonial.role}</p>
            </div>
        </figcaption>
    </figure>
);

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-white dark:bg-custom-purple-surface overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">Apa Kata Pelanggan Kami?</h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-4 max-w-2xl mx-auto">Kami bangga dapat memberikan kepuasan bagi pelanggan setia kami.</p>
                </div>
            </div>
             {/* Scroller Container */}
             <div className="testimonial-scroller-container mt-12 w-full">
                <div className="flex w-max animate-scroll-testimonials items-stretch gap-8 py-4 pl-4 md:pl-8">
                    {scrollingTestimonials.map((testimonial, index) => (
                        <div key={index} className="flex-shrink-0" style={{ width: 'clamp(300px, 80vw, 450px)' }}>
                           <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;