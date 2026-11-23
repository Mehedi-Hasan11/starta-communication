import React from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "cyan" | "blue" | "emerald" | "steel";
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "cyan",
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col mb-12 lg:mb-16",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <Badge variant={badgeVariant} dot className="mb-4">
          {badge}
        </Badge>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#f8fafc] max-w-3xl leading-[1.15]">
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-cyan">{titleHighlight}</span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
