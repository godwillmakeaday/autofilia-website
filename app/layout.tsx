import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Autofilia — For the Love of Cars Before, During, and Beyond Ownership",
  description: "Autofilia is a premium automotive affection platform for people who love cars before they own them, while they own them, and even after they outgrow them.",
  metadataBase: new URL("https://autofilia-website.vercel.app"),
  openGraph: {
    title: "Autofilia — Automotive Affection",
    description: "For people who love cars before they own them, while they own them, and even after they outgrow them.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
