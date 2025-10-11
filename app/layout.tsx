import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollWrapper from "@/components/animation/SmoothScrollWrapper";

import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
  openGraph: {
    type: "website",
    title: " — VFX Outsourcing & Project Management",
    url: "https://bidpack-app.vercel.app/",
    siteName: "BidPack",
    description:
      "BidPack connects VFX studios with trusted vendors to streamline outsourcing: manage bids, contracts, asset delivery and project workflows securely and transparently.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="BidPack" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="google-site-verification"
          content="dnZt_u65YSiWSBWwEuxjZwH--V9mPnOHUs5QYcBuxQc"
        />
      </Head>
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
