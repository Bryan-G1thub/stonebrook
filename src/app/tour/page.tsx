import type { Metadata } from "next";
import TourWalkthrough from "../components/TourWalkthrough";

export const metadata: Metadata = {
  title: "The Process | Stonebrook",
  description:
    "A scroll-through of how Stonebrook works with clients—from discovery and mockups to launch and support—told in plain language.",
};

export default function TourPage() {
  return <TourWalkthrough />;
}
