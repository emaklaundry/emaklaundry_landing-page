import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export const Footer = ({ setPage, data }) => {
  const footerNav = [
    { name: "Tentang Kami", page: "about" },
    { name: "Layanan", page: "services" },
    { name: "Mitra", page: "partners" },
    { name: "FAQ", page: "faq" },
  ];
  const handleSetPage = (pageName) => {
    setPage(pageName);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <button onClick={() => handleSetPage("home")} className="flex items-center gap-2">
              <img 
                src="/image/logo.png" 
                alt="Logo Emak Laundry" 
                className="h-16 w-auto"
                loading="lazy"
                onError={(e) => { 
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span style={{ display: 'none' }} className="font-bold text-xl text-white">Emak Laundry</span>
            </button>
            <p className="text-gray-400">Kebersihan Terbaik dengan Sentuhan Kasih Ibu.</p>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-fuchsia-400" />
                <span className="flex-1">{data.kontak.alamat}</span>
              </p>
              <p className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0 text-fuchsia-400" />
                <a href={data.kontak.waLink} target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400">{data.kontak.telp}</a>
              </p>
              <p className="flex items-start gap-3">
                <Clock size={18} className="mt-1 flex-shrink-0 text-fuchsia-400" />
                <span>{data.kontak.jam}</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Navigasi</h3>
            <ul className="mt-4 space-y-2">
              {footerNav.map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => handleSetPage(item.page)}
                    className="text-gray-300 hover:text-fuchsia-400 transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Ikuti Kami</h3>
            <p className="mt-4 text-gray-400">Dapatkan info promo dan tips perawatan pakaian terbaru.</p>
            <div className="mt-4 flex space-x-6">
              <a href={data.kontak.igLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-fuchsia-400" aria-label="Instagram Emak Laundry">
                <Instagram className="h-7 w-7" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href={data.kontak.fbLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-fuchsia-400" aria-label="Facebook Emak Laundry">
                <Facebook className="h-7 w-7" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Emak Laundry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


