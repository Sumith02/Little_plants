import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { RootProviders } from "@/components/providers/RootProviders";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { Footer } from "@/components/layout/Footer";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif-brand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans-brand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Little Plants (ಲಿಟಲ್ ಪ್ಲಾಂಟ್ಸ್) | Terracotta Botanical Studio & Plants India",
  description:
    "Little Plants: Curated living plants, wheel-thrown terracotta planters, organic plant care, and mindful botanical rituals delivered safely across 18,000+ Indian PIN codes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-sans selection:bg-terracotta selection:text-white">
        <RootProviders>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <CartDrawer />
          <Footer />
        </RootProviders>
      </body>
    </html>
  );
}
