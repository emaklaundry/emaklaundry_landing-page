import React, { useState, useEffect } from 'react';
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

// --- Data Kontak Global ---
const KONTAK = {
  nama: "Emak Laundry",
  alamat: "Jl. Dr. Sudarsono No.43, Mekarsari, Kec. Banjar, Kota Banjar, Jawa Barat 46321",
  jam: "Setiap Hari, 08:00 - 20:00 WIB",
  telp: "0851 7527 9659",
  wa: "085175279659",
  email: "emaklaundry12@gmail.com",
  waLink: "https://wa.me/6285175279659",
  igLink: "https://instagram.com/emaklaundry12",
  fbLink: "https://facebook.com/emakalundry",
  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1577.29111944724!2d108.53978155745905!3d-7.3719517962207375!2m3!1f0!2f0!3f0!3m2!1i1024!i768!4f13.1!3m3!1m2!1s0x2e6f631688e9419b%3A0xba735a6324e54a4e!2sEmak%20Laundry!5e0!3m2!1sid!2sid!4v1761908153521!5m2!1sid!2sid"
};

// --- Data Layanan (dari PDF) ---
const layananKiloan = [
  { jenis: "Cuci Ekspres", waktu: "3 Jam", harga: 25000, catatan: "Solusi tercepat untuk kebutuhan mendesak." },
  { jenis: "Cuci + Setrika", waktu: "6 Jam", harga: 20000, catatan: "Pakaian bersih dan rapi di hari yang sama." },
  { jenis: "Cuci + Setrika", waktu: "1 Hari", harga: 15000, catatan: "Layanan lengkap dengan pengerjaan esok hari." },
  { jenis: "Cuci + Setrika", waktu: "2 Hari", harga: 13000, catatan: "Pilihan populer untuk keseimbangan kecepatan dan harga." },
  { jenis: "Cuci + Setrika", waktu: "3 Hari", harga: 7500, catatan: "Pilihan paling ekonomis untuk layanan lengkap." },
  { jenis: "Cuci + Lipat", waktu: "1 Hari", harga: 8000, catatan: "Pakaian bersih dan terlipat rapi keesokan harinya." },
  { jenis: "Cuci + Lipat", waktu: "2 Hari", harga: 6000, catatan: "Pilihan standar untuk layanan cuci lipat." },
  { jenis: "Cuci + Lipat", waktu: "3 Hari", harga: 5000, catatan: "Pilihan paling hemat untuk cucian harian." },
  { jenis: "Setrika Saja", waktu: "-", harga: 5000, catatan: "Minimal 3 kg." },
];

const layananSatuan = [
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
];

const layananRumahTangga = [
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
];

const layananMitra = [
  { layanan: "Cuci Lipat Mitra", harga: 4000, keterangan: "Layanan cuci dan lipat massal yang efisien untuk kebutuhan operasional seperti handuk, sprei, dan linen." },
  { layanan: "Mitra Cuci Komplit", harga: 5500, keterangan: "Layanan cuci dan setrika massal untuk item yang memerlukan finishing rapi, seperti seragam karyawan atau taplak meja." },
];

// --- Data Testimoni ---
const testimonials = [
  {
    quote: "Layanan ekspres 3 jam-nya benar-benar penyelamat! Pagi masuk, siang sudah bersih, wangi, dan rapi. Kualitasnya tetap terjaga meski cepat. Keren!",
    name: "Rina S.",
    role: "Karyawan Swasta"
  },
  {
    quote: "Saya percayakan jas dan gamis pesta saya di sini. Hasilnya luar biasa, bersih total dan bahannya tetap awet. Penanganan bahan khusunya sangat profesional.",
    name: "Bpk. H. Ahmad",
    role: "Tokoh Masyarakat"
  },
  {
    quote: "Karpet masjid kami jadi bersih dan wangi seperti baru. Pengerjaannya juga cepat untuk ukuran sebesar itu. Harganya sangat bersahabat untuk mitra. Recommended!",
    name: "Ibu DKM Al-Ikhlas",
    role: "Mitra Usaha"
  }
];

