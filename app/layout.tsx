import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProvider } from "../context/AppContext";
import ServiceWorkerRegistrar from "./components/ServiceWorkerRegistrar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ateneo de Davao Alumni Portal",
  description: "Support our community through giving",
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      url: "/icons/icon-192x192.svg",
      sizes: "192x192",
      type: "image/svg+xml",
    },
    {
      rel: "icon",
      url: "/icons/icon-512x512.svg",
      sizes: "512x512",
      type: "image/svg+xml",
    },
    {
      rel: "apple-touch-icon",
      url: "/icons/icon-512x512.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const geistVar = geistSans.variable;
  const geistMonoVar = geistMono.variable;

  return (
    <html lang="en" className={`${geistVar} ${geistMonoVar} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <AppProvider>
          <ServiceWorkerRegistrar />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
