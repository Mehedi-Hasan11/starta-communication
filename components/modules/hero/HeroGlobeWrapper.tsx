"use client";

import React from "react";
import dynamic from "next/dynamic";

const GlobalNetworkGlobe = dynamic(
  () =>
    import("@/components/3d/GlobalNetworkGlobe").then(
      (mod) => mod.GlobalNetworkGlobe
    ),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[360px] sm:h-[450px] lg:h-[520px] flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-[#00f0ff]/20 animate-pulse flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-[#0062ff]/10 blur-xl" />
        </div>
      </div>
    ),
  }
);

export function HeroGlobeWrapper() {
  return <GlobalNetworkGlobe />;
}
