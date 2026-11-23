import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://startacommunication.com"),
  title: {
    default: "Starta Communication Ltd. | Global Telecom & Business Development",
    template: "%s | Starta Communication Ltd.",
  },
  description:
    "International telecommunications enterprise delivering carrier-grade A2P SMS, wholesale & retail Voice, IoT/eSIM global connectivity, CPaaS solutions, and AI product strategy with focused corridors across LATAM and APAC.",
  keywords: [
    "A2P SMS",
    "Wholesale Voice",
    "CPaaS",
    "Global IoT",
    "eSIM",
    "Telecom Business Development",
    "LATAM Telecom",
    "APAC Telecom",
    "SMPP v3.4",
    "SIP Trunking",
    "AI Telecom Strategy",
  ],
  authors: [{ name: "Starta Communication Ltd." }],
  creator: "Starta Communication Ltd.",
  publisher: "Starta Communication Ltd.",
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/brand/favicon.svg",
    apple: "/brand/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://startacommunication.com",
    siteName: "Starta Communication Ltd.",
    title: "Starta Communication Ltd. | Global Telecom Carrier & Business Development",
    description:
      "Enterprise telecom solutions: A2P SMS, Wholesale Voice, IoT/eSIM, CPaaS, and AI product strategy connecting LATAM and APAC corridors.",
    images: [
      {
        url: "/brand/logo.svg",
        width: 1200,
        height: 630,
        alt: "Starta Communication Ltd. Corporate Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starta Communication Ltd. | Global Telecom & Business Development",
    description:
      "Carrier-grade A2P SMS, Voice, IoT/eSIM, and CPaaS infrastructure connecting LATAM & APAC.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050b14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#050b14] text-[#f8fafc] selection:bg-[#00f0ff]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
