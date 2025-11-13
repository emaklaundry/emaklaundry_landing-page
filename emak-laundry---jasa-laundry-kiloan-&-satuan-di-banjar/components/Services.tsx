import React from 'react';
import type { Service } from '../types';
import { KiloanIcon, SatuanIcon, HouseholdIcon, B2BIcon } from './Icons';

const services: Service[] = [
    {
        icon: <KiloanIcon />,
        title: 'Layanan Kiloan Harian',
        description: 'Untuk kebutuhan cuci pakaian sehari-hari. Tersedia paket reguler hingga ekspres 3 jam.',
    },
    {
        icon: <SatuanIcon />,
        title: 'Perawatan Spesial Satuan',
        description: 'Perawatan detail untuk pakaian istimewa seperti jas, gamis, jaket kulit, sepatu, dan tas.',
    },
    {
        icon: <HouseholdIcon />,
        title: 'Layanan Rumah Tangga',
        description: 'Kami juga menangani barang-barang besar seperti bed cover, karpet, gorden, dan selimut.',
    },
    {
        icon: <B2BIcon />,
        title: 'Mitra Usaha (B2B)',
        description: 'Solusi laundry efisien untuk hotel, restoran, spa, dan klinik dengan harga khusus.',
    },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white dark:bg-custom-purple-surface p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
        <div className="mb-6 flex justify-center">{service.icon}</div>
        <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-3 text-center">{service.title}</h3>
        <p className="text-zinc-500 dark:text-zinc-300 text-center">{service.description}</p>
    </div>
);

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-zinc-50 dark:bg-custom-purple-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">Layanan Lengkap Kami</h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-4 max-w-2xl mx-auto">Dari pakaian harian hingga perawatan khusus, kami siap melayani semua kebutuhan Anda.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;