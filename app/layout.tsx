import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollWrapper from "@/components/animation/SmoothScrollWrapper";

import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BidPack — VFX Outsourcing & Project Management",
  description:
    "BidPack connects VFX studios with trusted vendors to streamline outsourcing: manage bids, contracts, asset delivery and project workflows securely and transparently.",
  keywords: [
    "BidPack",
    "VFX outsourcing platform",
    "VFX project management",
    "VFX studio collaboration",
    "VFX vendor marketplace",
    "visual effects outsourcing",
    "post-production management",
    "film production outsourcing",
    "secure asset delivery",
    "vendor management platform",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    type: "website",
    title: " — VFX Outsourcing & Project Management",
    url: "https://bidpack-app.vercel.app/",
    siteName: "BidPack",
    description:
      "BidPack connects VFX studios with trusted vendors to streamline outsourcing: manage bids, contracts, asset delivery and project workflows securely and transparently.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BidPack — VFX outsourcing platform",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrollWrapper />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
