import React, { useState } from 'react';
import { supabase } from '../config/supabaseClient';
import { LaundryStatus } from '../types';
import { SearchIcon, ShieldCheckIcon } from './Icons';

const TrackLaundry: React.FC = () => {
    const [invoiceCode, setInvoiceCode] = useState('');
    const [statusData, setStatusData] = useState<LaundryStatus | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    const handleTrack = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!invoiceCode.trim()) return;

        setLoading(true);
        setError('');
        setStatusData(null);
        setHasSearched(true);

        try {
            // Cari berdasarkan kode invoice, bukan transaction id
            const { data, error } = await supabase.rpc('get_laundry_status_by_invoice', {
                invoice_code_input: invoiceCode.trim()
            });

            if (error) throw error;

            if (data && data.length > 0) {
                setStatusData(data[0]);
            } else {
                setError('Transaksi tidak ditemukan. Mohon cek kembali Kode Invoice Anda.');
            }

        } catch (err) {
            console.error('Error:', err);
            setError('Terjadi kesalahan saat melacak. Silakan coba lagi.');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
    };

    const formatRupiah = (amount: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
    };

    return (
        <section id="track-laundry" className="py-20 bg-white dark:bg-custom-purple-surface relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-custom-purple to-transparent opacity-50"></div>
            <div className="container mx-auto px-2 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">Lacak Pesanan Anda</h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-4 max-w-2xl mx-auto">
                        Masukkan <b>Kode Invoice</b> (contoh: <span className="font-mono">EM-X7Z9</span>) yang tertera pada struk.
                    </p>
                </div>
                <div className="max-w-xl mx-auto">
                    <form onSubmit={handleTrack} className="relative flex items-center mb-8">
                        <input
                            type="text"
                            value={invoiceCode}
                            onChange={(e) => setInvoiceCode(e.target.value.toUpperCase())}
                            placeholder="Masukkan Kode Invoice (Contoh: EM-X7Z9)" 
                            className="w-full px-6 py-5 pr-16 rounded-full border-2 border-zinc-200 dark:border-custom-purple-border bg-zinc-50 dark:bg-custom-purple-bg text-zinc-800 dark:text-zinc-100 focus:outline-none focus:border-custom-purple transition-colors shadow-sm text-lg sm:text-base"
                            autoComplete="off"
                            inputMode="text"
                            pattern="[A-Za-z0-9\-]+"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="absolute right-2 bg-custom-purple text-white p-3 rounded-full hover:bg-custom-purple-hover transition-transform transform hover:scale-105 disabled:opacity-70"
                            aria-label="Cari Transaksi"
                        >
                            {loading ? (
                                <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                <SearchIcon />
                            )}
                        </button>
                    </form>
                    {error && (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6 animate-fade-in text-base sm:text-sm">
                            <p>{error}</p>
                        </div>
                    )}
                    {statusData && (
                        <div className="bg-zinc-50 dark:bg-custom-purple-bg border border-zinc-200 dark:border-custom-purple-border rounded-2xl p-6 sm:p-8 shadow-xl animate-fade-in transform transition-all hover:-translate-y-1">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 border-b border-zinc-200 dark:border-custom-purple-border pb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{statusData.customerName}</h3>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                        Kode Invoice: <span className="font-mono font-bold">{statusData.invoiceCode}</span>
                                    </p>
                                </div>
                                <div className={`px-4 py-1 rounded-full text-sm font-bold ${statusData.orderStatus === 'Selesai' || statusData.orderStatus === 'Siap Diambil' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                    {statusData.orderStatus}
                                </div>
                            </div>
                            <div className="space-y-4 text-base sm:text-sm">
                                <div className="flex justify-between">
                                    <span className="text-zinc-600 dark:text-zinc-400">Tanggal Masuk:</span>
                                    <span className="font-medium text-zinc-800 dark:text-zinc-200">{formatDate(statusData.createdAt)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-600 dark:text-zinc-400">Estimasi Selesai:</span>
                                    <span className="font-medium text-zinc-800 dark:text-zinc-200">{formatDate(statusData.estimatedCompletionDate)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-600 dark:text-zinc-400">Status Pembayaran:</span>
                                    <span className={`flex items-center font-bold ${statusData.paymentStatus === 'Lunas' ? 'text-green-600 dark:text-green-400' : 'text-red-500'}`}>
                                        {statusData.paymentStatus === 'Lunas' && <ShieldCheckIcon className="w-5 h-5 mr-1" />}
                                        {statusData.paymentStatus}
                                    </span>
                                </div>
                                <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-custom-purple-border flex justify-between items-end">
                                    <span className="text-zinc-600 dark:text-zinc-400 pb-1">Sisa Tagihan:</span>
                                    <span className="text-2xl font-extrabold text-custom-purple">
                                        {formatRupiah(statusData.total - statusData.amountPaid)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TrackLaundry;
