import React from 'react';
import { useSmoothScroll } from '../utils/useSmoothScroll';

const Hero: React.FC = () => {
    const handleLinkClick = useSmoothScroll();
    
    return (
        <section className="relative bg-white dark:bg-custom-purple-surface pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 opacity-10 dark:opacity-5">
                <div 
                    className="absolute inset-0 bg-cover bg-center animate-kenburns" 
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1582735689369-4fe89db7fb15?q=80&w=2070&auto=format&fit=crop')"}}
                ></div>
            </div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-zinc-100 leading-tight mb-4">
                    Kebersihan Terbaik dengan Sentuhan Kasih Ibu.
                </h1>
                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mb-8">
                    Emak Laundry hadir di Kota Banjar untuk merawat pakaian Anda. Telah melayani 1000+ pelanggan setia, kami jamin hasil cuci bersih, wangi, dan rapi. Nikmati waktu Anda, serahkan cucian pada ahlinya.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
                    <a href="#pricing" onClick={handleLinkClick} className="bg-custom-purple text-white font-bold py-3 px-8 rounded-full hover:bg-custom-purple-hover transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                        Lihat Harga
                    </a>
                    <a href="https://wa.me/6285175279659?text=Halo%20Emak%20Laundry,%20saya%20mau%20tanya%20soal%20layanan." target="_blank" rel="noopener noreferrer" className="font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto ring-2 ring-inset ring-custom-purple text-custom-purple dark:ring-custom-purple-light dark:text-custom-purple-light hover:bg-custom-purple hover:text-white dark:hover:bg-custom-purple-light dark:hover:text-custom-purple-bg">
                        Hubungi via WA
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;