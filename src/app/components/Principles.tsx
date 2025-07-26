"use client";
import { useState } from "react";
import Link from "next/link";

function PrincipleCard({ 
  principle, 
  isActive, 
  onClick 
}: { 
  principle: any; 
  isActive: boolean; 
  onClick: () => void;
}) {
  return (
    <div 
      className={`relative cursor-pointer transition-all duration-500 ${
        isActive ? 'scale-105 z-20' : 'scale-100 hover:scale-102'
      }`}
      onClick={onClick}
    >
      <div className={`relative rounded-2xl transition-all duration-500 bg-white text-[#2C3E50] shadow-lg hover:shadow-xl ${
        isActive ? 'shadow-2xl ring-4 ring-[#2C3E50]/20' : ''
      }`}>
        <div className="relative p-6 sm:p-8 h-full flex flex-col items-center justify-center text-center">
          <div className={`text-3xl sm:text-4xl mb-4 transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
            {principle.graphic}
          </div>
          <h3 className="font-bold text-lg sm:text-xl mb-2 transition-colors duration-300 text-[#2C3E50]">
            {principle.heading}
          </h3>
          <p className="text-sm sm:text-base leading-relaxed transition-colors duration-300 text-gray-600">
            {principle.subtext}
          </p>
          
          {/* Active indicator */}
          {isActive && (
            <div className="absolute -top-2 -right-2">
              <div className="w-6 h-6 bg-[#2C3E50] rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Principles() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const principles = [
    {
      heading: "Simplicity wins.",
      subtext: "We cut through the noise.",
      graphic: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute w-8 h-5 bg-current opacity-80 rounded-lg" style={{top: '8px', left: '4px'}} />
          <div className="absolute w-6 h-4 bg-gray-200 rounded-lg" style={{top: '0px', left: '12px'}} />
          <div className="absolute w-4 h-3 bg-gray-100 rounded-lg" style={{top: '16px', left: '18px'}} />
        </div>
      )
    },
    {
      heading: "Speed is power.",
      subtext: "We move fast, always.",
      graphic: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute left-2 top-6 w-6 h-1 bg-gray-200 rounded-full" />
          <div className="absolute left-4 top-8 w-4 h-1 bg-gray-300 rounded-full" />
          <div className="absolute left-6 top-4 w-8 h-3 bg-current rounded-r-full" />
          <div className="absolute left-12 top-4 w-2 h-3 bg-current rounded-r-full rotate-12" />
          <div className="absolute left-1 top-3 w-1 h-1 bg-gray-300 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
          <div className="absolute left-0 top-5 w-1 h-1 bg-gray-300 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
        </div>
      )
    },
    {
      heading: "Details matter.",
      subtext: "We sweat the small stuff.",
      graphic: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="w-6 h-6 border-3 border-current rounded-full" />
          <div className="w-2 h-2 bg-current rounded-full absolute left-6 top-6" />
          <div className="w-3 h-1 bg-gray-300 rounded absolute left-7 top-7 rotate-45" />
          <div className="absolute inset-0 border-2 border-current rounded-full scale-75 opacity-30 animate-pulse"></div>
        </div>
      )
    },
    {
      heading: "Collaboration creates.",
      subtext: "We build together.",
      graphic: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="w-6 h-6 border-3 border-current rounded-full absolute left-2 top-2 opacity-80" />
          <div className="w-6 h-6 border-3 border-gray-200 rounded-full absolute left-4 top-4 opacity-80" />
          <div className="absolute top-6 left-6 w-1 h-1 bg-current rounded-full animate-pulse"></div>
          <div className="absolute top-6 right-6 w-1 h-1 bg-gray-300 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
        </div>
      )
    }
  ];

  return (
    <section className="w-full py-16 sm:py-32 px-4 bg-gradient-to-br from-gray-900 via-[#2C3E50] to-[#34495e] relative overflow-hidden" id="principles">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11.7) % 100}%`,
              animationDelay: `${(i * 0.1) % 2}s`,
              animationDuration: `${3 + (i % 2)}s`
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/10 rotate-45 animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white/10 rounded-full animate-spin" style={{animationDuration: '50s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-white/10 rotate-45 animate-spin" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
            Our Principles
          </h2>
          <p className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            The core values that guide every project we create
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative mb-16 sm:mb-24">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-8 sm:p-12">
              <div className="text-center">
                <div className="text-4xl sm:text-6xl font-extrabold mb-4 sm:mb-6 animate-bounce text-white">
                  We set the standard.
                </div>
                <div className="text-lg sm:text-2xl font-medium text-white/90 mb-4">
                  No compromises. Only excellence.
                </div>
                <div className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
                  Every project we touch becomes a testament to our unwavering commitment to quality, innovation, and client success.
                </div>
              </div>
              
              {/* Rotating ring around hero */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/20 animate-spin" style={{animationDuration: '60s'}}></div>
              <div className="absolute inset-4 rounded-3xl border border-white/10 animate-spin" style={{animationDuration: '40s', animationDirection: 'reverse'}}></div>
            </div>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <PrincipleCard
                key={index}
                principle={principle}
                isActive={activePrinciple === index}
                onClick={() => setActivePrinciple(index)}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-24">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-white text-[#2C3E50] px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
            >
              Work With Us
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/#services" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#2C3E50] transition-all duration-300 font-semibold"
            >
              Learn More
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center border-2 border-white/50 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-semibold"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>

      {/* Custom keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
} 