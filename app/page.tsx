// src/app/page.tsx
import HeroSection from "@/sections/Hero";
import AboutSection from "@/sections/About";
import ServicesSection from "@/sections/Services";
import PortfolioSection from "@/sections/Portfolio";
import WCUSection from "@/sections/WCUSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import ContactSection from "@/sections/Contact";
import { LandingPage } from "@/animations/LandingPage";

export default function HomePage() {
  return (
    <main>
      {/* 🔮 সব সেকশনকে LandingPage দিয়ে মুড়ে (wrap) দিলাম */}
      <LandingPage>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <WCUSection />
        <TestimonialsSection />
        <ContactSection />
      </LandingPage>
    </main>
  );
}
