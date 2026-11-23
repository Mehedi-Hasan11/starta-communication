import { FooterSection, NavItem } from "@/types";

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    title: "Services",
    href: "/#services",
    children: [
      {
        title: "A2P SMS Messaging",
        href: "/#services-a2p",
        description: "High-throughput OTP and transactional messaging engine.",
        badge: "SMPP 3.4 / 5.0",
      },
      {
        title: "Wholesale Voice",
        href: "/#services-voice",
        description: "Direct CLI termination and carrier-grade SIP trunking.",
        badge: "SIP RFC 3261",
      },
      {
        title: "IoT & Global eSIM",
        href: "/#services-iot",
        description: "eUICC remote profile provisioning & multi-IMSI connectivity.",
        badge: "GSMA Compliant",
      },
      {
        title: "CPaaS & Unified APIs",
        href: "/#services-cpaas",
        description: "Programmable messaging, voice verification, and cloud SDKs.",
        badge: "RESTful JSON",
      },
      {
        title: "AI Telecom Strategy",
        href: "/#services-ai",
        description: "Autonomous routing intelligence, anti-fraud and product advisory.",
        badge: "AI-Driven",
      },
    ],
  },
  {
    title: "Regional Corridors",
    href: "/#regions",
    children: [
      {
        title: "LATAM Corridor",
        href: "/#regions-latam",
        description: "Direct routes across Brazil, Mexico, Colombia, Chile, and Argentina.",
        badge: "Direct Interconnect",
      },
      {
        title: "APAC Regional Hub",
        href: "/#regions-apac",
        description: "Strategic peering facilities across Singapore, Hong Kong, and Southeast Asia.",
        badge: "Low Latency",
      },
    ],
  },
  {
    title: "AI Strategy",
    href: "/#ai-strategy",
    badge: "New",
  },
  {
    title: "Protocols",
    href: "/#protocols",
  },
  {
    title: "About",
    href: "/#about",
  },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Carrier Solutions",
    links: [
      { title: "A2P SMS Delivery Engine", href: "/#services-a2p" },
      { title: "Wholesale CLI Voice", href: "/#services-voice" },
      { title: "Global IoT / eSIM", href: "/#services-iot" },
      { title: "CPaaS & Programmable APIs", href: "/#services-cpaas" },
      { title: "AI Telecom Strategy", href: "/#ai-strategy" },
    ],
  },
  {
    title: "Strategic Corridors",
    links: [
      { title: "Latin America (LATAM) Network", href: "/#regions-latam" },
      { title: "Asia-Pacific (APAC) Peering", href: "/#regions-apac" },
      { title: "Carrier Peering Facilities", href: "/#protocols" },
      { title: "Direct Route Testing RFQ", href: "/#contact" },
    ],
  },
  {
    title: "Enterprise & Governance",
    links: [
      { title: "About Starta Communication", href: "/#about" },
      { title: "Architectural SLAs", href: "/#about" },
      { title: "Regulatory Compliance", href: "/#about" },
      { title: "Carrier Partner Inquiries", href: "/#contact" },
    ],
  },
  {
    title: "Security & Standards",
    links: [
      { title: "SMPP v3.4 & v5.0 Standard", href: "/#protocols" },
      { title: "GSMA eUICC Specifications", href: "/#protocols" },
      { title: "SIP RFC 3261 Guidelines", href: "/#protocols" },
      { title: "Data Privacy & Telephony Disclosures", href: "/#about" },
    ],
  },
];
