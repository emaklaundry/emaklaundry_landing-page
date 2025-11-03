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

// --- Komponen Halaman: Tentang Kami ---
const AboutPage = ({ data }) => {
  const stats = [ // Kita anggap stats ini bisa diganti per cabang jika mau
    { value: "2021", label: "Berpengalaman Sejak" },
    { value: "220Jt+", label: "Total Transaksi Dilayani" },
    { value: "100rb+", label: "Kilo Pakaian Ditangani" },
    { value: "1000+", label: "Pelanggan Setia" },
  ];

  return (
    <div className="bg-white">
      {/* Hero About */}
      <section className="relative bg-fuchsia-600 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/image/galeri-fasilitas.jpg" 
            alt="Fasilitas Emak Laundry" 
            className="w-full h-full object-cover" 
            loading="lazy"
            onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div class="flex items-center justify-center bg-fuchsia-50 border border-fuchsia-100 rounded-lg shadow-inner w-full h-full object-cover"><div class="text-center text-fuchsia-400 p-4"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto lucide lucide-image-icon"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg><p class="mt-2 text-sm font-medium">Fasilitas Emak Laundry</p></div></div>'; }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold">Tentang {data.nama}</h1>
          <p className="mt-4 text-xl lg:text-2xl max-w-3xl mx-auto text-fuchsia-100">
            Melayani Komunitas Sejak 2021: Kebersihan Terbaik dengan Sentuhan Kasih Ibu
          </p>
        </div>
      </section>

      {/* Konten About (Golden Ratio) */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Teks Narasi (3/5) */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Nama "Emak Laundry" adalah <span className="text-fuchsia-600">Janji Kami.</span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Di Emak Laundry, kami percaya bahwa mencuci pakaian lebih dari sekadar membersihkan kotoran. Ini adalah bentuk kepedulian—sebuah cara untuk merawat apa yang Anda kenakan setiap hari.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Terinspirasi oleh ketelatenan dan kasih sayang seorang ibu, kami mendirikan Emak Laundry pada awal tahun 2021 dengan satu misi sederhana: memberikan layanan laundry berkualitas tinggi yang dapat diandalkan oleh setiap keluarga dan individu di komunitas kami.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Janji kami adalah untuk menangani setiap pakaian Anda dengan kehati-hatian maksimal, memastikan setiap item kembali kepada Anda dalam kondisi bersih sempurna, wangi, dan rapi.
              </p>
            </div>
            {/* Gambar About (2/5) */}
            <div className="order-first lg:order-last lg:col-span-2">
              <img 
                src="/image/tentang-tim-kami.jpg" 
                alt="Tim Kami Siap Melayani" 
                className="rounded-lg shadow-xl object-cover w-full aspect-[3/2]" 
                loading="lazy"
                width="1200"
                height="800"
                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div class="flex items-center justify-center bg-fuchsia-50 border border-fuchsia-100 rounded-lg shadow-inner aspect-[3/2]"><div class="text-center text-fuchsia-400 p-4"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto lucide lucide-image-icon"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg><p class="mt-2 text-sm font-medium">Tim Kami Siap Melayani</p></div></div>'; }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Bagian Stats (Angka) */}
      <section className="bg-fuchsia-50 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Angka Kami <span className="text-fuchsia-600">Berbicara</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Kepercayaan yang Anda berikan adalah aset terbesar kami. Rekam jejak kami menjadi bukti nyata dari komitmen kami terhadap kualitas dan kepuasan pelanggan.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-4xl lg:text-5xl font-extrabold text-fuchsia-600">{stat.value}</p>
                <p className="mt-3 text-base font-medium text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bagian Galeri Foto */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Camera className="h-12 w-12 text-fuchsia-600 mx-auto" />
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Galeri Emak: <span className="text-fuchsia-600">Lihat Fasilitas Kami</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Kami menjaga kebersihan dan kualitas di setiap langkah. Lihat sendiri bagaimana kami merawat pakaian Anda.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {(data.galleryImages || []).map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md aspect-w-3 aspect-h-2">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="h-full w-full object-cover" 
                  onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div class="flex items-center justify-center bg-fuchsia-50 border border-fuchsia-100 rounded-lg shadow-inner h-full w-full object-cover"><div class="text-center text-fuchsia-400 p-4"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto lucide lucide-image-icon"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg><p class="mt-2 text-sm font-medium">' + image.alt + '</p></div></div>'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

// --- Komponen Halaman: Layanan & Harga ---
const ServicesPage = ({ data }) => {
  const formatCurrency = (number) => {
    if (typeof number === 'string') return number; 
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };
  
  const groupedLayananSatuan = (data.layananSatuan || []).reduce((acc, item) => {
    (acc[item.kategori] = acc[item.kategori] || []).push(item);
    return acc;
  }, {});
  
  const groupedLayananRumahTangga = (data.layananRumahTangga || []).reduce((acc, item) => {
    (acc[item.kategori] = acc[item.kategori] || []).push(item);
    return acc;
  }, {});


  return (
    <div className="bg-gray-50">
      {/* Hero Layanan */}
      <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Layanan & <span className="text-fuchsia-600">Daftar Harga</span>
          </h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-600">
            Harga transparan untuk {data.nama}. Jujur, tanpa biaya tersembunyi.
          </p>
        </div>
      </section>

      {/* Layanan Kiloan Harian */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            <span className="text-fuchsia-600">1.</span> Layanan Kiloan Harian
          </h2>
          <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 bg-white">
              <thead className="bg-fuchsia-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-fuchsia-800 uppercase tracking-wider">
                    Jenis Layanan
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-fuchsia-800 uppercase tracking-wider">
                    Waktu Pengerjaan
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-fuchsia-800 uppercase tracking-wider">
                    Harga per kg
                  </th>
                  <th scope="col" className="hidden sm:table-cell px-6 py-4 text-left text-xs font-bold text-fuchsia-800 uppercase tracking-wider">
                    Catatan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {(data.layananKiloan || []).map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.jenis}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.waktu}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-fuchsia-700">{formatCurrency(item.harga)}</td>
                    <td className="hidden sm:table-cell px-6 py-4 text-sm text-gray-600">{item.catatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Perawatan Spesial Satuan */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            <span className="text-fuchsia-600">2.</span> Perawatan Spesial Satuan
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(groupedLayananSatuan).map(([kategori, items]) => (
              <div key={kategori} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-fuchsia-800 mb-4">{kategori}</h3>
                <ul className="divide-y divide-gray-200">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center py-3">
                      <span className="text-sm font-medium text-gray-900">{item.item}</span>
                      <span className="text-sm font-semibold text-fuchsia-700">{formatCurrency(item.harga)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Layanan Rumah Tangga */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            <span className="text-fuchsia-600">3.</span> Layanan Rumah Tangga & Ukuran Besar
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(groupedLayananRumahTangga).map(([kategori, items]) => (
              <div key={kategori} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-fuchsia-800 mb-4">{kategori}</h3>
                <ul className="divide-y divide-gray-200">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center py-3 gap-4">
                      <span className="text-sm font-medium text-gray-900">{item.item}</span>
                      <span className="text-right">
                        <span className="block text-sm font-semibold text-fuchsia-700">{formatCurrency(item.harga)}</span>
                        <span className="block text-xs text-gray-500">per {item.satuan}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Komponen Halaman: Mitra Usaha ---
const PartnersPage = ({ data }) => {
  return (
    <div className="bg-white">
      {/* Hero Mitra */}
      <section className="relative bg-fuchsia-600 text-white py-24 lg:py-32 text-center">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/image/mitra-linen-hotel.jpg" 
            alt="Kapasitas Produksi Volume Besar" 
            className="w-full h-full object-cover" 
            loading="lazy"
            onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div class="flex items-center justify-center bg-fuchsia-50 border border-fuchsia-100 rounded-lg shadow-inner w-full h-full object-cover"><div class="text-center text-fuchsia-400 p-4"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto lucide lucide-image-icon"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg><p class="mt-2 text-sm font-medium">Kapasitas Produksi Volume Besar</p></div></div>'; }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold">Mitra Usaha {data.nama}</h1>
          <p className="mt-4 text-xl lg:text-2xl max-w-3xl mx-auto text-fuchsia-100">
            Partner Laundry Andal untuk Pertumbuhan Bisnis Anda
          </p>
        </div>
      </section>
      
      {/* Konten Mitra (Golden Ratio) */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Teks Narasi (3/5) */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Fokus Pada Bisnis Anda, <span className="text-fuchsia-600">Biar Kami Urus Cuciannya.</span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Emak Laundry memahami kebutuhan unik pelaku usaha di bidang perhotelan, penginapan, restoran, spa, dan bisnis lain yang memerlukan layanan laundry volume besar.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Kami menawarkan program kemitraan yang dirancang untuk mendukung kelancaran operasional bisnis Anda dengan standar profesional, kualitas konsisten, dan ketepatan waktu.
              </p>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">
                    <span className="font-bold">Harga Kompetitif untuk Mitra:</span> Struktur harga khusus yang lebih ekonomis untuk volume besar.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">
                    <span className="font-bold">Kapasitas Produksi Besar:</span> Infrastruktur kami siap menangani permintaan besar tanpa mengorbankan jadwal.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">
                    <span className="font-bold">Kualitas Terjaga:</span> Standar kebersihan dan kerapian tertinggi untuk setiap linen, handuk, dan seragam.
                  </span>
                </li>
              </ul>
            </div>
            {/* Gambar Mitra (2/5) */}
            <div className="lg:col-span-2">
              <img 
                src="/image/mitra-linen-hotel.jpg" 
                alt="Linen Hotel & Resto" 
                className="rounded-lg shadow-xl object-cover w-full aspect-[3/2]" 
                loading="lazy"
                width="1200"
                height="800"
                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div class="flex items-center justify-center bg-fuchsia-50 border border-fuchsia-100 rounded-lg shadow-inner aspect-[3/2]"><div class="text-center text-fuchsia-400 p-4"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto lucide lucide-image-icon"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg><p class="mt-2 text-sm font-medium">Linen Hotel & Resto</p></div></div>'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Mitra Kami (Dipercaya Oleh) */}
      <section className="bg-white py-20 lg:py-24 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Dipercaya Oleh <span className="text-fuchsia-600">Berbagai Usaha</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Kami bangga menjadi partner kebersihan untuk berbagai bisnis di area {data.nama}.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {(data.mitraKami || []).map((mitra) => (
              mitra.logo ? (
                <div key={mitra.name} className="flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg p-6 aspect-[3/2]">
                  <img src={mitra.logo} alt={mitra.name} className="max-h-24 w-auto object-contain" 
                    loading="lazy" width="300" height="160"
                    onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div class="flex items-center justify-center text-center text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto lucide lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg><p class="mt-2 text-sm font-medium">' + mitra.name + '</p></div>'; }}
                  />
                </div>
              ) : (
                <PartnerLogoPlaceholder key={mitra.name} name={mitra.name} />
              )
            ))}
          </div>
        </div>
      </section>
      
      {/* Harga Mitra */}
      <section className="bg-fuchsia-50 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Daftar Harga Khusus <span className="text-fuchsia-600">Mitra Usaha</span>
            </h2>
          </div>
          <div className="mt-16 max-w-2xl mx-auto grid sm:grid-cols-2 gap-8">
            {(data.layananMitra || []).map((item) => (
              <div key={item.layanan} className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold text-gray-900">{item.layanan}</h3>
                <p className="mt-4 text-5xl font-extrabold text-fuchsia-600">
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(item.harga)}
                  <span className="text-lg font-medium text-gray-600">/kg</span>
                </p>
                <p className="mt-6 text-base text-gray-600">{item.keterangan}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={data.kontak.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-lg"
            >
              <Smartphone size={22} className="mr-3" />
              Diskusikan Kebutuhan Bisnis Anda
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Komponen Halaman: FAQ ---
const FAQPage = ({ data }) => {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <HelpCircle className="h-12 w-12 text-fuchsia-600 mx-auto" />
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-gray-900">
            Tanya Jawab <span className="text-fuchsia-600">(FAQ)</span>
          </h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-600">
            Pertanyaan yang paling sering diajukan untuk {data.nama}.
          </p>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="divide-y divide-gray-200">
            {(data.faqData || []).map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <TanyaEmak />
      </div>
    </div>
  );
};


// --- Komponen Footer ---
const Footer = ({ setPage, data }) => {
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
          {/* Kolom 1: Logo & Info */}
          <div className="space-y-4">
            <button onClick={() => handleSetPage("home")} className="flex items-center gap-2">
              <img 
                src="/image/logo.png" 
                alt="Logo Emak Laundry" 
                className="h-16 w-auto" 
                onError={(e) => { 
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span style={{ display: 'none' }} className="font-bold text-xl text-white">Emak Laundry</span>
            </button>
            <p className="text-gray-400">
              Kebersihan Terbaik dengan Sentuhan Kasih Ibu.
            </p>
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
          
          {/* Kolom 2: Navigasi Cepat */}
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
          
          {/* Kolom 3: Media Sosial */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Ikuti Kami</h3>
            <p className="mt-4 text-gray-400">
              Dapatkan info promo dan tips perawatan pakaian terbaru.
            </p>
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
      
      {/* Copyright */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Emak Laundry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Komponen Tombol WhatsApp Mengambang
const FloatingWhatsApp = ({ data }) => (
  <a
    href={data.kontak.waLink}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110"
    aria-label="Chat di WhatsApp"
  >
    <Phone size={28} />
  </a>
);


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

