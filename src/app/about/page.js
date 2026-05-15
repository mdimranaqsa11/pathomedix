// app/components/AboutUs.jsx
"use client";

export default function AboutUs() {
  const reasons = [
    {
      title: "Accessibility",
      description:
        "Healthcare services brought directly to your doorstep for maximum convenience and comfort.",
    },
    {
      title: "Reliability",
      description:
        "Trusted network of certified professionals and verified healthcare facilities across the region.",
    },
    {
      title: "Quality Care",
      description:
        "Rigorous quality standards ensuring every service meets international healthcare protocols.",
    },
    {
      title: "Affordability",
      description:
        "Transparent pricing with no hidden charges. Quality healthcare at fair and competitive rates.",
    },
  ];

  const coreBeliefs = [
    {
      title: "Mission",
      description:
        "To make healthcare accessible, affordable, and convenient for everyone.",
    },
    {
      title: "Vision",
      description:
        "Revolutionizing healthcare delivery through modern technology and patient-centric services.",
    },
    {
      title: "Philosophy",
      description:
        "Healthcare is a right, not a privilege. We believe in empowering individuals with easy access.",
    },
    {
      title: "Values",
      description:
        "Trust, transparency, excellence, and compassion guide every decision we make.",
    },
  ];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black mb-8 sm:mb-12">
          About Us
        </h1>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <p className="text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-black/70 text-center">
            PathoMedix reimagines healthcare delivery by connecting patients
            with trusted diagnostic labs, physiotherapy centers, medical stores,
            prescription scanning services, and home healthcare
            professionals—all in one seamless platform. We believe that quality
            healthcare should be accessible, affordable, and convenient for
            everyone.
          </p>

          <p className="text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-black/70 text-center mt-4 sm:mt-6">
            In today's fast-paced world, why spend hours finding the right
            healthcare services when you can discover everything you need in one
            place? PathoMedix is committed to making healthcare accessible at
            your convenience.
          </p>
        </div>

        {/* Why PathoMedix Section */}
        <div className="mb-16 sm:mb-20 lg:mb-28">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black mb-10 sm:mb-12 lg:mb-16">
            Why PathoMedix?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="border-2 border-[#9084e5]/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 bg-[#9084e5]/5 hover:border-[#9084e5]/40 transition"
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-3 sm:mb-4">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base leading-6 text-black/70">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Beliefs Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black mb-10 sm:mb-12 lg:mb-16">
            Our Core Beliefs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {coreBeliefs.map((belief, index) => (
              <div
                key={index}
                className="border-2 border-[#9084e5]/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 bg-white hover:border-[#9084e5]/40 transition"
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-3 sm:mb-4">
                  {belief.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base leading-6 text-black/70">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#9084e5]/10 to-[#9084e5]/5 py-12 sm:py-16 lg:py-20 px-3 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
            Ready to experience modern healthcare?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-black/70 mb-8 sm:mb-10">
            Join thousands of patients who trust PathoMedix for their healthcare
            needs.
          </p>
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-[#9084e5] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:scale-[1.02] shadow-[0_10px_30px_rgba(144,132,229,0.35)]"
          >
            Explore Services
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
