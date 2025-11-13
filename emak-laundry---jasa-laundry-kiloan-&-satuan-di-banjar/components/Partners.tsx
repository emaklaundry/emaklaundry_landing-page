import React from 'react';

const partnerList = [
    'Hotel Asri Banjar',
    'Restoran Saung Kuring',
    'Villa Cempaka',
    'Klinik Harapan Bunda',
    'Salon Cantika',
    'Pondok Pesantren Al-Hidayah'
];

// Duplicate the list for a seamless marquee effect
const partners = [...partnerList, ...partnerList];

const Partners: React.FC = () => {
    return (
        <section id="partners" className="py-20 bg-zinc-50 dark:bg-custom-purple-bg">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">Dipercaya oleh Mitra Usaha</h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-4 max-w-2xl mx-auto">Kami bangga menjadi partner kebersihan bagi berbagai usaha di Kota Banjar.</p>
                </div>
                <div className="mt-12 relative w-full overflow-hidden">
                    <div className="flex w-max animate-marquee">
                        {partners.map((partner, index) => (
                            <div key={index} className="px-10 text-center flex-shrink-0">
                                <p className="text-md sm:text-lg font-semibold text-zinc-500 dark:text-zinc-300 whitespace-nowrap">{partner}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;