import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className,
  glow = false,
  hoverEffect = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300 relative overflow-hidden",
        glow
          ? "bg-[#0f172a]/75 backdrop-blur-xl border-[#00f0ff]/25 shadow-[0_0_30px_-5px_rgba(0,240,255,0.12)]"
          : "bg-[#0b1221]/80 backdrop-blur-md border-[#1e293b]",
        hoverEffect &&
          "hover:border-[#00f0ff]/40 hover:shadow-[0_12px_40px_-10px_rgba(0,98,255,0.25)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
