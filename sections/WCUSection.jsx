
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
    <section
      id="why-choose-us"
      className="section-spacing reveal bg-zinc-900/30 py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        {/* Left Side: Copy */}
        <div>
          <p className="section-kicker text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
            The Advantage
          </p>
          <h2 className="section-title mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.15]">
            Studio Standards. None of the Friction
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-8">
            Every masterpiece requires meticulous execution. We eliminate the
            chaos of traditional filmmaking with transparent creative direction,
            rigorous production planning, and an elite network of UK talent.
          </p>
        </div>

        {/* Right Side: Features Grid 🧩 */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-flow-dense">
          {features.map((feature, index) => {
            // ৫ নম্বর (শেষ) আইটেমটাকে দুই কলাম জুড়ে বড় করে দিচ্ছি যাতে গ্রিড ব্যালেন্সড থাকে
            const isLastItem = index === features.length - 1;

            return (
              <div
                key={feature}
                className={`flex items-center gap-4 rounded-sm border border-white/5 bg-[#0a0a0a]/40 p-5 transition-all duration-300 hover:border-[#d4af37]/30 hover:bg-[#0a0a0a]/80 ${
                  isLastItem ? "sm:col-span-2" : ""
                }`}
              >
                {/* Check Icon Wrapper */}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#d4af37]/10 text-[#d4af37] transition-transform duration-300 group-hover:scale-110">
                  <CheckIcon />
                </span>
                {/* Feature Text */}
                <span className="text-sm font-medium text-zinc-200 sm:text-base">
                  {feature}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
