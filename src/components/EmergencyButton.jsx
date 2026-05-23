"use client";

import { useState, useEffect } from "react";
import { Siren, X, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function EmergencyButton() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex items-center justify-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="relative"
          animate={open ? { rotate: 45 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Main Button */}
          <div className="h-14 sm:h-16 w-14 sm:w-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-2xl transition-shadow cursor-pointer relative overflow-hidden group">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

            {/* Pulse Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-red-400"
              animate={{ scale: [1, 1.3], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Icon */}
            <motion.div animate={open ? { rotate: -45 } : { rotate: 0 }}>
              <Siren size={24} className="text-white relative z-10" />
            </motion.div>
          </div>
        </motion.div>
      </motion.button>

      {/* Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={
          open
            ? { opacity: 1, pointerEvents: "auto" }
            : { opacity: 0, pointerEvents: "none" }
        }
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 right-0 top-0 left-0 z-30"
        onClick={() => setOpen(false)}
      />

      {/* Action Buttons */}
      <div className="fixed bottom-24 sm:bottom-28 right-6 sm:right-8 z-40 flex flex-col gap-3">
        {/* Call Button */}
        <motion.a
          href="tel:+918376032808"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={
            open
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.5, y: 20 }
          }
          transition={{ delay: 0.05 }}
          className="flex items-center gap-2 bg-white rounded-full px-3 py-2.5 sm:px-4 sm:py-3 shadow-lg hover:shadow-xl transition-all group"
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="h-9 w-9 sm:h-11 sm:w-11 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
            <Phone size={18} className="text-white" />
          </div>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/917011733779"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={
            open
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.5, y: 20 }
          }
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 bg-white rounded-full px-3 py-2.5 sm:px-4 sm:py-3 shadow-lg hover:shadow-xl transition-all group"
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="h-9 w-9 sm:h-11 sm:w-11 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#20ba5a] transition-colors">
            <MessageCircle size={18} className="text-white" />
          </div>
        </motion.a>
      </div>
    </>
  );
}
