import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FOOTER_SECTIONS } from "@/data/navigation";
import { COMPANY_DATA } from "@/data/company";
import { ShieldCheck, Globe2 } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#030712] border-t border-[#1e293b] pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#0062ff]/10 to-transparent blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-[#1e293b]">
          {/* Company Brand Column (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="inline-block relative w-48 h-10">
              <Image
                src="/brand/logo.svg"
                alt="Starta Communication Ltd."
                fill
                className="object-contain object-left"
              />
            </Link>

            <p className="text-sm text-[#94a3b8] leading-relaxed max-w-sm mt-1">
              Global telecommunications business development and carrier-grade
              connectivity. High-throughput A2P SMS, wholesale voice, IoT/eSIM
              management, and AI routing strategy connecting LATAM and APAC.
            </p>

            {/* Platform Heartbeat Status */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0b1221] border border-[#1e293b] text-xs text-[#cbd5e1] w-fit mt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] text-emerald-400 font-semibold tracking-wider">
                CORE GATEWAYS ONLINE
              </span>
              <span className="text-[#64748b]">|</span>
              <span className="text-[11px] text-[#94a3b8]">99.999% SLA Target</span>
            </div>

            {/* Verification Placeholder Badge */}
            <div className="text-[11px] text-[#64748b] bg-white/[0.02] p-2.5 rounded-lg border border-white/5 max-w-sm mt-1">
              <p className="font-semibold text-[#94a3b8] mb-0.5">Corporate Notice:</p>
              <p>{COMPANY_DATA.verificationNotice}</p>
            </div>
          </div>

          {/* Navigation Columns (4 cols) */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-[#00f0ff]">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="hover:text-[#f8fafc] hover:translate-x-0.5 transition-all inline-block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <p>© {currentYear} {COMPANY_DATA.legalName}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-[#94a3b8]">
              <Globe2 className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>LATAM & APAC Transit</span>
            </span>
            <span className="flex items-center gap-1 text-[#94a3b8]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0062ff]" />
              <span>SMPP • SIP • eUICC</span>
            </span>
            <Link href="/#contact" className="hover:text-[#f8fafc] transition-colors">
              Route Inquiries
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
