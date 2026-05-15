// app/components/AppIntroBanner.jsx
"use client";

import { ArrowRight, Play } from "lucide-react";

export default function AppIntroBanner() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Glow */}

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 sm:gap-12 lg:gap-16 px-3 sm:px-5 lg:px-8 lg:flex-row">
        {/* LEFT CONTENT */}
        <div className="w-full max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-[#9084e5]/15 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-[#9084e5] shadow-sm">
            Coming Soon Experience
          </div>

          {/* Heading */}
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] sm:leading-[1.15] lg:leading-[1.14] text-black">
            A smarter way <br />
            to access healthcare
          </h2>

          {/* Description */}
          <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-black/60">
            PathoMedix is building a modern healthcare experience where users
            can discover nearby labs, physiotherapy services, prescription
            scanning, and home healthcare — all from one app.
          </p>

          {/* Buttons */}
          <div className="mt-8 hidden sm:mt-10 sm:flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#9084e5] px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-medium text-white transition hover:scale-[1.02]">
              Explore Platform
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>

            <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 rounded-full border border-black/10 bg-white px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-medium text-black transition hover:bg-black hover:text-white">
              <Play size={14} className="sm:w-[16px] sm:h-[16px]" />
              Watch Preview
            </button>
          </div>

          {/* Features */}
          <div className="mt-10 sm:mt-14 hidden sm:flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 lg:gap-10">
            <div>
              <h3 className="text-2xl sm:text-2.5xl lg:text-3xl font-semibold text-black">
                AI
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-black/50">
                Prescription Recognition
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-2.5xl lg:text-3xl font-semibold text-black">
                24/7
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-black/50">
                Healthcare Access
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-2.5xl lg:text-3xl font-semibold text-black">
                Nearby
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-black/50">
                Labs & Medical Stores
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT MOBILE UI */}
        <div className="relative w-full flex items-center justify-center lg:w-auto">
          {/* Floating Card */}
          <div className="absolute -left-12 sm:-left-16 top-16 sm:top-24 z-10 hidden rounded-2xl sm:rounded-3xl border border-black/5 bg-white/90 p-3 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.06)] sm:shadow-[0_25px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:block max-w-[180px]">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
              Smart Detection
            </p>

            <div className="mt-2 sm:mt-3">
              <h4 className="text-xs sm:text-sm font-semibold text-black">
                AI Prescription Scan
              </h4>

              <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-black/55">
                Medicines identified instantly
              </p>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -right-12 sm:-right-14 z-10 bottom-16 sm:bottom-20 hidden rounded-2xl sm:rounded-3xl border border-black/5 bg-white/90 p-3 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.06)] sm:shadow-[0_25px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:block max-w-[180px]">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
              Healthcare Access
            </p>

            <div className="mt-2 sm:mt-3">
              <h4 className="text-xs sm:text-sm font-semibold text-black">
                Nearby Services
              </h4>

              <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-black/55">
                Labs, physio & medical stores
              </p>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative overflow-hidden">
            <img
              src="/images/pathomedix-app.jpeg"
              alt="PathoMedix App"
              className="h-[350px] sm:h-[500px] lg:h-[650px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
