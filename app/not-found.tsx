import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Radio } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050b14] text-[#f8fafc]">
      <Header />
      <main className="flex-1 flex items-center justify-center py-24 telecom-grid">
        <Container size="narrow" className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#0b1221] border border-[#00f0ff]/30 mx-auto flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Radio className="w-8 h-8 text-[#00f0ff] animate-pulse" />
          </div>

          <span className="font-mono text-xs uppercase tracking-widest text-[#00f0ff] px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20">
            Routing Error 404
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#f8fafc] mt-4 mb-4 tracking-tight">
            Signal Path Not Located
          </h1>

          <p className="text-base text-[#94a3b8] max-w-md mx-auto mb-8 leading-relaxed">
            The requested carrier route or page endpoint does not exist or has been dynamically rerouted by the network controller.
          </p>

          <Button
            href="/"
            variant="primary"
            size="md"
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Return to Core Gateway
          </Button>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
