"use client";

import { useRef } from "react";
import { ArrowRight, X, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Doctors = [
  {
    id: 1,
    name: "Dr. Pravin Gupta",
    specialization: "Interventional Cardiologist",
    qualification: "MBBS, MD, DM (Cardiology)",
    rating: "4.8",
    reviews: "280",
    experience: "12+ Years Experience",
    availability: "By appointment only",
    consultationFee: "₹700",
    description:
      "Trusted cardiologist specializing in angiography, angioplasty, heart blockage, and preventive cardiac care.",
    image: "/images/dr-pravin-gupta.png",
  },
  {
    id: 2,
    name: "Dr. Prerit Agarwal",
    specialization: "Senior Cardiac Surgeon",
    qualification: "MBBS, MS, M.Ch (CTVS)",
    rating: "4.9",
    reviews: "310",
    experience: "12+ Years Experience",
    availability: "By appointment only",
    consultationFee: "₹900",
    description:
      "Advanced cardiac surgeon providing expert treatment for heart surgery and complex cardiovascular conditions.",
    image: "/images/dr-prerit-agarwal.png",
  },
  {
    id: 3,
    name: "Dr. Anu Aggarwal",
    specialization: "Chest & Lung Specialist",
    qualification: "MBBS, DTCD, DNB Respiratory Medicine",
    rating: "4.9",
    reviews: "245",
    experience: "10+ Years Experience",
    availability: "By appointment only",
    consultationFee: "₹500",
    description:
      "Experienced respiratory specialist focused on asthma, allergy, lung infection, and breathing-related disorders.",
    image: "/images/dr-anu-aggarwal.png",
  },
  {
    id: 4,
    name: "Dr. Sajid Rana",
    specialization: "General Physician",
    qualification: "MBBS, MD",
    rating: "4.8",
    reviews: "198",
    experience: "12+ Years Experience",
    availability: "By appointment only",
    consultationFee: "₹400",
    description:
      "Dedicated general physician offering consultation for fever, infection, weakness, diabetes, and routine health issues.",
    image: "/images/dr-sajid-rana.png",
  },
];

function DoctersCarocel() {
  const [selectedService, setSelectedService] = useState(null);

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    // Mobile me kam scroll, desktop me zyada
    const scrollAmount =
      window.innerWidth < 640 ? 260 : window.innerWidth < 1024 ? 340 : 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="px-3 sm:px-6 lg:px-10 mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#1a2b6b]">
              Most Booked Doctors
            </h2>
            <button className="h-7 w-7 sm:h-10 sm:w-10 text-white items-center bg-[#1a2b6b] justify-center rounded-full border border-black/10 transition hover:border-[#9084e5]/20 hover:bg-[#9084e5]/5 flex flex-shrink-0">
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {Doctors.map((pkg) => (
              <div
                onClick={() => setSelectedService(pkg)}
                key={pkg.id}
                className="flex-shrink-0 cursor-pointer"
              >
                <Image
                  src={pkg.image}
                  alt={`Package ${pkg.id}`}
                  // Mobile: ~85vw wide, Tablet: ~340px, Desktop: ~380px
                  width={380}
                  height={220}
                  className="rounded-xl sm:rounded-2xl object-cover"
                  style={{
                    width: "min(82vw, 380px)",
                    height: "auto",
                  }}
                  priority={pkg.id === 1}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-4">
          <div className="flex max-h-[90vh] w-full flex-col overflow-y-auto rounded-t-3xl bg-white sm:max-w-[500px] sm:rounded-3xl">
            {/* Header */}
            <div className="sticky top-0 flex items-center justify-between border-b border-black/5 bg-white px-4 py-4 sm:px-6">
              <h3 className="text-lg font-semibold text-black sm:text-xl">
                Doctor Details
              </h3>

              <button
                onClick={() => setSelectedService(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-black/5"
              >
                <X size={20} className="text-black" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
              {/* Doctor Image */}
              <div className="mb-6 overflow-hidden rounded-3xl bg-[#f6f4ff]">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="h-[280px] w-full object-cover"
                />
              </div>

              {/* Doctor Category */}
              <div className="mb-2">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9084e5]">
                  PathoMedix Doctor
                </p>
              </div>

              {/* Doctor Name */}
              <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
                {selectedService.name}
              </h2>

              {/* Specialization */}
              <p className="mt-2 text-base font-medium text-[#9084e5]">
                {selectedService.specialization}
              </p>

              {/* Qualification */}
              <p className="mt-2 text-sm leading-6 text-black/65">
                {selectedService.qualification}
              </p>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-2">
                <span className="text-[#9084e5]">★</span>

                <span className="font-semibold text-black">
                  {selectedService.rating}
                </span>

                <span className="text-sm text-black/60">
                  ({selectedService.reviews} reviews)
                </span>
              </div>

              {/* Experience + Availability */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#f8f8fc] p-4">
                  <p className="text-xs text-black/50">Experience</p>

                  <h4 className="mt-1 text-sm font-semibold text-black">
                    {selectedService.experience}
                  </h4>
                </div>

                <div className="rounded-2xl bg-[#f8f8fc] p-4">
                  <p className="text-xs text-black/50">Availability</p>

                  <h4 className="mt-1 text-sm font-semibold text-black">
                    {selectedService.availability}
                  </h4>
                </div>
              </div>

              {/* Consultation Fee */}
              <div className="mt-6 rounded-3xl bg-[#f8f8fc] p-5">
                <p className="text-sm text-black/50">Consultation Fee</p>

                <div className="mt-2 flex items-center gap-3">
                  <span className="text-3xl font-bold text-black">
                    {selectedService.consultationFee}
                  </span>

                  <span className="rounded-full bg-[#9084e5]/10 px-3 py-1 text-xs font-medium text-[#9084e5]">
                    Per Consultation
                  </span>
                </div>
              </div>

              {/* About Doctor */}
              <div className="mt-7">
                <h4 className="mb-3 text-sm font-semibold text-black">
                  About Doctor
                </h4>

                <p className="text-sm leading-7 text-black/70">
                  {selectedService.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-7">
                <h4 className="mb-4 text-sm font-semibold text-black">
                  Why Choose This Doctor
                </h4>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[#9084e5]">✓</span>

                    <span className="text-sm text-black/70">
                      Trusted medical consultation
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[#9084e5]">✓</span>

                    <span className="text-sm text-black/70">
                      Experienced specialist care
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[#9084e5]">✓</span>

                    <span className="text-sm text-black/70">
                      Personalized treatment guidance
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[#9084e5]">✓</span>

                    <span className="text-sm text-black/70">
                      Easy appointment booking
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="sticky bottom-0 flex gap-3 border-t border-black/5 bg-white px-4 py-4 sm:px-6">
              {/* Call */}
              <a
                href="tel:+917011733779"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-black/[0.02]"
              >
                <Phone size={18} />

                <span>Call Doctor</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917011733779"
                target="_blank"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#9084e5] px-4 py-3 text-sm font-medium text-white shadow-[0_10px_25px_rgba(144,132,229,0.35)] transition hover:scale-[1.02]"
              >
                <MessageCircle size={18} />

                <span>Book Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DoctersCarocel;
