"use client";

export default function HowItWorks() {
  const steps = [
    { 
      title: "Call", 
      desc: "Schedule a 15-min call",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 0v14a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2zm18-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5zm0 0v14a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2h2a2 2 0 012 2v2z" /></svg>
    },
    { 
      title: "Build", 
      desc: "We design + develop your site",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.293 6.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-8.586 8.586a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414l8.586-8.586z" /></svg>
    },
    { 
      title: "Launch", 
      desc: "We go live and support your site",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden" id="how-it-works">
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-12 sm:mb-16 text-center drop-shadow-lg">
          How It Works
        </h2>
        
        {/* Mobile-first Timeline Layout */}
        <div className="space-y-6 sm:space-y-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 sm:left-12 top-16 sm:top-20 w-0.5 h-8 sm:h-12 bg-gradient-to-b from-[#2C3E50] to-[#34495e] lg:h-16"></div>
              )}
              
              {/* Step Card */}
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group lg:shadow-2xl lg:hover:shadow-3xl lg:transform lg:hover:-translate-y-2">
                {/* Enhanced background gradient on hover for desktop */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/5 to-[#34495e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:from-[#2C3E50]/10 lg:to-[#34495e]/10"></div>
                
                {/* Desktop-only depth layers */}
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-white/80 to-gray-50/80 rounded-2xl"></div>
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-[#2C3E50]/5 via-transparent to-[#34495e]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-6 sm:p-8 lg:p-10">
                  <div className="flex items-start space-x-4 sm:space-x-6 lg:space-x-8">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-[#2C3E50] to-[#34495e] text-white text-xl sm:text-2xl lg:text-3xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 lg:shadow-2xl lg:group-hover:shadow-3xl">
                          {index + 1}
                        </div>
                        {/* Icon overlay */}
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#2C3E50] group-hover:scale-110 transition-transform duration-300 lg:shadow-lg">
                          <div className="text-[#2C3E50] lg:text-lg">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl text-[#2C3E50] mb-2 sm:mb-3 lg:mb-4 group-hover:text-[#34495e] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced decorative elements for desktop */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#2C3E50]/20 rounded-full group-hover:bg-[#2C3E50]/40 transition-all duration-300 lg:w-3 lg:h-3"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#34495e]/10 rounded-full group-hover:bg-[#34495e]/20 transition-all duration-300 lg:w-4 lg:h-4"></div>
                
                {/* Desktop-only additional decorative elements */}
                <div className="hidden lg:block absolute top-8 left-8 w-1 h-1 bg-[#2C3E50]/30 rounded-full group-hover:bg-[#2C3E50]/50 transition-all duration-300"></div>
                <div className="hidden lg:block absolute bottom-8 right-8 w-2 h-2 bg-[#34495e]/20 rounded-full group-hover:bg-[#34495e]/40 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10">
            Ready to get started? Let&apos;s build something amazing together.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center bg-[#2C3E50] text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full hover:bg-[#34495e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-base sm:text-lg lg:text-xl lg:shadow-2xl lg:hover:shadow-3xl"
          >
            Start Your Project
            <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ml-2 sm:ml-3 lg:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Custom keyframes for floating animation */}
      <style jsx>{`
        @keyframes float-slow { 0% { transform: translateY(0); } 50% { transform: translateY(20px); } 100% { transform: translateY(0); } }
        @keyframes float-slower { 0% { transform: translateY(0); } 50% { transform: translateY(-24px); } 100% { transform: translateY(0); } }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 12s ease-in-out infinite; }
      `}</style>
    </section>
  );
} 