"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone, X, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function HealthPriorityModal() {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto open modal
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      setIsAnimating(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setOpen(false), 300);
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-70"
        onClick={handleClose}
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: isAnimating ? "blur(4px)" : "blur(0px)",
        }}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-80 flex items-center justify-center px-4 py-6 sm:py-8">
        <motion.div
          className="relative w-full max-w-sm lg:max-w-md"
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={
            isAnimating
              ? { scale: 1, opacity: 1, y: 0 }
              : { scale: 0.85, opacity: 0, y: 30 }
          }
          transition={{
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur transition-all duration-200 hover:bg-white/100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#7c68eb] focus:ring-offset-2 sm:right-6 sm:top-6"
              aria-label="Close modal"
              initial={{ scale: 0 }}
              animate={isAnimating ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={18} className="text-gray-900" strokeWidth={2.5} />
            </motion.button>

            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-[#7c68eb] via-[#8b77f1] to-[#9e8ff7] sm:h-72">
              {/* Doctor Image */}
              <motion.img
                src="https://img.magnific.com/free-photo/indian-doctor-receives-patient-tells-him-about-results-tests-medicine-health_496169-2765.jpg?uid=R219158598&ga=GA1.1.607830471.1777706050&semt=ais_hybrid&w=740&q=80"
                alt="Professional Healthcare Doctor"
                className="h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                animate={isAnimating ? { scale: 1 } : { scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent" />

              {/* Badge */}
              <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-[#7c68eb] backdrop-blur-md transition-all hover:bg-white sm:left-6 sm:top-6">
                ✓ Trusted Partner
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent px-4 py-6 sm:px-6 sm:py-8">
                <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Better Care With PathoMedix
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-white/85 sm:text-base">
                  Expert doctors, labs & home healthcare services.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 px-4 py-6 sm:px-6 sm:py-7">
              {/* Features List */}
              <div className="space-y-2.5">
                {[
                  "Verified Doctors & Labs",
                  "Home Visit & Sample Collection",
                  "Instant WhatsApp Booking",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#f8f7ff] to-[#fafbff] px-4 py-3 transition-all duration-200 hover:from-[#f0ecff] hover:to-[#f5f3ff] hover:shadow-sm cursor-pointer"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7c68eb]/10 group-hover:bg-[#7c68eb]/20 transition-colors">
                      <Check
                        size={14}
                        className="text-[#7c68eb]"
                        strokeWidth={3}
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                {/* Call Button */}
                <a
                  href="tel:+917011733779"
                  className="group relative inline-flex flex-1 items-center justify-center gap-2.5 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7c68eb] focus:ring-offset-2 active:scale-95"
                >
                  <Phone
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span>Call</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/917011733779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex flex-1 items-center justify-center gap-2.5 rounded-2xl bg-[#7c68eb] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#7c68eb]/30 transition-all duration-200 hover:bg-[#6d55d8] hover:shadow-xl hover:shadow-[#7c68eb]/40 focus:outline-none focus:ring-2 focus:ring-[#7c68eb] focus:ring-offset-2 active:scale-95"
                >
                  <MessageCircle
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span>Book Now</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
