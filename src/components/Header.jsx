import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink.jsx';
import { CabangSelector } from './CabangSelector.jsx';
import { SafeImage } from './common/SafeImage.jsx';

export const Header = ({ page, setPage, cabangId, setCabangId, dataCabang }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", page: "home" },
    { name: "Tentang Kami", page: "about" },
    { name: "Layanan & Harga", page: "services" },
    { name: "Mitra Usaha", page: "partners" },
    { name: "FAQ", page: "faq" },
  ];

  const handleSetPage = (pageName) => {
    setPage(pageName);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button onClick={() => handleSetPage("home")} className="flex items-center gap-2">
              <SafeImage
                src="/image/logo.png"
                alt="Logo Emak Laundry"
                className="h-16 w-auto"
              />
              <span className="sr-only">Emak Laundry</span>
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.page}
                isActive={page === item.page}
                onClick={() => handleSetPage(item.page)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="ml-4">
              <CabangSelector cabangId={cabangId} setCabangId={setCabangId} dataCabang={dataCabang} />
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-fuchsia-700 hover:bg-fuchsia-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fuchsia-500"
              aria-label="Buka menu"
            >
              <span className="sr-only">Buka menu utama</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40 border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleSetPage(item.page)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  page === item.page
                    ? 'bg-fuchsia-600 text-white'
                    : 'text-gray-700 hover:bg-fuchsia-100 hover:text-fuchsia-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-4 pb-4 px-4">
            <CabangSelector cabangId={cabangId} setCabangId={setCabangId} dataCabang={dataCabang} />
          </div>
        </div>
      )}
    </nav>
  );
};


