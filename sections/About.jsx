import Image from "next/image";

const stats = [
  { value: "100+", label: "Masterpieces Delivered" },
  { value: "50+", label: "Global Brands Shaped" },
  { value: "10+", label: "Years of Cinematic Excellence" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing reveal py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        {/* Left Side: Cinematic Image */}
        <div className="relative h-75 w-full overflow-hidden rounded-sm border border-white/10 sm:h-100 lg:h-125">
          <Image
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80"
            alt="Film crew preparing a cinematic production camera"
            fill
            sizes="(min-width: 1024px) 45vw, 92vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
          {/* Gradients Overlay updated to universally supported Tailwind class */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Right Side: Content & Stats */}
        <div className="flex flex-col justify-center">
          <p className="section-kicker text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
            The Production Partner
          </p>
          <h2 className="section-title mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.15]">
            Where Bold Ideas Meet Cinematic Brilliance
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-8">
            At Lets abc, we don&apos;t just record video; we engineer cinematic
            assets that elevate your brand&apos;s authority. By merging
            BAFTA-level storytelling with cutting-edge production, we transform
            your concepts into unforgettable visual masterpieces that command
            attention and drive growth across the UK and beyond.
          </p>

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 xs:grid-cols-2 sm:grid-cols-3 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-[#d4af37]/70 pl-4 sm:pl-5"
              >
                <strong className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </strong>
                <p className="mt-1 text-xs leading-5 text-zinc-400 sm:text-sm">
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
