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

// Tipe data dasar untuk hasil transaksi
interface TransactionStatus {
  invoice_code_short: string;
  status: 'processing' | 'ready' | 'done' | 'picked_up';
  customer_name: string;
  due_date: string; // ISO Date string
}

const statusMap: Record<TransactionStatus['status'], { label: string; color: string }> = {
  processing: { label: "Sedang Diproses", color: "text-blue-500" },
  ready: { label: "Siap Diambil", color: "text-green-500" },
  done: { label: "Selesai & Menunggu Pembayaran", color: "text-yellow-600" },
  picked_up: { label: "Sudah Diambil", color: "text-gray-500" },
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

    const codeToSearch = invoiceCode.trim().toUpperCase();

    try {
      const { data, error: supabaseError } = await supabase
        .from('transactions')
        .select(`
          invoice_code_short, 
          status, 
          customer_name, 
          due_date
        `)
        .eq('invoice_code_short', codeToSearch)
        .limit(1)
        .single();

      if (supabaseError && supabaseError.code !== 'PGRST116') {
        console.error("Supabase Error:", supabaseError);
        setError("Terjadi kesalahan saat mencari data. Coba lagi.");
        return;
      }

      if (data) {
        setTransaction(data as TransactionStatus);
      } else {
        setError(`Kode Invoice "${codeToSearch}" tidak ditemukan.`);
      }

    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan koneksi. Coba periksa koneksi internet Anda.");
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

    const { label, color } = statusMap[transaction.status] || { label: "Status Tidak Diketahui", color: "text-gray-500" };
    const formattedDueDate = format(new Date(transaction.due_date), "EEEE, dd MMMM yyyy HH:mm", { locale: id });

    return (
      <Card className="mt-6 border-2 shadow-lg rounded-xl bg-white dark:bg-custom-purple-surface p-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex justify-between items-center">
            Status Laundry
            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${color.replace('text-', 'bg-')} bg-opacity-10 ${color}`}>
              {label}
            </span>
          </CardTitle>
          <CardDescription className="text-lg font-bold mb-4">{transaction.invoice_code_short}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between border-b pb-1">
            <span className="text-gray-600">Pelanggan:</span>
            <span className="font-medium">{transaction.customer_name}</span>
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
    <section id="track-laundry" className="py-20 bg-white dark:bg-custom-purple-surface">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-8">Lacak Status Laundry Anda</h2>
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
