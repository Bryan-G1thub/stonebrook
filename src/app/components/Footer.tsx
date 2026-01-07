"use client";
import { motion } from 'framer-motion';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-32 px-8 relative overflow-hidden">
      {/* Decorative Corner Lines */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-gray-200" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-gray-200" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-gray-200" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-gray-200" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-light text-[#0A1628] mb-20 leading-none italic whitespace-nowrap overflow-visible mx-auto"
            style={{ fontFamily: "var(--font-playfair-display), 'Playfair Display', serif" }}
          >
            Stonebrook
          </h2>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <a 
              href="mailto:hello@stonebrooknyc.com" 
              className="text-2xl md:text-3xl text-[#0A1628] hover:text-[#396EB0] transition-colors duration-300 font-light"
            >
              hello@stonebrooknyc.com
            </a>
          </motion.div>

          {/* Navigation */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-gray-500 text-sm mb-16">
            <Link href="/" className="hover:text-[#0A1628] transition-colors">Work</Link>
            <span className="hidden md:block">•</span>
            <Link href="/about" className="hover:text-[#0A1628] transition-colors">About</Link>
            <span className="hidden md:block">•</span>
            <Link href="/contact" className="hover:text-[#0A1628] transition-colors">Contact</Link>
            <span className="hidden md:block">•</span>
            <a href="#" className="hover:text-[#0A1628] transition-colors">Instagram</a>
          </div>

          {/* Location & Year */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-lg text-[#0A1628] font-light tracking-wider">
              Brooklyn, New York City
            </div>
            <div 
              className="text-4xl md:text-5xl text-[#0A1628] font-light tracking-[0.2em] italic"
              style={{ fontFamily: "var(--font-cormorant-garamond), 'Cormorant Garamond', serif" }}
            >
              MMXXVI
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle decorative line across bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </footer>
  );
} 