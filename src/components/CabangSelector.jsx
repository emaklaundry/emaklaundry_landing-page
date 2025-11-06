import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

export const CabangSelector = ({ cabangId, setCabangId, dataCabang }) => {
  return (
    <div className="relative">
      <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
      <select
        value={cabangId}
        onChange={(e) => setCabangId(e.target.value)}
        className="pl-10 pr-8 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 appearance-none"
        aria-label="Pilih Cabang"
      >
        {Object.keys(dataCabang).map((key) => (
          <option key={key} value={key}>
            {dataCabang[key].nama}
          </option>
        ))}
      </select>
      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
    </div>
  );
};


