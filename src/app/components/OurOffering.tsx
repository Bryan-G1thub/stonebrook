"use client";
import React from "react";
import Link from "next/link";

export default function OurOffering() {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-white to-gray-50" id="offering">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">What We Deliver</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Modern, clean websites built efficiently for small businesses that care about results.</p>
        </div>

        {/* Modern Split Design */}
        <div className="relative mb-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl"></div>
          
          {/* Split container */}
          <div className="relative p-8 pb-16 min-h-[600px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full items-center">
              
              {/* Left side - Modern Illustration */}
              <div className="relative">
                {/* Modern website illustration */}
                <div className="relative w-96 h-96 mx-auto">
                  {/* Main browser window */}
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                    {/* Browser header */}
                    <div className="h-8 bg-gray-100 flex items-center px-4 space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="flex-1"></div>
                      <div className="w-32 h-4 bg-gray-200 rounded-full"></div>
                    </div>
                    
                    {/* Content area */}
                    <div className="p-6">
                      {/* Header with logo and navigation */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-[#2C3E50] to-[#34495e] rounded-lg flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-sm"></div>
                          </div>
                          <div className="w-16 h-4 bg-gradient-to-r from-[#2C3E50] to-[#34495e] rounded"></div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-6 h-2 bg-gray-300 rounded"></div>
                          <div className="w-6 h-2 bg-gray-300 rounded"></div>
                          <div className="w-6 h-2 bg-gray-300 rounded"></div>
                        </div>
                      </div>
                      
                      {/* Hero section with image */}
                      <div className="mb-6">
                        <div className="h-4 bg-gradient-to-r from-[#2C3E50] to-[#34495e] rounded-full w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded-full w-full mb-4"></div>
                        <div className="relative mb-4">
                          <div className="w-full h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center border border-gray-200">
                            <div className="grid grid-cols-4 gap-1">
                              <div className="w-3 h-3 bg-blue-300 rounded"></div>
                              <div className="w-3 h-3 bg-purple-300 rounded"></div>
                              <div className="w-3 h-3 bg-indigo-300 rounded"></div>
                              <div className="w-3 h-3 bg-blue-300 rounded"></div>
                              <div className="w-3 h-3 bg-purple-300 rounded"></div>
                              <div className="w-3 h-3 bg-indigo-300 rounded"></div>
                              <div className="w-3 h-3 bg-blue-300 rounded"></div>
                              <div className="w-3 h-3 bg-purple-300 rounded"></div>
                            </div>
                          </div>
                          <div className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-16 h-7 bg-gradient-to-r from-[#2C3E50] to-[#34495e] rounded-lg flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
                          </div>
                          <div className="w-12 h-7 border border-gray-300 rounded-lg flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content grid with icons */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-blue-100 rounded flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="flex-1">
                              <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
                              <div className="w-2/3 h-1.5 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-purple-100 rounded flex items-center justify-center">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            </div>
                            <div className="flex-1">
                              <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
                              <div className="w-2/3 h-1.5 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Footer with stats */}
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-gray-500">Live</span>
                          </div>
                          <div className="flex space-x-3">
                            <div className="text-center">
                              <div className="text-xs font-semibold text-gray-700">2.1s</div>
                              <div className="text-xs text-gray-400">Load</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs font-semibold text-gray-700">98%</div>
                              <div className="text-xs text-gray-400">Score</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating performance badge */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-700">Fast</div>
                        <div className="text-xs text-gray-400">Performance</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Performance indicators */}
                  <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                    <div className="flex flex-col space-y-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                  
                  {/* Enhanced speed lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2C3E50" stopOpacity="0.4"/>
                          <stop offset="50%" stopColor="#2C3E50" stopOpacity="0.6"/>
                          <stop offset="100%" stopColor="#2C3E50" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M 0 25 Q 50 25 100 25" stroke="url(#speedGradient)" strokeWidth="2" fill="none" strokeDasharray="2,3" className="animate-pulse"/>
                      <path d="M 0 75 Q 50 75 100 75" stroke="url(#speedGradient)" strokeWidth="2" fill="none" strokeDasharray="2,3" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                      <path d="M 0 50 Q 50 50 100 50" stroke="url(#speedGradient)" strokeWidth="1" fill="none" strokeDasharray="1,2" className="animate-pulse" style={{animationDelay: '1s'}}/>
                    </svg>
                  </div>
                  
                  {/* Ambient particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#2C3E50]/30 rounded-full animate-pulse"
                        style={{
                          left: `${15 + (i * 12) % 70}%`,
                          top: `${20 + (i * 10) % 60}%`,
                          animationDelay: `${(i * 0.3) % 2}s`,
                          animationDuration: `${2 + (i % 2)}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right side - Messaging */}
              <div className="text-center lg:text-left">
                <div className="max-w-lg mx-auto lg:mx-0">
                  {/* Main heading */}
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6 leading-tight">
                    Compact modern websites,{' '}
                    <span className="bg-gradient-to-r from-[#2C3E50] to-[#34495e] bg-clip-text text-transparent">
                      built to perform
                    </span>
                  </h2>
                  
                  {/* Description */}
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    We create clean, fast websites that convert visitors into customers. 
                    Every element is optimized for speed, clarity, and results.
                  </p>
                  
                  {/* Modern Responsive Offerings Gallery */}
                  <div className="w-full flex flex-wrap justify-center gap-10 py-12">
                    {/* Blue icon circles only */}
                    {[
                      {
                        icon: (
                          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        ),
                        title: "Mobile First",
                        subtitle: "Responsive design",
                        className: "mt-8 mr-2"
                      },
                      {
                        icon: (
                          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        ),
                        title: "Lightning Fast",
                        subtitle: "Optimized performance",
                        className: "-mt-2 ml-4"
                      },
                      {
                        icon: (
                          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        ),
                        title: "SEO Ready",
                        subtitle: "Search optimized",
                        className: "mt-6 -ml-2"
                      },
                      {
                        icon: (
                          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        ),
                        title: "Convert Ready",
                        subtitle: "Lead generation",
                        className: "-mt-4 ml-2"
                      }
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#2C3E50] to-[#34495e] w-56 h-56 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 p-6 ${item.className}`}
                      >
                        <div className="mb-3 text-white flex items-center justify-center">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white text-center mb-1 whitespace-normal break-words">{item.title}</h3>
                        <p className="text-base text-white/90 text-center whitespace-normal break-words">{item.subtitle}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA button */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link href="/contact" className="inline-flex items-center bg-[#2C3E50] text-white px-8 py-4 rounded-full hover:bg-[#1a2533] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Start Your Project
                      <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link href="/#services" className="inline-flex items-center border-2 border-[#2C3E50] text-[#2C3E50] px-8 py-4 rounded-full hover:bg-[#2C3E50] hover:text-white transition-all duration-300">
                      View Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 