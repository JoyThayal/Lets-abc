export const services = [
  {
    title: "Feature Film Production",
    description:
      "Award-worthy filmmaking that captures profound human experiences. From script development to theatrical-grade distribution, we translate your narrative into culturally significant cinema.",
  },
  {
    title: "Commercial Advertising",
    description:
      "High-conversion, premium brand campaigns designed to dominate digital and broadcast landscapes. We don’t just create ads; we build absolute brand authority.",
  },
  {
    title: "Music Video Production",
    description:
      "Visually arresting, concept-driven music videos that elevate independent artists and global icons alike. We turn tracks into defining cultural moments.",
  },
  {
    title: "Luxury Brand Documentaries",
    description:
      "High-end, episodic brand heritage films that showcase your legacy and craftsmanship. Perfect for capturing ultra-high-net-worth audiences and building timeless trust.",
  },
  {
    title: "High-End Post-Production",
    description:
      "Precision color grading, cinematic sound design, and invisible VFX that transform raw footage into a polished, breathtaking theatrical masterpiece.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-spacing reveal bg-zinc-900/30 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Header Part */}
        <div className="max-w-2xl border-l-2 border-[#d4af37] pl-4 sm:pl-6">
          <p className="section-kicker text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
            Our Expertise
          </p>
          <h2 className="section-title mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Engineered for Cinematic Mastery
          </h2>
        </div>

        {/* Services Bento-style Responsive Grid 🧩 */}
        <div className="mt-14 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            // ৫ নম্বর কার্ডটাকে বড় স্ক্রিনে একটু ওয়াইড (col-span) করে দিচ্ছি যাতে গ্রিডটা ব্যালেন্স দেখায়
            const isLastItem = index === services.length - 1;

            return (
              <article
                key={service.title}
                className={`luxury-card group relative flex flex-col justify-between overflow-hidden rounded-sm border border-white/5 bg-[#0a0a0a]/60 p-6 sm:p-8 transition-all duration-500 hover:border-[#d4af37]/30 hover:bg-[#0a0a0a]/90 hover:shadow-[0_10px_30px_-15px_rgba(212,175,55,0.1)] ${
                  isLastItem ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Serial Number with subtle scale animation on hover */}
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#d4af37]/70 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#d4af37]">
                    0{index + 1}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading mt-8 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#d4af37] sm:text-2xl">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300 sm:text-base sm:leading-7">
                    {service.description}
                  </p>
                </div>

                {/* Decorative Bottom Line Border on Hover 🔮 */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-[#d4af37] to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
