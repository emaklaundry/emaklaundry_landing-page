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

// --- DATA CABANG ---
const cabangData = {
  // --- CABANG BANJAR (Data yang ada) ---
  "banjar": {
    nama: "Emak Laundry Banjar",
    kontak: {
      nama: "Emak Laundry Banjar",
      alamat: "Jl. Dr. Sudarsono No.43, Mekarsari, Kec. Banjar, Kota Banjar, Jawa Barat 46321",
      jam: "Setiap Hari, 08:00 - 20:00 WIB",
      telp: "0851 7527 9659",
      wa: "085175279659",
      email: "emaklaundry12@gmail.com",
      waLink: "https://wa.me/6285175279659",
      igLink: "https://instagram.com/emaklaundry12",
      fbLink: "https://facebook.com/emakalundry",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1577.29111944724!2d108.53978155745905!3d-7.3719517962207375!2m3!1f0!2f0!3f0!3m2!1i1024!i768!4f13.1!3m3!1m2!1s0x2e6f631688e9419b%3A0xba735a6324e54a4e!2sEmak%20Laundry!5e0!3m2!1sid!2sid!4v1761908153521!5m2!1sid!2sid"
    },
    layananKiloan: [
      { jenis: "Cuci Ekspres", waktu: "3 Jam", harga: 25000, catatan: "Solusi tercepat untuk kebutuhan mendesak." },
      { jenis: "Cuci + Setrika", waktu: "6 Jam", harga: 20000, catatan: "Pakaian bersih dan rapi di hari yang sama." },
      { jenis: "Cuci + Setrika", waktu: "1 Hari", harga: 15000, catatan: "Layanan lengkap dengan pengerjaan esok hari." },
      { jenis: "Cuci + Setrika", waktu: "2 Hari", harga: 13000, catatan: "Pilihan populer untuk keseimbangan kecepatan dan harga." },
      { jenis: "Cuci + Setrika", waktu: "3 Hari", harga: 7500, catatan: "Pilihan paling ekonomis untuk layanan lengkap." },
      { jenis: "Cuci + Lipat", waktu: "1 Hari", harga: 8000, catatan: "Pakaian bersih dan terlipat rapi keesokan harinya." },
      { jenis: "Cuci + Lipat", waktu: "2 Hari", harga: 6000, catatan: "Pilihan standar untuk layanan cuci lipat." },
      { jenis: "Cuci + Lipat", waktu: "3 Hari", harga: 5000, catatan: "Pilihan paling hemat untuk cucian harian." },
      { jenis: "Setrika Saja", waktu: "-", harga: 5000, catatan: "Minimal 3 kg." },
    ],
    layananSatuan: [
      { kategori: "Pakaian Formal & Delikat", item: "Gamis Panjang / Dress", harga: 25000 },
      { kategori: "Pakaian Formal & Delikat", item: "Setelan Jas Lengan Panjang", harga: 25000 },
      { kategori: "Pakaian Formal & Delikat", item: "Setelan Jas Lengan Pendek", harga: 20000 },
      { kategori: "Pakaian Formal & Delikat", item: "Blouse", harga: 20000 },
      { kategori: "Pakaian Formal & Delikat", item: "Kemeja", harga: 15000 },
      { kategori: "Pakaian Formal & Delikat", item: "Celana Panjang", harga: 15000 },
      { kategori: "Pakaian Luar (Outerwear)", item: "Jaket Kulit", harga: 20000 },
      { kategori: "Pakaian Luar (Outerwear)", item: "Jaket Jeans", harga: 15000 },
      { kategori: "Pakaian Luar (Outerwear)", item: "Jaket Kain", harga: 15000 },
      { kategori: "Aksesori & Lainnya", item: "Sepatu", harga: 20000 },
      { kategori: "Aksesori & Lainnya", item: "Tas Besar", harga: 20000 },
      { kategori: "Aksesori & Lainnya", item: "Tas Kecil", harga: 12000 },
      { kategori: "Layanan Khusus", item: "Menghilangkan Noda (Tinta, Darah, Minyak)", harga: "Mulai 10.000" },
    ],
    layananRumahTangga: [
      { kategori: "Perlengkapan Tidur", item: "Bed Cover Jumbo/Besar", satuan: "Satuan", harga: 25000 },
      { kategori: "Perlengkapan Tidur", item: "Bed Cover Standar", satuan: "Satuan", harga: 18000 },
      { kategori: "Perlengkapan Tidur", item: "Selimut Jumbo", satuan: "Satuan", harga: 25000 },
      { kategori: "Perlengkapan Tidur", item: "Selimut Standar", satuan: "Satuan", harga: 17000 },
      { kategori: "Perlengkapan Tidur", item: "Sprei", satuan: "Kiloan", harga: 10000 },
      { kategori: "Perlengkapan Tidur", item: "Bantal / Guling", satuan: "Satuan", harga: 15000 },
      { kategori: "Karpet & Alas Lantai", item: "Karpet Tebal", satuan: "per Meter", harga: 12000 },
      { kategori: "Karpet & Alas Lantai", item: "Karpet Tipis / Masjid", satuan: "per Meter", harga: 7000 },
      { kategori: "Karpet & Alas Lantai", item: "Karpet Permadani", satuan: "Kiloan", harga: 15000 },
      { kategori: "Karpet & Alas Lantai", item: "Karpet Cendol / Tipis", satuan: "Kiloan", harga: 10000 },
      { kategori: "Lainnya", item: "Gorden", satuan: "Kiloan", harga: 10000 },
      { kategori: "Lainnya", item: "Sajadah Tebal", satuan: "Satuan", harga: 10000 },
      { kategori: "Lainnya", item: "Boneka (Kecil/Sedang/Besar/Jumbo)", satuan: "Satuan", harga: "10rb - 30rb" },
    ],
    layananMitra: [
      { layanan: "Cuci Lipat Mitra", harga: 4000, keterangan: "Layanan cuci dan lipat massal yang efisien untuk kebutuhan operasional seperti handuk, sprei, dan linen." },
      { layanan: "Mitra Cuci Komplit", harga: 5500, keterangan: "Layanan cuci dan setrika massal untuk item yang memerlukan finishing rapi, seperti seragam karyawan atau taplak meja." },
    ],
    testimonials: [
      { quote: "Layanan ekspres 3 jam-nya di Banjar benar-benar penyelamat! Pagi masuk, siang sudah bersih, wangi, dan rapi.", name: "Rina S.", role: "Karyawan Swasta (Banjar)" },
      { quote: "Saya percayakan jas dan gamis pesta saya di sini. Hasilnya luar biasa, bersih total dan bahannya tetap awet.", name: "Bpk. H. Ahmad", role: "Tokoh Masyarakat (Banjar)" },
      { quote: "Karpet masjid kami jadi bersih dan wangi seperti baru. Harganya sangat bersahabat untuk mitra.", name: "Ibu DKM Al-Ikhlas", role: "Mitra Usaha (Banjar)" }
    ],
    faqData: [
      { question: "Apa bedanya layanan Kiloan dan Satuan?", answer: "Layanan Kiloan cocok untuk pakaian sehari-hari seperti kaos, celana, dan pakaian rumah yang dihitung berdasarkan berat (kg). Layanan Satuan adalah untuk item spesial seperti jas, gaun, jaket kulit, atau sepatu yang memerlukan penanganan khusus dan detail." },
      { question: "Berapa minimal order untuk layanan kiloan?", answer: "Untuk layanan kiloan reguler (Cuci Lipat / Cuci Setrika), minimal order adalah 3 kg. Untuk layanan Setrika Saja, minimal order juga 3 kg." },
      { question: "Apakah Emak Laundry menyediakan layanan antar-jemput?", answer: "Ya, kami menyediakan layanan antar-jemput gratis untuk wilayah Kota Banjar dengan minimal order tertentu. Silakan hubungi kami via WhatsApp untuk informasi lebih lanjut dan penjadwalan." },
      { question: "Berapa lama pengerjaan untuk item satuan seperti jas atau karpet?", answer: "Waktu pengerjaan untuk item satuan bervariasi tergantung tingkat kesulitan dan jenis bahan. Rata-rata pengerjaan adalah 2-4 hari. Untuk layanan khusus seperti perawatan noda membandel mungkin memerlukan waktu lebih lama." }
    ],
    galleryImages: [
      { src: "/image/galeri-mesin-cuci.jpg", alt: "Mesin Cuci Modern di Banjar" },
      { src: "/image/galeri-fasilitas.jpg", alt: "Fasilitas Bersih Cabang Banjar" },
      { src: "/image/galeri-setrika.jpg", alt: "Proses Setrika Rapi" },
      { src: "/image/galeri-pakaian-rapi.jpg", alt: "Pakaian Siap Diambil" },
      { src: "/image/galeri-pelayanan.jpg", alt: "Pelayanan Ramah di Banjar" },
      { src: "/image/galeri-hasil-bersih.jpg", alt: "Hasil Wangi & Bersih" },
    ],
    mitraKami: [
      { name: "Hotel Asri Banjar", logo: "/image/mitra-hotel-asri.png" },
      { name: "Restoran Saung Kuring", logo: "/image/mitra-saung-kuring.png" },
      { name: "Villa Cempaka", logo: "/image/mitra-villa-cempaka.png" },
      { name: "Klinik Harapan Bunda", logo: "/image/mitra-klinik-harapan.png" },
      { name: "Spa & Sauna Sehati", logo: "/image/mitra-spa-sehati.png" },
      { name: "Guest House Anggrek", logo: "/image/mitra-guesthouse-anggrek.png" },
    ]
  },

  // --- CABANG TASIKMALAYA (Data Baru / Contoh) ---
  "tasikmalaya": {
    nama: "Emak Laundry Tasik",
    kontak: {
      nama: "Emak Laundry Tasik",
      alamat: "Jl. HZ. Mustofa No.123, Kahuripan, Kec. Tawang, Kota Tasikmalaya",
      jam: "Setiap Hari, 07:00 - 21:00 WIB",
      telp: "0852 1234 5678",
      wa: "085212345678",
      email: "emaklaundry.tasik@gmail.com",
      waLink: "https://wa.me/6285212345678",
      igLink: "https://instagram.com/emaklaundry.tasik",
      fbLink: "https://facebook.com/emaklaundry.tasik",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.95486470871!2d108.218553096283!3d-7.24169543161668!2m3!1f0!2f0!3f0!3m2!1i1024!i768!4f13.1!3m3!1m2!1s0x2e6f2f6477005e6b%3A0x101e3d0a614e700!2sTaman%20Kota%20Tasikmalaya!5e0!3m2!1sid!2sid!4v1730533302081!5m2!1sid!2sid" // Contoh Peta Tasik
    },
    layananKiloan: [
      { jenis: "Cuci Ekspres", waktu: "3 Jam", harga: 27000, catatan: "Solusi tercepat di Tasik." }, // Harga beda
      { jenis: "Cuci + Setrika", waktu: "6 Jam", harga: 22000, catatan: "Pakaian bersih dan rapi di hari yang sama." },
      { jenis: "Cuci + Setrika", waktu: "1 Hari", harga: 16000, catatan: "Layanan lengkap dengan pengerjaan esok hari." },
      { jenis: "Cuci + Setrika", waktu: "2 Hari", harga: 14000, catatan: "Pilihan populer untuk keseimbangan kecepatan dan harga." },
      { jenis: "Cuci + Setrika", waktu: "3 Hari", harga: 8000, catatan: "Pilihan paling ekonomis untuk layanan lengkap." },
      { jenis: "Cuci + Lipat", waktu: "1 Hari", harga: 9000, catatan: "Pakaian bersih dan terlipat rapi keesokan harinya." },
      { jenis: "Cuci + Lipat", waktu: "2 Hari", harga: 7000, catatan: "Pilihan standar untuk layanan cuci lipat." },
      { jenis: "Cuci + Lipat", waktu: "3 Hari", harga: 6000, catatan: "Pilihan paling hemat untuk cucian harian." },
      { jenis: "Setrika Saja", waktu: "-", harga: 6000, catatan: "Minimal 3 kg." },
    ],
    layananSatuan: [ 
      { kategori: "Pakaian Formal & Delikat", item: "Gamis Panjang / Dress", harga: 27000 },
      { kategori: "Pakaian Formal & Delikat", item: "Setelan Jas Lengan Panjang", harga: 27000 },
      { kategori: "Pakaian Luar (Outerwear)", item: "Jaket Kulit", harga: 22000 },
      { kategori: "Aksesori & Lainnya", item: "Sepatu", harga: 22000 },
    ],
    layananRumahTangga: [ 
      { kategori: "Perlengkapan Tidur", item: "Bed Cover Jumbo/Besar", satuan: "Satuan", harga: 27000 },
      { kategori: "Perlengkapan Tidur", item: "Bed Cover Standar", satuan: "Satuan", harga: 20000 },
      { kategori: "Karpet & Alas Lantai", item: "Karpet Tebal", satuan: "per Meter", harga: 14000 },
    ],
    layananMitra: [
      { layanan: "Cuci Lipat Mitra", harga: 4500, keterangan: "Layanan cuci dan lipat massal efisien untuk handuk, sprei, dan linen." },
      { layanan: "Mitra Cuci Komplit", harga: 6000, keterangan: "Layanan cuci dan setrika massal untuk seragam atau taplak meja." },
    ],
    testimonials: [
      { quote: "Wangi banget laundry di cabang Tasik! Parfumnya beda, lebih tahan lama. Suka!", name: "Aisha N.", role: "Mahasiswi (Tasikmalaya)" },
      { quote: "Pelayanannya ramah-ramah, tempatnya juga bersih. Jadi percaya ninggalin baju di sini.", name: "Bpk. Ridwan", role: "Wiraswasta (Tasikmalaya)" },
    ],
    faqData: [
      { question: "Apa bedanya layanan Kiloan dan Satuan?", answer: "Layanan Kiloan cocok untuk pakaian sehari-hari seperti kaos, celana, dan pakaian rumah yang dihitung berdasarkan berat (kg). Layanan Satuan adalah untuk item spesial seperti jas, gaun, jaket kulit, atau sepatu yang memerlukan penanganan khusus dan detail." },
      { question: "Minimal order di cabang Tasik berapa?", answer: "Untuk layanan kiloan reguler (Cuci Lipat / Cuci Setrika) dan Setrika Saja, minimal order adalah 3 kg." },
      { question: "Apakah cabang Tasik ada antar-jemput?", answer: "Ya, kami menyediakan layanan antar-jemput gratis untuk area Kota Tasikmalaya dengan minimal order 5kg. Silakan hubungi WA kami untuk penjadwalan." },
    ],
    galleryImages: [
      { src: "/image/galeri-tasik-1.jpg", alt: "Tampak Depan Emak Laundry Tasik" },
      { src: "/image/galeri-tasik-2.jpg", alt: "Area Penerimaan Tamu Tasik" },
      { src: "/image/galeri-tasik-3.jpg", alt: "Mesin Cuci Cabang Tasik" },
    ],
    mitraKami: [
      { name: "Hotel Santika Tasikmalaya", logo: "/image/mitra-santika-tasik.png" },
      { name: "Restoran Saung Gunung Jati", logo: "/image/mitra-gunung-jati.png" },
    ]
  },
};

