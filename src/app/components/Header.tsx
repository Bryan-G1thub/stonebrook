"use client";
import { motion } from 'framer-motion';
import Link from "next/link";

export default function Header() {
  const leftNavItems = [
    { label: 'Work', href: '/' },
    { label: 'Studio', href: '/about' }
  ];

  const rightNavItems = [
    { label: 'Approach', href: '/#how-it-works' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 lg:px-12 py-6 sm:py-8"
    >
      <div className="flex justify-between items-center max-w-[1600px] mx-auto">
        {/* Left Nav */}
        <div className="flex gap-6 sm:gap-12 text-white text-xs sm:text-sm font-light tracking-wider">
          {leftNavItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.3 + i * 0.1 }}
            >
              <Link
                href={item.href}
                className="hover:text-white/60 transition-colors uppercase"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Center Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, type: 'spring' }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <Link href="/" className="relative block">
            <div 
              className="text-white text-xl sm:text-2xl lg:text-3xl font-light tracking-[0.3em] italic"
              style={{ fontFamily: "var(--font-playfair-display), 'Playfair Display', serif" }}
            >
              STONEBROOK
            </div>
            <motion.div
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
            />
          </Link>
        </motion.div>

        {/* Right Nav */}
        <div className="flex gap-6 sm:gap-12 text-white text-xs sm:text-sm font-light tracking-wider">
          {rightNavItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.3 + i * 0.1 }}
            >
              <Link
                href={item.href}
                className="hover:text-white/60 transition-colors uppercase"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
} 