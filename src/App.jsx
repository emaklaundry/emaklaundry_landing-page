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
    const pageMetadata = {
      home: {
        title: `${dataCabangAktif.nama} - Jasa Laundry Kiloan & Satuan Terpercaya`,
        description: `${dataCabangAktif.nama} melayani laundry kiloan mulai 5rb/kg, cuci setrika, cuci karpet, sepatu, boneka. Antar jemput gratis. Buka setiap hari ${dataCabangAktif.kontak.jam}. ☎ ${dataCabangAktif.kontak.telp}`,
      },
      about: {
        title: `Tentang Kami - ${dataCabangAktif.nama}`,
        description: `Profil dan sejarah ${dataCabangAktif.nama}. Komitmen kami memberikan layanan laundry berkualitas tinggi dengan harga terjangkau untuk masyarakat Jawa Barat.`,
      },
      services: {
        title: `Layanan & Harga - ${dataCabangAktif.nama}`,
        description: `Daftar lengkap layanan laundry ${dataCabangAktif.nama}: Kiloan (mulai 5rb/kg), Satuan (jas, gamis, jaket), Karpet, Sepatu, Boneka, Bed Cover, hingga layanan Mitra. Harga transparan dan kompetitif.`,
      },
      partners: {
        title: `Mitra Usaha - ${dataCabangAktif.nama}`,
        description: `${dataCabangAktif.nama} dipercaya oleh hotel, restoran, klinik, spa, dan guest house sebagai partner laundry profesional. Layanan cuci komplit mitra mulai 4rb/kg dengan kualitas terjamin.`,
      },
      faq: {
        title: `FAQ & Tanya Jawab - ${dataCabangAktif.nama}`,
        description: `Pertanyaan umum seputar layanan laundry ${dataCabangAktif.nama}. Minimal order, waktu pengerjaan, area antar jemput, dan informasi penting lainnya.`,
      },
    };

    const metadata = pageMetadata[page] || pageMetadata.home;
    
    document.title = metadata.title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metadata.description);
    }

    // Update canonical URL per halaman
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const baseUrl = 'https://www.emaklaundry.my.id';
      const pagePath = page === 'home' ? '/' : `/${page}`;
      const cabangParam = cabangId !== 'banjar' ? `?cabang=${cabangId}` : '';
      canonical.setAttribute('href', `${baseUrl}${pagePath}${cabangParam}`);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (ogTitle) ogTitle.setAttribute('content', metadata.title);
    if (ogDesc) ogDesc.setAttribute('content', metadata.description);
    if (ogUrl) {
      const baseUrl = 'https://www.emaklaundry.my.id';
      const pagePath = page === 'home' ? '/' : `/${page}`;
      const cabangParam = cabangId !== 'banjar' ? `?cabang=${cabangId}` : '';
      ogUrl.setAttribute('content', `${baseUrl}${pagePath}${cabangParam}`);
    }
  }, [page, cabangId, dataCabangAktif]);

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
