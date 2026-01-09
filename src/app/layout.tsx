import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logbook Komisi OREA 85",
  description: "Aplikasi pencatatan komisi treatment OREA 85 dengan fitur real-time tracking dan manajemen data",
  keywords: ["OREA 85", "Komisi", "Treatment", "Logbook", "Next.js", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "OREA 85" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Logbook Komisi OREA 85",
    description: "Aplikasi pencatatan komisi treatment OREA 85",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logbook Komisi OREA 85",
    description: "Aplikasi pencatatan komisi treatment OREA 85",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id-ID" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#f39c12" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="OREA 85 Komisi" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
