"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#2C3E50] via-[#34495e] to-[#2C3E50] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Stonebrook</h3>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                Brooklyn-based web development studio crafting digital experiences that help small businesses thrive in the digital marketplace.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white/90">hello@stonebrook.studio</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" className="text-white/80 hover:text-white transition-colors">
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/80 hover:text-white transition-colors">
                  E-commerce Sites
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/80 hover:text-white transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/80 hover:text-white transition-colors">
                  Digital Consulting
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/80 hover:text-white transition-colors">
                  Brand Identity
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-white/80 hover:text-white transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h4 className="text-xl font-semibold mb-2">Ready to start your project?</h4>
              <p className="text-white/80">Let's build something amazing together.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/contact" 
                className="bg-white text-[#2C3E50] px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-sm"
              >
                Get Started
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 font-semibold text-sm"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/60 text-sm">
              © 2024 Stonebrook. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-white/60">Brooklyn, NY</span>
              <span className="text-white/60">•</span>
              <span className="text-white/60">Serving clients worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 