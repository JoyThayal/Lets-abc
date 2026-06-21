import { MoveRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 sm:px-8"
    >
      <video
        className="hero-media absolute inset-0 h-[110%] w-full object-cover opacity-45"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80"
        aria-hidden="true"
      >
        <source
          src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(212,175,55,0.22),transparent_32%),linear-gradient(90deg,rgba(10,10,10,0.98),rgba(10,10,10,0.72)_48%,rgba(10,10,10,0.92))]" />
      <div className="absolute inset-0 film-grain opacity-[0.12]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <p className="hero-kicker mb-5 text-xs font-bold uppercase tracking-[0.36em] text-[#d4af37]">
            Cinema-Grade Production by Lets abc
          </p>
          <h1 className="hero-title font-heading text-5xl font-bold leading-[0.92] tracking-normal text-white sm:text-7xl lg:text-8xl">
            Turn Ambitious Vision Into Iconic Cinema
          </h1>
          <p className="hero-copy mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            We produce high-impact commercials, luxury brand films, and music
            videos that captivate audiences and drive real engagement. From
            concept to final cut, your story is told with cinematic perfection.
          </p>
          <div className="hero-actions mt-10 flex flex-col gap-4 sm:flex-row">
            <a className="btn-gold" href="#portfolio">
              See Our Work
              <MoveRight />
            </a>
            <a className="btn-ghost" href="#contact">
              Let’s Collaborate
            </a>
          </div>
        </div>
      </div>
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.28em] text-zinc-400"
      >
        Scroll
        <span className="h-12 w-px overflow-hidden bg-white/15">
          <span className="scroll-line block h-5 w-px bg-[#d4af37]" />
        </span>
      </a>
    </section>
  );
}
