import React from 'react';
import type { PricingPlan } from '../types';
import { SOCIAL_LINKS } from '../config/constants';
import { SuitIcon, JacketIcon, BedIcon, ShoesIcon } from './Icons';

const plans: PricingPlan[] = [
    {
        name: 'Reguler',
        price: '7.500',
        priceUnit: '/ kg',
        features: ['Cuci & Kering', 'Setrika Rapi', 'Pewangi Standar', 'Selesai dalam 3 Hari'],
        isPopular: false,
    },
    {
        name: 'Kilat',
        price: '15.000',
        priceUnit: '/ kg',
        features: ['Cuci & Kering', 'Setrika Uap', 'Pewangi Premium', 'Selesai dalam 1 Hari', 'Prioritas Pengerjaan'],
        isPopular: true,
    },
    {
        name: 'Ekspres',
        price: '25.000',
        priceUnit: '/ kg',
        features: ['Cuci & Kering', 'Setrika Uap Premium', 'Pewangi Eksklusif', 'Selesai dalam 3 Jam', 'Layanan Super Cepat'],
        isPopular: false,
    }
];

const satuanItems = [
    { name: 'Jas / Setelan', price: '25.000', icon: <SuitIcon /> },
    { name: 'Jaket Kulit', price: '20.000', icon: <JacketIcon /> },
    { name: 'Bed Cover (King/Jumbo)', price: '25.000', icon: <BedIcon /> },
    { name: 'Sepatu (Cuci Kering)', price: '20.000', icon: <ShoesIcon /> },
];


const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-custom-purple" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
    // Styling yang diperbarui
    const cardClasses = `
        relative flex flex-col p-8 bg-white dark:bg-custom-purple-surface rounded-2xl transition-all duration-300
        ${plan.isPopular 
            ? 'border-2 border-custom-purple shadow-2xl shadow-custom-purple/20 scale-105 z-10' 
            : 'border border-zinc-100 dark:border-custom-purple-border shadow-lg hover:shadow-xl hover:-translate-y-1'
        }
    `;

    return (
        <div className={cardClasses}>
            {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-custom-purple to-pink-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                        Paling Laris 🔥
                    </span>
                </div>
            )}
            <h3 className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-100">{plan.name}</h3>
            <p className="text-center text-zinc-500 dark:text-zinc-300 mt-2">
                <span className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">Rp {plan.price}</span>
                <span className="text-lg">{plan.priceUnit}</span>
            </p>
            <ul className="mt-8 space-y-4">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <CheckIcon />
                        <span className="ml-3 text-zinc-600 dark:text-zinc-300">{feature}</span>
                    </li>
                ))}
            </ul>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className={`block text-center w-full mt-10 font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${plan.isPopular ? 'bg-custom-purple text-white hover:bg-custom-purple-hover' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-custom-purple-border/50 dark:text-zinc-100 dark:hover:bg-custom-purple-border'}`}>
                Pesan Sekarang
            </a>
        </div>
    );
};

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-20 bg-zinc-50 dark:bg-custom-purple-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">Paket Kiloan Harian</h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-4 max-w-2xl mx-auto">Pilih paket kecepatan yang paling sesuai dengan kesibukan Anda.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">Harga Layanan Satuan</h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-2 max-w-2xl mx-auto">Perawatan khusus untuk barang-barang spesial Anda.</p>
                </div>
                <div className="mt-10 max-w-4xl mx-auto bg-white dark:bg-custom-purple-surface rounded-xl shadow-lg p-6 sm:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        {satuanItems.map((item, index) => (
                            <div key={index} className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-custom-purple-border last:border-b-0 sm:last:border-b">
                                <div className="flex items-center">
                                    <div className="mr-4 text-custom-purple flex-shrink-0">{item.icon}</div>
                                    <span className="text-zinc-700 dark:text-zinc-200">{item.name}</span>
                                </div>
                                <span className="font-semibold text-zinc-800 dark:text-zinc-100 whitespace-nowrap">Rp {item.price}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-6">
                        * Harga dapat bervariasi tergantung tingkat kesulitan. Hubungi kami untuk daftar harga lengkap.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
