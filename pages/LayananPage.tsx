import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import WhatsAppButton from '../components/WhatsAppButton';
import BackToTopButton from '../components/BackToTopButton';

const LayananPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-custom-purple-bg transition-colors duration-300">
            <Header />
            <main className="flex-grow pt-20">
                <Services />
            </main>
            <WhatsAppButton />
            <BackToTopButton />
            <Footer />
        </div>
    );
};

export default LayananPage;
