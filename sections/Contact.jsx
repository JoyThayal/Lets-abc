import { MoveRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="section-spacing reveal py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Main CTA Container Box */}
        <div className="relative overflow-hidden rounded-sm border border-white/10 bg-[radial-gradient(circle_at_78%_20%,rgba(212,175,55,0.18),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] px-5 py-14 sm:px-10 sm:py-20 lg:px-16">
          {/* Film Grain Effect Overlay */}
          <div className="absolute inset-0 film-grain opacity-[0.08]" />

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-3xl">
            <p className="section-kicker text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
              Let&apos;s Collaborate
            </p>

            <h2 className="font-heading mt-3 text-3xl font-bold leading-[1.15] text-white sm:text-5xl md:text-6xl md:leading-[1.1]">
              Bring Your Next Iconic Project to Life
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-8">
              Whether you are launching a global campaign, scoring a music
              video, or greenlighting a feature film, let’s co-create a
              cinematic asset that defines your industry. Contact our UK team
              today.
            </p>

            {/* Buttons Group: Mobile-friendly stack & hover tricks */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                className="btn-gold flex items-center justify-center gap-2 text-center text-sm font-semibold tracking-wider transition-all duration-300 hover:gap-4"
                href="mailto:hello@letsabc.co.uk"
              >
                Pitch Your Project
                <MoveRight className="h-4 w-4" />
              </a>
              <a
                className="btn-ghost text-center text-sm font-semibold tracking-wider transition-all"
                href="tel:+440000000000"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
