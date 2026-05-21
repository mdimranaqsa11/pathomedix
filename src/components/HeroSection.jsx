// app/components/HeroSection.jsx
"use client";

import {
  Activity,
  FlaskConical,
  HeartPulse,
  Pill,
  ScanLine,
  Sparkles,
} from "lucide-react";
import MobileBannerCarousel from "./MobileBannerCarousel";

const services = [
  {
    title: "Medical Stores",
    icon: Pill,
  },
  {
    title: "Diagnostic Labs",
    icon: FlaskConical,
  },
  {
    title: "Physiotherapy",
    icon: Activity,
  },
  {
    title: "Prescription Scan",
    icon: ScanLine,
  },
  {
    title: "Cosmetology",
    icon: Sparkles,
  },
  {
    title: "Online Consultation",
    icon: HeartPulse,
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid  max-w-7xl grid-cols-1 gap-14 px-5 pb-14 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-16">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <MobileBannerCarousel />

          {/* Badge */}
          <div className="mb-6 hidden  md:inline-flex w-fit items-center rounded-full border border-[#9084e5]/15 bg-[#9084e5]/10 px-4 py-2 text-xs font-medium text-[#9084e5]">
            Healthcare Services Platform
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl hidden sm:block text-2xl sm:text-5xl font-medium leading-[1.05] tracking-tight text-black">
            Healthcare services <br /> at your doorstep
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl hidden sm:block sm:text-base text-sm  text-black/60">
            Find trusted medical stores, diagnostic labs, physiotherapy,
            prescription scanning, and home healthcare services all in one
            modern platform.
          </p>

          {/* Search */}
          <div className="mt-8 hidden md:flex flex-col gap-3 rounded-3xl border border-black/10 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:flex-row">
            <input
              type="text"
              placeholder="Search medicines, labs, physiotherapy..."
              className="h-14 flex-1 rounded-2xl border border-black/5 bg-[#f8f8fc] px-5 text-sm outline-none placeholder:text-black/35"
            />

            <button className="h-14 rounded-2xl bg-[#9084e5] px-7 text-sm font-medium text-white shadow-[0_10px_30px_rgba(144,132,229,0.35)] transition hover:scale-[1.01]">
              Search Now
            </button>
          </div>

          {/* Services Grid */}
          <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group rounded-xl sm:rounded-2xl lg:rounded-3xl border border-black/5 bg-[#fafafe] p-2.5 sm:p-3.5 lg:p-5 transition hover:-translate-y-1 hover:border-[#9084e5]/20 hover:bg-white hover:shadow-[0_20px_40px_rgba(144,132,229,0.08)]"
                >
                  <div className="flex h-8 w-8 sm:h-10 lg:h-12 sm:w-10 lg:w-12 items-center justify-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#9084e5]/10 text-[#9084e5]">
                    <Icon
                      size={16}
                      className="sm:w-5 lg:w-6 sm:h-5 lg:h-6"
                      strokeWidth={2.2}
                    />
                  </div>

                  <h3 className="mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm lg:text-sm font-semibold text-black line-clamp-2">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT img */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="grid w-full max-w-3xl grid-cols-2 gap-6">
            {/* LEFT */}
            <div className="flex flex-col gap-6">
              {/* Top */}
              <div className="overflow-hidden rounded-[2.5rem]">
                <img
                  src="https://img.magnific.com/premium-photo/doctor-attentively-listens-patient-takes-notes-explains-diagnoses-treatment_1141877-303.jpg?uid=R219158598&ga=GA1.1.607830471.1777706050&semt=ais_hybrid&w=740&q=80"
                  alt="Physiotherapy"
                  className="h-[340px] w-full object-cover transition duration-700 hover:scale-[1.04]"
                />
              </div>

              {/* Bottom */}
              <div className="overflow-hidden rounded-[2.5rem]">
                <img
                  src="https://img.magnific.com/free-photo/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-lab-preparation-blood-test-by-female-doctor-medical-uniform-table-white-bright-room_657921-879.jpg?t=st=1778607457~exp=1778611057~hmac=2f9edc6de5f104d5ec1906754de79f01a58d8bebe58bc5a0fbb1f2051af5bb94&w=740"
                  alt="Medical Service"
                  className="h-[260px] w-full object-cover transition duration-700 hover:scale-[1.04]"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-6 pt-12">
              {/* Top */}
              <div className="overflow-hidden rounded-[2.5rem]">
                <img
                  src="/images/medical-h.jpeg"
                  alt="Blood Test"
                  className="h-[260px] w-full object-cover transition duration-700 hover:scale-[1.04]"
                />
              </div>

              {/* Bottom */}
              <div className="overflow-hidden rounded-[2.5rem]">
                <img
                  src="/images/physiotherapist.jpg"
                  alt="Physiotherapy"
                  className="h-[340px] w-full object-cover transition duration-700 hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>

          {/* Floating Card 1 */}
          <div className="absolute -bottom-5 left-0 hidden rounded-3xl border border-black/5 bg-white/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:block">
            <p className="text-xs font-medium uppercase tracking-wide text-black/40">
              Prescription Scan
            </p>

            <div className="mt-3">
              <h4 className="text-sm font-semibold text-black">
                AI Prescription Detection
              </h4>

              <p className="mt-1 text-sm text-black/55">
                Paracetamol, Azithromycin detected
              </p>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute -right-5 -top-14 hidden rounded-3xl border border-black/5 bg-white/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:block">
            <p className="text-xs font-medium uppercase tracking-wide text-black/40">
              Nearby Services
            </p>

            <div className="mt-3">
              <h4 className="text-sm font-semibold text-black">
                Aqsa Diagnostic Lab
              </h4>

              <p className="mt-1 text-sm text-black/55">
                Open now • 0.8 km away
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-[#9084e5]/10 blur-3xl" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[#9084e5]/10 blur-3xl" />
    </section>
  );
}
