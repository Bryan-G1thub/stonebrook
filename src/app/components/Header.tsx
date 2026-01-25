"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

// Split Center Logo - Navigation splits left/right
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const updateScrolled = () => {
      setScrolled(window.scrollY > 100);
    };

    // Set initial scroll state
    updateScrolled();

    window.addEventListener("scroll", updateScrolled);
    return () => window.removeEventListener("scroll", updateScrolled);
  }, [isMounted]);

  const navItems = [
    { label: "Work", href: "/" },
    { label: "Studio", href: "/about" },
    { label: "Approach", href: "/#how-it-works" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 md:py-8 transition-all duration-500 overflow-x-hidden ${
          isMounted && scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center max-w-[1600px] mx-auto w-full gap-4 px-0">
          {/* Desktop Left Nav / Mobile Menu Button */}
          <div className="flex items-center justify-start min-w-0">
            {/* Desktop Left Nav */}
            <div
              className={`hidden md:flex gap-12 text-sm font-light tracking-wider transition-colors duration-500 ${
                isMounted && scrolled ? "text-[#0A1628]" : "text-white"
              }`}
            >
              {["Work", "Studio"].map((item, i) => {
                const navItem = navItems.find((n) => n.label === item);
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.3 + i * 0.1 }}
                  >
                    <Link
                      href={navItem?.href || "#"}
                      className={`transition-colors uppercase ${
                        isMounted && scrolled
                          ? "hover:text-[#0A1628]/60"
                          : "hover:text-white/60"
                      }`}
                    >
                      {item}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden w-6 h-6 flex items-center justify-center transition-colors duration-500 ${
                isMounted && scrolled ? "text-[#0A1628]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.4, type: "spring" }}
            className="flex justify-center"
          >
            <Link href="/" className="relative block">
              <div
                className={`text-xl md:text-3xl font-light tracking-[0.2em] md:tracking-[0.3em] italic transition-colors duration-500 whitespace-nowrap ${
                  isMounted && scrolled ? "text-[#0A1628]" : "text-white"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                STONEBROOK
              </div>
              <motion.div
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -bottom-2 left-0 right-0 h-[1px] transition-all duration-500 ${
                  isMounted && scrolled
                    ? "bg-gradient-to-r from-transparent via-[#0A1628] to-transparent"
                    : "bg-gradient-to-r from-transparent via-white to-transparent"
                }`}
              />
            </Link>
          </motion.div>

          {/* Desktop Right Nav / Mobile Spacer */}
          <div className="flex items-center justify-end min-w-0">
            {/* Desktop Right Nav */}
            <div
              className={`hidden md:flex gap-12 text-sm font-light tracking-wider transition-colors duration-500 ${
                isMounted && scrolled ? "text-[#0A1628]" : "text-white"
              }`}
            >
              {["Approach", "Contact"].map((item, i) => {
                const navItem = navItems.find((n) => n.label === item);
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.3 + i * 0.1 }}
                  >
                    <Link
                      href={navItem?.href || "#"}
                      className={`transition-colors uppercase ${
                        isMounted && scrolled
                          ? "hover:text-[#0A1628]/60"
                          : "hover:text-white/60"
                      }`}
                    >
                      {item}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Spacer for mobile to keep logo centered - matches button width */}
            <div className="md:hidden w-6" />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : "100%",
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 bottom-0 z-40 md:hidden ${
          isMounted && scrolled ? "bg-white" : "bg-[#0A1628]"
        } ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen w-full gap-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: mobileMenuOpen ? 1 : 0,
                y: mobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-light tracking-wider uppercase text-center ${
                  isMounted && scrolled ? "text-[#0A1628]" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
