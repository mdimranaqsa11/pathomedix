// app/components/AboutUs.jsx
"use client";

export default function AboutUs() {
  const reasons = [
    {
      title: "Verified Doctors",
      description:
        "Connect with trusted and experienced doctors from multiple specialities for quality healthcare consultation.",
    },
    {
      title: "Diagnostic Labs",
      description:
        "Book lab tests and access certified pathology & diagnostic labs with reliable reporting services.",
    },
    {
      title: "Medical Stores",
      description:
        "Find nearby medical stores and get quick access to medicines, healthcare products, and emergency support.",
    },
    {
      title: "Emergency Support",
      description:
        "24/7 emergency consultation and direct contact support for urgent healthcare needs through PathoMedix.",
    },
  ];

  const coreBeliefs = [
    {
      title: "Our Mission",
      description:
        "To simplify, Online healthcare access by connecting patients with trusted specialist doctors, NABL labs, and verified medical stores in one platform.",
    },
    {
      title: "Our Vision",
      description:
        "Building a smarter healthcare ecosystem where every patient or person gets fast, affordable, and reliable care.",
    },
    {
      title: "Patient First",
      description:
        "Every feature and service at PathoMedix is designed to improve patient comfort, trust, and convenience.",
    },
    {
      title: "Trust & Care",
      description:
        "We believe healthcare should be transparent, affordable, accessible, and easily available for everyone.",
    },
  ];

  return (
    <section className="bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center rounded-full bg-[#7c68eb]/10 px-4 py-1.5 text-sm font-medium text-[#7c68eb]">
            About PathoMedix
          </span>

          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
            Modern Healthcare,
            <span className="text-[#7c68eb]"> Better Experience</span>
          </h1>
        </div>

        {/* Intro */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[30px] border border-[#7c68eb]/10 bg-gradient-to-br from-[#faf9ff] to-[#f4f2ff] p-6 sm:p-8 lg:p-10 shadow-sm">
            <p className="text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-black/70 text-center">
              PathoMedix is a modern healthcare platform connecting patients
              with trusted doctors, pathology labs, diagnostic centers,
              physiotherapists, and medical stores all in one place.
            </p>

            <p className="mt-5 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-black/70 text-center">
              From doctor consultations and lab tests to nearby medicine stores
              and emergency healthcare support, PathoMedix helps patients access
              reliable healthcare services quickly, safely, and conveniently.
            </p>

            <p className="mt-5 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-black/70 text-center">
              Our goal is to make healthcare easier for every family by bringing
              trusted healthcare providers together on a single digital
              platform.
            </p>
          </div>
        </div>

        {/* Why PathoMedix */}
        <div className="mt-16 sm:mt-20 lg:mt-28">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black">
              Why Choose PathoMedix?
            </h2>

            <p className="mt-3 text-sm sm:text-base text-black/60">
              Healthcare services designed for convenience, trust, and faster
              patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group rounded-[28px] border border-[#7c68eb]/15 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#7c68eb]/40 hover:shadow-xl hover:shadow-[#7c68eb]/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7c68eb]/10 text-[#7c68eb] text-xl font-medium">
                  0{index + 1}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">
                  {reason.title}
                </h3>

                <p className="text-sm sm:text-base leading-6 text-black/65">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Beliefs */}
        <div className="mt-16 sm:mt-20 lg:mt-28">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black">
              Our Core Values
            </h2>

            <p className="mt-3 text-sm sm:text-base text-black/60">
              The foundation behind every healthcare experience we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {coreBeliefs.map((belief, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-[#7c68eb]/15 bg-gradient-to-br from-white to-[#faf9ff] p-6 sm:p-8 transition-all duration-300 hover:border-[#7c68eb]/35 hover:shadow-lg"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#7c68eb] mb-4">
                  {belief.title}
                </h3>

                <p className="text-sm sm:text-base leading-7 text-black/70">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#7c68eb] via-[#8b77f1] to-[#9f91ff] py-14 sm:py-16 lg:py-20">
        {/* Glow */}
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-white leading-tight">
            Your Health Our First Priority
          </h2>

          <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/85 leading-7 max-w-2xl mx-auto">
            Discover trusted doctors, certified labs, nearby medical stores, and
            healthcare services with PathoMedix.
          </p>

          <a
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#7c68eb] transition-all duration-300 hover:scale-[1.03] shadow-2xl"
          >
            Explore Services
            <svg
              className="h-5 w-5"
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
