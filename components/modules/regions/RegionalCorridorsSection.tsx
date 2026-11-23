"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { REGIONS_DATA } from "@/data/regions";
import { Globe, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function RegionalCorridorsSection() {
  const [activeTab, setActiveTab] = useState<"latam" | "apac">("latam");
  const currentCorridor = REGIONS_DATA.find((r) => r.id === activeTab) || REGIONS_DATA[0];

  return (
    <section id="regions" className="py-20 lg:py-28 bg-[#050b14] relative">
      <Container>
        <SectionHeading
          badge="Global Footprint"
          title="Direct Transit Corridors:"
          titleHighlight="LATAM & APAC"
          description="High-density operator interconnects and regional peering hubs engineered to bypass multi-hop international transit routes."
        />

        {/* Corridor Switcher Buttons */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {REGIONS_DATA.map((corridor) => {
            const isActive = activeTab === corridor.id;
            return (
              <button
                key={corridor.id}
                type="button"
                onClick={() => setActiveTab(corridor.id as "latam" | "apac")}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2",
                  isActive
                    ? "bg-[#0062ff] text-white shadow-[0_0_25px_rgba(0,98,255,0.45)] border border-[#00f0ff]/40"
                    : "bg-[#0b1221] text-[#94a3b8] hover:text-[#f8fafc] border border-[#1e293b]"
                )}
              >
                <Globe className={cn("w-4 h-4", isActive ? "text-[#00f0ff]" : "text-[#64748b]")} />
                <span>{corridor.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Corridor Card */}
        <Card className="p-8 lg:p-12" glow>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Summary (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <Badge variant="cyan" className="mb-4">
                  {currentCorridor.subtitle}
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#f8fafc] mb-4">
                  {currentCorridor.name}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
                  {currentCorridor.overview}
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#00f0ff]">
                    Strategic Peering Facilities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentCorridor.hubs.map((hub) => (
                      <span
                        key={hub}
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-lg bg-[#0b1221] border border-[#1e293b] text-[#cbd5e1]"
                      >
                        <MapPin className="w-3 h-3 text-[#38bdf8]" />
                        {hub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#1e293b]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#94a3b8] mb-2">
                    Corridor Highlights
                  </h4>
                  {currentCorridor.advantages.map((adv) => (
                    <div key={adv} className="flex items-start gap-2 text-xs text-[#cbd5e1]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00f0ff] shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Inquire {currentCorridor.id.toUpperCase()} Rates & Routing
                </Button>
              </div>
            </div>

            {/* Right Matrix Table (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="rounded-xl border border-[#1e293b] bg-[#050b14]/90 overflow-hidden shadow-inner">
                <div className="px-5 py-3.5 bg-[#0f172a] border-b border-[#1e293b] flex items-center justify-between text-xs font-mono text-[#94a3b8]">
                  <span>TERRITORY & DIALING CODE</span>
                  <span>CORE SPECIFICATION</span>
                </div>
                <div className="divide-y divide-[#1e293b]/70">
                  {currentCorridor.keyMarkets.map((market) => (
                    <div
                      key={market.country}
                      className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#00f0ff] px-2 py-0.5 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                          {market.code}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-[#f8fafc]">{market.country}</p>
                          <p className="text-xs text-[#94a3b8]">{market.focus}</p>
                        </div>
                      </div>
                      <div className="text-xs font-mono text-right text-[#38bdf8] sm:max-w-xs">
                        {market.protocols}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
