"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const sidePanel = target.closest('.mobile-side-panel');
      const menuButton = target.closest('.mobile-menu-button');
      
      // Only close if clicking outside both the panel and the menu button
      if (!sidePanel && !menuButton) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-sm text-white shadow-lg py-3' 
          : 'bg-transparent text-white py-6'
      }`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
            Stonebrook
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="hover:text-gray-300 transition-colors">Services</Link>
            <Link href="/#how-it-works" className="hover:text-gray-300 transition-colors">Process</Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link href="/contact" className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">Get Quote</Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white mobile-menu-button p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Backdrop Overlay - Higher z-index than header */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-50 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Side Panel - Highest z-index */}
      <div className={`mobile-side-panel md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Panel Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-[#2C3E50]">Menu</h3>
          <button 
            onClick={closeMobileMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-6 space-y-6">
          <Link 
            href="/#services" 
            className="flex items-center justify-between text-lg font-semibold text-[#2C3E50] hover:text-[#34495e] transition-colors py-3 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            <span>Services</span>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <Link 
            href="/#how-it-works" 
            className="flex items-center justify-between text-lg font-semibold text-[#2C3E50] hover:text-[#34495e] transition-colors py-3 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            <span>Process</span>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <Link 
            href="/about" 
            className="flex items-center justify-between text-lg font-semibold text-[#2C3E50] hover:text-[#34495e] transition-colors py-3 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            <span>About</span>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <Link 
            href="/contact" 
            className="flex items-center justify-between text-lg font-semibold text-[#2C3E50] hover:text-[#34495e] transition-colors py-3 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            <span>Contact</span>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>

        {/* CTA Section */}
        <div className="p-6 border-t border-gray-100 mt-auto">
          <Link 
            href="/contact" 
            className="w-full bg-[#2C3E50] text-white px-6 py-4 rounded-full hover:bg-[#34495e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-center block"
            onClick={closeMobileMenu}
          >
            Get a Quote
          </Link>
          <p className="text-sm text-gray-500 text-center mt-4">
            Ready to start your project?
          </p>
        </div>
      </div>
    </>
  );
} 