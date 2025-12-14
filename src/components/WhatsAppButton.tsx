import React from "react";
import { WhatsAppIcon } from "./Icons";
import { SOCIAL_LINKS } from "../config/constants";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 bg-green-500 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all z-50 active:scale-95 whatsapp-pulse"
      style={{
        bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
        right: "calc(1rem + env(safe-area-inset-right, 0px))",
        animation: "pulse-custom 2s infinite",
      }}
      aria-label="Hubungi via WhatsApp - Klik untuk chat langsung"
      title="Chat dengan kami di WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
    </a>
  );
};

export default WhatsAppButton;
