"use client";
import { useState } from "react";

function ServiceCard({ 
  icon, 
  title, 
  desc, 
  features, 
  isActive, 
  onClick 
}: { 
  icon: React.ReactNode; 
  title: string; 
  desc: string; 
  features: string[];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div 
      className={`relative p-4 sm:p-6 lg:p-8 rounded-2xl cursor-pointer transition-all duration-500 ${
        isActive 
          ? 'bg-gradient-to-br from-[#2C3E50] to-[#34495e] text-white shadow-2xl scale-105' 
          : 'bg-white text-[#2C3E50] shadow-lg hover:shadow-xl hover:scale-102'
      }`}
      onClick={onClick}
    >
      {/* Background pattern for active state */}
      {isActive && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E50]/90 to-[#34495e]/90"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
        </div>
      )}
      
      <div className="relative z-10">
        <div className={`text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 lg:mb-6 ${isActive ? 'text-white animate-bounce' : 'text-[#2C3E50]'}`}>
          {icon}
        </div>
        <h3 className={`font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 lg:mb-4 ${isActive ? 'text-white' : 'text-[#2C3E50]'}`}>
          {title}
        </h3>
        <p className={`text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6 leading-relaxed ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
          {desc}
        </p>
        
        {/* Features list - only show when active */}
        {isActive && (
          <div className="space-y-2 lg:space-y-3 mb-4 animate-fade-in">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 lg:space-x-3 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white"></div>
                <span className="text-xs lg:text-sm text-white/80">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}
        
        {/* Active indicator and dropdown icon */}
        <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
          {isActive ? (
            <div className="w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full animate-pulse"></div>
          ) : (
            <div className="text-[#2C3E50] opacity-60 hover:opacity-100 transition-opacity duration-300">
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <span role="img" aria-label="Landing Page">🖥️</span>,
      title: "Landing Pages",
      desc: "Beautiful, conversion-focused landing pages tailored to your business goals.",
      features: [
        "High-converting designs",
        "A/B testing ready",
        "Mobile-first approach",
        "SEO optimized"
      ]
    },
    {
      icon: <span role="img" aria-label="E-commerce">🛒</span>,
      title: "Shopify & E-commerce",
      desc: "Custom Shopify and e-commerce solutions that drive sales and growth.",
      features: [
        "Custom store design",
        "Payment integration",
        "Inventory management",
        "Analytics setup"
      ]
    },
    {
      icon: <span role="img" aria-label="Support & SEO">🔧</span>,
      title: "Ongoing Support & SEO",
      desc: "Continuous support and SEO to keep your site running and ranking.",
      features: [
        "Monthly maintenance",
        "Performance monitoring",
        "Content updates",
        "SEO optimization"
      ]
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2C3E50] mb-4 sm:mb-6 lg:mb-8">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Comprehensive web solutions designed to grow your business
          </p>
        </div>

        {/* Responsive Layout */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-12">
          
          {/* Service Cards - Stack on mobile, 3-column grid on desktop */}
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              features={service.features}
              isActive={activeService === index}
              onClick={() => setActiveService(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 