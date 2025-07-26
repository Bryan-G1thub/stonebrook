"use client";
import Hero from "./components/Hero";
import OurOffering from "./components/OurOffering";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Principles from "./components/Principles";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="font-sans bg-[#f9f9f9] text-[#333] min-h-screen flex flex-col">
      <Hero />
      <OurOffering />
      <Services />
      <HowItWorks />
      <Principles />
      <About />
      <Contact />
    </div>
  );
}
