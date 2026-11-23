import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/modules/hero/HeroSection";
import { AboutSection } from "@/components/modules/about/AboutSection";
import { ServicesSection } from "@/components/modules/services/ServicesSection";
import { RegionalCorridorsSection } from "@/components/modules/regions/RegionalCorridorsSection";
import { AiStrategySection } from "@/components/modules/ai/AiStrategySection";
import { ProtocolsSection } from "@/components/modules/protocols/ProtocolsSection";
import { RfqSection } from "@/components/modules/contact/RfqSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050b14] text-[#f8fafc]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <RegionalCorridorsSection />
        <AiStrategySection />
        <ProtocolsSection />
        <RfqSection />
      </main>
      <Footer />
    </div>
  );
}
