// app/components/ExtraAds.jsx
"use client";

export default function ExtraAds() {
  return (
    <section className="bg-white pt-8 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-6 lg:gap-8 px-3 sm:px-5 lg:px-8 lg:grid-cols-2">
        {/* Left Banner */}
        <div className="group overflow-hidden rounded-lg sm:rounded-2xl lg:rounded-[2.5rem] bg-[#f6f4ff] shadow-[0_15px_40px_rgba(0,0,0,0.04)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.05)] lg:shadow-[0_25px_80px_rgba(0,0,0,0.06)]">
          <img
            src="/images/store.png"
            alt="Medical Store"
            className="h-[200px] sm:h-[300px] lg:h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </div>

        {/* Right Banner */}
        <div className="group overflow-hidden rounded-lg sm:rounded-2xl lg:rounded-[2.5rem] bg-[#f6f4ff] shadow-[0_15px_40px_rgba(0,0,0,0.04)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.05)] lg:shadow-[0_25px_80px_rgba(0,0,0,0.06)]">
          <img
            src="/images/lab.png"
            alt="Diagnostic Lab"
            className="h-[200px] sm:h-[300px] lg:h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </section>
  );
}
