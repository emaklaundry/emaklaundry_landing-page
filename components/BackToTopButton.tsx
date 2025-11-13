
import React, { useState, useEffect } from 'react';
import { UpArrowIcon } from './Icons';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 bg-zinc-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-800 dark:bg-custom-purple-border dark:hover:bg-custom-purple-surface transition-all duration-300 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            aria-label="Kembali ke atas"
        >
            <UpArrowIcon className="h-6 w-6" />
        </button>
    );
};

export default BackToTopButton;
