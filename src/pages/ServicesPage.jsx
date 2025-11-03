import React from 'react';

export const ServicesPage = ({ data }) => {
  const formatCurrency = (number) => {
    if (typeof number === 'string') return number;
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
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
      <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">Layanan & <span className="text-fuchsia-600">Daftar Harga</span></h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-600">Harga transparan untuk {data.nama}. Jujur, tanpa biaya tersembunyi.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8"><span className="text-fuchsia-600">1.</span> Layanan Kiloan Harian</h2>
          <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 bg-white">
              <thead className="bg-fuchsia-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-fuchsia-800 uppercase tracking-wider">Jenis Layanan</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-fuchsia-800 uppercase tracking-wider">Waktu Pengerjaan</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-fuchsia-800 uppercase tracking-wider">Harga per kg</th>
                  <th scope="col" className="hidden sm:table-cell px-6 py-4 text-left text-xs font-bold text-fuchsia-800 uppercase tracking-wider">Catatan</th>
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

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8"><span className="text-fuchsia-600">2.</span> Perawatan Spesial Satuan</h2>
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

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8"><span className="text-fuchsia-600">3.</span> Layanan Rumah Tangga & Ukuran Besar</h2>
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


