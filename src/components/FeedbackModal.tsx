import React, { useEffect } from "react";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-title"
    >
      <div
        className="bg-white dark:bg-custom-purple-surface rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-zinc-200 dark:border-custom-purple-border">
          <h2
            id="feedback-title"
            className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100"
          >
            Kritik & Saran
          </h2>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors p-2 hover:bg-zinc-100 dark:hover:bg-custom-purple-border rounded-lg"
            aria-label="Tutup modal kritik dan saran"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Iframe Container */}
        <div className="overflow-auto" style={{ height: "calc(90vh - 80px)" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeRTBRt0xqugIGnXZMNKe93HPsfTCARCN57jf5xw-FAST7amg/viewform?embedded=true"
            width="100%"
            height="100%"
            title="Form Kritik dan Saran Emak Laundry"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="min-h-[700px]"
            title="Form Kritik dan Saran Emak Laundry"
          >
            Memuat…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
