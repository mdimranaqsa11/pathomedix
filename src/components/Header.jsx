// app/components/Header.jsx
"use client";

import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/career", label: "Career" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-3 sm:px-5 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
        >
          <div className="h-9 w-9 sm:h-11 sm:w-11 flex-shrink-0">
            <img src="/images/logo.png" alt="logo" />
          </div>

          <div className="flex flex-col leading-none min-w-0">
            <span className="text-sm sm:text-[1.15rem] font-semibold tracking-tight text-black truncate">
              PathoMedix
            </span>
            <span className="text-[0.65rem] sm:text-xs text-black/45 truncate">
              Medical Search Engine
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 sm:gap-8 md:gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs sm:text-sm font-medium text-black/70 transition hover:text-black whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-2 sm:gap-3 md:flex flex-shrink-0">
          {/* Call Button */}
          <a
            href="tel:+917011733779"
            className="flex h-10 sm:h-11 items-center gap-1.5 sm:gap-2 rounded-full border border-black/10 bg-white px-3 sm:px-5 text-xs sm:text-sm font-medium text-black transition hover:border-black/20 hover:bg-black/[0.02] whitespace-nowrap flex-shrink-0"
          >
            <Phone size={14} className="sm:w-[16px] sm:h-[16px]" />
            <span className="hidden sm:inline">Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917011733779"
            target="_blank"
            className="flex h-10 sm:h-11 items-center gap-1.5 sm:gap-2 rounded-full bg-[#9084e5] px-3 sm:px-5 text-xs sm:text-sm font-medium text-white shadow-[0_10px_25px_rgba(144,132,229,0.35)] transition hover:scale-[1.02] whitespace-nowrap flex-shrink-0"
          >
            <MessageCircle size={14} className="sm:w-[16px] sm:h-[16px]" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-black/10 md:hidden flex-shrink-0 transition hover:bg-black/5"
        >
          {isMenuOpen ? (
            <X size={20} className="text-black" />
          ) : (
            <Menu size={20} className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur-sm">
          <nav className="mx-auto max-w-7xl px-3 sm:px-5 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-black/70 transition hover:text-black hover:bg-black/5 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Action Buttons */}
            <div className="border-t border-black/5 mt-2 pt-3 flex flex-col gap-2">
              {/* Call Button */}
              <a
                href="tel:+917011733779"
                className="flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black transition hover:border-black/20 hover:bg-black/[0.02]"
              >
                <Phone size={16} />
                Call Now
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/7011733779"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#9084e5] px-4 py-3 text-sm font-medium text-white shadow-[0_10px_25px_rgba(144,132,229,0.35)] transition hover:scale-[1.02]"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
