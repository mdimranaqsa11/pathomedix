"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const banners = [
  {
    id: 1,
    image: "/images/surePath.jpeg",
  },
  {
    id: 2,
    image: "/images/banr2P.jpeg",
  },
  {
    id: 3,
    image: "/images/aqsaD.jpeg",
  },
  {
    id: 4,
    image: "/images/phy3.jpeg",
  },
];

export default function MobileBannerCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = (index) => {
    if (index === current || isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Auto-play har 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="block sm:hidden w-full">
      <style>{`
        .fade-transition {
          transition: opacity 500ms ease-in-out;
        }
      `}</style>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden rounded-2xl aspect-video border border-[#9084e5]">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full fade-transition ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={banner.image}
              alt={`Banner ${banner.id}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="mt-4 flex justify-center gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-[#9084e5] w-6"
                : "bg-[#9084e5]/30 w-2 hover:bg-[#9084e5]/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
