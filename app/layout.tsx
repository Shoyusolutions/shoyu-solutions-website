import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CustomPOS - Simple, Affordable POS Solutions for Small Business",
  description: "Custom-built point-of-sale systems tailored for your small business needs. No monthly fees, no complexity. Save 70% compared to Square, Toast, or Clover.",
  keywords: "POS system, point of sale, small business, custom POS, affordable POS, restaurant POS, retail POS",
  openGraph: {
    title: "CustomPOS - Simple, Affordable POS Solutions",
    description: "Custom-built POS systems for small businesses. No monthly fees. Save 70% vs competitors.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
