import React from 'react';
import Services from '../components/Services';
import SEO from '../components/SEO';

const LayananPage: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <SEO 
                title="Daftar Layanan Laundry Kiloan & Satuan - Emak Laundry Banjar"
                description="Cek harga laundry kiloan, cuci satuan, bed cover, dan sepatu di Emak Laundry Banjar. Layanan antar jemput gratis tersedia."
                canonical="https://www.emaklaundry.my.id/layanan"
            />
            <Services />
        </>
    );
};

export default LayananPage;
