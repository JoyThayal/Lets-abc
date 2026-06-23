// src/animations/LandingPage.tsx
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LandingPage({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // --- ১. হিরো ও স্ক্রল রিভিল অ্যানিমেশন (আগের মতোই থাকবে) ---
      gsap.from(".hero-kicker, .hero-title, .hero-copy, .hero-actions", {
        y: 38,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
      });

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

      // 🔮 ২. আল্ট্রা-স্ট্যাবল সিনেমাটিক স্পটলাইট (গ্লিচ-ফ্রি ভার্সন) 🔦
      const spotlight = spotlightRef.current;

      if (spotlight) {
        // রিয়েল-টাইম এবং ফলোয়ার কোঅর্ডিনেট
        const mouse = {
          x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
          y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
        };
        const glowPos = { x: mouse.x, y: mouse.y };

        // ⚡ ব্রাউজারের ডিফল্ট লিসেনারের বদলে GSAP-এর নিজস্ব মাউস ট্র্যাকার ব্যবহার করলাম (যাতে স্ক্রোল গ্লিচ না হয়)
        const onMouseMove = (e: MouseEvent) => {
          mouse.x = e.clientX;
          mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", onMouseMove);

        // Ticker রান করাচ্ছি
        gsap.ticker.add(() => {
          // ফলো স্পিড একটু টিউন করে ০.১২ করলাম, ল্যাগ ছাড়া অস্থির স্মুথ ভাইব দেবে
          glowPos.x += (mouse.x - glowPos.x) * 0.12;
          glowPos.y += (mouse.y - glowPos.y) * 0.12;

          // 🔮 force3D: true এবং xPercent/yPercent দিয়ে ব্রাউজারের সাব-পিক্সেল রেন্ডারিং গ্লিচ আটকালাম
          gsap.set(spotlight, {
            x: glowPos.x,
            y: glowPos.y,
            xPercent: -50, // সিএসএস ছাড়াই পারফেক্ট সেন্টার অ্যালাইনমেন্ট
            yPercent: -50,
            force3D: true, // হার্ডওয়্যার জিপিইউ বুস্ট অন রাখলাম
          });
        });

        // ৩. ইন্টারেক্টিভ হোভার ইফেক্টস ✨
        const interactiveElements = document.querySelectorAll(
          "a, button, .portfolio-card",
        );

        interactiveElements.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(spotlight, {
              scale: 0.5,
              background:
                "radial-gradient(circle, rgba(212,175,55,0.45) 0%, rgba(212,175,55,0.1) 40%, transparent 70%)",
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto",
            });
          });

          el.addEventListener("mouseleave", () => {
            gsap.to(spotlight, {
              scale: 1,
              background:
                "radial-gradient(circle, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0.05) 40%, transparent 70%)",
              duration: 0.4,
              ease: "power2.out",
            });
          });
        });
      }
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className="min-h-screen overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* 🔮 অপ্টিমাইজড স্পটলাইট গ্লো (লেআউট শিফট এবং গ্লিচ প্রুফ) */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed left-0 top-0 z-50 h-62.5 w-62.5 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(212,175,55,0.05)_40%,transparent_70%)] hidden md:block select-none"
        style={{ transform: "translate3d(0, 0, 0)" }} // ব্রাউজারকে বাধ্য করবে ৩ডি লেয়ারে রেন্ডার করতে
      />

      {children}
    </div>
  );
}
