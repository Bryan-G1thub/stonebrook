"use client";
import { useState } from "react";
import Link from "next/link";

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
      className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
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
        <div className={`text-4xl mb-4 ${isActive ? 'text-white' : 'text-[#2C3E50]'}`}>
          {icon}
        </div>
        <h3 className={`font-bold text-xl mb-3 ${isActive ? 'text-white' : 'text-[#2C3E50]'}`}>
          {title}
        </h3>
        <p className={`text-sm mb-4 leading-relaxed ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
          {desc}
        </p>
        
        {/* Features list */}
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-[#2C3E50]'}`}></div>
              <span className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>
        
        {/* Active indicator */}
        {isActive && (
          <div className="absolute top-4 right-4">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        )}
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
    <section className="w-full py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2C3E50] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive web solutions designed to grow your business
          </p>
        </div>

        {/* Experimental Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side - Service Cards (4 columns) */}
          <div className="lg:col-span-4 space-y-6">
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

          {/* Right Side - Dynamic Content (8 columns) */}
          <div className="lg:col-span-8">
            <div className="relative h-full min-h-[600px]">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50 rounded-3xl"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-[#2C3E50]/10 to-[#34495e]/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-12 left-12 w-16 h-16 bg-gradient-to-br from-[#2C3E50]/5 to-[#34495e]/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Main Content Area */}
              <div className="relative p-12 h-full flex flex-col justify-center">
                <div className="max-w-2xl">
                  {/* Service Icon */}
                  <div className="text-8xl mb-8 animate-bounce">
                    {services[activeService].icon}
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
                    {services[activeService].title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {services[activeService].desc}
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {services[activeService].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-white/70 rounded-xl backdrop-blur-sm border border-gray-100">
                        <div className="w-2 h-2 bg-[#2C3E50] rounded-full"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Section */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center bg-[#2C3E50] text-white px-8 py-4 rounded-full hover:bg-[#1a2533] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Get Started
                      <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center border-2 border-[#2C3E50] text-[#2C3E50] px-8 py-4 rounded-full hover:bg-[#2C3E50] hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </Link>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center border-2 border-[#2C3E50]/50 text-[#2C3E50] px-8 py-4 rounded-full hover:bg-[#2C3E50]/10 transition-all duration-300"
                    >
                      Schedule a Call
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Decorative Lines */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2C3E50" stopOpacity="0.1"/>
                      <stop offset="50%" stopColor="#2C3E50" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#2C3E50" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                  <path d="M 20 20 Q 50 20 80 20" stroke="url(#lineGradient)" strokeWidth="1" fill="none" strokeDasharray="2,3"/>
                  <path d="M 20 80 Q 50 80 80 80" stroke="url(#lineGradient)" strokeWidth="1" fill="none" strokeDasharray="2,3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 