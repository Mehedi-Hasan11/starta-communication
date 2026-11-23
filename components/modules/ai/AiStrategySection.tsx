import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Bot, LineChart, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";

export function AiStrategySection() {
  const aiCapabilities = [
    {
      icon: <LineChart className="w-6 h-6 text-[#00f0ff]" />,
      title: "Autonomous Least-Cost Routing (AI-LCR)",
      description:
        "Continuous machine learning telemetry analyzing route degradation, packet latency, and DLR success rates to dynamically switch traffic before customer drop-offs occur.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-[#0062ff]" />,
      title: "Real-Time Telephony Anti-Fraud Shield",
      description:
        "Proactive algorithmic detection of International Revenue Share Fraud (IRSF), Wangiri callbacks, and SIM-box hijackings with automated traffic quarantine.",
    },
    {
      icon: <Bot className="w-6 h-6 text-[#38bdf8]" />,
      title: "AI Product Strategy & Enablement",
      description:
        "Strategic consulting for Tier-1/2 telecom operators launching AI-native messaging agents, intelligent voice IVR bots, and automated partner billing settlements.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
      title: "Cross-Border Business Development",
      description:
        "Facilitating bilateral carrier negotiations, direct capacity agreements, and specialized corridor partnerships across Latin America and Asia-Pacific markets.",
    },
  ];

  return (
    <section id="ai-strategy" className="py-20 lg:py-28 bg-[#030712] relative overflow-hidden">
      {/* Ambient background mesh */}
      <div className="absolute inset-0 telecom-radial-glow pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          badge="Next-Gen Intelligence"
          title="AI Product Strategy &"
          titleHighlight="Autonomous Telecom Routing"
          description="Transforming traditional telecom transit into an adaptive, self-healing network driven by predictive machine learning and automated business models."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {aiCapabilities.map((cap) => (
            <Card key={cap.title} className="p-8 flex flex-col justify-between" glow>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0b1221] border border-[#1e293b] flex items-center justify-center mb-5 shadow-lg">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold text-[#f8fafc] mb-3">{cap.title}</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Advisory Banner */}
        <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-[#0b1221] via-[#0f172a] to-[#0b1221] border border-[#00f0ff]/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_0_35px_rgba(0,98,255,0.15)]">
          <div className="max-w-2xl">
            <h4 className="text-xl font-bold text-[#f8fafc] mb-2">
              Accelerate Your Telecom AI Transformation
            </h4>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Explore bespoke advisory for autonomous carrier operations, AI conversational channels, or bilateral traffic expansion under strict non-disclosure terms.
            </p>
          </div>
          <Button
            href="#contact"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0"
          >
            Consult AI Strategy Team
          </Button>
        </div>
      </Container>
    </section>
  );
}
