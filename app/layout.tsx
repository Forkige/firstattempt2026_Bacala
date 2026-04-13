import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alumni Donation Portal",
  description: "Support our community through giving",
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
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
