import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SERVICES_DATA } from "@/data/services";
import { MessageSquare, PhoneCall, Radio, Code2, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function ServicesSection() {
  const serviceIcons = {
    "a2p-sms": <MessageSquare className="w-6 h-6 text-[#00f0ff]" />,
    voice: <PhoneCall className="w-6 h-6 text-[#0062ff]" />,
    "iot-esim": <Radio className="w-6 h-6 text-[#38bdf8]" />,
    cpaas: <Code2 className="w-6 h-6 text-emerald-400" />,
    "ai-strategy": <Code2 className="w-6 h-6 text-[#00f0ff]" />,
  };

  // Display the 4 core carrier services (AI strategy has its own dedicated spotlight section)
  const coreServices = SERVICES_DATA.filter((s) => s.id !== "ai-strategy");

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#030712] relative overflow-hidden">
      {/* Decorative gradient lines */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/10 to-transparent pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Carrier-Grade Portfolio"
          title="High-Capacity Telecommunications"
          titleHighlight="Services"
          description="Designed for mobile network operators, global aggregators, and digital enterprises requiring direct terminal reliability and low-latency packet switching."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coreServices.map((service) => (
            <Card
              key={service.id}
              id={`services-${service.id}`}
              className="p-8 lg:p-10 flex flex-col justify-between"
              glow
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#0b1221] border border-[#1e293b] flex items-center justify-center shadow-lg">
                    {serviceIcons[service.id]}
                  </div>
                  <Badge variant="cyan" className="font-mono">
                    {service.slaBenchmark}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-[#f8fafc] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm font-semibold text-[#00f0ff] mb-4">
                  {service.tagline}
                </p>
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Protocol Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.protocols.map((proto) => (
                    <span
                      key={proto}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#050b14] border border-[#1e293b] text-[#cbd5e1]"
                    >
                      {proto}
                    </span>
                  ))}
                </div>

                {/* Architectural Highlights */}
                <div className="pt-6 border-t border-[#1e293b] space-y-2.5 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                      <div className="text-xs leading-relaxed">
                        <strong className="text-[#f8fafc]">{feature.title}:</strong>{" "}
                        <span className="text-[#94a3b8]">{feature.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#1e293b]/60 flex items-center justify-between">
                <span className="text-xs font-mono text-[#64748b]">
                  Protocol Specification Available
                </span>
                <Button
                  href="#contact"
                  variant="cyan-outline"
                  size="sm"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Request Route Testing
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
