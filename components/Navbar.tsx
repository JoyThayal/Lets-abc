"use client";

import { useState, useEffect } from "react";
import { MoveRight, Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP প্লাগইন রেজিস্টার করা নিশ্চিত করছি
gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // 🔮 IntersectionObserver বাদ! এখন GSAP ScrollTrigger দিয়ে নিখুঁত ট্র্যাকিং
    const triggers: ScrollTrigger[] = [];

    NAV_LINKS.forEach((link) => {
      const id = link === "Home" ? "home" : link.toLowerCase();
      const element = document.getElementById(id);

      if (element) {
        const st = ScrollTrigger.create({
          trigger: element,
          start: "top 40%", // সেকশনের ওপরের পার্ট স্ক্রিনের ৪০% এ এলেই অ্যাক্টিভ হবে
          end: "bottom 40%", // সেকশনের নিচের পার্ট স্ক্রিনের ৪০% পার হলে অ্যাক্টিভেশন চলে যাবে
          onEnter: () => setActiveSection(id),
          onEnterBack: () => setActiveSection(id),
        });
        triggers.push(st);
      }
    });

    // ক্লিনআপ ফাংশন: পেজ আনমাউন্ট হলে ScrollTrigger ডিলিট করে দেবে (মেমরি ফিক্স)
    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/70 backdrop-blur-xl transition-all duration-300">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8"
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-heading text-xl font-bold tracking-wide text-white"
        >
          Lets <span className="text-[#d4af37]">abc</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const sectionId = link === "Home" ? "home" : link.toLowerCase();
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link}
                href={`#${sectionId}`}
                className={`text-sm font-medium transition-all duration-300 relative py-1 ${
                  isActive
                    ? "text-[#d4af37] font-semibold"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {link}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#d4af37] transition-all duration-500" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden h-10 items-center gap-2 rounded-full border border-[#d4af37]/40 px-5 text-xs font-semibold text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37] hover:text-black sm:inline-flex sm:text-sm"
          >
            Let&apos;s Talk
            <MoveRight className="h-4 w-4" />
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center text-zinc-400 hover:text-white md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-x-0 top-20 z-40 flex w-full flex-col bg-[#0a0a0a]/95 border-b border-white/5 p-6 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 text-left">
          {NAV_LINKS.map((link) => {
            const sectionId = link === "Home" ? "home" : link.toLowerCase();
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link}
                href={`#${sectionId}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium border-l-2 pl-4 transition-all duration-200 ${
                  isActive
                    ? "border-[#d4af37] text-[#d4af37] font-semibold"
                    : "border-transparent text-zinc-400 hover:text-white"
                }`}
              >
                {link}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 flex h-11 items-center justify-center gap-2 rounded-full bg-[#d4af37] text-sm font-semibold text-black sm:hidden"
          >
            Let&apos;s Talk
            <MoveRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
