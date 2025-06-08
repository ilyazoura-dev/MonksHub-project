import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfitSerif = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MonksHub - Find Best Online Mentors",
  description: "Best Mentors for Best People",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfitSerif.className} antialiased`}>{children}</body>
    </html>
  );
}
