import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";
import { Lock, FileCheck2, Cpu } from "lucide-react";

export function ProtocolsSection() {
  return (
    <section id="protocols" className="py-20 lg:py-28 bg-[#050b14] relative">
      <Container>
        <SectionHeading
          badge="Standardized Protocols"
          title="Universal Carrier-Grade"
          titleHighlight="Interoperability"
          description="Direct compatibility with international telecommunications standards, facilitating instant bilateral interconnects across mobile networks, aggregators, and enterprise software."
        />

        {/* Protocols Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {SITE_CONFIG.supportedProtocols.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-xl bg-[#0b1221] border border-[#1e293b] flex flex-col items-center text-center hover:border-[#00f0ff]/40 transition-colors"
            >
              <Cpu className="w-5 h-5 text-[#00f0ff] mb-2.5 opacity-80" />
              <span className="text-xs font-mono font-bold text-[#f8fafc] mb-1">
                {item.name}
              </span>
              <span className="text-[11px] text-[#64748b]">{item.category}</span>
            </div>
          ))}
        </div>

        {/* Interconnect Confidentiality Notice Card */}
        <div className="rounded-2xl p-6 sm:p-8 bg-[#0f172a]/60 border border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#050b14] border border-[#1e293b] flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5 text-[#38bdf8]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#f8fafc]">
                Carrier Interconnection & IP Peering Disclosure
              </h4>
              <p className="text-xs text-[#94a3b8] mt-1 max-w-2xl leading-relaxed">
                Direct MNO bilateral agreements, IP addresses, session border controller endpoints, and private interconnection facilities are provided exclusively under mutual Non-Disclosure Agreement (NDA).
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] bg-[#00f0ff]/10 px-4 py-2 rounded-lg border border-[#00f0ff]/20 shrink-0">
            <FileCheck2 className="w-4 h-4" />
            <span>NDA Protected Interconnects</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
