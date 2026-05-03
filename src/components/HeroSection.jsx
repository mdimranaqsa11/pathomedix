"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="bg-[#9084e5] m-2 sm:m-4 md:m-6 rounded-2xl sm:rounded-3xl overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-4 sm:px-6 md:px-8 pt-4 sm:pt-5">
        <h1 className="text-white text-lg sm:text-xl md:text-2xl">
          PathoMedix
        </h1>

        <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-[10px] sm:text-xs uppercase bg-white text-[#9084e5] shadow-md hover:scale-105 transition">
          Download
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 pt-12 md:py-16 ">
        <div className="relative max-w-4xl text-center text-white z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 sm:mb-8 md:mb-10 uppercase px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-full bg-white/20 border border-white/30 backdrop-blur-md"
          >
            Coming Soon
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[68px] font-normal leading-tight md:leading-[60px] lg:leading-[70px] mb-4 sm:mb-6"
          >
            Find Medicines & Labs <br className="hidden sm:block" />
            near you, effortlessly
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-[20px] text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-xl sm:max-w-2xl mx-auto"
          >
            Upload your prescription, discover nearby medical stores and labs,
            and connect instantly — all in one smart app.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            {/* Primary */}
            <button
              className="w-full sm:w-auto relative px-6 sm:px-7 py-3 rounded-full text-[#6f63e9] font-medium overflow-hidden
              bg-white/80 backdrop-blur-xl
              shadow-[0_8px_25px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.6)]
              border border-white/40
              hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/60 to-transparent opacity-70"></span>
              <span className="relative z-10 text-sm sm:text-base">
                Download Now
              </span>
            </button>

            {/* Secondary */}
            <button
              className="w-full sm:w-auto relative px-6 sm:px-7 py-3 rounded-full text-white font-medium overflow-hidden
              bg-white/10 backdrop-blur-xl
              border border-white/30
              shadow-[0_8px_25px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.3)]
              hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 to-transparent opacity-50"></span>
              <span className="relative z-10 text-sm sm:text-base">
                Notify Me
              </span>
            </button>
          </motion.div>
        </div>

        {/* Blur Effects */}
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-40 sm:w-60 md:w-72 h-40 sm:h-60 md:h-72 bg-white/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-40 sm:w-60 md:w-72 h-40 sm:h-60 md:h-72 bg-white/20 rounded-full blur-3xl opacity-30" />
      </section>

      {/* Phone Section (UNCHANGED core) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative w-full mt-1 md:mt-40 z-20 h-[300px] sm:h-[350px] md:h-[400px]"
      >
        {/* Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-white/40 via-white/40 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-white/40 via-white/40 to-transparent blur-3xl pointer-events-none" />

        <div className="absolute -bottom-33 md:-bottom-100 left-1/2 -translate-x-1/2 flex justify-center">
          <div className="absolute md:-left-1/2 -left-1/3 top-1/3 sm:w-40 md:w-80">
            <div className="p-2 sm:p-3 md:p-4 rounded-lg md:rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
              <div className="flex gap-1.5 sm:gap-2 md:gap-3 items-start">
                {/* Icon */}
                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center bg-green-500/90 shadow-inner">
                  <Check className="text-white md:size-5 size-2" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h1 className="text-[8px] sm:text-[11px] md:text-[15px] font-medium text-gray-900 leading-tight">
                    Nearby Medical Store
                  </h1>

                  <p className="text-[7px] sm:text-[10px] md:text-[13px] text-gray-500 mt-0.5 sm:mt-1">
                    Sharma Medical Store • 0.6 km
                  </p>

                  {/* Status */}
                  <div className="flex gap-1 sm:gap-2 mt-1 sm:mt-2 md:mt-3 flex-wrap">
                    <div className="inline-flex items-center gap-1 sm:gap-2 px-1.5 sm:px-2.5 py-[2px] sm:py-1 rounded-full bg-green-50 border border-green-100">
                      <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 md:h-2 md:w-2 rounded-full bg-green-500"></span>
                      <span className="text-[6px] sm:text-[9px] md:text-[11px] font-medium text-green-600">
                        Open
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1 sm:gap-2 px-1.5 sm:px-2.5 py-[2px] sm:py-1 rounded-full bg-green-50 border border-green-100">
                      <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 md:h-2 md:w-2 rounded-full bg-green-500"></span>
                      <span className="text-[6px] sm:text-[9px] md:text-[11px] font-medium text-green-600">
                        Delivery
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Phone Image */}
          <img
            src="/images/phonePatho.png"
            alt="Phone Screen"
            className="w-[300px] md:w-[360px] lg:w-[420px] h-full object-contain"
          />
          <div className="absolute md:-right-1/2 -right-1/3 top-[10%]  md:w-80">
            <div className="p-2 sm:p-3 md:p-4 rounded-lg md:rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
              <div className="flex gap-1.5 sm:gap-2 md:gap-3 items-start">
                {/* Icon */}
                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center bg-green-500/90 shadow-inner">
                  <Check className="text-white md:size-5 size-2" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h1 className="text-[8px] sm:text-[11px] md:text-[15px] font-medium text-gray-900 leading-tight">
                    Lab Tests Available
                  </h1>

                  <p className="text-[7px] sm:text-[10px] md:text-[13px] text-gray-500 mt-0.5 sm:mt-1">
                    CBC • Thyroid • Blood Sugar
                  </p>

                  {/* Status */}
                  <div className="flex gap-1 sm:gap-2 mt-1 sm:mt-2 md:mt-3 flex-wrap">
                    <div className="inline-flex items-center gap-1 sm:gap-2 px-1.5 sm:px-2.5 py-[2px] sm:py-1 rounded-full bg-blue-50 border border-blue-100">
                      <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 md:h-2 md:w-2 rounded-full bg-blue-500"></span>
                      <span className="text-[6px] sm:text-[9px] md:text-[11px] font-medium text-blue-600">
                        Home
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1 sm:gap-2 px-1.5 sm:px-2.5 py-[2px] sm:py-1 rounded-full bg-blue-50 border border-blue-100">
                      <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 md:h-2 md:w-2 rounded-full bg-blue-500"></span>
                      <span className="text-[6px] sm:text-[9px] md:text-[11px] font-medium text-blue-600">
                        24/7
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
