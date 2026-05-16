// app/components/AdvertisementModal.jsx
"use client";

import { X } from "lucide-react";
import { useState, useEffect } from "react";

export default function AdvertisementModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Open modal on component mount (after 2 seconds)
  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Modal - Only visible on mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-end sm:hidden">
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-50" : "opacity-0"
            }`}
            onClick={handleClose}
          />

          {/* Modal Content - Bottom Sheet */}
          <div
            className={`relative w-full bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-out ${
              isOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-black/5">
              <div className="w-6" />
              <h3 className="text-center text-sm font-medium text-black flex-1">
                PathoMedix
              </h3>
              <button
                onClick={handleClose}
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-black/5 transition"
              >
                <X size={18} className="text-black" />
              </button>
            </div>

            {/* Message */}
            <div className="px-5 py-8 text-center">
              <h2 className="text-[22px] sm:text-3xl text-black leading-snug">
                All Services for Your <br /> Doorstep
              </h2>
            </div>

            {/* Buttons */}
            <div className="px-5 pb-6 space-y-3">
              <button
                onClick={handleClose}
                className="w-full rounded-xl bg-[#9084e5] px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] shadow-[0_10px_25px_rgba(144,132,229,0.35)]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
