"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { rfqFormSchema, RfqFormValues } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function RfqSection() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<RfqFormValues["serviceInterest"]>("a2p-sms");
  const [selectedVolume, setSelectedVolume] = useState<string>("1M - 5M / mo");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RfqFormValues>({
    resolver: zodResolver(rfqFormSchema),
    defaultValues: {
      serviceInterest: "a2p-sms",
      estimatedVolume: "1M - 5M / mo",
    },
  });

  const serviceOptions = [
    { id: "a2p-sms", label: "A2P SMS Messaging" },
    { id: "wholesale-voice", label: "Wholesale Voice" },
    { id: "iot-esim", label: "Global IoT / eSIM" },
    { id: "cpaas-api", label: "CPaaS REST APIs" },
    { id: "ai-strategy", label: "AI Product Strategy" },
    { id: "multiple", label: "Multiple / Hybrid Corridors" },
  ];

  const volumeOptions = [
    "Under 1M / mo",
    "1M - 5M / mo",
    "5M - 20M / mo",
    "20M+ / mo (High Volume)",
  ];

  const onSubmit = async (data: RfqFormValues) => {
    // Simulate transmission delay
    await new Promise((resolve) => setTimeout(resolve, 600));
    if (process.env.NODE_ENV === "development") {
      // Intentionally log for development feedback
      console.info("Simulated carrier inquiry dispatched for:", data.companyName);
    }
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#030712] relative">
      <Container size="narrow">
        <SectionHeading
          badge="Enterprise Engagement"
          title="Request Route Testing &"
          titleHighlight="Wholesale Proposal (RFQ)"
          description="Connect with our technical routing and carrier business development desk. We configure tailored test credentials and interconnect agreements."
        />

        <Card className="p-8 sm:p-12 relative" glow>
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#f8fafc] mb-2">
                Inquiry Received
              </h3>
              <p className="text-sm text-[#94a3b8] max-w-md leading-relaxed mb-6">
                Thank you for contacting Starta Communication Ltd. Our carrier routing desk will review your technical specifications and respond shortly.
              </p>
              <Button
                variant="cyan-outline"
                size="sm"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Service Interest Pill Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94a3b8] mb-3">
                  Select Primary Service Interest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSelectedService(opt.id as RfqFormValues["serviceInterest"]);
                        setValue("serviceInterest", opt.id as RfqFormValues["serviceInterest"], {
                          shouldValidate: true,
                        });
                      }}
                      className={cn(
                        "p-2.5 rounded-xl text-xs font-medium transition-all text-left border cursor-pointer",
                        selectedService === opt.id
                          ? "bg-[#0062ff] text-white border-[#00f0ff]/50 shadow-[0_0_15px_rgba(0,98,255,0.35)]"
                          : "bg-[#050b14] text-[#94a3b8] border-[#1e293b] hover:text-[#f8fafc] hover:border-[#38bdf8]/40"
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                {errors.serviceInterest && (
                  <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.serviceInterest.message}
                  </p>
                )}
              </div>

              {/* Two Column Inputs: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-mono uppercase tracking-wider text-[#94a3b8] mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    {...register("fullName")}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-4 py-3 rounded-xl bg-[#050b14] border border-[#1e293b] text-sm text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-colors"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-400">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="workEmail"
                    className="block text-xs font-mono uppercase tracking-wider text-[#94a3b8] mb-2"
                  >
                    Corporate Work Email
                  </label>
                  <input
                    id="workEmail"
                    type="email"
                    {...register("workEmail")}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#050b14] border border-[#1e293b] text-sm text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-colors"
                  />
                  {errors.workEmail && (
                    <p className="mt-1 text-xs text-rose-400">
                      {errors.workEmail.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Two Column Inputs: Company & Target Corridors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-xs font-mono uppercase tracking-wider text-[#94a3b8] mb-2"
                  >
                    Enterprise / Carrier Name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    {...register("companyName")}
                    placeholder="e.g. Global Telecom S.A."
                    className="w-full px-4 py-3 rounded-xl bg-[#050b14] border border-[#1e293b] text-sm text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-colors"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-xs text-rose-400">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="targetRegions"
                    className="block text-xs font-mono uppercase tracking-wider text-[#94a3b8] mb-2"
                  >
                    Target Corridors / Countries
                  </label>
                  <input
                    id="targetRegions"
                    type="text"
                    {...register("targetRegions")}
                    placeholder="e.g. Brazil, Mexico, Singapore"
                    className="w-full px-4 py-3 rounded-xl bg-[#050b14] border border-[#1e293b] text-sm text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-colors"
                  />
                  {errors.targetRegions && (
                    <p className="mt-1 text-xs text-rose-400">
                      {errors.targetRegions.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Estimated Monthly Volume Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94a3b8] mb-2">
                  Estimated Monthly Volume
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {volumeOptions.map((vol) => (
                    <button
                      key={vol}
                      type="button"
                      onClick={() => {
                        setSelectedVolume(vol);
                        setValue("estimatedVolume", vol, { shouldValidate: true });
                      }}
                      className={cn(
                        "py-2 px-3 rounded-lg text-xs font-medium transition-colors border cursor-pointer text-center",
                        selectedVolume === vol
                          ? "bg-[#00f0ff]/15 text-[#00f0ff] border-[#00f0ff]/50"
                          : "bg-[#050b14] text-[#94a3b8] border-[#1e293b] hover:text-[#f8fafc]"
                      )}
                    >
                      {vol}
                    </button>
                  ))}
                </div>
                {errors.estimatedVolume && (
                  <p className="mt-1 text-xs text-rose-400">
                    {errors.estimatedVolume.message}
                  </p>
                )}
              </div>

              {/* Optional Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-[#94a3b8] mb-2"
                >
                  Technical Requirements / Notes (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  {...register("message")}
                  placeholder="Specify protocol preferences (SMPP 3.4 / SIP / REST), desired TPS, or testing timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-[#050b14] border border-[#1e293b] text-sm text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#64748b] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#00f0ff]" />
                  Direct Carrier Desk: inquiry@startacommunication.com
                </span>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  icon={<Send className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? "Transmitting..." : "Submit Proposal Request"}
                </Button>
              </div>
            </form>
          )}
        </Card>
      </Container>
    </section>
  );
}
