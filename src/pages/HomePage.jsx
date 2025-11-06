import React from 'react';
import { Award, CheckCircle, Clock, Sparkles, Smartphone, Star, Quote } from 'lucide-react';
import { SafeImage } from '../components/common/SafeImage.jsx';

export const HomePage = ({ setPage, data }) => {
  const keunggulan = [
    { icon: Award, title: "Terbukti Andal & Berpengalaman", desc: "Sejak 2021, kami telah menjadi andalan kebersihan bagi ribuan pelanggan. Pengalaman kami adalah jaminan kualitas." },
    { icon: CheckCircle, title: "Solusi untuk Setiap Kebutuhan", desc: "Lebih dari 50+ layanan, dari kiloan harian, jas, gamis, hingga karpet dan bed cover. Solusi satu atap untuk Anda." },
    { icon: Clock, title: "Fleksibel Sesuai Jadwal Anda", desc: "Butuh cepat? Layanan ekspres 3 jam kami siap membantu. Ingin hemat? Pilih paket 3 hari. Anda yang tentukan." },
    { icon: Sparkles, title: "Ahli Perawatan Noda & Bahan", desc: "Tim terlatih kami siap menangani noda sulit dan bahan khusus seperti jaket kulit, sepatu, dan tas." },
  ];

  return (
    <>
      <section className="bg-white pt-12 pb-20 lg:pt-24 lg:pb-32">
        <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-12 items-center">
          <div className="text-center lg:text-left lg:col-span-3">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Kebersihan Terbaik dengan 
              <span className="text-fuchsia-600"> Sentuhan Kasih Ibu.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Selamat datang di {data.nama}! Kami hadir sejak 2021, memberikan solusi cuci pakaian yang bersih, wangi, dan terpercaya.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={data.kontak.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500"
              >
                <Smartphone size={20} className="mr-2" />
                Hubungi via WhatsApp
              </a>
              <button
                onClick={() => setPage("services")}
                className="inline-flex items-center justify-center px-8 py-3 border border-fuchsia-600 text-base font-medium rounded-md text-fuchsia-700 bg-white hover:bg-fuchsia-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500"
              >
                Lihat Daftar Harga
              </button>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-2">
            <SafeImage
              src="/image/hero-pakaian-wangi.jpg"
              alt="Pakaian Bersih & Wangi"
              className="rounded-lg shadow-xl object-cover w-full aspect-[3/2]"
              width="1200"
              height="800"
            />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-fuchsia-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Mengapa Pilih <span className="text-fuchsia-600">Emak Laundry?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Kami bukan sekadar laundry biasa. Kami adalah partner kebersihan Anda yang paling tepercaya.
            </p>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {keunggulan.map((item) => (
              <div key={item.title}>
                <item.icon className="h-12 w-12 text-fuchsia-600" />
                <h3 className="mt-5 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-base text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Apa Kata <span className="text-fuchsia-600">Pelanggan Setia</span> Kami?
            </h2>
            <p className="mt-4 text-lg text-gray-600">Kepercayaan mereka adalah bukti nyata komitmen kami.</p>
          </div>
        </div>
        <div className="mt-16 relative w-full overflow-hidden">
          <div className="absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-white"></div>
          <div className="absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-white"></div>
          <div className="w-max flex animate-scroll-x pause-animation">
            {[...(data.testimonials || []), ...(data.testimonials || [])].map((testimonial, index) => (
              <div key={`${testimonial.name}-${index}`} className="flex-shrink-0 w-80 sm:w-96 p-4">
                <div className="bg-white h-full p-8 rounded-lg shadow-md border border-gray-100">
                  <div className="flex text-fuchsia-500">
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                  </div>
                  <Quote className="h-12 w-12 text-fuchsia-100 mt-4" fill="currentColor" />
                  <p className="mt-4 text-gray-600 italic">"{testimonial.quote}"</p>
                  <div className="mt-6">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-fuchsia-700">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow-300">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Pakaian Kotor Menumpuk?</h2>
              <p className="mt-3 text-xl text-gray-800">Jangan tunggu lagi! Biarkan Emak Laundry yang urus.</p>
            </div>
            <a
              href={data.kontak.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500"
            >
              <Smartphone size={22} className="mr-3" />
              Hubungi Kami Sekarang
            </a>
          </div>
        </div>
      </section>
    </>
  );
};


