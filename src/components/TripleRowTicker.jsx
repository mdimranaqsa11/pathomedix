"use client";

import { motion } from "framer-motion";

export default function TripleRowTicker() {
  const items = [
    "Expert Doctors, Just 5 Minutes Away",
    "Fast & Easy Online Consultation",
    "Safe & Trusted Medical Care",
    "24/7 Digital Healthcare Support",
  ];

  const duplicatedItems = [...items, ...items, ...items];

  // 🎨 YOUR THEME COLORS
  const primary = "#8778dd";
  const secondary = "#6d5fc7"; // darker shade
  const light = "#c4bdf3"; // light accent

  return (
    <div className="w-full space-y-0">
      {/* TOP BAR */}
      <div
        className="w-full overflow-hidden py-3.5 shadow-lg"
        style={{
          background: `linear-gradient(to right, ${primary} 0%, ${secondary} 50%, ${primary} 100%)`,
          borderBottom: `1px solid ${secondary}`,
        }}
      >
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: [0, -3000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`top-${index}`}
              className="flex items-center gap-3 flex-shrink-0"
            >
              <span className="text-white font-semibold text-sm md:text-base lg:text-lg tracking-wide">
                {item}
              </span>
              <span style={{ color: light }} className="text-lg opacity-70">
                ✦
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CENTER LINE */}
      <div
        className="h-1.5 shadow-md"
        style={{
          background: `linear-gradient(to right, ${primary}99, rgba(255,255,255,0.35), ${primary}99)`,
        }}
      />

      {/* BOTTOM BAR */}
      <div
        className="w-full overflow-hidden py-3.5 shadow-lg"
        style={{
          background: `linear-gradient(to right, ${primary} 0%, ${secondary} 50%, ${primary} 100%)`,
          borderBottom: `1px solid ${secondary}`,
        }}
      >
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: [-3000, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`bottom-${index}`}
              className="flex items-center gap-3 flex-shrink-0"
            >
              <span className="text-white font-semibold text-sm md:text-base lg:text-lg tracking-wide">
                {item}
              </span>
              <span style={{ color: light }} className="text-lg opacity-70">
                ✦
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
