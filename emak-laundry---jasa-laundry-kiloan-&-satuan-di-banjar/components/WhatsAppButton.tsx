import React from 'react';
import { WhatsAppIcon } from './Icons';

const WhatsAppButton: React.FC = () => {
    return (
        <a 
            href="https://wa.me/6285175279659?text=Halo%20Emak%20Laundry,%20saya%20mau%20tanya%20soal%20layanan."
            target="_blank" 
            rel="noopener noreferrer" 
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-custom-purple text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-custom-purple-dark transition-transform z-50 animate-pulse-custom"
            aria-label="Hubungi via WhatsApp"
        >
            <WhatsAppIcon className="h-8 w-8" />
        </a>
    );
};

export default WhatsAppButton;