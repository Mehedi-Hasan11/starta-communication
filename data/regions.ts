import { RegionalCorridor } from "@/types";

export const REGIONS_DATA: RegionalCorridor[] = [
  {
    id: "latam",
    name: "Latin America (LATAM) Corridor",
    subtitle: "Direct High-Integrity Routing Across Fast-Growing Digital Markets",
    overview:
      "Strategic telecommunications routing infrastructure optimized for high-volume enterprise traffic across major Latin American markets, ensuring full compliance with national regulatory mandates.",
    hubs: ["São Paulo, Brazil", "Mexico City, Mexico", "Bogotá, Colombia", "Santiago, Chile", "Buenos Aires, Argentina"],
    keyMarkets: [
      {
        country: "Brazil",
        code: "+55",
        focus: "Direct A2P SMS & High-Definition Voice",
        protocols: "Anatel Regulatory Alignment • In-Country Local Routing",
      },
      {
        country: "Mexico",
        code: "+52",
        focus: "High-Throughput Banking OTP & Wholesale Voice",
        protocols: "IFT Compliance • Direct MNO Interconnects",
      },
      {
        country: "Colombia",
        code: "+57",
        focus: "Two-Way Customer Messaging & Enterprise SIP",
        protocols: "CRC Guideline Compliance • Local CLI Preservation",
      },
      {
        country: "Chile",
        code: "+56",
        focus: "Cross-Border IoT/eSIM Telematics & CPaaS",
        protocols: "Subtel Verified Routes • Low PDD Voice",
      },
      {
        country: "Argentina",
        code: "+54",
        focus: "Enterprise Notifications & Wholesale Termination",
        protocols: "ENACOM Compliant Delivery Channels",
      },
    ],
    advantages: [
      "In-country direct connections avoiding multi-hop international bypasses",
      "Full compliance with local sender ID registration regulations",
      "Ultra-low latency regional Session Border Controllers (SBCs)",
      "Flexible commercial billing frameworks across major currencies",
    ],
  },
  {
    id: "apac",
    name: "Asia-Pacific (APAC) Regional Hub",
    subtitle: "High-Density Cross-Connects for Global Technology & Financial Hubs",
    overview:
      "Direct cross-connect infrastructure positioned at the world's most dynamic telecom junctions, linking Southeast Asia, East Asia, and South Asia with ultra-low latency optical transits.",
    hubs: ["Singapore Hub", "Hong Kong Gateway", "Tokyo Cross-Connect", "Kuala Lumpur, Malaysia", "Jakarta, Indonesia"],
    keyMarkets: [
      {
        country: "Singapore",
        code: "+65",
        focus: "Regional Peering Exchange & Financial-Grade CPaaS",
        protocols: "IMDA Compliance • Zero-Hop Data Center Interconnect",
      },
      {
        country: "Hong Kong",
        code: "+852",
        focus: "High-Density Wholesale Voice & International Messaging",
        protocols: "Direct Carrier Exchanges • Sub-millisecond Switching",
      },
      {
        country: "Malaysia",
        code: "+60",
        focus: "Enterprise A2P Messaging & Verified Sender IDs",
        protocols: "MCMC Compliant Gateway Routing",
      },
      {
        country: "Indonesia",
        code: "+62",
        focus: "Massive Volume OTP Delivery & IoT Fleet Tracking",
        protocols: "Local Operator Direct Interconnects",
      },
      {
        country: "Philippines",
        code: "+63",
        focus: "Omnichannel Customer Support & Voice Termination",
        protocols: "NTC Registered Channels • High ASR Standards",
      },
    ],
    advantages: [
      "Carrier-neutral interconnection within premier Tier-3/4 data facilities",
      "Direct peering with major regional and trans-Pacific submarine cables",
      "Strict compliance with national anti-spam and DLT verification rules",
      "24/7 dedicated Network Operations Center (NOC) technical surveillance",
    ],
  },
];
