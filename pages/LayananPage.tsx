import React, { useEffect } from 'react';
import Services from '../components/Services';

const LayananPage: React.FC = () => {
    useEffect(() => {
        // 1. Scroll ke atas
        window.scrollTo(0, 0);
        // 2. Ubah judul Tab Browser
        document.title = "Daftar Layanan - Emak Laundry";
        return () => {
            document.title = "Emak Laundry - Solusi Cuci Terbaik";
        };
    }, []);

    return <Services />;
};

export default LayananPage;
