import React from 'react';
import { CheckCircle } from 'lucide-react';
import { PartnerLogoPlaceholder } from '../components/common/PartnerLogoPlaceholder.jsx';
import { SafeImage } from '../components/common/SafeImage.jsx';

export const PartnersPage = ({ data }) => {
  return (
    <div className="bg-white">
      <section className="relative bg-fuchsia-600 text-white py-24 lg:py-32 text-center">
        <div className="absolute inset-0 opacity-10">
              <SafeImage 
                src="/image/mitra-linen-hotel.jpg" 
                alt="Kapasitas Produksi Volume Besar" 
                className="w-full h-full object-cover"
              />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold">Mitra Usaha {data.nama}</h1>
          <p className="mt-4 text-xl lg:text-2xl max-w-3xl mx-auto text-fuchsia-100">Partner Laundry Andal untuk Pertumbuhan Bisnis Anda</p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-extrabold text-gray-900">Fokus Pada Bisnis Anda, <span className="text-fuchsia-600">Biar Kami Urus Cuciannya.</span></h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">Emak Laundry memahami kebutuhan unik pelaku usaha di bidang perhotelan, penginapan, restoran, spa, dan bisnis lain yang memerlukan layanan laundry volume besar.</p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">Kami menawarkan program kemitraan yang dirancang untuk mendukung kelancaran operasional bisnis Anda dengan standar profesional, kualitas konsisten, dan ketepatan waktu.</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><span className="font-bold">Harga Kompetitif untuk Mitra:</span> Struktur harga khusus yang lebih ekonomis untuk volume besar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><span className="font-bold">Kapasitas Produksi Besar:</span> Infrastruktur kami siap menangani permintaan besar tanpa mengorbankan jadwal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-fuchsia-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><span className="font-bold">Kualitas Terjaga:</span> Standar kebersihan dan kerapian tertinggi untuk setiap linen, handuk, dan seragam.</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
                  <SafeImage 
                    src="/image/mitra-linen-hotel.jpg" 
                    alt="Linen Hotel & Resto" 
                    className="rounded-lg shadow-xl object-cover w-full aspect-[3/2]"
                    width={1200}
                    height={800}
                  />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Dipercaya Oleh <span className="text-fuchsia-600">Berbagai Usaha</span></h2>
            <p className="mt-4 text-lg text-gray-600">Kami bangga menjadi partner kebersihan untuk berbagai bisnis di area {data.nama}.</p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {(data.mitraKami || []).map((mitra) => (
              mitra.logo ? (
                <div key={mitra.name} className="flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg p-6 aspect-[3/2]">
                      <SafeImage 
                        src={mitra.logo} 
                        alt={mitra.name} 
                        className="max-h-24 w-auto object-contain"
                        width={300}
                        height={160}
                        placeholder={<PartnerLogoPlaceholder name={mitra.name} className="w-full h-full" />}
                      />
                </div>
              ) : (
                <PartnerLogoPlaceholder key={mitra.name} name={mitra.name} />
              )
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fuchsia-50 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Daftar Harga Khusus <span className="text-fuchsia-600">Mitra Usaha</span></h2>
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
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500"
            >
              Diskusikan Kebutuhan Bisnis Anda
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};


