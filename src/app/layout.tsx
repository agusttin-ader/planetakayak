import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ScrollRestoration } from "@/components/layout/ScrollRestoration";
import { siteConfig } from "@/data/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const metadataBaseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl,
  title: {
    default: `${siteConfig.name} — Kayak en Bariloche`,
    template: `%s · ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  openGraph: {
    type: "website",
    locale: siteConfig.locale.replace("_", "-"),
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: `${siteConfig.name} — Kayak en Bariloche`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Kayak en Bariloche`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f766e",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} className={`${dmSans.variable} h-full scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{history.scrollRestoration='manual';}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-dvh flex-col overflow-x-clip antialiased selection:bg-[var(--pk-accent-soft)] selection:text-[var(--pk-accent-deep)]">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
