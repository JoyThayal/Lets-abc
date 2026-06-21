// src/animations/LandingPage.tsx
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 💡 এখানে { children } পাস করলাম যাতে অন্য সেকশনগুলো এর ভেতরে থাকতে পারে
export function LandingPage({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ১. হিরো লোড অ্যানিমেশন
      gsap.from(".hero-kicker, .hero-title, .hero-copy, .hero-actions", {
        y: 38,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
      });

      // ২. স্ক্রল রিভিল অ্যানিমেশন
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((section) => {
        gsap.from(section, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
          },
        });
      });

      // ৩. হিরো প্যারালাক্স
      gsap.to(".hero-media", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: rootRef }, // ⚡ এখন এই স্কোপের ভেতর সব চিলড্রেন সেকশন চলে এসেছে!
  );

  return (
    <div
      ref={rootRef}
      className="min-h-screen overflow-hidden bg-[#0a0a0a] text-white"
    >
      {children} {/* 👈 এখানে সব সেকশন রেন্ডার হবে */}
    </div>
  );
}
