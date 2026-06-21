import Image from "next/image";

const stats = [
  { value: "100+", label: "Masterpieces Delivered" },
  { value: "50+", label: "Global Brands Shaped" },
  { value: "10+", label: "Years of Cinematic Excellence" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing reveal">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative min-h-105 overflow-hidden rounded-sm border border-white/8">
          <Image
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80"
            alt="Film crew preparing a cinematic production camera"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
        </div>
        <div>
          <p className="section-kicker">The Production Partner</p>
          <h2 className="section-title">
            Where Bold Ideas Meet Cinematic Brilliance
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300">
            At Lets abc, we don&apos;t just record video; we engineer cinematic
            assets that elevate your brand&apos;s authority. By merging BAFTA-level
            storytelling with cutting-edge production, we transform your
            concepts into unforgettable visual masterpieces that command
            attention and drive growth across the UK and beyond.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l border-[#d4af37]/50 pl-5"
              >
                <strong className="font-heading text-4xl text-white">
                  {stat.value}
                </strong>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
