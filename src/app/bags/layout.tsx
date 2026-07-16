import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bags",
  description:
    "Pokemon pack bag round planner — margins, costs, chase odds, and budget.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BagsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-zinc-900 antialiased`}
      style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
    >
      {children}
    </div>
  );
}
