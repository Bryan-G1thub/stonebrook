"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-sm text-white shadow-lg py-3' 
        : 'bg-transparent text-white py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
          Stonebrook
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#services" className="hover:text-gray-300 transition-colors">Services</Link>
          <Link href="/#how-it-works" className="hover:text-gray-300 transition-colors">Process</Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link href="/contact" className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">Get Quote</Link>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
} 