// --- Komponen Placeholder Gambar (Fallback) ---
const ImagePlaceholder = ({ alt, className = '' }) => (
  <div
    className={`flex items-center justify-center bg-fuchsia-50 border border-fuchsia-100 rounded-lg shadow-inner ${className}`}
    style={{
      backgroundImage: 'radial-gradient(circle, rgba(192, 46, 137, 0.05) 1px, transparent 1px)',
      backgroundSize: '10px 10px',
      aspectRatio: '3/2'
    }}
  >
    <div className="text-center text-fuchsia-400 p-4">
      <ImageIcon size={48} className="mx-auto" />
      <p className="mt-2 text-sm font-medium">{alt}</p>
    </div>
  </div>
);

// --- Komponen Placeholder Logo Mitra (Fallback) ---
const PartnerLogoPlaceholder = ({ name, className = '' }) => (
  <div
    className={`flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg p-6 ${className}`}
    style={{
      backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
      backgroundSize: '10px 10px',
      aspectRatio: '3/2' 
    }}
  >
    <div className="text-center text-gray-400">
      <Building size={40} className="mx-auto" />
      <p className="mt-2 text-sm font-medium">{name}</p>
    </div>
  </div>
);


// --- Komponen "Tanya Emak" (GEMINI API) ---
const TanyaEmak = () => {
  const [pertanyaan, setPertanyaan] = useState("");
  const [jawaban, setJawaban] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const cooldownRef = useRef(0);

  const contoh = [
    'Bagaimana cara hilangkan noda minyak di baju?',
    'Boleh nggak jaket kulit dicuci mesin?',
    'Cara aman mengatasi baju luntur?'
  ];

  const handleTanyaEmak = async () => {
    const now = Date.now();
    if (now - cooldownRef.current < 1500) return;
    cooldownRef.current = now;
    if (!pertanyaan.trim()) {
      setError("Silakan tulis pertanyaan Anda terlebih dahulu.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setJawaban("");

    const systemPrompt = `
      Anda adalah "Emak", asisten AI dari Emak Laundry. Persona Anda: ramah, penuh perhatian, bijak, dan ahli dalam merawat pakaian (seperti seorang ibu yang sabar dan mengerti).
      Tugas Anda adalah menjawab pertanyaan pelanggan tentang perawatan pakaian, noda, jenis kain, atau layanan laundry.
      
      Aturan WAJIB:
      1.  Selalu sapa dengan ramah (contoh: "Halo, Nak.", "Aduh, tenang ya...").
      2.  Berikan jawaban yang singkat, padat, dan jelas (maksimal 3-4 kalimat).
      3.  Jika pertanyaan tentang noda, berikan 1-2 tips pertolongan pertama yang aman dan bersifat darurat (contoh: "jangan dikucek", "bilas air dingin").
      4.  SELALU akhiri jawaban dengan mengarahkan pelanggan untuk membawa pakaiannya ke Emak Laundry untuk penanganan profesional yang aman dan tuntas. Sebutkan "Emak Laundry" secara eksplisit.
      5.  Gunakan bahasa Indonesia yang santai namun sopan.
    `;
    
    const userQuery = pertanyaan;
    const apiKey = import.meta.env?.VITE_GEMINI_API_KEY || "";
    if (!apiKey) {
      setError("Fitur Tanya Emak dimatikan sementara. Hubungi kami via WhatsApp ya.");
      setIsLoading(false);
      return;
    }
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    let response;
    let delay = 1000;
    for (let i = 0; i < 5; i++) {
      try {
        const fetchOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userQuery }] }],
            systemInstruction: {
              parts: [{ text: systemPrompt }]
            },
          })
        };
        
        response = await fetch(apiUrl, fetchOptions);

        if (response.ok) break;
        if (response.status === 429 || response.status >= 500) {
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2;
        } else {
          throw new Error(`API error! status: ${response.status}`);
        }

      } catch (err) {
        if (i === 4) {
          console.error("Error fetching Gemini API after retries:", err);
          setError("Aduh, maaf, Emak sedang pusing. Coba tanyakan lagi beberapa saat, ya.");
          setIsLoading(false);
          return;
        }
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }

    try {
      const result = await response.json();
      const candidate = result.candidates?.[0];

      if (candidate && candidate.content?.parts?.[0]?.text) {
        setJawaban(candidate.content.parts[0].text);
      } else {
        console.warn("API response OK but no content: ", result);
        setJawaban("Aduh, Nak. Emak bingung mau jawab apa. Coba tanya yang lain soal cucian, ya.");
      }
    } catch (err) {
      console.error("Error parsing API response:", err);
      setError("Aduh, Emak dapat balasan yang aneh. Coba lagi, ya.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16 pt-12 border-t border-gray-200">
      <div className="text-center max-w-3xl mx-auto">
        <Sparkles className="h-12 w-12 text-fuchsia-600 mx-auto" />
        <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Masih Bingung? <span className="text-fuchsia-600">Tanya Emak!</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Punya pertanyaan spesifik tentang noda, bahan, atau perawatan? Tanyakan langsung pada ahlinya.
        </p>
      </div>
      
      <div className="mt-12 max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <div className="flex flex-wrap gap-2 mb-4">
          {contoh.map((c) => (
            <button key={c} onClick={() => setPertanyaan(c)} className="text-xs sm:text-sm px-3 py-1 rounded-full bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200 hover:bg-fuchsia-100">
              {c}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          <label htmlFor="pertanyaan" className="block text-sm font-medium text-gray-700">
            Tulis pertanyaan Anda di sini (Contoh: "Bagaimana cara hilangkan noda luntur?"):
          </label>
          <textarea
            id="pertanyaan"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500"
            value={pertanyaan}
            onChange={(e) => setPertanyaan(e.target.value)}
            placeholder="Aduh, Mak, baju saya kena noda..."
          />
          <button
            onClick={handleTanyaEmak}
            disabled={isLoading || !import.meta.env?.VITE_GEMINI_API_KEY}
            className="w-full btn-primary disabled:bg-gray-400"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Emak sedang berpikir...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Tanya Emak!
              </>
            )}
          </button>
        </div>
        
        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}
        {!import.meta.env?.VITE_GEMINI_API_KEY && !error && (
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-sm text-yellow-800">Fitur Tanya Emak membutuhkan konfigurasi API. Sementara ini nonaktif.</p>
          </div>
        )}
        
        {jawaban && (
          <div className="mt-6 p-6 bg-fuchsia-50 border border-fuchsia-200 rounded-lg">
            <h4 className="text-lg font-semibold text-fuchsia-800">Jawaban Emak:</h4>
            <p className="mt-2 text-gray-700 whitespace-pre-wrap">{jawaban}</p>
          </div>
        )}
      </div>
    </div>
  );
};


