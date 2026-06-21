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
    <footer className="border-t border-white/8 px-5 py-12 sm:px-8 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* লোগো ও ডেসক্রিপশন */}
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

        {/* নেভিগেশন লিংকস */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link}
              href={link === "Home" ? "#home" : `#${link.toLowerCase()}`}
              className="transition hover:text-[#d4af37]"
            >
              {link}
            </a>
          ))}
        </div>

        {/* মিনিমাল টেক্সট সোশ্যাল আইকনস 💎 */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/8 bg-white/3 text-[11px] font-bold tracking-wider text-zinc-400 transition duration-300 hover:border-[#d4af37]/40 hover:bg-[#d4af37]/5 hover:text-[#d4af37]"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
