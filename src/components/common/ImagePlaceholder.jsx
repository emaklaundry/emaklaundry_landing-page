import React from 'react';
import { ImageIcon } from 'lucide-react';

export const ImagePlaceholder = ({ alt, className = '' }) => (
  <div
    className={`flex items-center justify-center bg-fuchsia-50 border border-fuchsia-100 rounded-lg shadow-inner ${className}`}
    style={{
      backgroundImage: 'radial-gradient(circle, rgba(192, 46, 137, 0.05) 1px, transparent 1px)',
      backgroundSize: '10px 10px',
      aspectRatio: '3/2'
    }}
  >
    <div className="text-center text-fuchsia-400 p-4">
      <ImageIcon size={48} className="mx-auto" />
      <p className="mt-2 text-sm font-medium">{alt}</p>
    </div>
  </div>
);


