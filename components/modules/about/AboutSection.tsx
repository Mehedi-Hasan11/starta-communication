import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { COMPANY_DATA } from "@/data/company";
import { Network, Shield, Cpu, TrendingUp } from "lucide-react";

export function AboutSection() {
  const iconMap = [
    <Network key="net" className="w-6 h-6 text-[#00f0ff]" />,
    <Shield key="shld" className="w-6 h-6 text-[#0062ff]" />,
    <Cpu key="cpu" className="w-6 h-6 text-[#38bdf8]" />,
    <TrendingUp key="trend" className="w-6 h-6 text-emerald-400" />,
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#050b14] relative">
      <Container>
        <SectionHeading
          badge="Infrastructure Ethos"
          title="Engineered for Sovereign Telecom Routing"
          titleHighlight="& Carrier Integrity"
          description="Starta Communication Ltd. bridges international telecom carriers and multinational enterprises through direct bilateral interconnects, sub-millisecond switching, and strict regulatory adherence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_DATA.pillars.map((pillar, idx) => (
            <Card key={pillar.title} className="p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-[#1e293b] flex items-center justify-center mb-5 shadow-inner">
                  {iconMap[idx % iconMap.length]}
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#00f0ff] font-semibold">
                  {pillar.badge}
                </span>
                <h3 className="text-lg font-bold text-[#f8fafc] mt-2 mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
