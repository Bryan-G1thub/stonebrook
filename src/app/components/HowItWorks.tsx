"use client";

export default function HowItWorks() {
  const steps = [
    { title: "Call", desc: "Schedule a 15-min call" },
    { title: "Build", desc: "We design + develop your site" },
    { title: "Launch", desc: "We go live and support your site" },
  ];
  const icons = [
    // Phone
    <svg key="call" className="w-10 h-10 transition-transform duration-300 group-hover:animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 0v14a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2zm18-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5zm0 0v14a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2h2a2 2 0 012 2v2z" /></svg>,
    // Hammer (build)
    <svg key="build" className="w-10 h-10 transition-transform duration-300 group-hover:animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.293 6.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-8.586 8.586a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414l8.586-8.586z" /></svg>,
    // Rocket (launch)
    <svg key="launch" className="w-10 h-10 transition-transform duration-300 group-hover:animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>,
  ];
  return (
    <section className="w-full py-28 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden" id="how-it-works">
      {/* Decorative floating SVGs */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none animate-float-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="#2C3E50" fillOpacity="0.15" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-10 pointer-events-none animate-float-slower">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="30" y="30" width="140" height="140" rx="40" fill="#2C3E50" fillOpacity="0.12" />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-[#2C3E50] mb-20 text-center drop-shadow-lg">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-center items-stretch">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={
                `flex-1 flex flex-col items-center text-center rounded-3xl transition-all duration-300 cursor-pointer 
                bg-gradient-to-br from-[#2C3E50] to-[#34495e] text-white border-4 border-[#2C3E50] shadow-2xl 
                group px-10 py-20 min-h-[420px] relative overflow-hidden
                hover:scale-105 hover:-translate-y-2 hover:shadow-[0_12px_48px_0_rgba(44,62,80,0.25)]
                hover:border-white/60 hover:bg-gradient-to-br hover:from-[#2C3E50] hover:to-[#34495e]
                hover:ring-4 hover:ring-white/20`
              }
              style={{ minWidth: 0 }}
            >
              {/* Spotlight effect - appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-t from-white/40 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Decorative floating dots */}
              <div className="absolute top-6 left-6 w-4 h-4 bg-white/20 rounded-full blur-sm group-hover:bg-white/40 transition-all duration-300"></div>
              <div className="absolute bottom-8 right-8 w-6 h-6 bg-white/10 rounded-full blur group-hover:bg-white/30 transition-all duration-300"></div>
              
              {/* Step number with animated pulse on hover */}
              <div className="mb-8 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2C3E50]/30 to-[#34495e]/10 blur-md scale-125"></div>
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-[#2C3E50] text-3xl font-bold border-4 border-[#2C3E50] group-hover:border-white/80 group-hover:animate-pulse transition-all duration-300 shadow-lg">
                  {i + 1}
                </div>
              </div>
              
              {/* Icon with bounce on hover */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 group-hover:bg-white/30 transition-all duration-300 shadow-md">
                  {icons[i]}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-bold text-2xl mb-4 tracking-wide transition-colors duration-300 drop-shadow-sm">{step.title}</h3>
              
              {/* Description */}
              <p className="text-lg font-medium opacity-90 transition-colors duration-300 mb-4 max-w-xs mx-auto drop-shadow-sm">{step.desc}</p>
              
              {/* Decorative bottom line */}
              <div className="w-16 h-1 rounded-full bg-white/30 group-hover:bg-white/60 mx-auto mt-6 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
      {/* Custom keyframes for floating animation and hover effects */}
      <style jsx>{`
        @keyframes float-slow { 0% { transform: translateY(0); } 50% { transform: translateY(20px); } 100% { transform: translateY(0); } }
        @keyframes float-slower { 0% { transform: translateY(0); } 50% { transform: translateY(-24px); } 100% { transform: translateY(0); } }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 12s ease-in-out infinite; }
        @keyframes pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.7); } 70% { box-shadow: 0 0 0 12px rgba(255,255,255,0); } }
        .group-hover\\:animate-pulse:hover { animation: pulse 1s cubic-bezier(0.4,0,0.6,1) infinite; }
      `}</style>
    </section>
  );
} 