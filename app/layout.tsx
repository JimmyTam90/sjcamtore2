import type { Metadata, Viewport } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";
import { MERCHANT_ORIGIN } from "@/lib/affiliate";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: "en_US",
    images: [{ url: "https://sjcamstores.com/cdn/shop/files/sj10-pro-dual-screen-action-camera-524920.png?v=1782108407", alt: "SJCAM SJ10 Pro dual screen action camera" }],
  },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0F172A" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Merchant connection warm-up: origin only, derived from SOURCE_WEBSITE. */}
        <link rel="preconnect" href={MERCHANT_ORIGIN} />
        <link rel="dns-prefetch" href={MERCHANT_ORIGIN} />
      </head>
      <body className="pb-24 md:pb-0">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
