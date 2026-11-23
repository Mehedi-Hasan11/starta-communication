export const SITE_CONFIG = {
  name: "Starta Communication Ltd.",
  shortName: "Starta",
  legalName: "Starta Communication Ltd.",
  tagline: "Global Telecom Carrier & Business Development",
  description:
    "Carrier-grade A2P SMS, wholesale & retail Voice, IoT/eSIM global connectivity, CPaaS solutions, and AI product strategy connecting LATAM and APAC corridors.",
  url: "https://startacommunication.com",
  contactEmail: "inquiry@startacommunication.com", // clearly marked official inquiry channel
  routes: {
    home: "/",
    services: "/#services",
    a2pSms: "/#services-a2p",
    voice: "/#services-voice",
    iotEsim: "/#services-iot",
    cpaas: "/#services-cpaas",
    regions: "/#regions",
    latam: "/#regions-latam",
    apac: "/#regions-apac",
    aiStrategy: "/#ai-strategy",
    protocols: "/#protocols",
    about: "/#about",
    contact: "/#contact",
  },
  supportedProtocols: [
    { name: "SMPP v3.4 / 5.0", category: "Messaging" },
    { name: "SIP (RFC 3261)", category: "Voice" },
    { name: "HTTP REST / Webhooks", category: "CPaaS" },
    { name: "eUICC / RSP (GSMA Spec)", category: "IoT / eSIM" },
    { name: "SS7 / SIGTRAN", category: "Signaling" },
    { name: "RTP / SRTP (G.711, G.729)", category: "Media" },
  ],
} as const;
