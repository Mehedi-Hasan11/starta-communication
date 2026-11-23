import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "cyan-outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#0062ff] to-[#0052d4] text-white hover:from-[#1a73e8] hover:to-[#0062ff] shadow-[0_0_20px_-3px_rgba(0,98,255,0.45)] hover:shadow-[0_0_28px_0px_rgba(0,240,255,0.45)] border border-[#00f0ff]/30",
    secondary:
      "bg-[#0f172a]/80 text-[#f8fafc] hover:bg-[#1e293b] border border-[#1e293b] hover:border-[#38bdf8]/40 backdrop-blur-md",
    "cyan-outline":
      "border border-[#00f0ff]/50 text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]",
    ghost:
      "text-[#94a3b8] hover:text-[#f8fafc] hover:bg-white/5",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
