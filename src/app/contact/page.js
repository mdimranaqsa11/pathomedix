// app/components/Contact.jsx
"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert("Thank you for your message. We'll get back to you soon!");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8 py-12 sm:py-16 lg:py-20 text-center border-b border-black/5">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-black/70 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-6 sm:mb-8">
              Contact Information
            </h2>

            <div className="space-y-5 sm:space-y-6">
              {/* Phone */}
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#9084e5]/10">
                    <Phone
                      size={18}
                      className="sm:w-[20px] sm:h-[20px] text-[#9084e5]"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-black mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+917011733779"
                    className="text-xs sm:text-sm text-black/70 hover:text-[#9084e5] transition"
                  >
                    +91 7011 733779
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#9084e5]/10">
                    <Mail
                      size={18}
                      className="sm:w-[20px] sm:h-[20px] text-[#9084e5]"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-black mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:support@carepathomedix@gmail.com"
                    className="text-xs sm:text-sm text-black/70 hover:text-[#9084e5] transition"
                  >
                    carepathomedix@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#9084e5]/10">
                    <MapPin
                      size={18}
                      className="sm:w-[20px] sm:h-[20px] text-[#9084e5]"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-black mb-1">
                    Location
                  </h3>
                  <p className="text-xs sm:text-sm text-black/70">
                    New Delhi, India
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#9084e5]/10">
                    <Clock
                      size={18}
                      className="sm:w-[20px] sm:h-[20px] text-[#9084e5]"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-black mb-1">
                    Hours
                  </h3>
                  <p className="text-xs sm:text-sm text-black/70">
                    Mon - Sun: 8:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 sm:mt-10">
              <h3 className="text-sm sm:text-base font-semibold text-black mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white text-black/70 transition hover:border-[#9084e5]/20 hover:bg-[#9084e5] hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white text-black/70 transition hover:border-[#9084e5]/20 hover:bg-[#9084e5] hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white text-black/70 transition hover:border-[#9084e5]/20 hover:bg-[#9084e5] hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-6 sm:mb-8">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-black mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 sm:py-3 text-xs sm:text-sm outline-none placeholder:text-black/35 focus:border-[#9084e5]/50 focus:ring-2 focus:ring-[#9084e5]/20 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-black mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 sm:py-3 text-xs sm:text-sm outline-none placeholder:text-black/35 focus:border-[#9084e5]/50 focus:ring-2 focus:ring-[#9084e5]/20 transition"
                    required
                  />
                </div>
              </div>

              {/* Phone & Subject Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-black mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 (999) 999-9999"
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 sm:py-3 text-xs sm:text-sm outline-none placeholder:text-black/35 focus:border-[#9084e5]/50 focus:ring-2 focus:ring-[#9084e5]/20 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-black mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 sm:py-3 text-xs sm:text-sm outline-none placeholder:text-black/35 focus:border-[#9084e5]/50 focus:ring-2 focus:ring-[#9084e5]/20 transition"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows="5"
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 sm:py-3 text-xs sm:text-sm outline-none placeholder:text-black/35 focus:border-[#9084e5]/50 focus:ring-2 focus:ring-[#9084e5]/20 transition resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto rounded-lg bg-[#9084e5] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition hover:scale-[1.02] shadow-[0_10px_25px_rgba(144,132,229,0.35)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#f8f8fc] py-12 sm:py-16 lg:py-20 px-3 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-10 sm:mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 sm:space-y-5">
            <div className="bg-white rounded-lg p-5 sm:p-6 border border-black/5">
              <h3 className="text-sm sm:text-base font-semibold text-black mb-2">
                What are your response times?
              </h3>
              <p className="text-xs sm:text-sm text-black/70">
                We typically respond to inquiries within 24 business hours.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 sm:p-6 border border-black/5">
              <h3 className="text-sm sm:text-base font-semibold text-black mb-2">
                Do you offer 24/7 customer support?
              </h3>
              <p className="text-xs sm:text-sm text-black/70">
                Our support team is available Monday to Friday, 9 AM to 6 PM.
                For emergencies, please call our emergency line.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 sm:p-6 border border-black/5">
              <h3 className="text-sm sm:text-base font-semibold text-black mb-2">
                How can I partner with PathoMedix?
              </h3>
              <p className="text-xs sm:text-sm text-black/70">
                For partnership inquiries, please contact our business
                development team at partnerships@pathomedix.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
