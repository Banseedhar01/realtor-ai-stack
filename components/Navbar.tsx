"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const primaryLinks = [
  { href: "/ai-tools-for-lead-generation", label: "AI Lead Generation Tools" },
  { href: "/ai-tools-for-property-description", label: "AI Listing Copy Tools" },
  { href: "/ai-tools-for-social-media", label: "AI Social Media Tools" },
  { href: "/jasper-vs-copy-ai", label: "Top AI Comparison" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled
            ? "border-slate-200/80 bg-white/90 shadow-[0_1px_12px_rgba(15,23,42,0.06)] backdrop-blur-xl"
            : "border-transparent bg-white/60 backdrop-blur-lg"
          }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="group font-heading text-lg font-extrabold tracking-tight text-slate-950">
            <span className="gradient-text transition-opacity group-hover:opacity-80">
              AI Realtor Stack
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-primary-50 hover:text-primary-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/ai-tools-for-lead-generation"
              className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-700 hover:shadow-glow sm:inline-flex"
            >
              Start With Lead Gen
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-primary-300 hover:text-primary-700 lg:hidden"
              aria-label="Open menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-nav-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`mobile-nav-panel ${menuOpen ? "open" : ""}`}>
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <span className="font-heading text-lg font-extrabold">
            <span className="gradient-text">AI Realtor Stack</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-red-300 hover:text-red-500"
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 py-4">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-primary-50 hover:text-primary-700"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 border-t border-slate-100 pt-3">
            <Link
              href="/ai-tools-for-lead-generation"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-3 text-sm font-bold text-white transition hover:from-primary-700 hover:to-primary-800"
            >
              Start With Lead Gen →
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
