export type ServiceCategory = "a2p-sms" | "voice" | "iot-esim" | "cpaas" | "ai-strategy";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface TelecomService {
  id: ServiceCategory;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  protocols: string[];
  features: ServiceFeature[];
  architecturalHighlights: string[];
  slaBenchmark: string;
}

export interface RegionalCorridor {
  id: "latam" | "apac" | "global";
  name: string;
  subtitle: string;
  overview: string;
  hubs: string[];
  keyMarkets: {
    country: string;
    code: string;
    focus: string;
    protocols: string;
  }[];
  advantages: string[];
}
