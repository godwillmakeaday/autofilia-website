import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Autofilia — For the Love of Cars",
  description: "A premium car culture platform for people who love cars before they own them, while they own them, and even after they outgrow them.",
  metadataBase: new URL("https://autofilia.example"),
  openGraph: {
    title: "Autofilia",
    description: "For people who love cars before, during, and beyond ownership.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
