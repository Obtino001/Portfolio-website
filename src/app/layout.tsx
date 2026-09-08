import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { SITE_DATA } from "@/content/site";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08090C",
};

export const metadata: Metadata = {
  title: {
    default: SITE_DATA.meta.title,
    template: "%s | Yasir — Shopify Theme Engineer",
  },
  description: SITE_DATA.meta.description,
  keywords: SITE_DATA.meta.keywords,
  authors: [{ name: SITE_DATA.meta.author }],
  creator: SITE_DATA.meta.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_DATA.meta.url,
    title: SITE_DATA.meta.title,
    description: SITE_DATA.meta.description,
    siteName: "Yasir — Shopify & CRO Engineer",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_DATA.meta.title,
    description: SITE_DATA.meta.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} scroll-smooth`}>
      <body className="bg-background text-slate-100 font-body antialiased selection:bg-brand-mint/30 selection:text-brand-mint-light">
        {children}
      </body>
    </html>
  );
}
