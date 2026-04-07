import type { Metadata } from "next";
import TourWalkthrough from "../components/TourWalkthrough";

export const metadata: Metadata = {
  title: "The Process | Stonebrook",
  description:
    "A cinematic walkthrough of how Stonebrook partners with clients—from first conversation to launch and beyond.",
};

export default function TourPage() {
  return <TourWalkthrough />;
}
