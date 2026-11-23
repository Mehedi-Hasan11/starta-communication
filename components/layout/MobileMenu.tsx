"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-xl bg-white/5 border border-[#1e293b] text-[#f8fafc] hover:text-[#00f0ff] focus:outline-none cursor-pointer"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[73px] bg-[#050b14]/95 backdrop-blur-3xl z-50 flex flex-col p-6 overflow-y-auto border-t border-[#1e293b]">
          <div className="flex flex-col gap-4 mb-8">
            {MAIN_NAV_ITEMS.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-[#f8fafc] hover:text-[#00f0ff] transition-colors flex items-center justify-between py-1"
                >
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20">
                      {item.badge}
                    </span>
                  )}
                </Link>

                {item.children && (
                  <div className="pl-4 border-l border-[#1e293b] flex flex-col gap-3 my-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-[#94a3b8] hover:text-[#38bdf8] transition-colors flex items-center justify-between"
                      >
                        <span>{child.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-[#1e293b] flex flex-col gap-3">
            <Button
              href="/#contact"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              Request Route RFQ
            </Button>
            <div className="flex items-center justify-center gap-2 text-xs text-[#64748B] pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct LATAM & APAC Gateways Active</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
