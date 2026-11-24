import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Zap, Globe2 } from "lucide-react";
import { HeroGlobeWrapper } from "@/components/modules/hero/HeroGlobeWrapper";

export function HeroSection() {
  return (
    <section className="relative w-full pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden telecom-grid">
      {/* Radial Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(0,98,255,0.22)_0%,rgba(0,240,255,0.06)_45%,transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Corridor Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1221] border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] mb-6 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
              <span>DIRECT INTERCONNECTS • LATAM & APAC CORRIDORS</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#f8fafc] leading-[1.1] mb-6">
              Next-Generation Global Connectivity for{" "}
              <span className="gradient-cyan">Enterprise & Carriers</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-[#94a3b8] leading-relaxed max-w-2xl mb-8">
              High-throughput A2P SMS pipelines, wholesale voice termination,
              global IoT/eSIM orchestration, and autonomous AI-driven telecom
              business development.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Route RFQ
              </Button>
              <Button href="#services" variant="secondary" size="lg">
                Explore Carrier Services
              </Button>
            </div>

            {/* Architectural Trust Strip */}
            <div className="w-full pt-8 border-t border-[#1e293b]/80 grid grid-cols-3 gap-4 sm:gap-6">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-mono text-[#f8fafc] flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#00f0ff]" />
                  99.999%
                </span>
                <span className="text-xs text-[#94a3b8] mt-0.5">
                  Platform Target SLA
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-mono text-[#f8fafc] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0062ff]" />
                  SMPP / SIP
                </span>
                <span className="text-xs text-[#94a3b8] mt-0.5">
                  Carrier-Grade Protocols
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-mono text-[#f8fafc] flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4 text-[#38bdf8]" />
                  LATAM & APAC
                </span>
                <span className="text-xs text-[#94a3b8] mt-0.5">
                  Direct Strategic Corridors
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Visual Network (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[440px]">
              {/* Outer Cyan Ring Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0062ff]/15 to-[#00f0ff]/15 blur-2xl pointer-events-none" />
              <HeroGlobeWrapper />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
