// src/sections/Portfolio.tsx
import Image from "next/image";

const portfolio = [
  {
    title: "Northern Lights",
    category: "Movie Project",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
    className: "md:row-span-2 md:col-span-1", // ২ লাইন লম্বা প্রিমিয়াম কার্ড
  },
  {
    title: "Aurum Motors",
    category: "Commercial Ad",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    className: "md:col-span-2", // ওয়াইড ব্যানার লুক 🏎️
  },
  {
    title: "After Midnight",
    category: "Music Video",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    className: "",
  },
  {
    title: "House of Form",
    category: "Commercial Ad",
    image:
      "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&w=900&q=80",
    className: "md:row-span-2", // ২ লাইন লম্বা কার্ড 🎬
  },
  {
    title: "The Last Frame",
    category: "Movie Project",
    image:
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=900&q=80",
    className: "",
  },
  {
    title: "Urban Pulse",
    category: "Documentary",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80",
    className: "",
  },
  {
    title: "Echoes of Silence",
    category: "Short Film",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80",
    className: "md:col-span-2", // বড় সিনেমাটিক ব্লক
  },
  {
    title: "Golden Hour",
    category: "Fashion Film",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80",
    className: "",
  },
  {
    title: "Shadow & Light",
    category: "Creative Visuals",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
    className: "md:col-span-3", // একদম নিচের ফুল-উইথ ফিনিশিং ব্যানার ✨
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="section-spacing reveal bg-[#0a0a0a] py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* হেডার পার্ট 🎙️ */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/5 pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37]">
              Selected Works
            </p>
            <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Stories That Shape Culture
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-zinc-400">
            Explore our curated reel of cinematic breakthroughs. From
            award-winning narrative features to high-conversion global
            campaigns, we transform abstract visions into timeless visual
            statements.
          </p>
        </div>

        {/* বেন্টো গ্রিড লেআউট (grid-flow-dense ম্যাজিক সহ) 🧩 */}
        <div className="mt-12 grid auto-rows-[280px] gap-6 grid-cols-1 md:grid-cols-3 md:grid-flow-dense">
          {portfolio.map((project) => (
            <article
              key={project.title}
              className={`portfolio-card group relative overflow-hidden rounded-md border border-white/10 bg-zinc-900 transition-all duration-500 hover:border-[#d4af37]/30 ${project.className}`}
            >
              {/* নেক্সট ইমেজ অপ্টিমাইজড ⚡ */}
              <Image
                src={project.image}
                alt={`${project.title} - ${project.category}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105 group-hover:filter group-hover:brightness-90"
              />

              {/* ওভারলে গ্রাডিয়েন্ট কালার (Tailwind v4 স্ট্যান্ডার্ড সাপোর্ট) */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

              {/* টেক্সট কন্টেন্ট */}
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-90 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                  {project.category}
                </p>
                <h3 className="font-heading mt-2 text-xl font-bold text-white sm:text-2xl drop-shadow-md">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
