import React, { useState } from "react";
import { supabase } from "../config/supabaseClient";
import { format } from "date-fns";
import { id } from "date-fns/locale";

// Optional: Import Card, Button, Input jika ada, jika tidak gunakan fallback
let Card = (props: any) => <div {...props} />;
let CardHeader = (props: any) => <div {...props} />;
let CardTitle = (props: any) => <div {...props} />;
let CardDescription = (props: any) => <div {...props} />;
let CardContent = (props: any) => <div {...props} />;
let Button = (props: any) => <button {...props} />;
let Input = (props: any) => <input {...props} />;

// Interface sesuai output RPC get_laundry_status
interface TransactionStatus {
  invoiceCode: string;
  orderStatus: 'processing' | 'ready' | 'done' | 'picked_up' | string;
  customerName: string;
  estimatedCompletionDate: string;
}

// statusMap sesuai nilai status dari database
const statusMap: Record<string, { label: string; color: string }> = {
  "Diproses": { label: "Sedang Diproses", color: "text-blue-500" },
  "Siap Diambil": { label: "Siap Diambil", color: "text-green-500" },
  "Selesai": { label: "Selesai & Menunggu Pembayaran", color: "text-yellow-600" },
  "Sudah Diambil": { label: "Sudah Diambil", color: "text-gray-500" },
  // Tambahkan status lain jika ada
};

const TrackLaundry: React.FC = () => {
  const [invoiceCode, setInvoiceCode] = useState("");
  const [transaction, setTransaction] = useState<TransactionStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!invoiceCode.trim()) {
      setError("Masukkan kode invoice.");
      setTransaction(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    setTransaction(null);

    // Kirim input apa adanya ke RPC. RPC sudah handle .toUpperCase() dan ILIKE.
    const codeToSearch = invoiceCode.trim();

    try {
      // Gunakan .rpc() untuk memanggil fungsi get_laundry_status
      const { data, error: supabaseError } = await supabase
        .rpc('get_laundry_status', { input_identifier: codeToSearch })
        .limit(1)
        .single();

      if (supabaseError && supabaseError.code !== 'PGRST116') {
        console.error("Supabase Error:", supabaseError);
        setError("Terjadi kesalahan saat mencari data. Coba lagi.");
        return;
      }

      if (data) {
        // Hapus log debug di sini
        setTransaction(data as TransactionStatus);
      } else {
        setError(`Kode Invoice "${codeToSearch}" tidak ditemukan.`);
      }

    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan koneksi.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderStatusCard = () => {
    if (isLoading) {
      return <div className="text-center p-4">Memuat status...</div>;
    }

    if (error) {
      return <div className="text-center p-4 text-red-600 border border-red-200 bg-red-50 rounded-lg">{error}</div>;
    }

    if (!transaction) {
      return null;
    }

    // Gunakan orderStatus dan estimatedCompletionDate dari RPC
    const { label, color } = statusMap[transaction.orderStatus] || { label: "Status Tidak Diketahui", color: "text-gray-500" };

    let formattedDueDate = 'N/A';
    if (transaction.estimatedCompletionDate) {
      try {
        formattedDueDate = format(new Date(transaction.estimatedCompletionDate), "EEEE, dd MMMM yyyy", { locale: id });
      } catch (e) {
        formattedDueDate = transaction.estimatedCompletionDate;
      }
    }

    return (
      <Card className="mt-6 border-2 shadow-lg rounded-xl bg-white dark:bg-custom-purple-surface p-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex justify-between items-center">
            Status Laundry
            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${color.replace('text-', 'bg-')} bg-opacity-10 ${color}`}>
              {label}
            </span>
          </CardTitle>
          <CardDescription className="text-lg font-bold">{transaction.invoiceCode}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between border-b pb-1">
            <span className="text-gray-600">Pelanggan:</span>
            <span className="font-medium">{transaction.customerName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Perkiraan Selesai:</span>
            <span className="font-medium">{formattedDueDate}</span>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="track-laundry" className="pt-0 pb-0 bg-white dark:bg-custom-purple-surface">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-0">Lacak Status Laundry Anda</h2>
        <form onSubmit={handleTrack} className="flex gap-2">
          <Input
            type="text"
            placeholder="Masukkan Kode Invoice (Contoh: EM-AB12CD)"
            value={invoiceCode}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInvoiceCode(e.target.value)}
            className="flex-grow p-3 border rounded-lg focus:ring-custom-purple focus:border-custom-purple dark:bg-custom-purple-bg dark:text-zinc-100"
            required
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-custom-purple text-white rounded-lg hover:bg-custom-purple-hover transition duration-200 font-bold"
          >
            {isLoading ? "Mencari..." : "Lacak"}
          </Button>
        </form>
        {renderStatusCard()}
      </div>
    </section>
  );
};

export default TrackLaundry;
