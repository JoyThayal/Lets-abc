// src/components/SmoothScroll.jsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // 1. Lenis ইনিশিয়ালাইজ করা হচ্ছে
    const lenis = new Lenis({
      duration: 1.5, // স্ক্রল কতটা সময় ধরে হবে (সেকেন্ডে)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // মাখনের মতো ইজিং ফাংশন
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1, // স্ক্রল স্পিড কন্ট্রোল করার জন্য (বাড়িয়ে কমিয়ে দেখতে পারো)
      touchMultiplier: 2,
      infinite: false,
    });

    // 2. GSAP ScrollTrigger-এর সাথে Lenis-কে সিঙ্ক (Sync) করা
    // এর ফলে Lenis স্ক্রল করলেও GSAP-এর স্ক্রল অ্যানিমেশন একদম নিখুঁত টাইমিংয়ে কাজ করবে 🔮
    lenis.on("scroll", () => {
      // যদি ফিউচারে GSAP ScrollTrigger ব্যবহার করো, তবে এটাকে আনকমেন্ট করতে পারো:
      // import { ScrollTrigger } from "gsap/ScrollTrigger";
      // ScrollTrigger.update();
    });

    // 3. রিকোয়েস্ট অ্যানিমেশন ফ্রেম লুপ (Request Animation Frame Loop)
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 4. কম্পোনেন্ট আনমাউন্ট হলে ক্লিনআপ করা (মেমরি লিক আটকানোর জন্য)
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