// --- Komponen Accordion untuk FAQ ---
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <h2>
        <button
          type="button"
          className="flex justify-between items-center w-full py-6 text-left text-lg font-medium text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span>{question}</span>
          <ChevronDown
            className={`h-6 w-6 text-fuchsia-600 transition-transform ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </button>
      </h2>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-6 pr-12">
          <p className="text-base text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

// --- Komponen Navigasi ---
const NavLink = ({ children, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-fuchsia-600 text-white'
        : 'text-gray-700 hover:bg-fuchsia-100 hover:text-fuchsia-700'
    }`}
  >
    {children}
  </button>
);

// --- Komponen Baru Pemilih Cabang ---
// PERUBAHAN: Logika ditambahkan untuk 'disabled' dan 'Segera Hadir'
const CabangSelector = ({ cabangId, setCabangId, dataCabang }) => {
  return (
    <div className="relative">
      <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
      <select
        value={cabangId}
        onChange={(e) => setCabangId(e.target.value)}
        className="pl-10 pr-8 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 appearance-none"
        aria-label="Pilih Cabang"
      >
        {Object.keys(dataCabang).map((key) => {
          if (key === "tasikmalaya") {
            return (
              <option key={key} value={key} disabled>
                {dataCabang[key].nama} (Segera Hadir)
              </option>
            );
          }
          return (
            <option key={key} value={key}>
              {dataCabang[key].nama}
            </option>
          );
        })}
      </select>
      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
    </div>
  );
};

