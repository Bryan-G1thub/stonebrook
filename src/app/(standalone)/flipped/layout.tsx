import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    template: "%s | Flipped",
    default: "Flipped",
  },
  description: "Legal information for Flipped.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FlippedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="mb-10 text-sm tracking-wide text-[#888]">Flipped</p>
        {children}
        <nav className="mt-16 flex gap-6 border-t border-[#e5e5e5] pt-8 text-sm text-[#555]">
          <Link
            href="/flipped/privacy-policy"
            className="underline-offset-4 hover:text-[#1a1a1a] hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/flipped/tos"
            className="underline-offset-4 hover:text-[#1a1a1a] hover:underline"
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </div>
  );
}
