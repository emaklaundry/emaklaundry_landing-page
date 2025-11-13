
import React, { useEffect, useRef } from 'react';
import { CloseIcon } from './Icons';

interface TermsProps {
    isOpen: boolean;
    onClose: () => void;
}

const Terms: React.FC<TermsProps> = ({ isOpen, onClose }) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                titleRef.current?.focus();
            }, 100); // Timeout to ensure the element is in the DOM before focusing
        }
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 transition-opacity"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-title"
        >
            <div 
                className="bg-white dark:bg-custom-purple-surface w-full max-w-2xl max-h-[90vh] rounded-xl shadow-2xl flex flex-col relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <div className="flex justify-between items-center p-6 border-b border-zinc-200 dark:border-custom-purple-border">
                    <h2 
                        id="terms-title" 
                        className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 focus:outline-none"
                        ref={titleRef}
                        tabIndex={-1}
                    >
                        Syarat & Ketentuan
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-white transition-colors"
                        aria-label="Tutup Syarat & Ketentuan"
                    >
                        <CloseIcon />
                    </button>
                </div>
                <div className="overflow-y-auto p-6 space-y-6 text-zinc-600 dark:text-zinc-300">
                    <div>
                        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Jaminan Layanan</h3>
                        <p>
                            Emak Laundry berkomitmen untuk memberikan hasil cucian yang bersih, rapi, dan wangi. Jika Anda tidak puas dengan hasil cucian kami karena kelalaian dari pihak kami, kami menyediakan garansi cuci ulang gratis. Klaim garansi harus dilakukan maksimal 1x24 jam setelah pakaian diterima.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Kebijakan Barang Hilang</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Pelanggan wajib memeriksa dan menghitung jumlah pakaian saat menyerahkan dan menerima laundry. Nota laundry adalah bukti sah jumlah pakaian.</li>
                            <li>Klaim kehilangan harus disampaikan maksimal 1x24 jam setelah pakaian diterima dengan menunjukkan nota asli.</li>
                            <li>Jika terbukti ada pakaian yang hilang karena kelalaian kami, kompensasi yang diberikan adalah maksimal 10 kali dari biaya cuci pakaian yang hilang tersebut, dengan nilai penggantian maksimal Rp 100.000,- per potong.</li>
                            <li>Kami tidak bertanggung jawab atas barang-barang berharga yang tertinggal di dalam saku pakaian (seperti uang, perhiasan, kunci, dll).</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Kebijakan Barang Rusak</h3>
                         <ul className="list-disc list-inside space-y-1">
                            <li>Kami selalu melakukan proses penyortiran berdasarkan warna dan jenis kain, namun risiko kerusakan tetap ada.</li>
                            <li>Kami tidak bertanggung jawab atas kerusakan akibat sifat asli bahan (luntur, susut, atau kerusakan pada kancing/aksesoris) atau karena pakaian yang sudah rapuh.</li>
                             <li>Untuk noda, kami akan berusaha semaksimal mungkin untuk menghilangkannya, namun tidak memberikan jaminan 100% noda dapat hilang.</li>
                            <li>Jika kerusakan terbukti disebabkan oleh proses pencucian kami, kompensasi akan diberikan sesuai dengan kebijakan yang sama dengan kebijakan barang hilang.</li>
                        </ul>
                    </div>

                     <div>
                        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Lain-lain</h3>
                         <ul className="list-disc list-inside space-y-1">
                            <li>Pakaian yang tidak diambil dalam waktu 30 hari sejak tanggal selesai, jika terjadi kerusakan atau kehilangan, bukan menjadi tanggung jawab Emak Laundry.</li>
                             <li>Dengan menggunakan jasa kami, pelanggan dianggap telah membaca, mengerti, dan menyetujui syarat dan ketentuan yang berlaku.</li>
                        </ul>
                    </div>

                </div>
                 <div className="p-6 border-t border-zinc-200 dark:border-custom-purple-border text-right">
                    <button 
                        onClick={onClose} 
                        className="bg-custom-purple text-white font-bold py-2 px-6 rounded-lg hover:bg-custom-purple-hover transition-colors"
                    >
                        Mengerti
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Terms;