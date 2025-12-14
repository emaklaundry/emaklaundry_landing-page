import React, { useState } from "react";
import {
  LogoIcon,
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
  LinkedInIcon,
} from "./Icons";
import {
  SOCIAL_LINKS,
  CONTACT_INFO,
  FEEDBACK_FORM_URL,
} from "../config/constants";
import packageJson from "../../package.json";
import FeedbackModal from "./FeedbackModal";

interface FooterProps {
  onTermsClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onTermsClick }) => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <footer
      id="contact"
      className="bg-zinc-900 text-white dark:bg-custom-purple-footer"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <LogoIcon />
              <img
                src="/text-logo.png"
                alt="Logo Emak Laundry Jasa Cuci Banjar"
                className="h-7 md:h-8 object-contain"
                style={{ maxWidth: 160, display: "block" }}
                loading="lazy"
                draggable={false}
              />
            </div>
            <p className="text-zinc-400 dark:text-zinc-300">
              "Kebersihan Terbaik dengan Sentuhan Kasih Ibu." Solusi laundry
              terpercaya di Kota Banjar.
            </p>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <address className="space-y-3 text-zinc-400 dark:text-zinc-300 not-italic">
              <p className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 mt-1 text-custom-purple-light flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {CONTACT_INFO.address}
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-custom-purple-light"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="hover:text-custom-purple-light dark:hover:text-custom-purple-light"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-custom-purple-light"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-custom-purple-light dark:hover:text-custom-purple-light"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
            </address>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <span className="sr-only">Facebook</span>
                <FacebookIcon />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <span className="sr-only">WhatsApp</span>
                <WhatsAppIcon />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedInIcon />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-4 mt-6">Jam Operasional</h3>
            <p className="text-zinc-400 dark:text-zinc-300">
              Setiap Hari: 08:00 - 20:00 WIB
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 border-t border-zinc-700 dark:border-custom-purple-border pt-6 sm:pt-8 text-center text-zinc-500 dark:text-zinc-400">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            <div className="lg:flex-1"></div>
            <div className="mb-4 lg:mb-0 lg:flex-1">
              <p>
                &copy; {new Date().getFullYear()} Emak Laundry. Semua Hak Cipta
                Dilindungi.
              </p>
              <p className="text-xs mt-1 opacity-70">
                Version {packageJson.version}
              </p>
              <p className="text-xs mt-1 opacity-60">
                Dibuat oleh{" "}
                <a
                  href="https://novionics.web.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-custom-purple-light transition-colors underline"
                >
                  Novionics
                </a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:flex-1 lg:justify-end">
              <button
                onClick={() => setIsFeedbackOpen(true)}
                className="bg-custom-purple hover:bg-custom-purple-dark text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm text-center"
              >
                Kritik & Saran
              </button>
              <button
                onClick={onTermsClick}
                className="bg-zinc-800 hover:bg-zinc-700 dark:bg-custom-purple-border/50 dark:hover:bg-custom-purple-border text-zinc-300 dark:text-zinc-200 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
              >
                Syarat & Ketentuan
              </button>
            </div>
          </div>
        </div>
      </div>

      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </footer>
  );
};

export default Footer;