// --- Data FAQ ---
const faqData = [
  {
    question: "Apa bedanya layanan Kiloan dan Satuan?",
    answer: "Layanan Kiloan cocok untuk pakaian sehari-hari seperti kaos, celana, dan pakaian rumah yang dihitung berdasarkan berat (kg). Layanan Satuan adalah untuk item spesial seperti jas, gaun, jaket kulit, atau sepatu yang memerlukan penanganan khusus dan detail."
  },
  {
    question: "Berapa minimal order untuk layanan kiloan?",
    answer: "Untuk layanan kiloan reguler (Cuci Lipat / Cuci Setrika), minimal order adalah 3 kg. Untuk layanan Setrika Saja, minimal order juga 3 kg."
  },
  {
    question: "Apakah Emak Laundry menyediakan layanan antar-jemput?",
    answer: "Ya, kami menyediakan layanan antar-jemput gratis untuk wilayah Kota Banjar dengan minimal order tertentu. Silakan hubungi kami via WhatsApp untuk informasi lebih lanjut dan penjadwalan."
  },
  {
    question: "Berapa lama pengerjaan untuk item satuan seperti jas atau karpet?",
    answer: "Waktu pengerjaan untuk item satuan bervariasi tergantung tingkat kesulitan dan jenis bahan. Rata-rata pengerjaan adalah 2-4 hari. Untuk layanan khusus seperti perawatan noda membandel mungkin memerlukan waktu lebih lama."
  }
];

// --- Data Galeri Foto ---
// PERUBAHAN: Menambahkan properti 'src'
const galleryImages = [
  { src: "/galeri-fasilitas.jpg", alt: "Fasilitas Bersih Kami" },
  { src: "/galeri-mesin-cuci.jpg", alt: "Mesin Cuci Modern" },
  { src: "/galeri-setrika.jpg", alt: "Proses Setrika Rapi" },
  { src: "/galeri-pakaian-rapi.jpg", alt: "Pakaian Siap Diambil" },
  { src: "/galeri-pelayanan.jpg", alt: "Pelayanan Ramah" },
  { src: "/galeri-hasil-bersih.jpg", alt: "Hasil Wangi & Bersih" },
];

