import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Soundboard from "./Soundboard";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "500"],
  variable: "--font-soundboard-body",
});

export const metadata: Metadata = {
  title: "Soundboard",
  description: "A private soundboard. Tap a pad to play.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SoundboardPage() {
  return (
    <div className={ibmPlexSans.variable}>
      <Soundboard />
    </div>
  );
}
