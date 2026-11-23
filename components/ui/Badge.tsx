import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "cyan" | "blue" | "emerald" | "steel" | "outline";
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = "cyan",
  dot = false,
  ...props
}: BadgeProps) {
  const variantStyles = {
    cyan: "bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/30",
    blue: "bg-[#0062ff]/15 text-[#38bdf8] border-[#0062ff]/35",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    steel: "bg-[#1e293b]/70 text-[#94a3b8] border-[#334155]",
    outline: "border-[#1e293b] text-[#cbd5e1] bg-transparent",
  };

  const dotColors = {
    cyan: "bg-[#00f0ff] animate-pulse",
    blue: "bg-[#0062ff]",
    emerald: "bg-emerald-400 animate-ping",
    steel: "bg-[#94a3b8]",
    outline: "bg-slate-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border backdrop-blur-sm",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full inline-block", dotColors[variant])}
        />
      )}
      {children}
    </span>
  );
}
