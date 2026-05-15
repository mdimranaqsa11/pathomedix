// app/components/CuppingBannerSection.jsx
"use client";
import { ArrowRight, X, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Massage Cupping",
    rating: "4.9",
    reviews: "1K",
    price: "₹1099",
    originalPrice: "₹2099",
    subtitle: "Relieve Pain Improve Circulation Relax Body",
    image: "/images/mas-cup.png",
  },
  {
    title: "Fire Cupping",
    rating: "4.8",
    reviews: "899",
    price: "₹1099",
    originalPrice: "₹2099",
    subtitle:
      "Fire cupping is a traditional therapy rooted in Eastern medicine.",
    image: "/images/fire-cup.png",
  },
];

export default function CuppingBannerSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section className="bg-white py-10 sm:py-14 lg:py-18">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-6 lg:gap-8 px-3 sm:px-5 lg:px-8 lg:grid-cols-2">
          {services.map((items, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(items)}
              className="group overflow-hidden rounded-lg sm:rounded-2xl lg:rounded-[2.5rem] bg-[#f6f4ff] shadow-[0_15px_40px_rgba(0,0,0,0.04)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.05)] lg:shadow-[0_25px_80px_rgba(0,0,0,0.06)]"
            >
              <img
                src={items.image}
                alt="Massage Cupping"
                className="h-[200px] sm:h-[300px] lg:h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </section>
      {/* Modal */}
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
                  Physiotherapy Service
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
