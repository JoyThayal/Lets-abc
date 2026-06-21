import { MoveRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-20 sm:px-8 md:px-12 lg:pt-24"
    >
      {/* Background Video */}
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

      {/* Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(212,175,55,0.18),transparent_40%),linear-gradient(90deg,rgba(10,10,10,0.98),rgba(10,10,10,0.8)_50%,rgba(10,10,10,0.92))]" />
      <div className="absolute inset-0 film-grain opacity-[0.12]" />

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          {/* Kicker */}
          <p className="hero-kicker mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37] sm:text-xs sm:tracking-[0.36em]">
            Cinema-Grade Production by Lets abc
          </p>

          {/* Responsive Title */}
          <h1 className="hero-title font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl lg:leading-[0.95]">
            Turn Ambitious Vision Into Iconic Cinema
          </h1>

          {/* Responsive Copy */}
          <p className="hero-copy mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-8 md:text-lg">
            We produce high-impact commercials, luxury brand films, and music
            videos that captivate audiences and drive real engagement. From
            concept to final cut, your story is told with cinematic perfection.
          </p>

          {/* Responsive Buttons */}
          <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              className="btn-gold flex items-center justify-center gap-2 text-center text-sm font-semibold tracking-wider transition-all duration-300 hover:gap-4"
              href="#portfolio"
            >
              See Our Work
              <MoveRight className="h-4 w-4" />
            </a>
            <a
              className="btn-ghost text-center text-sm font-semibold tracking-wider transition-all"
              href="#contact"
            >
              Let’s Collaborate
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="hidden sm:flex absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-400 sm:bottom-8 sm:gap-3 sm:text-xs sm:tracking-[0.28em]"
      >
        Scroll
        <span className="h-10 w-px overflow-hidden bg-white/15 sm:h-12">
          <span className="scroll-line block h-5 w-px bg-[#d4af37]" />
        </span>
      </a>
    </section>
  );
}
