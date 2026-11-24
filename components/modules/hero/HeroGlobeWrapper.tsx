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
      <div className="w-full h-[320px] sm:h-[400px] lg:h-[460px] flex items-center justify-center">
        <div className="w-40 h-40 rounded-full border border-[#00f0ff]/20 animate-pulse flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[#0062ff]/10 blur-xl" />
        </div>
      </div>
    ),
  }
);

export function HeroGlobeWrapper() {
  return <GlobalNetworkGlobe />;
}
