import React from 'react';
import { Phone } from 'lucide-react';

export const FloatingWhatsApp = ({ data }) => (
  <a
    href={data.kontak.waLink}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110"
    aria-label="Chat di WhatsApp"
  >
    <Phone size={28} />
  </a>
);


