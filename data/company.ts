import { CompanyInfo } from "@/types";

export const COMPANY_DATA: CompanyInfo = {
  name: "Starta Communication Ltd.",
  legalName: "Starta Communication Ltd.",
  positioning:
    "Global Telecom Business Development | A2P SMS • Voice • IoT/eSIM • CPaaS | LATAM & APAC | AI Product Strategy & Business Development",
  tagline: "Next-Generation Global Telecom Infrastructure & Business Development",
  registeredAddress: "[Awaiting Verification: Corporate Registered Address]",
  registrationNumber: "[Awaiting Verification: Company Registration / Tax ID]",
  contactEmail: "inquiry@startacommunication.com",
  verificationNotice:
    "Information regarding corporate registration, tax identification, and regulatory licenses is subject to final company verification.",
  pillars: [
    {
      title: "Direct Carrier Interconnects",
      description:
        "Bypassing high-latency aggregator hops through direct operator interconnects, safeguarding delivery receipts and voice CLI integrity.",
      badge: "Sovereign Routing",
    },
    {
      title: "Regional Regulatory Compliance",
      description:
        "Engineered for strict in-country compliance across LATAM and APAC regulatory frameworks, including local sender ID registration and DLT guidelines.",
      badge: "In-Country Compliance",
    },
    {
      title: "Carrier-Grade Architecture",
      description:
        "Engineered for 99.999% platform availability targets with geo-distributed SIP session border controllers and SMPP routing gateways.",
      badge: "High Concurrency",
    },
    {
      title: "AI-Augmented Route Strategy",
      description:
        "Empowering wholesale carriers and enterprises with autonomous route health monitoring, predictive failover, and proactive fraud mitigation.",
      badge: "AI-Driven",
    },
  ],
};
