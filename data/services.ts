import { TelecomService } from "@/types";

export const SERVICES_DATA: TelecomService[] = [
  {
    id: "a2p-sms",
    title: "A2P SMS & Enterprise Messaging",
    shortTitle: "A2P SMS",
    tagline: "High-Throughput Global Delivery Engine for Mission-Critical Traffic",
    description:
      "Enterprise-grade Application-to-Person (A2P) messaging architecture engineered for mission-critical OTP authentication, transactional notifications, and high-volume promotional dispatch with direct operator termination.",
    protocols: ["SMPP v3.4 / 5.0", "HTTP REST API", "Webhooks JSON", "Two-Way Inbound"],
    features: [
      {
        title: "Dynamic Alphanumeric Sender IDs",
        description:
          "Support for verified in-country alphanumeric sender IDs with automated regulatory pre-clearing across LATAM and APAC operators.",
      },
      {
        title: "Sub-Second OTP Latency",
        description:
          "Direct route prioritization designed for time-sensitive one-time passwords and multi-factor authentication security tokens.",
      },
      {
        title: "Granular DLR Real-Time Feeds",
        description:
          "Instant handset-level delivery receipts (DLR) with comprehensive error categorization and automated fallback routing.",
      },
      {
        title: "High-Concurrency Queue Architecture",
        description:
          "Massive throughput capability built on asynchronous distributed queues to handle burst promotional spikes without backlog.",
      },
    ],
    architecturalHighlights: [
      "SS7 / SIGTRAN direct signaling interconnects",
      "Adaptive throughput throttling per operator specification",
      "Unicode & multi-part concatenated message support",
      "Dynamic LCR with automatic quality-based rerouting",
    ],
    slaBenchmark: "Target 99.999% Service Availability",
  },
  {
    id: "voice",
    title: "Wholesale & Enterprise Voice",
    shortTitle: "Voice Wholesale",
    tagline: "High-Definition Direct Termination, CLI Integrity & SIP Trunking",
    description:
      "Carrier-grade wholesale voice termination and international SIP trunking. Engineered for Tier-1 mobile network operators, conversational AI platforms, and enterprise contact centers demanding pristine CLI preservation and low PDD.",
    protocols: ["SIP (RFC 3261)", "RTP / SRTP", "TLS Encryption", "Codec G.711 / G.729 / Opus"],
    features: [
      {
        title: "Guaranteed CLI Termination",
        description:
          "Strict direct routing preserving Calling Line Identification (CLI) across wholesale corridors to prevent call spam labeling.",
      },
      {
        title: "Sub-Second Post-Dial Delay (PDD)",
        description:
          "Optimized SIP signaling transit minimizing call connection latency across transcontinental connections.",
      },
      {
        title: "High ASR & ACD Benchmarks",
        description:
          "Targeted routing algorithms engineered to maintain industry-leading Answer-Seizure Ratio (ASR) and Average Call Duration (ACD).",
      },
      {
        title: "Real-Time Telephony Anti-Fraud",
        description:
          "Automated detection of International Revenue Share Fraud (IRSF), Wangiri attacks, and abnormal traffic spikes.",
      },
    ],
    architecturalHighlights: [
      "Geo-redundant Session Border Controllers (SBCs)",
      "Bilateral wholesale interconnects with flexible settlement",
      "Automated route testing and codec transcoding",
      "Live QoS packet loss and jitter telemetry",
    ],
    slaBenchmark: "Carrier-Grade Voice Quality & High ASR Targets",
  },
  {
    id: "iot-esim",
    title: "Global IoT & eSIM Orchestration",
    shortTitle: "IoT / eSIM",
    tagline: "Seamless Multi-IMSI Connectivity & eUICC Profile Management",
    description:
      "Next-generation remote SIM provisioning and cellular connectivity for connected hardware, automotive systems, smart logistics fleets, and industrial sensors operating across international borders.",
    protocols: ["eUICC (GSMA SGP.02/SGP.22)", "Multi-IMSI Over-The-Air (OTA)", "CoAP / MQTT", "Private APN / VPN"],
    features: [
      {
        title: "Remote SIM Provisioning (eUICC)",
        description:
          "Dynamic Over-The-Air (OTA) carrier profile swapping without replacing physical SIM modules in deployed field assets.",
      },
      {
        title: "Multi-IMSI Auto-Localization",
        description:
          "Automated switching to local regional network profiles to avoid permanent roaming restrictions in regulated territories.",
      },
      {
        title: "Centralized Device Connectivity Portal",
        description:
          "Real-time telemetry, data quota caps, SIM state lifecycle management (Activation, Suspension, Deactivation).",
      },
      {
        title: "Secure Isolated Core Architecture",
        description:
          "Direct enterprise traffic tunneling via dedicated Private APNs and IPSec VPN tunnels directly into cloud infrastructure.",
      },
    ],
    architecturalHighlights: [
      "Industrial temperature grade eUICC profiles",
      "Seamless 2G/3G/4G/5G/LTE-M and NB-IoT support",
      "GSMA compliant Subscription Management Data Preparation (SM-DP+)",
      "Zero-touch automated initial device bootstrap",
    ],
    slaBenchmark: "Autonomous Multi-Network Failover",
  },
  {
    id: "cpaas",
    title: "CPaaS & Unified Communication APIs",
    shortTitle: "CPaaS APIs",
    tagline: "Programmable Telephony, Two-Factor Authentication & Omnichannel APIs",
    description:
      "A developer-first Communication Platform as a Service (CPaaS). Seamlessly embed two-way SMS, voice verification, virtual DIDs, and instant omnichannel alerts into web applications, mobile apps, and enterprise CRMs.",
    protocols: ["RESTful HTTP APIs", "WebRTC", "JSON Webhooks", "OAuth 2.0 / API Keys"],
    features: [
      {
        title: "Programmable Verification API",
        description:
          "Drop-in 2FA/MFA token generation, delivery, and verification with intelligent fallback between SMS, Voice, and WhatsApp channels.",
      },
      {
        title: "Global Virtual Number Inventory",
        description:
          "Instant provisioning of local mobile numbers (MSISDN), national numbers, and toll-free numbers across key commercial hubs.",
      },
      {
        title: "Event-Driven Webhook Dispatch",
        description:
          "Real-time callbacks for incoming messages, call state transitions, delivery confirmations, and opt-out requests.",
      },
      {
        title: "Comprehensive SDKs & Documentation",
        description:
          "Engineered for rapid integration with clean REST APIs, Postman collections, and detailed code snippets.",
      },
    ],
    architecturalHighlights: [
      "Sub-100ms API gateway response times",
      "Automated idempotency key deduplication",
      "Granular per-application access token permissions",
      "Real-time usage and financial billing dashboards",
    ],
    slaBenchmark: "99.999% API Gateway Uptime SLA",
  },
  {
    id: "ai-strategy",
    title: "AI Product Strategy & Business Development",
    shortTitle: "AI Telecom Strategy",
    tagline: "Autonomous Routing Intelligence & Next-Generation Telecom Business Models",
    description:
      "Consultative and technological enablement for telecom operators and high-growth enterprises. Deploy autonomous routing agents, LLM-powered conversational interfaces, and intelligent capacity optimization.",
    protocols: ["Custom AI Agents", "ML Route Telemetry", "Real-Time CDR Analytics", "Automated Fraud Shield"],
    features: [
      {
        title: "Predictive Least-Cost Routing (AI-LCR)",
        description:
          "Machine learning models forecasting carrier route quality degradation and switching traffic proactively before packet drops occur.",
      },
      {
        title: "Automated Telecom Fraud Shield",
        description:
          "Real-time pattern recognition identifying SIM-box hijacking, call pumping, and anomalous traffic bursts with zero human latency.",
      },
      {
        title: "Telecom Product Advisory",
        description:
          "Strategic roadmap guidance for launching AI-native messaging channels, voice bots, and automated partner reconciliation systems.",
      },
      {
        title: "Cross-Border Business Development",
        description:
          "Facilitating strategic commercial corridors, carrier interconnect negotiations, and bilateral traffic exchange across LATAM and APAC.",
      },
    ],
    architecturalHighlights: [
      "Streamlined carrier partner onboarding frameworks",
      "Model-driven call pattern anomaly scoring",
      "Continuous QoS feedback loop integration",
      "Confidential commercial architecture under NDA",
    ],
    slaBenchmark: "Real-Time Telemetry & Strategic Alignment",
  },
];
