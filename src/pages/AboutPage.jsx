import React from 'react';
import { Camera } from 'lucide-react';
import { SafeImage } from '../components/common/SafeImage.jsx';

export const AboutPage = ({ data }) => {
  const stats = [
    { value: "2021", label: "Berpengalaman Sejak" },
    { value: "220Jt+", label: "Total Transaksi Dilayani" },
    { value: "100rb+", label: "Kilo Pakaian Ditangani" },
    { value: "1000+", label: "Pelanggan Setia" },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-fuchsia-600 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <SafeImage 
            src="/image/galeri-fasilitas.jpg" 
            alt="Fasilitas Emak Laundry" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold">Tentang {data.nama}</h1>
          <p className="mt-4 text-xl lg:text-2xl max-w-3xl mx-auto text-fuchsia-100">
            Melayani Komunitas Sejak 2021: Kebersihan Terbaik dengan Sentuhan Kasih Ibu
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
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
            <div className="order-first lg:order-last lg:col-span-2">
              <SafeImage 
                src="/image/tentang-tim-kami.jpg" 
                alt="Tim Kami Siap Melayani" 
                className="rounded-lg shadow-xl object-cover w-full aspect-[3/2]"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fuchsia-50 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Angka Kami <span className="text-fuchsia-600">Berbicara</span></h2>
            <p className="mt-4 text-lg text-gray-600">Kepercayaan yang Anda berikan adalah aset terbesar kami.</p>
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

      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Camera className="h-12 w-12 text-fuchsia-600 mx-auto" />
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">Galeri Emak: <span className="text-fuchsia-600">Lihat Fasilitas Kami</span></h2>
            <p className="mt-4 text-lg text-gray-600">Kami menjaga kebersihan dan kualitas di setiap langkah.</p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {(data.galleryImages || []).map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md aspect-[3/2]">
                <SafeImage 
                  src={image.src} 
                  alt={image.alt} 
                  className="h-full w-full object-cover"
                  width={800}
                  height={533}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


