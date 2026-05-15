// app/components/Career.jsx
"use client";

import { MapPin, Briefcase, Clock } from "lucide-react";

const jobs = [
  {
    title: "Product Manager",
    department: "Product",
    location: "Delhi, India",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Lead product strategy and vision for our healthcare platform.",
  },
  {
    title: "Healthcare Specialist",
    department: "Operations",
    location: "Multiple Cities",
    type: "Full-time",
    experience: "1-3 years",
    description:
      "Manage healthcare partnerships and ensure quality service delivery.",
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Delhi, India",
    type: "Full-time",
    experience: "2-3 years",
    description:
      "Drive growth and awareness for PathoMedix healthcare platform.",
  },
  {
    title: "Customer Support Lead",
    department: "Support",
    location: "Remote",
    type: "Full-time",
    experience: "1-2 years",
    description:
      "Lead customer support team and ensure excellent service quality.",
  },
  {
    title: "Data Analyst",
    department: "Analytics",
    location: "Delhi, India",
    type: "Full-time",
    experience: "2-3 years",
    description: "Analyze healthcare data and drive data-informed decisions.",
  },
];

export default function Career() {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8 py-12 sm:py-16 lg:py-24 border-b border-black/5">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Join Our Team
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-black/70 max-w-2xl mx-auto leading-6 sm:leading-7 lg:leading-8">
            We're building the future of healthcare. If you're passionate about
            making a difference, we'd love to hear from you.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#9084e5] mb-1 sm:mb-2">
              50+
            </h3>
            <p className="text-xs sm:text-sm text-black/60">Team Members</p>
          </div>
          <div className="text-center border-l border-r border-black/5">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#9084e5] mb-1 sm:mb-2">
              10+
            </h3>
            <p className="text-xs sm:text-sm text-black/60">Cities</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#9084e5] mb-1 sm:mb-2">
              6
            </h3>
            <p className="text-xs sm:text-sm text-black/60">Open Positions</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8 py-12 sm:py-16 lg:py-20 border-b border-black/5">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-10 sm:mb-12 lg:mb-16">
          Why Join PathoMedix?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          <div className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-[#9084e5]/5 border border-[#9084e5]/20">
            <h3 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
              Impact-Driven Work
            </h3>
            <p className="text-xs sm:text-sm text-black/70 leading-6">
              Make a real difference in healthcare accessibility for millions.
            </p>
          </div>

          <div className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-[#9084e5]/5 border border-[#9084e5]/20">
            <h3 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
              Growth Opportunities
            </h3>
            <p className="text-xs sm:text-sm text-black/70 leading-6">
              Develop your skills in a dynamic and innovative environment.
            </p>
          </div>

          <div className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-[#9084e5]/5 border border-[#9084e5]/20">
            <h3 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
              Competitive Benefits
            </h3>
            <p className="text-xs sm:text-sm text-black/70 leading-6">
              Attractive salary, health insurance, and flexible work
              arrangements.
            </p>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-10 sm:mb-12 lg:mb-16">
          Open Positions
        </h2>

        <div className="space-y-3 sm:space-y-4 lg:space-y-5">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-black/5 hover:border-[#9084e5]/30 bg-white hover:bg-[#9084e5]/2 transition cursor-pointer group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-2 sm:mb-3 group-hover:text-[#9084e5] transition">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-black/60 mb-3 sm:mb-4 font-medium">
                    {job.department}
                  </p>

                  <p className="text-xs sm:text-sm text-black/70 mb-4 sm:mb-0">
                    {job.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3 text-right">
                  <div className="flex items-center justify-end gap-1.5 sm:gap-2 text-xs sm:text-sm text-black/60">
                    <MapPin size={14} className="sm:w-[16px] sm:h-[16px]" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center justify-end gap-1.5 sm:gap-2 text-xs sm:text-sm text-black/60">
                    <Briefcase size={14} className="sm:w-[16px] sm:h-[16px]" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center justify-end gap-1.5 sm:gap-2 text-xs sm:text-sm text-black/60">
                    <Clock size={14} className="sm:w-[16px] sm:h-[16px]" />
                    <span>{job.experience}</span>
                  </div>
                </div>
              </div>

              <button className="mt-4 sm:mt-5 w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg bg-[#9084e5]/10 text-[#9084e5] font-semibold text-xs sm:text-sm hover:bg-[#9084e5] hover:text-white transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#9084e5]/10 to-[#9084e5]/5 py-12 sm:py-16 lg:py-20 px-3 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">
            Don't see your role?
          </h2>
          <p className="text-sm sm:text-base text-black/70 mb-6 sm:mb-8">
            Send us your resume and let's explore opportunities together.
          </p>
          <a
            href="mailto:careers@pathomedix.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#9084e5] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:scale-[1.02] shadow-[0_10px_30px_rgba(144,132,229,0.35)]"
          >
            Send Resume
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
