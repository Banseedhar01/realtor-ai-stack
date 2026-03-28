import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getBaseUrl } from "@/lib/seo";
import "./globals.css";

const headingFont = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Best AI Tools for Real Estate Agents (2026)",
    template: "%s | AI Tools for Real Estate Agents"
  },
  description:
    "Discover the best AI tools for real estate agents in the US. Compare lead generation, listing copy, social media, and calling platforms.",
  keywords: [
    "AI tools for real estate agents",
    "best AI tools for realtors",
    "AI for property listings"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "Best AI Tools for Real Estate Agents (2026)",
    description:
      "Compare the best AI software for US realtors: lead generation, listing descriptions, social media, and marketing workflows.",
    siteName: "AI Tools for Real Estate Agents",
    images: [
      {
        url: `${baseUrl}/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "AI tools for real estate agents"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Tools for Real Estate Agents (2026)",
    description:
      "Actionable comparisons of AI tools for realtors, including pricing and real-world use cases.",
    images: [`${baseUrl}/og-default.jpg`]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
