// app/components/VideoShowcase.jsx
"use client";

import { useEffect, useRef } from "react";

export default function VideoShowcase() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.2; // video speed
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9084e5]/10 blur-3xl" />

      <div className="relative mx-auto flex justify-center px-4 sm:px-5 lg:px-8">
        <div className="w-full max-w-3xl overflow-hidden rounded-2xl sm:rounded-[2.5rem] border border-[#9084e5] sm:border-2 bg-[#9084e5] shadow-[0_20px_60px_rgba(144,132,229,0.12)] sm:shadow-[0_40px_120px_rgba(144,132,229,0.18)]">
          <video
            ref={videoRef}
            className="aspect-video h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/pathomedix-demo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
