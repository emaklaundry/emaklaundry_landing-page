import React, { useState, useEffect, lazy, Suspense } from 'react';
import { cabangData as importedCabangData } from './data/cabang.js';
import { Header as ImportedHeader } from './components/Header.jsx';
import { Footer as ImportedFooter } from './components/Footer.jsx';
import { FloatingWhatsApp as ImportedFloatingWhatsApp } from './components/FloatingWhatsApp.jsx';
import { HomePage as ImportedHomePage } from './pages/HomePage.jsx';

// Lazy-load halaman non-kritis untuk optimasi bundle
const AboutPage = lazy(() => import('./pages/AboutPage.jsx').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx').then(m => ({ default: m.ServicesPage })));
const PartnersPage = lazy(() => import('./pages/PartnersPage.jsx').then(m => ({ default: m.PartnersPage })));
const FAQPage = lazy(() => import('./pages/FAQPage.jsx').then(m => ({ default: m.FAQPage })));

// --- Komponen Utama App ---
export default function App() {
  const [page, setPage] = useState('home');
  // State untuk menyimpan cabang yang dipilih, default "banjar"
  const [cabangId, setCabangId] = useState('banjar');
  
  // Mengambil data cabang yang aktif
  const dataCabangAktif = (importedCabangData[cabangId] || importedCabangData['banjar']);

  // Update <title> dan meta description saat cabang/halaman berubah
  useEffect(() => {
    const titlePrefix = {
      home: '',
      about: 'Tentang Kami - ',
      services: 'Layanan & Harga - ',
      partners: 'Mitra Usaha - ',
      faq: 'FAQ - ',
    }[page] || '';

    document.title = `${titlePrefix}${dataCabangAktif.nama}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        `Layanan laundry ${dataCabangAktif.nama}. Bersih, wangi, dan terpercaya dengan sentuhan kasih ibu.`
      );
    }
  }, [page, dataCabangAktif]);

  // Object map untuk halaman (lebih mudah maintain vs switch)
  const pages = {
    home: <ImportedHomePage setPage={setPage} data={dataCabangAktif} />,
    about: <AboutPage data={dataCabangAktif} />,
    services: <ServicesPage data={dataCabangAktif} />,
    partners: <PartnersPage data={dataCabangAktif} />,
    faq: <FAQPage data={dataCabangAktif} />,
  };

  const renderPage = () => {
    const PageComponent = pages[page] || pages.home;
    return (
      <Suspense fallback={
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
          </div>
        </div>
      }>
        {PageComponent}
      </Suspense>
    );
  };

  return (
    <div className="font-sans">
      <ImportedHeader 
        page={page} 
        setPage={setPage} 
        cabangId={cabangId}
        setCabangId={setCabangId}
        dataCabang={importedCabangData}
      />
      <main>
        {renderPage()}
      </main>
      <ImportedFooter setPage={setPage} data={dataCabangAktif} />
      <ImportedFloatingWhatsApp data={dataCabangAktif} />
    </div>
  );
}
