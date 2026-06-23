"use client";

import { useState } from "react";
import {
  Activity,
  FlaskConical,
  HeartPulse,
  Pill,
  ScanLine,
  Sparkles,
  X,
} from "lucide-react";
import MobileBannerCarousel from "./MobileBannerCarousel";

const services = [
  {
    title: "Medical Stores",
    icon: Pill,
    description:
      "Find trusted medical stores near you. Order prescription medicines, OTC drugs, and healthcare essentials with ease.",
    features: [
      "Genuine medicines",
      "Home delivery",
      "24/7 availability",
      "Prescription upload",
    ],
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Diagnostic Labs",
    icon: FlaskConical,
    description:
      "Book blood tests, health checkups, and diagnostic scans at certified labs. Get reports delivered digitally.",
    features: [
      "Certified labs",
      "Home sample collection",
      "Digital reports",
      "Health packages",
    ],
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Physiotherapy",
    icon: Activity,
    description:
      "Connect with qualified physiotherapists for pain relief, injury recovery, and rehabilitation programs.",
    features: [
      "Expert therapists",
      "Home sessions",
      "Customized plans",
      "Post-surgery rehab",
    ],
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Prescription Scan",
    icon: ScanLine,
    description:
      "Scan your prescription using AI-powered detection. Instantly identify medicines and get them delivered.",
    features: [
      "AI detection",
      "Instant results",
      "Medicine search",
      "Order directly",
    ],
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Cosmetology",
    icon: Sparkles,
    description:
      "Access expert cosmetology services including skin treatments, hair care, and aesthetic procedures.",
    features: [
      "Skin treatments",
      "Hair care",
      "Aesthetic procedures",
      "Expert consultations",
    ],
    color: "bg-pink-50 text-pink-600",
  },
  {
    title: "Online Consultation",
    icon: HeartPulse,
    description:
      "Consult with super speciality doctors online from the comfort of your home. Available 24/7.",
    features: [
      "Super specialists",
      "Video & chat",
      "Digital prescriptions",
      "Follow-up support",
    ],
    color: "bg-red-50 text-red-600",
  },
];

function ServiceModal({ service, onClose }) {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Mobile: bottom sheet | Desktop: centered card */}
      <div
        className="relative w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl bg-white px-6 pt-6 pb-8 sm:p-7 shadow-2xl max-h-[90dvh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle — mobile only */}
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-black/10 sm:hidden" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-black/40 transition hover:bg-black/10 hover:text-black/70"
        >
          <X size={16} />
        </button>

        {/* Icon */}
        <div
          className={`mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl ${service.color}`}
        >
          <Icon size={22} strokeWidth={2} />
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold text-black">
          {service.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-black/55">
          {service.description}
        </p>

        {/* Features */}
        <ul className="mt-4 space-y-2.5">
          {service.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2.5 text-sm text-black/70"
            >
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#9084e5]/15 text-[#9084e5]">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="mt-6 w-full rounded-2xl bg-[#9084e5] py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(144,132,229,0.3)] transition hover:opacity-90 active:scale-[0.98]">
          Explore {service.title}
        </button>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 pb-14 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-16">
        {/* LEFT CONTENT */}
        <div className="relative z-10 flex flex-col justify-center">
          <MobileBannerCarousel />

          {/* Badge */}
          <div className="mb-6 hidden md:inline-flex w-fit items-center rounded-full border border-[#9084e5]/15 bg-[#9084e5]/10 px-4 py-2 text-xs font-medium text-[#9084e5]">
            Healthcare Services Platform
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl hidden sm:block text-2xl sm:text-5xl font-medium leading-15 tracking-tight text-black">
            Connect with Expert <br /> Doctors in Just{" "}
            <span className="text-[#9084e5]">5 Minutes</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl hidden sm:block sm:text-base text-sm text-black/60">
            Consultation with super speciality doctors, Find trusted medical
            stores, diagnostic labs, physiotherapy, prescription scanning, and
            home healthcare services all in one modern platform.
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

          {/* Services Grid - Clean & Minimal */}
          <div className="mt-10 grid grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colSpan =
                index < 3
                  ? "col-span-2"
                  : index < 5
                    ? "col-span-3"
                    : "col-span-6";
              return (
                <div
                  key={index}
                  onClick={() => setSelectedService(service)}
                  className={`group relative z-10 cursor-pointer rounded-xl sm:rounded-2xl border border-[#8778dd]/50 bg-white p-3 sm:p-4 transition duration-300 hover:border-[#8778dd]/90 hover:shadow-[0_15px_35px_rgba(144,132,229,0.08)] hover:-translate-y-1 ${colSpan}`}
                >
                  {/* Icon */}
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-[#9084e5]/10 text-[#9084e5]">
                    <Icon size={18} strokeWidth={2} />
                  </div>

                  {/* Title Only */}
                  <h3 className="mt-2 text-xs sm:text-sm font-semibold text-black line-clamp-2">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT img */}
        <div className="relative z-10 hidden lg:flex items-center justify-center">
          <div className="grid w-full max-w-3xl grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-[2.5rem]">
                <img
                  src="https://img.magnific.com/premium-photo/doctor-attentively-listens-patient-takes-notes-explains-diagnoses-treatment_1141877-303.jpg?uid=R219158598&ga=GA1.1.607830471.1777706050&semt=ais_hybrid&w=740&q=80"
                  alt="Physiotherapy"
                  className="h-[340px] w-full object-cover transition duration-700 hover:scale-[1.04]"
                />
              </div>
              <div className="overflow-hidden rounded-[2.5rem]">
                <img
                  src="https://img.magnific.com/free-photo/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-lab-preparation-blood-test-by-female-doctor-medical-uniform-table-white-bright-room_657921-879.jpg?t=st=1778607457~exp=1778611057~hmac=2f9edc6de5f104d5ec1906754de79f01a58d8bebe58bc5a0fbb1f2051af5bb94&w=740"
                  alt="Medical Service"
                  className="h-[260px] w-full object-cover transition duration-700 hover:scale-[1.04]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 pt-12">
              <div className="overflow-hidden rounded-[2.5rem]">
                <img
                  src="/images/medical-h.jpeg"
                  alt="Blood Test"
                  className="h-[260px] w-full object-cover transition duration-700 hover:scale-[1.04]"
                />
              </div>
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

      {/* Background Glow — pointer-events-none + z-0 taaki cards clickable rahen */}
      <div className="pointer-events-none absolute left-[-10%] top-[-10%] z-0 h-[400px] w-[400px] rounded-full bg-[#9084e5]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] z-0 h-[400px] w-[400px] rounded-full bg-[#9084e5]/10 blur-3xl" />

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
