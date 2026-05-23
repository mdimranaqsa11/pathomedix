"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone, X, Check, Moon, Sun, Siren } from "lucide-react";
import { motion } from "framer-motion";

export default function HealthPriorityModal() {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check device type and auto open modal
  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Auto open modal
    const timer = setTimeout(() => {
      setOpen(true);
      setIsAnimating(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setOpen(false), 300);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-50"
        onClick={handleClose}
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.55)",
          backdropFilter: isAnimating ? "blur(5px)" : "blur(0px)",
        }}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-0 py-0 sm:px-4 sm:py-6 overflow-hidden">
        <motion.div
          className="relative w-full max-h-[80vh] sm:max-h-[85vh] sm:w-full sm:max-w-sm lg:max-w-md overflow-y-auto sm:overflow-visible"
          initial={{ scale: 0.9, opacity: 0, y: isMobile ? 100 : 30 }}
          animate={
            isAnimating
              ? { scale: 1, opacity: 1, y: 0 }
              : { scale: 0.9, opacity: 0, y: isMobile ? 100 : 30 }
          }
          transition={{
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <div className="relative overflow-hidden rounded-t-3xl sm:rounded-[30px] bg-white shadow-2xl h-full flex flex-col">
            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              className="absolute right-3 sm:right-4 top-3 sm:top-4 z-20 flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md backdrop-blur hover:scale-110 active:scale-95 transition-transform"
              initial={{ scale: 0 }}
              animate={isAnimating ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.4 }}
              aria-label="Close modal"
            >
              <X size={isMobile ? 16 : 18} />
            </motion.button>

            {/* Top Banner */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#6f5cff] via-[#7c68eb] to-[#927fff]">
              {/* Doctor Image */}
              <motion.img
                src="https://img.magnific.com/free-photo/indian-doctor-receives-patient-tells-him-about-results-tests-medicine-health_496169-2765.jpg?uid=R219158598&ga=GA1.1.607830471.1777706050&semt=ais_hybrid&w=740&q=80"
                alt="Dr Almas Khan"
                className="h-40 sm:h-52 w-full object-cover opacity-90"
                initial={{ scale: 1.08 }}
                animate={isAnimating ? { scale: 1 } : { scale: 1.08 }}
                transition={{ duration: 0.7 }}
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Emergency Badge */}
              <div className="absolute left-3 sm:left-4 top-3 sm:top-4 flex items-center gap-2 rounded-full bg-red-500 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold text-white shadow-lg">
                <Siren size={isMobile ? 13 : 15} />
                <span className="hidden xs:inline">
                  24/7 Emergency Consultation
                </span>
                <span className="xs:hidden">24/7 Emergency</span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-5 py-3 sm:py-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  Dr. Almas Khan
                </h2>

                <p className="text-xs text-white/85">
                  General & Laparoscopic Surgeon
                </p>

                <p className="mt-1 text-xs leading-relaxed text-white/90">
                  Emergency consultation available 24/7.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-3 p-3 sm:p-4 flex-1 overflow-y-auto">
              {/* Consultation Cards */}
              <div className="grid grid-cols-2 gap-2">
                {/* Day */}
                <motion.div
                  className="rounded-xl border border-[#e9e5ff] bg-[#f8f7ff] p-2 sm:p-3 cursor-pointer hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="mb-1 flex items-center gap-1.5">
                    <div className="flex h-7 sm:h-8 w-7 sm:w-8 items-center justify-center rounded-full bg-[#7c68eb]/10 flex-shrink-0">
                      <Sun
                        size={isMobile ? 14 : 16}
                        className="text-[#7c68eb]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xs font-semibold text-gray-900">
                        Day
                      </h3>

                      <p className="text-[10px] text-gray-500 truncate">Fee</p>
                    </div>
                  </div>

                  <p className="text-lg sm:text-xl font-bold text-[#7c68eb]">
                    ₹400
                  </p>
                </motion.div>

                {/* Night */}
                <motion.div
                  className="rounded-xl border border-red-100 bg-red-50 p-2 sm:p-3 cursor-pointer hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="mb-1 flex items-center gap-1.5">
                    <div className="flex h-7 sm:h-8 w-7 sm:w-8 items-center justify-center rounded-full bg-red-100 flex-shrink-0">
                      <Moon
                        size={isMobile ? 14 : 16}
                        className="text-red-500"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xs font-semibold text-gray-900">
                        Night
                      </h3>

                      <p className="text-[10px] text-gray-500 truncate">
                        Emergency
                      </p>
                    </div>
                  </div>

                  <p className="text-lg sm:text-xl font-bold text-red-500">
                    ₹500
                  </p>
                </motion.div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {[
                  "Emergency Available",
                  "Direct Doctor Support",
                  "Trusted Experience",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 rounded-xl bg-gray-50 px-2.5 sm:px-3 py-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isAnimating ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#7c68eb]/10 flex-shrink-0">
                      <Check
                        size={12}
                        className="text-[#7c68eb]"
                        strokeWidth={3}
                      />
                    </div>

                    <p className="text-xs font-medium text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>

              {/* Emergency Notice */}
              <motion.div
                className="rounded-xl border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-2.5 sm:p-3"
                initial={{ opacity: 0, y: 10 }}
                animate={isAnimating ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-start gap-2">
                  <div className="flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-full bg-red-100 flex-shrink-0">
                    <Siren size={16} className="text-red-500" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900">
                      Night Emergency
                    </h3>

                    <p className="mt-0.5 text-xs leading-tight text-gray-600">
                      Available 24/7 through PathoMedix.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2 pt-1">
                {/* Call */}
                <motion.a
                  href="tel:+918376032808"
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-gray-900 transition-all hover:bg-gray-50 active:bg-gray-100"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={isMobile ? 16 : 18} />
                  Call Doctor
                </motion.a>
              </div>

              {/* Mobile Safe Area Padding */}
              <div className="h-1 sm:h-0" />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
