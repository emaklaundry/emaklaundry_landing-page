import React, { useEffect, useState } from "react";
import {
  KiloanIcon,
  SatuanIcon,
  HouseholdIcon,
  B2BIcon,
  ShareIcon,
} from "./Icons";
import { supabase } from "../config/supabaseClient";
import { useScrollAnimation } from "../utils/useScrollAnimation";

// --- KONFIGURASI ---
const WHATSAPP_NUMBER = "6285175279659";

// --- KOMPONEN IKON TAMBAHAN ---
const SearchIcon = () => (
  <svg
    className="w-5 h-5 text-zinc-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const GridIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    />
  </svg>
);

const ListIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const WhatsAppIconSmall = () => (
  <svg
    className="w-5 h-5 mr-2 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// --- TYPES ---
interface DBService {
  service_name: string;
  category: string;
  wash_type: string;
  duration_days: number;
}

interface ServiceDisplay {
  icon: React.ReactElement;
  title: string;
  description: string;
  category: string;
  washType: string;
}

// --- SERVICE CARD COMPONENT ---
const ServiceCard: React.FC<{
  service: ServiceDisplay;
  viewMode: "grid" | "list";
  index: number;
}> = ({ service, viewMode, index }) => {
  const isList = viewMode === "list";

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleShare = async () => {
    const shareData = {
      title: `Layanan Emak Laundry: ${service.title}`,
      text: `Cek layanan "${service.title}" kami! ${service.description}`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Share cancelled by user or failed - silent fail for better UX
        if (process.env.NODE_ENV === "development") {
          console.error("Share error:", err);
        }
      }
    } else {
      navigator.clipboard
        .writeText(`${shareData.text} ${shareData.url}`)
        .then(() => {
          alert("Info layanan disalin ke clipboard!");
        });
    }
  };

  const handleOrder = () => {
    const message = `Halo Emak Laundry, saya tertarik dengan layanan *${service.title}*. Mohon info lebih lanjut ya.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      ref={ref}
      className={`relative bg-white dark:bg-custom-purple-surface rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 border border-zinc-100 dark:border-zinc-800 group
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }
            ${
              isList
                ? "flex flex-col md:flex-row items-start md:items-center p-6 text-left"
                : "flex flex-col h-full p-6 sm:p-8"
            }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Tombol Share */}
      <button
        onClick={handleShare}
        className={
          isList
            ? // Pada mode list, static di desktop agar tidak overlap/terpotong
              "p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-custom-purple-border transition-colors z-10 md:static md:order-last md:ml-4 md:self-start absolute top-4 right-4"
            : // Pada mode grid, tetap absolute
              "absolute top-4 right-4 p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-custom-purple-border transition-colors z-10"
        }
        aria-label="Bagikan"
        title="Bagikan"
        style={isList ? { position: "static" } : undefined}
      >
        <ShareIcon className="h-5 w-5" />
      </button>

      {/* Ikon Layanan */}
      <div
        className={`flex-shrink-0 text-custom-purple-primary dark:text-custom-purple-light transition-transform duration-300
                ${
                  isList
                    ? "mb-4 md:mb-0 md:mr-6 scale-100"
                    : "mb-6 flex justify-center scale-100 group-hover:scale-110"
                }
            `}
      >
        {service.icon}
      </div>

      {/* Konten Teks */}
      <div
        className={`flex-grow ${isList ? "w-full md:w-auto" : "text-center"}`}
      >
        <span
          className={`inline-block px-3 py-1 mb-2 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200
                    ${isList ? "" : "mb-3"}
                `}
        >
          {service.category}
        </span>
        <h3
          className={`text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-2 ${
            isList ? "" : "mb-3 line-clamp-2"
          }`}
        >
          {service.title}
        </h3>
        <p
          className={`text-zinc-500 dark:text-zinc-300 text-sm ${
            isList ? "mb-0" : "mb-6"
          }`}
        >
          {service.description}
        </p>
      </div>

      {/* Tombol CTA */}
      <div
        className={`mt-4 pt-0 ${
          isList
            ? "md:mt-0 md:ml-6 w-full md:w-auto flex-shrink-0"
            : "mt-auto w-full pt-4"
        }`}
      >
        <button
          onClick={handleOrder}
          className={`flex items-center justify-center py-2.5 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:ring-2 focus:ring-green-400 focus:ring-offset-2 dark:focus:ring-offset-custom-purple-surface transform active:scale-95
                        ${
                          isList
                            ? "w-full md:w-auto whitespace-nowrap"
                            : "w-full"
                        }
                    `}
        >
          <WhatsAppIconSmall />
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const Services: React.FC = () => {
  const [services, setServices] = useState<ServiceDisplay[]>([]);
  const [categories, setCategories] = useState<string[]>(["Semua"]);

  // Filter, Search, & View Mode State
  const [filteredServices, setFilteredServices] = useState<ServiceDisplay[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid"); // Default Grid

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getIconByCategory = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("kiloan")) return <KiloanIcon />;
    if (cat.includes("satuan")) return <SatuanIcon />;
    if (cat.includes("sepatu")) return <SatuanIcon />;
    if (cat.includes("karpet") || cat.includes("rumah"))
      return <HouseholdIcon />;
    return <B2BIcon />;
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const storeId = import.meta.env.VITE_STORE_ID;
        if (!storeId) {
          setError("Konfigurasi sistem belum lengkap. Hubungi admin.");
          setLoading(false);
          return;
        }

        const { data, error } = await supabase.rpc("get_public_services", {
          store_id_input: storeId,
        });

        if (error) throw error;

        if (!Array.isArray(data)) {
          setError("Format data tidak sesuai.");
          setServices([]);
          return;
        }

        const formattedData: ServiceDisplay[] = (data as DBService[]).map(
          (item) => ({
            title: item.service_name,
            category: item.category,
            washType: item.wash_type || item.category,
            description: `Layanan ${
              item.wash_type || item.category
            } profesional dengan estimasi pengerjaan ${
              item.duration_days
            } hari.`,
            icon: getIconByCategory(item.category),
          })
        );

        const uniqueCategories = [
          "Semua",
          ...new Set(formattedData.map((item) => item.category)),
        ];

        setServices(formattedData);
        setFilteredServices(formattedData);
        setCategories(uniqueCategories);
      } catch (err: any) {
        setError(
          err?.message || "Gagal memuat layanan. Silakan refresh halaman."
        );
        if (process.env.NODE_ENV === "development") {
          console.error("Error fetching services:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    let result = services;

    if (selectedCategory !== "Semua") {
      result = result.filter((s) => s.category === selectedCategory);
    }

    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(lowerTerm) ||
          s.description.toLowerCase().includes(lowerTerm)
      );
    }

    setFilteredServices(result);
  }, [searchTerm, selectedCategory, services]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-zinc-50 dark:bg-custom-purple-bg min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
            Daftar Layanan Kami
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-4 max-w-2xl mx-auto">
            Temukan layanan terbaik untuk kebutuhan laundry Anda dengan mudah.
          </p>
        </div>

        {/* --- CONTROLS SECTION --- */}
        {!loading && !error && services.length > 0 && (
          <div className="max-w-4xl mx-auto mb-12 space-y-6">
            {/* Baris Atas: Search & View Toggle */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Cari layanan..."
                  className="block w-full pl-10 pr-4 py-3 border border-zinc-200 rounded-xl leading-5 bg-white dark:bg-custom-purple-surface dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* View Toggle Buttons */}
              <div className="flex bg-white dark:bg-custom-purple-surface rounded-xl border border-zinc-200 dark:border-zinc-700 p-1 shadow-sm flex-shrink-0 self-start sm:self-auto">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid"
                      ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-200"
                      : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                  }`}
                  aria-label="Tampilan Grid"
                  title="Tampilan Galeri"
                >
                  <GridIcon />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list"
                      ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-200"
                      : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                  }`}
                  aria-label="Tampilan List"
                  title="Tampilan Daftar"
                >
                  <ListIcon />
                </button>
              </div>
            </div>

            {/* Baris Bawah: Kategori */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                                        ${
                                          selectedCategory === cat
                                            ? "bg-indigo-600 text-white shadow-md transform scale-105"
                                            : "bg-white text-zinc-600 hover:bg-zinc-100 dark:bg-custom-purple-surface dark:text-zinc-300 dark:hover:bg-custom-purple-border border border-zinc-200 dark:border-zinc-700"
                                        }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* --- LISTING CONTENT --- */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400">
              Memuat layanan...
            </p>
          </div>
        ) : error ? (
          <div className="text-center text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-6 rounded-lg max-w-md mx-auto border border-red-200 dark:border-red-800">
            <svg
              className="w-12 h-12 mx-auto mb-3 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="font-semibold mb-2">Gagal memuat layanan</p>
            <p className="text-sm">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm transition-colors"
            >
              Coba Lagi
            </button>
          </div>
        ) : filteredServices.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-custom-purple-surface rounded-xl shadow-sm max-w-2xl mx-auto border border-zinc-100 dark:border-zinc-800">
            <div className="flex justify-center mb-4">
              <svg
                className="w-16 h-16 text-zinc-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Layanan tidak ditemukan
            </h3>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Semua");
              }}
              className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          (() => {
            // Group services by washType
            const groupedServices: Record<string, ServiceDisplay[]> = {};
            filteredServices.forEach((service) => {
              const washType = service.washType || "Lainnya";
              if (!groupedServices[washType]) {
                groupedServices[washType] = [];
              }
              groupedServices[washType].push(service);
            });

            // Convert to array and sort by wash type name
            const sortedGroups = Object.entries(groupedServices).sort(
              ([a], [b]) => a.localeCompare(b, "id")
            );

            return (
              <div className="space-y-12">
                {sortedGroups.map(([washType, services]) => (
                  <div key={washType} className="animate-fade-in-up">
                    {/* Wash Type Header */}
                    <div className="mb-6 pb-3 border-b-2 border-custom-purple/20 dark:border-custom-purple-light/20">
                      <h3 className="text-2xl md:text-3xl font-bold text-custom-purple dark:text-custom-purple-light flex items-center gap-3">
                        <span className="inline-block w-2 h-8 bg-custom-purple dark:bg-custom-purple-light rounded-full"></span>
                        {washType}
                        <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400 ml-auto">
                          ({services.length} layanan)
                        </span>
                      </h3>
                    </div>

                    {/* Services Grid/List */}
                    <div
                      className={`
                      ${
                        viewMode === "grid"
                          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
                          : "flex flex-col gap-4 max-w-4xl mx-auto"
                      }
                    `}
                    >
                      {services.map((service, index) => (
                        <ServiceCard
                          key={index}
                          service={service}
                          viewMode={viewMode}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })()
        )}
      </div>
    </section>
  );
};

export default Services;
