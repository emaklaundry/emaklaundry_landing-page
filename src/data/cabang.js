// Data cabang dipisahkan dari UI untuk memudahkan perawatan/penambahan cabang baru
export const cabangData = {
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
  fbLink: "https://facebook.com/emaklaundry",
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
      { question: "Berapa lama pengerjaan untuk item satuan seperti jas atau karpet?", answer: "Waktu pengerjaan untuk item satuan bervariasi tergantung tingkat kesulitan dan jenis bahan. Rata-rata pengerjaan adalah 2-4 hari. Untuk layanan khusus seperti perawatan noda membandel mungkin memerlukan waktu lebih lama." },
      { question: "Apakah bisa cuci kilat untuk acara mendadak?", answer: "Tentu bisa! Kami menyediakan layanan Cuci Ekspres 3 Jam dengan harga Rp 25.000/kg. Pakaian Anda akan bersih, wangi, dan siap dipakai dalam waktu singkat." },
      { question: "Bagaimana cara menghitung berat cucian kiloan?", answer: "Kami menggunakan timbangan digital yang akurat. Berat cucian dihitung setelah pakaian kering (sebelum dicuci). Berat minimal adalah 3 kg untuk layanan kiloan." },
      { question: "Apakah aman mencuci pakaian berbahan sensitif seperti sutra atau wool?", answer: "Sangat aman! Tim kami terlatih menangani berbagai jenis bahan. Untuk bahan sensitif, kami menggunakan deterjen khusus dan teknik pencucian yang lembut untuk menjaga kualitas pakaian Anda." },
      { question: "Bagaimana jika ada pakaian yang rusak atau hilang?", answer: "Kami sangat berhati-hati dalam menangani setiap pakaian. Namun jika terjadi kerusakan yang disebabkan oleh kesalahan kami, akan ada kompensasi sesuai kesepakatan. Untuk mencegah kehilangan, kami memiliki sistem pencatatan yang detail untuk setiap order." }
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
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.95486470871!2d108.218553096283!3d-7.24169543161668!2m3!1f0!2f0!3f0!3m2!1i1024!i768!4f13.1!3m3!1m2!1s0x2e6f2f6477005e6b%3A0x101e3d0a614e700!2sTaman%20Kota%20Tasikmalaya!5e0!3m2!1sid!2sid!4v1730533302081!5m2!1sid!2sid"
    },
    layananKiloan: [
      { jenis: "Cuci Ekspres", waktu: "3 Jam", harga: 27000, catatan: "Solusi tercepat di Tasik." },
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
      { question: "Apakah bisa cuci ekspres di cabang Tasikmalaya?", answer: "Tentu! Kami menyediakan layanan Cuci Ekspres 3 Jam dengan harga Rp 27.000/kg. Cocok untuk kebutuhan mendadak seperti acara keluarga atau perjalanan bisnis." },
      { question: "Berapa jam operasional cabang Tasikmalaya?", answer: "Cabang Tasikmalaya buka setiap hari dari jam 07:00 - 21:00 WIB. Kami siap melayani kebutuhan laundry Anda lebih awal dan lebih lama!" }
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


