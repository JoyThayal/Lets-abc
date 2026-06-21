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
    <section className="section-spacing reveal">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-kicker">Client Verdict</p>
          <h2 className="section-title">Proof in Every Frame</h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`testimonial-card transition duration-700 ${
                activeTestimonial === index
                  ? "border-[#d4af37]/50 bg-[#d4af37]/6"
                  : ""
              }`}
            >
              <p className="text-lg leading-8 text-zinc-200">
                &ldquo;{testimonial.review}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-zinc-400">{testimonial.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
