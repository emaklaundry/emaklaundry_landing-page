import React, { useState } from "react";
import { supabase } from "../config/supabaseClient";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { ClockIcon } from "./Icons"; // Hanya ClockIcon yang dipakai

// Interface sesuai output RPC
interface TransactionStatus {
  invoiceCode: string;
  orderStatus: "processing" | "ready" | "done" | "picked_up" | string;
  customerName: string;
  estimatedCompletionDate: string;
}

// Mapping status ke level progress (0-3)
const getStatusLevel = (status: string) => {
  const s = status.toLowerCase();
  if (s.includes("diproses") || s.includes("processing")) return 1;
  if (s.includes("siap") || s.includes("ready")) return 2;
  if (
    s.includes("selesai") ||
    s.includes("sudah") ||
    s.includes("done") ||
    s.includes("picked_up")
  )
    return 3;
  return 0; // Pending/Baru masuk
};

const TrackLaundry: React.FC = () => {
  const [invoiceCode, setInvoiceCode] = useState("");
  const [transaction, setTransaction] = useState<TransactionStatus | null>(
    null
  );
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

    try {
      const { data, error: supabaseError } = await supabase
        .rpc("get_laundry_status", { input_identifier: invoiceCode.trim() })
        .limit(1)
        .single();

      if (supabaseError && supabaseError.code !== "PGRST116") {
        setError("Terjadi kesalahan sistem. Silakan coba lagi.");
        return;
      }

      if (data) {
        setTransaction(data as TransactionStatus);
      } else {
        setError(`Kode Invoice "${invoiceCode}" tidak ditemukan.`);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Terjadi kesalahan koneksi";
      setError(errorMessage);
      if (process.env.NODE_ENV === "development") {
        console.error("TrackLaundry error:", err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Komponen Progress Bar Sederhana
  const ProgressBar = ({ status }: { status: string }) => {
    const level = getStatusLevel(status);
    const steps = [
      { label: "Diterima", active: level >= 0 },
      { label: "Dicuci", active: level >= 1 },
      { label: "Siap", active: level >= 2 },
      { label: "Selesai", active: level >= 3 },
    ];

    return (
      <div className="w-full py-4 sm:py-6">
        <div className="flex items-center justify-between relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1">
              <div
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 transition-colors duration-500 text-xs sm:text-base ${
                  step.active
                    ? "bg-custom-purple border-custom-purple text-white"
                    : "bg-white border-zinc-300 text-zinc-300 dark:bg-zinc-800 dark:border-zinc-600"
                }`}
              >
                {step.active ? "✓" : idx + 1}
              </div>
              <span
                className={`text-[10px] sm:text-xs mt-2 font-medium text-center ${
                  step.active ? "text-custom-purple" : "text-zinc-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
          {/* Garis background */}
          <div className="absolute top-3 sm:top-4 left-0 w-full h-0.5 sm:h-1 bg-zinc-200 dark:bg-zinc-700 -z-10" />
          {/* Garis progress */}
          <div
            className="absolute top-3 sm:top-4 left-0 h-0.5 sm:h-1 bg-custom-purple transition-all duration-500 -z-10"
            style={{ width: `${(level / 3) * 100}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <section
      id="track-laundry"
      className="relative -mt-16 sm:-mt-20 lg:-mt-16 z-20 mb-8 sm:mb-12 px-4"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
        <div className="bg-white dark:bg-custom-purple-surface rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-zinc-100 dark:border-custom-purple-border">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Lacak Status Laundry
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm mt-2">
              Masukkan kode invoice untuk melihat progress cucian.
            </p>
          </div>

          <form
            onSubmit={handleTrack}
            className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
          >
            <input
              type="text"
              placeholder="Kode Invoice (Misal: EM-123)"
              value={invoiceCode}
              onChange={(e) => setInvoiceCode(e.target.value)}
              className="w-full px-4 py-3 sm:py-4 bg-zinc-50 dark:bg-custom-purple-bg border-2 border-transparent focus:border-custom-purple rounded-xl outline-none transition-all dark:text-white text-base"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto bg-custom-purple text-white px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-custom-purple-hover transition-all disabled:opacity-50 shadow-md hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap min-h-[44px]"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span className="hidden sm:inline">Loading...</span>
                </>
              ) : (
                "Cek Status"
              )}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg text-center animate-pulse">
              {error}
            </div>
          )}

          {transaction && (
            <div className="mt-8 bg-zinc-50 dark:bg-custom-purple-bg rounded-xl p-6 border border-zinc-100 dark:border-custom-purple-border animate-fade-in-up">
              <div className="flex justify-between items-start mb-4 border-b border-zinc-200 dark:border-zinc-700 pb-4">
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    Pelanggan
                  </p>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {transaction.customerName}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    Kode
                  </p>
                  <p className="font-mono font-bold text-custom-purple">
                    {transaction.invoiceCode}
                  </p>
                </div>
              </div>

              <ProgressBar status={transaction.orderStatus} />

              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-800 py-2 rounded-lg">
                <ClockIcon className="w-4 h-4 text-custom-purple" />
                <span>Estimasi Selesai: </span>
                <span className="font-semibold">
                  {transaction.estimatedCompletionDate
                    ? format(
                        new Date(transaction.estimatedCompletionDate),
                        "dd MMMM yyyy",
                        { locale: id }
                      )
                    : "Menunggu estimasi"}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackLaundry;
