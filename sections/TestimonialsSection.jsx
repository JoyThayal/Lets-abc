"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Amelia Hart",
    company: "Hart & Wilde",
    review:
      "Lets abc brought an absolute level of visual precision to our global campaign. The asset they engineered didn't just look world-class—it actively doubled our digital engagement within the first quarter.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Marcus Bell",
    company: "Northline Records",
    review:
      "We needed a music video that would redefine our artist's image. Lets abc delivered a cinematic masterpiece where every frame felt intentional, helping the track break into the UK Top 40 charts.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Priya Shah",
    company: "Monarch Studios",
    review:
      "Zero friction from pitch to theatrical delivery. They bypassed all traditional production chaos, communicated with absolute clarity, and gave our commercial film a flawless premium finish.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
];

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="section-spacing reveal py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Header পার্ট */}
        <div className="max-w-2xl border-l-2 border-[#d4af37] pl-4 sm:pl-6">
          <p className="section-kicker text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
            Client Verdict
          </p>
          <h2 className="section-title mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Proof in Every Frame
          </h2>
        </div>

        {/* ৩-কলামের রেসপনসিভ গ্রিড 🧩 */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const isActive = activeTestimonial === index;

            return (
              <article
                key={testimonial.name}
                className={`testimonial-card relative flex flex-col justify-between rounded-sm p-6 sm:p-8 border transition-all duration-700 ease-in-out ${
                  isActive
                    ? "border-[#d4af37]/40 bg-zinc-900 shadow-[0_10px_30px_-15px_rgba(212,175,55,0.08)] scale-[1.02]"
                    : "border-white/5 bg-[#0a0a0a]/40"
                }`}
              >
                {/* Review Text */}
                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-8">
                  &ldquo;{testimonial.review}&rdquo;
                </p>

                {/* User Info Block */}
                <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/10 sm:h-14 sm:w-14">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white sm:text-base transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-zinc-400 sm:text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Active Indicator Top Light Line 💡 */}
                <div
                  className={`absolute top-0 left-0 h-0.5 bg-linear-to-r from-[#d4af37] to-transparent transition-all duration-700 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
