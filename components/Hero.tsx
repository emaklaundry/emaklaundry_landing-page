import React from 'react';
import { useSmoothScroll } from '../utils/useSmoothScroll';
import { WhatsAppIcon } from './Icons';
import { SOCIAL_LINKS } from '../config/constants';

const Hero: React.FC = () => {
    const handleLinkClick = useSmoothScroll();
    
    return (
        <section className="relative min-h-[90vh] flex items-center bg-white dark:bg-custom-purple-surface overflow-hidden">
            {/* Background Image dengan Parallax Effect Sederhana */}
            <div className="absolute inset-0 z-0">
                <div 
                    className="absolute inset-0 bg-cover bg-center animate-kenburns opacity-30 dark:opacity-20" 
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1582735689369-4fe89db7fb15?q=80&w=2070&auto=format=fit=crop')"}}
                ></div>
                {/* Gradient Overlay agar teks terbaca jelas */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/80 to-white dark:from-custom-purple-bg/80 dark:via-custom-purple-bg/90 dark:to-custom-purple-bg"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-custom-purple/10 text-custom-purple dark:bg-custom-purple-light/10 dark:text-custom-purple-light font-semibold text-sm tracking-wide animate-fade-in-up">
                        ✨ Laundry Kiloan & Satuan Terbaik di Banjar
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-900 dark:text-zinc-100 leading-tight mb-6 tracking-tight">
                        Kebersihan Terbaik <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-custom-purple to-pink-500">
                            Sentuhan Kasih Ibu.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Serahkan urusan pakaian kotor pada ahlinya. Kami menjamin hasil cuci bersih, wangi tahan lama, dan rapi dalam waktu singkat.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a 
                            href="#pricing" 
                            onClick={handleLinkClick} 
                            className="w-full sm:w-auto px-8 py-4 bg-custom-purple text-white font-bold rounded-full hover:bg-custom-purple-hover hover:shadow-lg hover:shadow-custom-purple/30 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Lihat Paket Harga
                        </a>
                        <a 
                            href={SOCIAL_LINKS.whatsapp} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2 bg-white text-custom-purple border-2 border-custom-purple/20 font-bold rounded-full hover:border-custom-purple hover:bg-custom-purple/5 transition-all duration-300 dark:bg-transparent dark:text-white dark:border-white/20 dark:hover:bg-white/10"
                        >
                            <WhatsAppIcon className="w-5 h-5" />
                            Pesan via WhatsApp
                        </a>
                    </div>

                    <div className="mt-12 grid grid-cols-3 gap-4 text-center max-w-lg mx-auto divide-x divide-zinc-200 dark:divide-zinc-700">
                        <div>
                            <p className="text-2xl font-bold text-custom-purple">1000+</p>
                            <p className="text-xs text-zinc-500 uppercase mt-1">Pelanggan</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-custom-purple">3 Jam</p>
                            <p className="text-xs text-zinc-500 uppercase mt-1">Layanan Kilat</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-custom-purple">4.9</p>
                            <p className="text-xs text-zinc-500 uppercase mt-1">Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
