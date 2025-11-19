import React, { useState, useEffect } from 'react';
import { useSmoothScroll } from '../utils/useSmoothScroll';
import { LogoIcon, SunIcon, MoonIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const handleNavClick = useSmoothScroll();
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === '/';

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Fungsi helper untuk menangani klik navigasi anchor
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (isOpen) setIsOpen(false);

        // Jika link adalah halaman internal (/layanan)
        if (href.startsWith('/')) {
            return;
        }

        // Jika link adalah anchor (#pricing, dll)
        if (href.startsWith('#')) {
            e.preventDefault();
            if (!isHomePage) {
                navigate('/');
                setTimeout(() => {
                    const element = document.querySelector(href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                handleNavClick(e);
            }
        }
    };

    const navLinks = [
        { name: 'Harga', href: '#pricing' },
        { name: 'Testimoni', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Lokasi', href: '#location' },
        { name: 'Layanan', href: '/layanan' },
    ];

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm dark:bg-custom-purple-bg/80 dark:shadow-none dark:border-b dark:border-custom-purple-border">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo selalu arahkan ke Home */}
                    <Link 
                        to="/" 
                        className="flex items-center space-x-2"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        <LogoIcon />
                        {/* Ganti tulisan dengan gambar */}
                        <img
                            src="/public/text-logo.png"
                            alt="Emak Laundry"
                            className="h-7 md:h-8 object-contain"
                            style={{ maxWidth: 160, display: 'block' }}
                            loading="lazy"
                            draggable={false}
                        />
                    </Link>

                    <div className="flex items-center space-x-2 sm:space-x-4">
                        {/* Desktop Nav */}
                        <nav className="hidden md:flex space-x-8">
                            {navLinks.map(link => {
                                const isInternalPage = link.href.startsWith('/');
                                if (isInternalPage) {
                                    return (
                                        <Link
                                            key={link.name}
                                            to={link.href}
                                            className={`font-medium transition-colors ${location.pathname === link.href ? 'text-indigo-600 dark:text-custom-purple-light' : 'text-zinc-600 dark:text-zinc-200 hover:text-custom-purple dark:hover:text-custom-purple-light'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                }
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        className="text-zinc-600 dark:text-zinc-200 hover:text-custom-purple dark:hover:text-custom-purple-light transition-colors font-medium cursor-pointer"
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                        </nav>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-custom-purple-border transition-colors"
                            aria-label="Toggle Purple Mode"
                        >
                            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                        </button>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-zinc-800 dark:text-zinc-100 focus:outline-none"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                >
                    <nav className="flex flex-col space-y-2">
                        {navLinks.map(link => {
                            const isInternalPage = link.href.startsWith('/');
                            if (isInternalPage) {
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-zinc-600 dark:text-zinc-200 hover:text-custom-purple dark:bg-custom-purple-surface dark:hover:bg-custom-purple-border py-3 px-4 rounded-md transition-colors font-medium block"
                                    >
                                        {link.name}
                                    </Link>
                                );
                            }
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    className="text-zinc-600 dark:text-zinc-200 hover:text-custom-purple dark:bg-custom-purple-surface dark:hover:bg-custom-purple-border py-3 px-4 rounded-md transition-colors font-medium block cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;