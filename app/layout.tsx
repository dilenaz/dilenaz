import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host") ?? "localhost:3000";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const title = "Dilenaz Özdemir — Yazılım & Otomasyon";
  const description = "Yazılım mühendisliği öğrencisi Dilenaz Özdemir'in web, otomasyon, veri ve gömülü sistem projeleri.";

  return {
    metadataBase: base,
    title: { default: title, template: "%s | Dilenaz Özdemir" },
    description,
    applicationName: "Dilenaz Özdemir Portföy",
    authors: [{ name: "Dilenaz Özdemir", url: "https://dilenazozdemir.com.tr" }],
    creator: "Dilenaz Özdemir",
    publisher: "Dilenaz Özdemir",
    keywords: ["Dilenaz Özdemir", "yazılım mühendisi", "yazılım portföyü", "web geliştirici", "otomasyon", "yapay zekâ", "Aksaray"],
    alternates: { canonical: "https://dilenazozdemir.com.tr" },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "tr_TR",
      url: "https://dilenazozdemir.com.tr",
      siteName: "Dilenaz Özdemir",
      images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Dilenaz Özdemir — Yazılım ve otomasyon portföyü" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