// --- Komponen Header ---
const Header = ({ page, setPage, cabangId, setCabangId, dataCabang }) => {
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
    <nav className="bg-white/90 backdrop-blur shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => handleSetPage("home")} className="flex items-center gap-2">
              <img 
                src="/image/logo.png" 
                alt="Logo Emak Laundry" 
                className="h-16 w-auto" 
                loading="lazy" width="256" height="64"
                onError={(e) => { 
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span style={{ display: 'none' }} className="font-bold text-xl text-fuchsia-700">Emak Laundry</span>
            </button>
          </div>

          {/* Nav Desktop */}
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

          {/* Tombol Menu Mobile */}
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

      {/* Dropdown Menu Mobile */}
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

// --- Komponen Halaman: Home ---
const HomePage = ({ setPage, data }) => {
  const keunggulan = [ // Keunggulan kita anggap sama di semua cabang
    {
      icon: Award,
      title: "Terbukti Andal & Berpengalaman",
      desc: "Sejak 2021, kami telah menjadi andalan kebersihan bagi ribuan pelanggan. Pengalaman kami adalah jaminan kualitas.",
    },
    {
      icon: CheckCircle,
      title: "Solusi untuk Setiap Kebutuhan",
      desc: "Lebih dari 50+ layanan, dari kiloan harian, jas, gamis, hingga karpet dan bed cover. Solusi satu atap untuk Anda.",
    },
    {
      icon: Clock,
      title: "Fleksibel Sesuai Jadwal Anda",
      desc: "Butuh cepat? Layanan ekspres 3 jam kami siap membantu. Ingin hemat? Pilih paket 3 hari. Anda yang tentukan.",
    },
    {
      icon: Sparkles,
      title: "Ahli Perawatan Noda & Bahan",
      desc: "Tim terlatih kami siap menangani noda sulit dan bahan khusus seperti jaket kulit, sepatu, dan tas.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-fuchsia-50 pt-12 pb-20 lg:pt-24 lg:pb-32 section-fade-in">
        <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-12 items-center">
          {/* Teks Hero (Golden Ratio: 3/5) */}
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
                className="btn-primary"
              >
                <Smartphone size={20} className="mr-2" />
                Hubungi via WhatsApp
              </a>
              <button
                onClick={() => setPage("services")}
                className="btn-secondary"
              >
                Lihat Daftar Harga
              </button>
            </div>
          </div>
          {/* Gambar Hero (Golden Ratio: 2/5) */}
          <div className="hidden lg:block lg:col-span-2">
            <img 
              src="/image/hero-pakaian-wangi.jpg" 
              alt="Pakaian Bersih & Wangi" 
              className="rounded-lg shadow-xl object-cover w-full aspect-[3/2]" 
              loading="eager"
              width="1200"
              height="800"
              onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div class="flex items-center justify-center bg-fuchsia-50 border border-fuchsia-100 rounded-lg shadow-inner aspect-[3/2]"><div class="text-center text-fuchsia-400 p-4"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto lucide lucide-image-icon"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg><p class="mt-2 text-sm font-medium">Pakaian Bersih & Wangi</p></div></div>'; }}
            />
          </div>
        </div>
      </section>

      {/* Keunggulan Section (Dibuat Minimalis) */}
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

      {/* Testimoni Section (Bergulir) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Apa Kata <span className="text-fuchsia-600">Pelanggan Setia</span> Kami?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Kepercayaan mereka adalah bukti nyata komitmen kami.
            </p>
          </div>
        </div>
        
        {/* Carousel Wrapper */}
        <div className="mt-16 relative w-full overflow-hidden">
          <div className="absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-white"></div>
          <div className="absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-white"></div>
          <div className="w-max flex animate-scroll-x pause-animation">
            {[...(data.testimonials || []), ...(data.testimonials || [])].map((testimonial, index) => (
              <div key={`${testimonial.name}-${index}`} className="flex-shrink-0 w-80 sm:w-96 p-4">
                <div className="bg-white h-full p-8 rounded-lg shadow-md border border-gray-100 card-hover">
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


      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-300 to-yellow-300">
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Pakaian Kotor Menumpuk?
              </h2>
              <p className="mt-3 text-xl text-gray-800">
                Jangan tunggu lagi! Biarkan Emak Laundry yang urus.
              </p>
            </div>
            <a
              href={data.kontak.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-lg"
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
        return <HomePage setPage={setPage} data={dataCabangAktif} />;
      case 'about':
        return <AboutPage data={dataCabangAktif} />;
      case 'services':
        return <ServicesPage data={dataCabangAktif} />;
      case 'partners':
        return <PartnersPage data={dataCabangAktif} />;
      case 'faq':
        return <FAQPage data={dataCabangAktif} />;
      default:
        return <HomePage setPage={setPage} data={dataCabangAktif} />;
    }
  };

  return (
    <div className="font-sans">
      <Header 
        page={page} 
        setPage={setPage} 
        cabangId={cabangId}
        setCabangId={setCabangId}
        dataCabang={importedCabangData}
      />
      <main>
        {renderPage()}
      </main>
      <Footer setPage={setPage} data={dataCabangAktif} />
      <FloatingWhatsApp data={dataCabangAktif} />
    </div>
  );
}

