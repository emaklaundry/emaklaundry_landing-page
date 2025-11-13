
import React from 'react';
import { TruckIcon, ShieldCheckIcon, SparklesIconV2, ClockIcon } from './Icons';

const features = [
    {
        icon: <TruckIcon />,
        title: 'Antar-Jemput Gratis',
        description: 'Hemat waktu berharga Anda. Kami siap menjemput dan mengantar cucian bersih langsung ke depan pintu Anda (min. order 5kg).',
    },
    {
        icon: <SparklesIconV2 />,
        title: 'Higienis & Wangi Tahan Lama',
        description: 'Kami menggunakan deterjen premium dan parfum berkualitas untuk hasil yang tidak hanya bersih, tapi juga wangi menyegarkan.',
    },
    {
        icon: <ShieldCheckIcon />,
        title: 'Garansi Kepuasan Pelanggan',
        description: 'Kepuasan Anda adalah prioritas kami. Jika tidak puas dengan hasilnya, kami akan cuci ulang pakaian Anda secara gratis.',
    },
    {
        icon: <ClockIcon />,
        title: 'Tepat Waktu & Cepat',
        description: 'Andalkan paket Ekspres 3 Jam kami untuk kebutuhan mendesak. Cucian Anda selesai cepat tanpa kompromi kualitas.',
    },
];

const FeatureCard: React.FC<{ feature: typeof features[0] }> = ({ feature }) => {
    return (
        <div className="bg-white dark:bg-custom-purple-surface p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl h-full">
            <div className="mb-4 inline-block">{feature.icon}</div>
            <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">{feature.title}</h3>
            <p className="text-zinc-500 dark:text-zinc-300">{feature.description}</p>
        </div>
    );
};

const WhyChooseUs: React.FC = () => {
    return (
        <section id="why-us" className="py-20 bg-zinc-50 dark:bg-custom-purple-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">Kenapa Memilih Emak Laundry?</h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-4 max-w-2xl mx-auto">Kami memberikan lebih dari sekadar cucian bersih.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
