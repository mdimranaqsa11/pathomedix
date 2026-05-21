"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Samir Sharma",
    doctor: "Dr. Pravin Gupta",
    review:
      "Very smooth consultation experience. Doctor explained everything clearly and guided me properly.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "Monika Mathur",
    doctor: "Dr. Priyanka Jha",
    review:
      "Booked appointment through PathoMedix and consultation was really comfortable and professional.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "Mr. Sarim",
    doctor: "Dr. Asif Hussain",
    review:
      "My shoulder pain recovery sessions were excellent. Highly recommended physiotherapy support.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
  },

  {
    id: 4,
    name: "Zoya Fatima",
    doctor: "Dr. Anu Aggarwal",
    review:
      "Doctor listened carefully and treatment worked really well for my breathing problem.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
  },

  {
    id: 5,
    name: "Rehan Ali",
    doctor: "Dr. Almas Khan",
    review:
      "Very professional surgical consultation and the staff support was also very helpful.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=400&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#9084e5]">
            Patient Reviews
          </p>

          <p className="mt-5 text-base leading-7 text-black/60">
            Real consultation experiences shared by patients after booking
            doctors and healthcare services through PathoMedix.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 flex gap-5 overflow-x-auto pb-2 hide-scrollbar">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="min-w-[320px] max-w-[320px] flex-shrink-0 rounded-[2rem] border border-black/5 bg-[#fafafe] p-6 sm:min-w-[360px] sm:max-w-[360px]"
            >
              {/* Top */}
              {/* Top */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#9084e5] text-lg font-semibold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-base font-semibold text-black">
                    {item.name}
                  </h3>

                  <p className="text-sm text-black/50">
                    Consulted with {item.doctor}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-1">
                {[...Array(item.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className="fill-[#9084e5] text-[#9084e5]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 text-[15px] leading-7 text-black/70">
                “{item.review}”
              </p>

              {/* Bottom */}
              <div className="mt-6 flex items-center justify-between">
                <span className="rounded-full bg-[#9084e5]/10 px-3 py-1 text-xs font-medium text-[#9084e5]">
                  Verified Patient
                </span>

                <span className="text-sm text-black/40">PathoMedix</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
