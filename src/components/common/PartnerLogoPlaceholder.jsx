import React from 'react';
import { Building } from 'lucide-react';

export const PartnerLogoPlaceholder = ({ name, className = '' }) => (
  <div
    role="img"
    aria-label={`Logo mitra ${name}`}
    className={`flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg p-6 ${className}`}
    style={{
      backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
      backgroundSize: '10px 10px',
      aspectRatio: '3/2'
    }}
  >
    <div className="text-center text-gray-400">
      <Building size={40} className="mx-auto" />
      <p className="mt-2 text-sm font-medium">{name}</p>
    </div>
  </div>
);


