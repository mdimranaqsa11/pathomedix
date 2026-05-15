// app/components/Footer.jsx
"use client";

import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-white">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] -translate-x-1/2 rounded-full bg-[#9084e5]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-5 py-12 sm:py-16 lg:py-20 lg:px-8">
        {/* Top */}
        <div className="grid gap-8 sm:gap-10 lg:gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#9084e5] shadow-[0_10px_30px_rgba(144,132,229,0.35)] flex-shrink-0">
                <span className="text-base sm:text-lg font-semibold text-white">
                  P
                </span>
              </div>

              <div>
                <h2 className="text-lg sm:text-2xl font-semibold tracking-tight text-black">
                  PathoMedix
                </h2>

                <p className="text-xs sm:text-sm text-black/45">
                  Modern Healthcare Platform
                </p>
              </div>
            </div>

            <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-[1.02rem] leading-6 sm:leading-8 text-black/60">
              PathoMedix is building a smarter healthcare experience with nearby
              labs, physiotherapy, prescription scanning, home healthcare, and
              wellness services — all in one place.
            </p>

            {/* Social */}
            {/* <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3">
              <button className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-black/10 bg-white text-black/65 transition hover:border-[#9084e5]/20 hover:bg-[#9084e5] hover:text-white">
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>

              <button className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-black/10 bg-white text-black/65 transition hover:border-[#9084e5]/20 hover:bg-[#9084e5] hover:text-white">
                <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>

              <button className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-black/10 bg-white text-black/65 transition hover:border-[#9084e5]/20 hover:bg-[#9084e5] hover:text-white">
                <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm sm:text-lg font-semibold text-black">
              Services
            </h3>

            <div className="mt-4 sm:mt-6 flex flex-col gap-2.5 sm:gap-4">
              <Link
                href="/services"
                className="text-xs sm:text-sm text-black/60 transition hover:text-[#9084e5]"
              >
                Diagnostic Labs
              </Link>

              <Link
                href="/services"
                className="text-xs sm:text-sm text-black/60 transition hover:text-[#9084e5]"
              >
                Physiotherapy
              </Link>

              <Link
                href="/services"
                className="text-xs sm:text-sm text-black/60 transition hover:text-[#9084e5]"
              >
                Prescription Scan
              </Link>

              <Link
                href="/services"
                className="text-xs sm:text-sm text-black/60 transition hover:text-[#9084e5]"
              >
                Home Healthcare
              </Link>

              <Link
                href="/services"
                className="text-xs sm:text-sm text-black/60 transition hover:text-[#9084e5]"
              >
                Cosmetology
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm sm:text-lg font-semibold text-black">
              Company
            </h3>

            <div className="mt-4 sm:mt-6 flex flex-col gap-2.5 sm:gap-4">
              <Link
                href="/about"
                className="text-xs sm:text-sm text-black/60 transition hover:text-[#9084e5]"
              >
                About Us
              </Link>

              <Link
                href="#"
                className="text-xs sm:text-sm text-black/60 transition hover:text-[#9084e5]"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                className="text-xs sm:text-sm text-black/60 transition hover:text-[#9084e5]"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/contact"
                className="text-xs sm:text-sm text-black/60 transition hover:text-[#9084e5]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm sm:text-lg font-semibold text-black">
              Contact
            </h3>

            <div className="mt-4 sm:mt-8 flex items-center gap-2 sm:gap-3">
              {/* Instagram */}
              <a
                href="#"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-black/10 bg-white transition hover:border-[#9084e5]/20 hover:bg-[#9084e5] group flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-black/70 transition group-hover:text-white"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.75 1a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM12 6.5A5.5 5.5 0 1 0 17.5 12 5.506 5.506 0 0 0 12 6.5Zm0 1.5A4 4 0 1 1 8 12a4.005 4.005 0 0 1 4-4Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-black/10 bg-white transition hover:border-[#9084e5]/20 hover:bg-[#9084e5] group flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-black/70 transition group-hover:text-white"
                >
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5H17V4.9c-.3 0-1.3-.1-2.5-.1-2.4 0-4 1.4-4 4.1V11H8v3h2.5v8h3Z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-black/10 bg-white transition hover:border-[#9084e5]/20 hover:bg-[#9084e5] group flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-black/70 transition group-hover:text-white"
                >
                  <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3.2l7.3-8.4L1 2h6.3l4.4 5.8L18.9 2Zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-black/10 bg-white transition hover:border-[#9084e5]/20 hover:bg-[#9084e5] group flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-black/70 transition group-hover:text-white"
                >
                  <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM3 9h4v12H3Zm7 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-14 lg:mt-16 flex flex-col items-center justify-between gap-3 sm:gap-4 border-t border-black/5 pt-6 sm:pt-8 text-xs sm:text-sm text-black/45 lg:flex-row">
          <p>© 2026 PathoMedix. All rights reserved.</p>

          <p>Designed for modern healthcare experiences.</p>
        </div>
      </div>
    </footer>
  );
}
