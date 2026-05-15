// app/components/PopularServices.jsx
"use client";

import { ArrowRight, X, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Hydra Facial",
    rating: "4.9",
    reviews: "8K",
    price: "₹799",
    originalPrice: "₹1499",
    subtitle: "Deep skin hydration & glow treatment",
    description:
      "Professional hydrafacial treatment using advanced technology for deep hydration and radiant glow. Suitable for all skin types.",
    image:
      "https://img.magnific.com/premium-photo/smart-skilled-cosmetologist-using-modern-device-while-doing-hydrafacial-procedure_259150-9197.jpg?uid=R219158598&ga=GA1.1.607830471.1777706050&semt=ais_incoming&w=740&q=80",
  },
  {
    title: "Laser Hair Removal",
    rating: "4.8",
    reviews: "7K",
    price: "₹999",
    originalPrice: "₹1699",
    subtitle: "Smooth and long-lasting hair reduction",
    description:
      "Advanced laser technology for smooth, long-lasting hair reduction. Pain-free and effective for all skin tones.",
    image:
      "https://img.magnific.com/free-photo/active-healthy-sportswoman-smiling-laughing-wiping-sweat-workout-doing-exercises-gym-standing-white-background_176420-49175.jpg?uid=R219158598&ga=GA1.1.607830471.1777706050&semt=ais_incoming&w=740&q=80",
  },
  {
    title: "Acne Treatment",
    rating: "4.9",
    reviews: "4K",
    price: "₹899",
    originalPrice: "₹1499",
    subtitle: "Advanced care for clear healthy skin",
    description:
      "Comprehensive acne treatment using dermatologist-approved methods for clear and healthy skin.",
    image:
      "https://img.magnific.com/free-photo/before-after-portrait-woman-retouched_23-2149121636.jpg?uid=R219158598&ga=GA1.1.607830471.1777706050&semt=ais_incoming&w=740&q=80",
  },
  {
    title: "Skin Brightening",
    rating: "4.7",
    reviews: "14K",
    price: "₹1199",
    originalPrice: "₹2299",
    subtitle: "Glow enhancement & pigmentation care",
    description:
      "Professional skin brightening and pigmentation care for an even, radiant complexion.",
    image:
      "https://img.magnific.com/free-photo/young-beautiful-girl-lies-beautician-s-table-receives-procedures_343596-4236.jpg?uid=R219158598&ga=GA1.1.607830471.1777706050&semt=ais_incoming&w=740&q=80",
  },
  {
    title: "Anti-Aging Therapy",
    rating: "4.8",
    reviews: "7K",
    price: "₹1499",
    originalPrice: "₹2499",
    subtitle: "Professional youthful skin solutions",
    description:
      "Premium anti-aging therapy combining multiple treatments for youthful, rejuvenated skin.",
    image:
      "https://img.magnific.com/premium-photo/mesotherapy-procedure-cosmetology-clinic-dermatologist-doctor-makes-injection_164411-3833.jpg?uid=R219158598&ga=GA1.1.607830471.1777706050&semt=ais_incoming&w=740&q=80",
  },
];

export default function PopularServices() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="bg-transparent py-12 sm:py-16 lg:py-24">
      <div className="w-full mx-auto max-w-[1600px] px-3 sm:px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-8 sm:mb-10 lg:mb-12 flex items-center justify-between gap-3">
          <h2 className="text-base sm:text-xl lg:text-3xl font-bold text-[#1a2b6b] leading-tight">
            Glow confidently with PathoMedix
          </h2>

          <button className="h-7 w-7 sm:h-10 sm:w-10 text-white items-center bg-[#1a2b6b] justify-center rounded-full border border-black/10 transition hover:border-[#9084e5]/20 hover:bg-[#9084e5]/5 flex flex-shrink-0">
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[200px] sm:w-[240px] lg:w-[280px] flex-shrink-0 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg sm:rounded-2xl bg-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[150px] sm:h-[180px] lg:h-[230px] w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <div className="pt-3 sm:pt-4 lg:pt-5">
                {/* Title + Price */}
                <div className="flex items-start justify-between gap-2 sm:gap-3">
                  <h3 className="text-xs sm:text-sm lg:text-lg leading-tight font-medium text-black/95">
                    {service.title}
                  </h3>
                </div>

                {/* Rating */}
                <div className="mt-1.5 sm:mt-2 lg:mt-2 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-black/70">
                  <span className="text-[#9084e5]">★</span>

                  <span className="text-xs sm:text-sm">
                    {service.rating} ({service.reviews})
                  </span>
                </div>

                {/* Subtitle */}
                <p className="mt-2 sm:mt-3 lg:mt-3 flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="text-xs sm:text-sm text-black/80">
                    Starts at{" "}
                    <span className="text-xs sm:text-base font-semibold text-black">
                      {service.price}
                    </span>
                  </span>

                  <span className="text-xs sm:text-sm text-black/35 line-through">
                    {service.originalPrice}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

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
                  Cosmetology Service
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
                href="tel:+917011733779"
                className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black transition hover:border-black/20 hover:bg-black/[0.02]"
              >
                <Phone size={18} />
                <span>Call</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917011733779"
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
    </section>
  );
}
