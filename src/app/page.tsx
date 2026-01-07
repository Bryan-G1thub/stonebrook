"use client";
import Hero from "./components/Hero";
import OurOffering from "./components/OurOffering";
import SimpleProcess from "./components/SimpleProcess";
import MediaCarousel from "./components/MediaCarousel";
import Contact from "./components/Contact";
import About from "./components/About";

export default function Home() {
  return (
    <div className="font-sans bg-[#f9f9f9] text-[#333] min-h-screen flex flex-col">
      <Hero />
      <OurOffering />
      <SimpleProcess />
      <MediaCarousel />
      <About />
      <Contact />
    </div>
  );
}

