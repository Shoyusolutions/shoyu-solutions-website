import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shoyu Solutions - Custom POS Systems Built for Your Business",
  description: "100% custom-built point-of-sale systems tailored to your exact business needs. 0% credit card processing fees. No templates, just perfect solutions.",
  keywords: "POS system, point of sale, custom POS, zero processing fees, restaurant POS, retail POS, coffee shop POS, mobile POS, business solutions",
  openGraph: {
    title: "Shoyu Solutions - Custom POS Systems with 0% Processing Fees",
    description: "100% custom POS systems with 0% credit card processing fees. Built exactly how you want it.",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}