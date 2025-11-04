import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ChevronDown, 
  Menu, 
  X, 
  Star, 
  Award, 
  Truck, 
  Wallet,
  CheckCircle,
  Instagram,
  Facebook,
  Smartphone,
  Quote,
  HelpCircle,
  Sparkles,
  Camera,
  ImageIcon,
  Building
} from 'lucide-react';
import { cabangData as importedCabangData } from './data/cabang.js';
import { Header as ImportedHeader } from './components/Header.jsx';
import { Footer as ImportedFooter } from './components/Footer.jsx';
import { FloatingWhatsApp as ImportedFloatingWhatsApp } from './components/FloatingWhatsApp.jsx';
import { HomePage as ImportedHomePage } from './pages/HomePage.jsx';
import { AboutPage as ImportedAboutPage } from './pages/AboutPage.jsx';
import { ServicesPage as ImportedServicesPage } from './pages/ServicesPage.jsx';
import { PartnersPage as ImportedPartnersPage } from './pages/PartnersPage.jsx';
import { FAQPage as ImportedFAQPage } from './pages/FAQPage.jsx';

// Placeholder components are now defined in dedicated files and imported where needed


// TanyaEmak is provided as a standalone component


// AccordionItem now lives in components/AccordionItem.jsx

// NavLink moved to components/NavLink.jsx

// CabangSelector moved to components/CabangSelector.jsx

// Header moved to components/Header.jsx

// HomePage moved to pages/HomePage.jsx


// --- Komponen Utama App ---
export default function App() {
  const [page, setPage] = useState('home');
  // State untuk menyimpan cabang yang dipilih, default "banjar"
  const [cabangId, setCabangId] = useState('banjar');
  
  // Mengambil data cabang yang aktif
  const dataCabangAktif = (importedCabangData[cabangId] || importedCabangData['banjar']);

  const renderPage = () => {
    // Melewatkan 'dataCabangAktif' ke setiap halaman
    switch (page) {
      case 'home':
        return <ImportedHomePage setPage={setPage} data={dataCabangAktif} />;
      case 'about':
        return <ImportedAboutPage data={dataCabangAktif} />;
      case 'services':
        return <ImportedServicesPage data={dataCabangAktif} />;
      case 'partners':
        return <ImportedPartnersPage data={dataCabangAktif} />;
      case 'faq':
        return <ImportedFAQPage data={dataCabangAktif} />;
      default:
        return <ImportedHomePage setPage={setPage} data={dataCabangAktif} />;
    }
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
