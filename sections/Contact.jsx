import { MoveRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="section-spacing reveal">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden border border-white/8 bg-[radial-gradient(circle_at_78%_20%,rgba(212,175,55,0.22),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] px-6 py-16 sm:px-10 lg:px-16">
          <div className="absolute inset-0 film-grain opacity-[0.1]" />
          <div className="relative z-10 max-w-3xl">
            <p className="section-kicker">Let&apos;s Collaborate</p>
            <h2 className="font-heading text-4xl font-bold leading-tight sm:text-6xl">
              Bring Your Next Iconic Project to Life
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Whether you are launching a global campaign, scoring a music
              video, or greenlighting a feature film, let’s co-create a
              cinematic asset that defines your industry. Contact our UK team
              today.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="btn-gold" href="mailto:hello@letsabc.co.uk">
                Pitch Your Project
                <MoveRight />
              </a>
              <a className="btn-ghost" href="tel:+440000000000">
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
