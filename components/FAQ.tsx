import React, { useState } from 'react';
import type { FAQItem } from '../types';
import { GoogleGenAI } from "@google/genai";
import { SparklesIcon } from './Icons';
import { CONTACT_INFO } from '../config/constants';

// The API key is NOT hardcoded. It is sourced from the environment.
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY as string });

const systemInstruction = `Anda adalah 'Emak AI', asisten virtual dari Emak Laundry di Kota Banjar. Jawab pertanyaan pengguna seputar layanan laundry dengan ramah, informatif, dan dengan 'sentuhan kasih ibu' seperti seorang ibu yang bijak. Gunakan informasi berikut sebagai konteks: Nama laundry adalah Emak Laundry. Lokasi kami di ${CONTACT_INFO.address}. Buka setiap hari dari jam 08:00 pagi sampai 20:00 malam. Nomor WhatsApp kami adalah ${CONTACT_INFO.phone}. Kami punya layanan antar-jemput gratis untuk order minimal 5kg. Harga paket kiloan: Reguler (3 hari) Rp7.500/kg, Kilat (1 hari) Rp12.000/kg, dan Ekspres (3 jam) Rp25.000/kg. Kami juga melayani cuci satuan untuk jas, gamis, sepatu, tas, serta laundry rumah tangga seperti bed cover dan karpet. Ada juga layanan untuk bisnis (B2B) seperti hotel dan restoran. PENTING: Setelah menjawab pertanyaan pengguna, selalu akhiri jawaban Anda dengan ajakan bertindak (call-to-action) yang relevan untuk mengajak pengguna menggunakan layanan Emak Laundry. Contohnya, 'Kalau lagi buru-buru, coba deh paket Ekspres 3 jam kami, dijamin cepat dan bersih!', atau 'Jangan ragu hubungi Emak di WhatsApp untuk atur jadwal jemput gratisnya ya, Nak.', atau 'Untuk kebutuhan bisnis, kami punya penawaran spesial lho. Yuk, diskusikan lebih lanjut!'. Sesuaikan ajakan dengan konteks pertanyaan. Jawablah semua pertanyaan dalam Bahasa Indonesia dengan gaya bahasa yang sopan dan membantu. Jika Anda tidak tahu jawabannya, sarankan pengguna untuk menghubungi nomor WhatsApp kami.`;

const AIFAQ: React.FC = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!question.trim() || isLoading) return;

        setIsLoading(true);
        setError('');
        setAnswer('');

        try {
            const response = await ai.models.generateContentStream({
                model: "gemini-2.5-flash",
                contents: question,
                config: {
                    systemInstruction: systemInstruction,
                }
            });

            for await (const chunk of response) {
                setAnswer((prev) => prev + chunk.text);
            }

        } catch (err) {
            console.error("Error calling Gemini API:", err);
            setError('Maaf, Emak AI sedang istirahat. Coba lagi nanti atau hubungi kami via WhatsApp.');
        } finally {
            setIsLoading(false);
            setQuestion('');
        }
    };
    
    return (
        <div className="max-w-3xl mx-auto bg-white dark:bg-custom-purple-surface p-6 sm:p-8 rounded-xl shadow-lg mb-12">
            <div className="flex items-center mb-4">
                <SparklesIcon className="h-8 w-8 text-custom-purple dark:text-custom-purple-light" />
                <h3 className="text-2xl font-bold ml-3 text-zinc-900 dark:text-zinc-100">Tanya Emak AI</h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
                Punya pertanyaan cepat tentang layanan kami? Tanyakan pada asisten AI kami!
            </p>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Contoh: Apakah bisa cuci sepatu?"
                        className="flex-grow w-full px-4 py-2 text-zinc-700 bg-zinc-100 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-purple dark:bg-custom-purple-border/50 dark:text-zinc-100 dark:border-custom-purple-border dark:placeholder-zinc-400"
                        disabled={isLoading}
                    />
                    <button 
                        type="submit" 
                        disabled={isLoading || !question.trim()} 
                        className="w-full sm:w-auto bg-custom-purple text-white font-bold py-2 px-6 rounded-lg hover:bg-custom-purple-hover transition-colors duration-300 disabled:bg-zinc-400 dark:disabled:bg-custom-purple-border disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        {isLoading ? (
                             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : 'Tanya'}
                    </button>
                </div>
            </form>
            
            {error && <p className="text-red-500 mt-4">{error}</p>}
            
            {answer && (
                <div aria-live="polite" className="mt-6 p-4 bg-zinc-50 dark:bg-custom-purple-bg rounded-lg border-l-4 border-custom-purple dark:border-custom-purple-light">
                    <p className="whitespace-pre-wrap text-zinc-700 dark:text-zinc-200">{answer}</p>
                </div>
            )}
        </div>
    );
};


const faqData: FAQItem[] = [
    {
        question: 'Apa saja jenis deterjen yang digunakan?',
        answer: 'Kami menggunakan deterjen cair premium yang ramah lingkungan dan lembut di pakaian, namun efektif menghilangkan noda. Kami juga menyediakan opsi deterjen hypoallergenic untuk kulit sensitif.'
    },
    {
        question: 'Apakah ada layanan antar-jemput?',
        answer: 'Tentu saja! Kami menyediakan layanan antar-jemput gratis untuk wilayah Kota Banjar dengan minimal order 5kg. Cukup hubungi kami melalui WhatsApp untuk menjadwalkan penjemputan.'
    },
    {
        question: 'Berapa lama proses pengerjaan laundry?',
        answer: 'Kami menawarkan beberapa paket kecepatan: Paket Reguler (3 hari), Paket Kilat (1 hari), dan Paket Ekspres (selesai dalam 3 jam). Anda bisa memilih sesuai kebutuhan.'
    },
    {
        question: 'Bagaimana jika pakaian saya luntur atau rusak?',
        answer: 'Kami melakukan proses sortasi pakaian berdasarkan warna dan jenis kain untuk meminimalisir risiko. Namun, jika terjadi kelalaian dari pihak kami, kami menyediakan garansi cuci ulang atau kompensasi sesuai syarat dan ketentuan yang berlaku.'
    }
];

const FAQAccordionItem: React.FC<{ item: FAQItem, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-zinc-200 dark:border-custom-purple-border">
        <h2>
            <button
                type="button"
                className="flex justify-between items-center w-full py-5 font-semibold text-left text-zinc-800 dark:text-zinc-100"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span>{item.question}</span>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
        </h2>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
            <div className="pb-5 pr-4 text-zinc-600 dark:text-zinc-300">
                {item.answer}
            </div>
        </div>
    </div>
);

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-zinc-50 dark:bg-custom-purple-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">Tanya Jawab</h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-4 max-w-2xl mx-auto">Temukan jawaban atau tanyakan langsung pada asisten AI kami.</p>
                </div>

                <AIFAQ />

                <div className="max-w-3xl mx-auto bg-white dark:bg-custom-purple-surface p-6 sm:p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Pertanyaan Umum</h3>
                    {faqData.map((item, index) => (
                        <FAQAccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
