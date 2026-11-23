"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
      {MAIN_NAV_ITEMS.map((item) => {
        const hasChildren = Boolean(item.children && item.children.length > 0);
        const isOpen = openDropdown === item.title;

        if (hasChildren) {
          return (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.title)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer",
                  isOpen
                    ? "text-[#00f0ff] bg-white/5"
                    : "text-[#cbd5e1] hover:text-[#f8fafc] hover:bg-white/5"
                )}
                aria-expanded={isOpen}
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200 opacity-70",
                    isOpen && "rotate-180 text-[#00f0ff]"
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 p-2.5 rounded-2xl bg-[#0b1221]/95 backdrop-blur-2xl border border-[#1e293b] shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-50">
                  <div className="flex flex-col gap-1">
                    {item.children?.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className="group flex flex-col p-3 rounded-xl hover:bg-white/[0.06] transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-[#f8fafc] group-hover:text-[#00f0ff] transition-colors">
                            {child.title}
                          </span>
                          {child.badge && (
                            <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-md bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20">
                              {child.badge}
                            </span>
                          )}
                        </div>
                        {child.description && (
                          <span className="text-xs text-[#94a3b8] mt-1 line-clamp-2">
                            {child.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-[#cbd5e1] hover:text-[#f8fafc] hover:bg-white/5 rounded-full transition-colors"
          >
            <span>{item.title}</span>
            {item.badge && (
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded-md bg-[#0062ff]/20 text-[#38bdf8] border border-[#0062ff]/30">
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
