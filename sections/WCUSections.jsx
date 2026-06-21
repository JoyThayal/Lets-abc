function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="m5 12 4.2 4.2L19 6.8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

const features = [
  "BAFTA-Grade Storytelling",
  "Zero-Friction Production",
  "Full-Spectrum Creative Direction",
  "Theatrical Distribution Quality",
  "Exclusive UK Talent",
];

export default function WCUSection() {
  return (
    <section className="section-spacing reveal bg-white/1.5">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="section-kicker">The Advantage</p>
          <h2 className="section-title">
            Studio Standards. None of the Friction
          </h2>
          <p className="mt-6 leading-8 text-zinc-400">
            Every masterpiece requires meticulous execution. We eliminate the
            chaos of traditional filmmaking with transparent creative direction,
            rigorous production planning, and an elite network of UK talent.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-4 border border-white/8 bg-white/3 p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#d4af37]/10 text-[#d4af37]">
                <CheckIcon />
              </span>
              <span className="font-medium text-zinc-100">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
