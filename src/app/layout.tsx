import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { RootProviders } from "@/components/providers/RootProviders";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsAppButton } from "@/components/common/FloatingWhatsAppButton";

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
  metadataBase: new URL("https://littleplants.in"),
  title: "Little Plants (ಲಿಟಲ್ ಪ್ಲಾಂಟ್ಸ್) | Terracotta Botanical Studio & Plants India",
  description:
    "Little Plants: Curated living plants, wheel-thrown terracotta planters, organic plant care, and mindful botanical rituals delivered safely across 18,000+ Indian PIN codes.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Little Plants (ಲಿಟಲ್ ಪ್ಲಾಂಟ್ಸ್) | Terracotta Botanical Studio",
    description:
      "Curated living plants, wheel-thrown terracotta planters, and mindful botanical care delivered across India.",
    siteName: "Little Plants",
    images: [
      {
        url: "/images/brand/dp.jpg",
        width: 1200,
        height: 1200,
        alt: "Little Plants Brand Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Plants (ಲಿಟಲ್ ಪ್ಲಾಂಟ್ಸ್)",
    description: "Curated greenery & handcrafted planters for modern Indian homes.",
    images: ["/images/brand/dp.jpg"],
  },
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
          <FloatingWhatsAppButton />
          <Footer />
        </RootProviders>
      </body>
    </html>
  );
}