// --- Data Mitra Kami ---
// PERUBAHAN: Mengisi properti 'logo' dengan path gambar
const mitraKami = [
  { name: "Hotel Asri Banjar", logo: "/mitra-hotel-asri.png" },
  { name: "Restoran Saung Kuring", logo: "/mitra-saung-kuring.png" },
  { name: "Villa Cempaka", logo: "/mitra-villa-cempaka.png" },
  { name: "Klinik Harapan Bunda", logo: "/mitra-klinik-harapan.png" },
  { name: "Spa & Sauna Sehati", logo: "/mitra-spa-sehati.png" },
  { name: "Guest House Anggrek", logo: "/mitra-guesthouse-anggrek.png" },
];


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

  const handleTanyaEmak = async () => {
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
    const apiKey = ""; 
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
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 disabled:bg-gray-400"
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

// --- Komponen Header ---
const Header = ({ page, setPage }) => {
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
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => handleSetPage("home")} className="flex items-center gap-2">
              <img 
                src="/Head w.jpg" 
                alt="Logo Emak Laundry" 
                className="h-16 w-auto"
                onError={(e) => { 
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span style={{ display: 'none' }} className="font-bold text-xl text-fuchsia-700">Emak Laundry</span>
            </button>
          </div>

          {/* Nav Desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.page}
                isActive={page === item.page}
                onClick={() => handleSetPage(item.page)}
              >
                {item.name}
              </NavLink>
            ))}
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
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="px-4 text-center text-sm text-gray-600">
              <p className="font-medium">{KONTAK.telp}</p>
              <p>{KONTAK.jam}</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Komponen Halaman: Home ---
const HomePage = ({ setPage }) => {
  const keunggulan = [
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
      <section className="bg-white pt-12 pb-20 lg:pt-24 lg:pb-32">
        <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-12 items-center">
          {/* Teks Hero (Golden Ratio: 3/5) */}
          <div className="text-center lg:text-left lg:col-span-3">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Kebersihan Terbaik dengan 
              <span className="text-fuchsia-600"> Sentuhan Kasih Ibu.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Emak Laundry hadir sejak 2021, memberikan solusi cuci pakaian yang bersih,
              wangi, dan terpercaya untuk setiap kebutuhan Anda.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={KONTAK.waLink}
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
          {/* Gambar Hero (Golden Ratio: 2/5) */}
          <div className="hidden lg:block lg:col-span-2">
            {/* PERUBAHAN: Menggunakan <img> tag. Pastikan "hero-pakaian-wangi.jpg" ada di folder /public */}
            <img 
              src="/hero-pakaian-wangi.jpg" 
              alt="Pakaian Bersih & Wangi" 
              className="rounded-lg shadow-xl object-cover w-full aspect-[3/2]" 
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
            {[...testimonials, ...testimonials].map((testimonial, index) => (
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


      {/* CTA Section */}
      <section className="bg-yellow-300">
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
              href={KONTAK.waLink}
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

// --- Komponen Halaman: Tentang Kami ---
const AboutPage = () => {
  const stats = [
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
          {/* PERUBAHAN: Menggunakan <img> tag. Pastikan "galeri-fasilitas-lebar.jpg" ada di folder /public */}
          <img 
            src="/galeri-fasilitas-lebar.jpg" 
            alt="Fasilitas Emak Laundry" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold">Tentang Emak Laundry</h1>
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
              {/* PERUBAHAN: Menggunakan <img> tag. Pastikan "tentang-tim-kami.jpg" ada di folder /public */}
              <img 
                src="/tentang-tim-kami.jpg" 
                alt="Tim Kami Siap Melayani" 
                className="rounded-lg shadow-xl object-cover w-full aspect-[3/2]" 
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
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md aspect-w-3 aspect-h-2">
                {/* PERUBAHAN: Menggunakan <img> tag dari data array */}
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="h-full w-full object-cover" 
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
const ServicesPage = () => {
  const formatCurrency = (number) => {
    if (typeof number === 'string') return number; 
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };
  
  const groupedLayananSatuan = layananSatuan.reduce((acc, item) => {
    (acc[item.kategori] = acc[item.kategori] || []).push(item);
    return acc;
  }, {});
  
  const groupedLayananRumahTangga = layananRumahTangga.reduce((acc, item) => {
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
            Spektrum layanan luas untuk semua kebutuhan kebersihan kain Anda. Transparan, jujur, tanpa biaya tersembunyi.
          </p>
        </div>
      </section>

      {/* Layanan Kiloan Harian */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            <span className="text-fuchsia-600">1.</span> Layanan Kiloan Harian
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Solusi ideal untuk kebutuhan cucian sehari-hari Anda. Pilih paket berdasarkan kecepatan yang Anda butuhkan.
          </p>
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
                {layananKiloan.map((item, idx) => (
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
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Untuk pakaian berharga dan item fashion Anda yang membutuhkan penanganan khusus dan detail.
          </p>
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
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">
            Solusi kebersihan menyeluruh untuk semua perlengkapan kain di rumah Anda.
          </p>
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
const PartnersPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Mitra */}
      <section className="relative bg-fuchsia-600 text-white py-24 lg:py-32 text-center">
        <div className="absolute inset-0 opacity-10">
          {/* PERUBAHAN: Menggunakan <img> tag. Pastikan "mitra-kapasitas-besar.jpg" ada di folder /public */}
          <img 
            src="/mitra-kapasitas-besar.jpg" 
            alt="Kapasitas Produksi Volume Besar" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold">Mitra Usaha Emak Laundry</h1>
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
              {/* PERUBAHAN: Menggunakan <img> tag. Pastikan "mitra-linen-hotel.jpg" ada di folder /public */}
              <img 
                src="/mitra-linen-hotel.jpg" 
                alt="Linen Hotel & Resto" 
                className="rounded-lg shadow-xl object-cover w-full aspect-[3/2]" 
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
              Kami bangga menjadi partner kebersihan untuk berbagai bisnis di Kota Banjar dan sekitarnya.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* PERUBAHAN: Logika untuk menampilkan <img> atau placeholder */}
            {mitraKami.map((mitra) => (
              mitra.logo ? (
                <div key={mitra.name} className="flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg p-6 aspect-[3/2]">
                  <img src={mitra.logo} alt={mitra.name} className="max-h-24 w-auto object-contain" />
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
            <p className="mt-4 text-lg text-gray-600">
              Penawaran harga dasar kami untuk para mitra bisnis.
            </p>
          </div>
          <div className="mt-16 max-w-2xl mx-auto grid sm:grid-cols-2 gap-8">
            {layananMitra.map((item) => (
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
              href={KONTAK.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500"
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
const FAQPage = () => {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <HelpCircle className="h-12 w-12 text-fuchsia-600 mx-auto" />
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-gray-900">
            Tanya Jawab <span className="text-fuchsia-600">(FAQ)</span>
          </h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-600">
            Pertanyaan yang paling sering diajukan oleh pelanggan kami.
          </p>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="divide-y divide-gray-200">
            {faqData.map((faq, index) => (
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
const Footer = ({ setPage }) => {
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
                src="/logo.png"
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
                <span className="flex-1">{KONTAK.alamat}</span>
              </p>
              <p className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0 text-fuchsia-400" />
                <a href={KONTAK.waLink} target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400">{KONTAK.telp}</a>
              </p>
              <p className="flex items-start gap-3">
                <Clock size={18} className="mt-1 flex-shrink-0 text-fuchsia-400" />
                <span>{KONTAK.jam}</span>
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
              <a href={KONTAK.igLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-fuchsia-400" aria-label="Instagram Emak Laundry">
                <Instagram className="h-7 w-7" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href={KONTAK.fbLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-fuchsia-400" aria-label="Facebook Emak Laundry">
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
          <p>&copy; {new Date().getFullYear()} {KONTAK.nama}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Komponen Tombol WhatsApp Mengambang
const FloatingWhatsApp = () => (
  <a
    href={KONTAK.waLink}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110"
    aria-label="Chat di WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.35 3.45 16.86L2.06 22L7.31 20.62C8.76 21.41 10.37 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.04 3.67C16.56 3.67 20.28 7.39 20.28 11.92C20.28 16.45 16.56 20.17 12.04 20.17C10.53 20.17 9.09 19.79 7.8 19.11L7.31 18.83L3.8 19.8L4.82 16.4L4.52 15.89C3.78 14.5 3.4 13.01 3.4 11.91C3.4 7.39 7.12 3.67 12.04 3.67M17.36 14.49C17.11 14.37 15.92 13.78 15.7 13.69C15.48 13.59 15.31 13.54 15.15 13.79C14.98 14.04 14.5 14.62 14.36 14.79C14.23 14.96 14.09 14.98 13.85 14.86C13.6 14.74 12.63 14.42 11.43 13.34C10.49 12.49 9.81 11.45 9.64 11.19C9.47 10.93 9.59 10.8 9.71 10.68C9.82 10.58 9.96 10.39 10.1 10.23C10.24 10.06 10.29 9.95 10.37 9.78C10.46 9.61 10.41 9.47 10.34 9.35C10.27 9.23 9.76 7.97 9.56 7.48C9.37 7 9.17 7.02 9.04 7.02C8.91 7.02 8.71 7.02 8.52 7.02C8.32 7.02 8.02 7.11 7.77 7.36C7.52 7.61 7 8.2 7 9.32C7 10.44 7.79 11.53 7.91 11.69C8.03 11.86 9.52 14.26 11.81 15.2C14.1 16.14 14.73 15.93 15.15 15.89C1F5.58 15.85 16.55 15.29 16.78 14.96C17.01 14.63 17.01 14.37 16.96 14.26C16.91 14.15 16.79 14.09 16.54 13.97C16.29 13.85 17.61 14.62 17.36 14.49Z" />
    </svg>
  </a>
);


// --- Komponen Utama App ---
export default function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage setPage={setPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'partners':
        return <PartnersPage />;
      case 'faq':
        return <FAQPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="font-sans">
      <Header page={page} setPage={setPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setPage={setPage} />
      <FloatingWhatsApp />
    </div>
  );
}

