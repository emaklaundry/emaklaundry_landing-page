import React, { useEffect, useState } from 'react';
import { KiloanIcon, SatuanIcon, HouseholdIcon, B2BIcon, ShareIcon } from './Icons';
import { supabase } from '../config/supabaseClient'; // Pastikan file ini ada dan benar

// Tipe data sesuai output RPC Supabase
interface DBService {
    service_name: string;
    category: string;
    duration_days: number;
}

interface ServiceDisplay {
    icon: React.ReactElement;
    title: string;
    description: string;
    category: string;
}

const ServiceCard: React.FC<{ service: ServiceDisplay }> = ({ service }) => {
    const handleShare = async () => {
        const shareData = {
            title: `Layanan Emak Laundry: ${service.title}`,
            text: `Cek layanan "${service.title}" kami! ${service.description}`,
            url: window.location.href,
        };
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error("Gagal membagikan:", err);
            }
        } else {
            navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`).then(() => {
                alert('Info layanan disalin ke clipboard!');
            });
        }
    };

    return (
        <div className="relative bg-white dark:bg-custom-purple-surface p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-zinc-100 dark:border-zinc-800">
            <button
                onClick={handleShare}
                className="absolute top-4 right-4 p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-custom-purple-border transition-colors z-10"
            >
                <ShareIcon className="h-5 w-5" />
            </button>
            <div className="mb-6 flex justify-center pt-4 flex-shrink-0 text-custom-purple-primary dark:text-custom-purple-light">
                {service.icon}
            </div>
            <div className="text-center flex-grow">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                    {service.category}
                </span>
                <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-3 line-clamp-2">
                    {service.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-300 text-sm">
                    {service.description}
                </p>
            </div>
        </div>
    );
};

const Services: React.FC = () => {
    const [services, setServices] = useState<ServiceDisplay[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Helper untuk mapping kategori ke ikon
    const getIconByCategory = (category: string) => {
        const cat = category.toLowerCase();
        if (cat.includes('kiloan')) return <KiloanIcon />;
        if (cat.includes('satuan')) return <SatuanIcon />;
        if (cat.includes('sepatu')) return <SatuanIcon />;
        if (cat.includes('karpet') || cat.includes('rumah')) return <HouseholdIcon />;
        return <B2BIcon />;
    };

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const storeId = import.meta.env.VITE_STORE_ID;
                if (!storeId) throw new Error("Store ID belum disetting di .env");

                const { data, error } = await supabase
                    .rpc('get_public_services', { store_id_input: storeId });

                // Debug log
                console.log("Supabase get_public_services data:", data, "error:", error);

                if (error) throw error;

                if (!Array.isArray(data)) {
                    setError("Format data dari Supabase tidak sesuai (bukan array).");
                    setServices([]);
                    return;
                }

                if (data.length === 0) {
                    setServices([]);
                    return;
                }

                const formattedData: ServiceDisplay[] = (data as DBService[]).map((item) => ({
                    title: item.service_name,
                    category: item.category,
                    description: `Layanan ${item.category} profesional dengan estimasi pengerjaan ${item.duration_days} hari.`,
                    icon: getIconByCategory(item.category)
                }));
                setServices(formattedData);
            } catch (err: any) {
                console.error("Error fetching services:", err);
                setError(err.message || String(err));
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <section className="py-20 bg-zinc-50 dark:bg-custom-purple-bg min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
                        Daftar Layanan Kami
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-4 max-w-2xl mx-auto">
                        Kami menyediakan berbagai layanan laundry berkualitas yang terintegrasi langsung dengan sistem kasir kami.
                    </p>
                </div>
                {loading ? (
                    <div className="flex justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 bg-red-50 p-4 rounded-lg max-w-md mx-auto">
                        <p>Gagal memuat layanan: {error}</p>
                        <p className="text-sm mt-2">Pastikan VITE_STORE_ID sudah benar di .env</p>
                    </div>
                ) : services.length === 0 ? (
                    <div className="text-center text-zinc-500">
                        <p>Belum ada layanan yang tersedia saat ini.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Services;
