// src/components/Footer.tsx
"use client";

const navLinks = ["Home", "About", "Services", "Portfolio", "Contact"];

const socialLinks = [
  { text: "IN", href: "https://instagram.com", label: "Instagram" },
  { text: "VI", href: "https://vimeo.com", label: "Vimeo" },
  { text: "LI", href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/15 px-4 py-12 sm:px-8 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
        {/* লোগো ও ডেসক্রিপশন (মোবাইলে টেক্সট সেন্টার, বড় স্ক্রিনে লেফটে) */}
        <div className="flex flex-col gap-2">
          <a
            href="#home"
            className="font-heading text-2xl font-bold text-white transition hover:opacity-90"
          >
            Lets <span className="text-[#d4af37]">abc</span>
          </a>
          <p className="text-sm text-zinc-400">
            Cinematic excellence from London to the world.
          </p>
          <p className="text-xs text-zinc-500 mt-1">
            © 2026 Lets abc. All Rights Reserved.
          </p>
        </div>

        {/* নেভিগেশন লিংকস (মোবাইলে সেন্টারে ফ্লুইড জাস্ট-ইন-কেস) */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-zinc-400 md:justify-start">
          {navLinks.map((link) => (
            <a
              key={link}
              href={link === "Home" ? "#home" : `#${link.toLowerCase()}`}
              className="transition-colors duration-300 hover:text-[#d4af37]"
            >
              {link}
            </a>
          ))}
        </div>

        {/* মিনিমাল টেক্সট সোশ্যাল আইকনস (মোবাইলে সেন্টারে থাকবে) 💎 */}
        <div className="flex items-center justify-center gap-4 md:justify-end">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/5 bg-white/3 text-[10px] font-bold tracking-wider text-zinc-400 transition-all duration-300 hover:border-[#d4af37]/40 hover:bg-[#d4af37]/5 hover:text-[#d4af37] sm:h-10 sm:w-10 sm:text-[11px]"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
