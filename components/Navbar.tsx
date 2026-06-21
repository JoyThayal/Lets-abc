// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { MoveRight } from "lucide-react";

// স্ট্যাটিক ডেটা কম্পোনেন্টের বাইরে রাখলাম (যেমনটা আমরা আগে আলোচনা করেছিলাম 🧠)
const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Contact"];

export default function Navbar() {
  // বর্তমানে কোন সেকশনটি স্ক্রিনে আছে তা ট্র্যাক করার স্টেট
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // স্ক্রিনে কোন সেকশন কতখানি দেখা যাচ্ছে তা পর্যবেক্ষণ করার জন্য অবজারভার সেটআপ
    const observerOptions = {
      root: null, // পুরো ভিউপোর্ট ধরে কাজ করবে
      rootMargin: "-40% 0px -50% 0px", // স্ক্রিনের মাঝবরাবর সেকশন এলে তবেই অ্যাক্টিভ হবে
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // সেকশনটি যদি স্ক্রিনের নির্দিষ্ট অংশে চলে আসে
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // আমাদের NAV_LINKS অনুযায়ী প্রতিটা সেকশনের আইডি ধরে ধরে অবজারভ করা শুরু করা
    NAV_LINKS.forEach((link) => {
      const id = link === "Home" ? "home" : link.toLowerCase();
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // ক্লিনআপ ফাংশন: মেমরি লিক আটকানোর জন্য
    return () => {
      NAV_LINKS.forEach((link) => {
        const id = link === "Home" ? "home" : link.toLowerCase();
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/70 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#home" className="font-heading text-xl font-bold tracking-wide text-white">
          Lets <span className="text-[#d4af37]">abc</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const sectionId = link === "Home" ? "home" : link.toLowerCase();
            const isActive = activeSection === sectionId; // মিলিয়ে দেখছি এটা অ্যাক্টিভ কিনা

            return (
              <a
                key={link}
                href={`#${sectionId}`}
                // 🔮 ডাইনামিক ক্লাস: অ্যাক্টিভ হলে গোল্ডেন কালার হবে, না হলে হালকা গ্রে
                className={`text-sm font-medium transition duration-300 ${
                  isActive 
                    ? "text-[#d4af37] font-semibold scale-105" 
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {link}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-[#d4af37]/40 px-5 text-sm font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
        >
          Let&apos;s Talk
          <MoveRight className="w-4 h-4" />
        </a>
      </nav>
    </header>
  );
}