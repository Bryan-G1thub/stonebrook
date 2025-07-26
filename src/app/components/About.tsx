"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="w-full py-16 sm:py-32 px-4 bg-white relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Brooklyn Bridge Image */}
              <div className="relative w-full h-96 lg:h-[500px]">
                <Image
                  src="/brooklyn.jpg"
                  alt="Manhattan Bridge at dusk with New York City skyline"
                  fill
                  className="object-contain"
                  priority
                />
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Overlay text */}
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm font-medium opacity-90">Brooklyn, NY</div>
                  <div className="text-xs opacity-75">Where innovation meets urban culture</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">
                  About Stonebrook
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#2C3E50] to-[#34495e] rounded-full mb-6"></div>
              </div>

              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  Stonebrook is a small group comprised of Brooklyn-based talents driven by the pursuit of digital awareness. 
                  We believe in the small businesses that drive urban life, so we pave the way for these businesses to scale 
                  leveraging the power of a simple domain.
                </p>
                
                <p>
                  Born from the vibrant streets of Brooklyn, we understand the pulse of urban entrepreneurship. 
                  Every coffee shop, every local store, every neighborhood service—these are the heartbeats of our communities. 
                  We're here to amplify their voices in the digital world.
                </p>
                
                <p>
                  Our approach is simple yet powerful: we transform complex digital challenges into elegant, 
                  user-friendly solutions that help small businesses thrive in an increasingly digital marketplace.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-[#2C3E50] text-white px-8 py-4 rounded-full hover:bg-[#34495e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
                >
                  Work With Us
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 