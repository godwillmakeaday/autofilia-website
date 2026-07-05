import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Autofilia — For the Love of Cars Before, During, and Beyond Ownership",
  description: "Autofilia is a premium car culture platform for people who love cars before they own them, while they own them, and even after they outgrow them.",
  openGraph: {
    title: "Autofilia",
    description: "For the love of cars before, during, and beyond ownership.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
