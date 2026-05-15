"use client";

import { useRef } from "react";
import { ArrowRight, X, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const packages = [
  {
    id: 1,
    title: "Fit India Full Body Checkup with Vitamin B12",
    rating: "4.8",
    reviews: "345",
    price: "₹1350",
    originalPrice: "₹2700",
    subtitle:
      "An advanced checkup that covers 90 essential test parameters including sugar, cholesterol, thyroid, liver, kidney, blood health, and Vitamin B12. Recommended for those who want to track key health risks and rule out common causes of fatigue or weakness.",
    image: "/images/fit-idia.png",
  },
  {
    id: 2,
    title: "HBA1C + smart body Profil ",
    rating: "4.8",
    reviews: "199",
    price: "₹800",
    originalPrice: "₹1600",
    subtitle: "( CBC, ESR, TFT,  LFT KFT,  LIPID PROFILE,  RBS,  URINE R/M )",
    image: "/images/two.png",
  },
  {
    id: 3,
    title: "Vit-D3 + Serum Calcium",
    rating: "4.8",
    reviews: "503",
    price: "₹800",
    originalPrice: "₹1600",
    subtitle:
      "Vitamin D3 is essential for your body to absorb dietary calcium in the gut",
    image: "/images/three.png",
    link: "#",
  },
  {
    id: 4,
    title: "ANC Profile",
    rating: "4.8",
    reviews: "435",
    price: "₹1100",
    originalPrice: "₹2200",
    subtitle:
      "( CBC, ESR, FBS, GTT, TSH, VDRL, HIV1&2, HBSAG, Anti HCV, Blood Group, Urine R/M, )",
    image: "/images/four.png",
  },
];

export default function FamilyCarePackages() {
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
              Most booked Packages
            </h2>
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {packages.map((pkg) => (
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full sm:max-w-[500px] rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-y-auto flex flex-col">
            {/* Header with Close Button */}
            <div className="sticky top-0 bg-white border-b border-black/5 px-4 sm:px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                Service Details
              </h3>
              <button
                onClick={() => setSelectedService(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-black/5 transition"
              >
                <X size={20} className="text-black" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 px-4 sm:px-6 py-4 overflow-y-auto">
              {/* Image */}
              <div className="overflow-hidden rounded-2xl mb-6 bg-white">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-[250px] sm:h-[300px] object-cover"
                />
              </div>

              {/* Title & Category */}
              <div className="mb-4">
                <p className="text-xs sm:text-sm font-medium uppercase tracking-wide text-[#9084e5] mb-1">
                  Pathology Service
                </p>
                <h2 className="text-xl sm:text-3xl font-bold text-black">
                  {selectedService.title}
                </h2>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#9084e5]">★</span>
                <span className="font-semibold text-black">
                  {selectedService.rating}
                </span>
                <span className="text-black/60 text-sm">
                  ({selectedService.reviews} reviews)
                </span>
              </div>

              {/* Price Section */}
              <div className="bg-[#f8f8fc] rounded-2xl p-4 mb-6">
                <p className="text-sm text-black/60 mb-2">Starts at</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-black">
                    {selectedService.price}
                  </span>
                  <span className="text-sm text-black/40 line-through">
                    {selectedService.originalPrice}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-black mb-2">
                  About this service
                </h4>
                <p className="text-sm text-black/70 leading-6">
                  {selectedService.subtitle}
                </p>
                <p className="text-sm text-black/60 leading-6 mt-2">
                  {selectedService.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-black mb-3">
                  Key Benefits
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#9084e5]">✓</span>
                    <span className="text-sm text-black/70">
                      Professional expertise
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#9084e5]">✓</span>
                    <span className="text-sm text-black/70">
                      Advanced technology
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#9084e5]">✓</span>
                    <span className="text-sm text-black/70">
                      Proven results
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons (Sticky Bottom) */}
            <div className="sticky bottom-0 bg-white border-t border-black/5 px-4 sm:px-6 py-4 flex gap-3">
              {/* Call Button */}
              <a
                href="tel:+919999999999"
                className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black transition hover:border-black/20 hover:bg-black/[0.02]"
              >
                <Phone size={18} />
                <span>Call</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#9084e5] px-4 py-3 text-sm font-medium text-white shadow-[0_10px_25px_rgba(144,132,229,0.35)] transition hover:scale-[1.02]"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
