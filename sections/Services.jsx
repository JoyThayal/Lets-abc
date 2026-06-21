const services = [
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
    <section id="services" className="section-spacing reveal bg-white/1.5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-kicker">Our Expertise</p>
          <h2 className="section-title">Engineered for Cinematic Mastery</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="luxury-card group">
              <span className="text-sm font-semibold text-[#d4af37]">
                0{index + 1}
              </span>
              <h3 className="mt-12 font-heading text-2xl font-bold">
                {service.title}
              </h3>
              <p className="mt-5 leading-7 text-zinc-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
