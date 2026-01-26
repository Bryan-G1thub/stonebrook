"use client";
import { motion } from 'motion/react';

// CHOOSE YOUR MARQUEE STYLE - uncomment one of these:
type MarqueeStyle = 'single' | 'double' | 'minimal';
const MARQUEE_STYLE: MarqueeStyle = 'single'; // Change to 'single', 'double', or 'minimal'

export default function Hero() {
  // Font styles for "Stonebrook"
  const fonts = [
    { family: "'Bebas Neue', sans-serif", text: 'STONEBROOK' }, // Bold caps
    { family: "'Orbitron', sans-serif", text: 'STONEBROOK' }, // Robotic
    { family: "'Rubik Spray Paint', cursive", text: 'STONEBROOK' }, // Urban graffiti
    { family: "'Righteous', sans-serif", text: 'STONEBROOK' }, // Retro
    { family: "'Audiowide', sans-serif", text: 'STONEBROOK' }, // Tech/futuristic
    { family: "'Creepster', cursive", text: 'STONEBROOK' }, // Horror/dramatic
    { family: "'Monoton', cursive", text: 'STONEBROOK' }, // Art deco
    { family: "'Fira Code', monospace", text: 'STONEBROOK' }, // Code
  ];

  // Duplicate for seamless loop
  const duplicatedFonts = [...fonts, ...fonts, ...fonts];

  return (
    <section className="relative h-screen bg-[#0A1628] overflow-hidden flex items-center justify-center">
      {/* Morphing blobs */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
        <defs>
          <filter id="goo3">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
          
          <linearGradient id="artGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e4d6b" />
            <stop offset="50%" stopColor="#2a6f8f" />
            <stop offset="100%" stopColor="#3a8fb7" />
          </linearGradient>
          
          <linearGradient id="artGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d7377" />
            <stop offset="50%" stopColor="#14a5aa" />
            <stop offset="100%" stopColor="#32cdd1" />
          </linearGradient>
          
          <linearGradient id="artGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a4f63" />
            <stop offset="100%" stopColor="#2b7a94" />
          </linearGradient>
        </defs>
        
        <g filter="url(#goo3)">
          {/* Blob 1 */}
          <motion.circle
            cx="250"
            cy="500"
            r="140"
            fill="url(#artGradient1)"
            animate={{
              cx: [250, 300, 250],
              cy: [500, 450, 500],
              r: [140, 170, 140],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Blob 2 */}
          <motion.circle
            cx="500"
            cy="500"
            r="180"
            fill="url(#artGradient2)"
            opacity={0.75}
            animate={{
              cx: [500, 470, 500],
              cy: [500, 530, 500],
              r: [180, 210, 180],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />
          
          {/* Blob 3 */}
          <motion.circle
            cx="750"
            cy="500"
            r="150"
            fill="url(#artGradient3)"
            opacity={0.65}
            animate={{
              cx: [750, 700, 750],
              cy: [500, 550, 500],
              r: [150, 185, 150],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          />
          
          {/* Small accent blob */}
          <motion.circle
            cx="400"
            cy="350"
            r="80"
            fill="url(#artGradient1)"
            opacity={0.5}
            animate={{
              cx: [400, 420, 400],
              cy: [350, 330, 350],
              r: [80, 100, 80],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          />
        </g>
      </svg>

      {/* Artistic content with poetry */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left side - Main title */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
              className="text-white/50 text-xs font-light tracking-[0.4em] uppercase mb-4"
              style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
            >
              EST. 2024 — Digital Atelier
            </motion.div>
            
            <h1 
              className="text-white text-5xl md:text-7xl lg:text-[110px] font-light tracking-tight leading-[0.9] mb-6"
              style={{ 
                mixBlendMode: 'difference',
                fontFamily: "'Playfair Display', serif"
              }}
            >
              Where Form
              <br />
              Meets <span className="italic">Function</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="flex items-center gap-6"
            >
              <div className="h-[1px] w-20 bg-white/40" />
              <p 
                className="text-white/70 text-sm font-light italic"
                style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.2)' }}
              >
                &ldquo;Design is the silent ambassador of your brand&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Details */}
        <div className="col-span-5 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.2 }}
            className="border-l border-white/20 pl-6"
          >
            <div 
              className="text-white/60 text-xs tracking-widest uppercase mb-2"
              style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.2)' }}
            >
              Philosophy
            </div>
            <p 
              className="text-white/80 text-sm font-light leading-relaxed"
              style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.15)' }}
            >
              Every pixel purposeful. Every interaction intentional. 
              We believe digital experiences should evoke emotion, 
              spark curiosity, and leave lasting impressions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.5 }}
            className="border-l border-white/20 pl-6"
          >
            <div 
              className="text-white/60 text-xs tracking-widest uppercase mb-2"
              style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.2)' }}
            >
              Expertise
            </div>
            <div className="flex flex-wrap gap-2 text-white/60 text-xs">
              <span className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                UI/UX Design
              </span>
              <span className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                WebGL
              </span>
              <span className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                Motion Design
              </span>
              <span className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                React
              </span>
              <span className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                3D Art
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.8 }}
            className="flex items-center gap-4 text-white/50 text-xs"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Available for projects</span>
            </div>
            <span>•</span>
            <span>Based in NYC</span>
          </motion.div>
        </div>
      </div>

      {/* Hashtags bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4 }}
        className="absolute bottom-20 left-12 text-white/40 text-xs font-light tracking-wider z-20"
      >
        #ArtisticCode #DigitalCraftsmanship #FluidDesign #Stonebrook
      </motion.div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2 }}
        className="hidden md:block absolute bottom-20 right-12 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/40 text-xs tracking-widest uppercase flex flex-col items-center gap-2"
        >
          <span>Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>

      {/* OPTION 1: Single Row Marquee - Clean & Simple */}
      {MARQUEE_STYLE === 'single' && (
        <div className="absolute bottom-0 left-0 right-0 h-14 overflow-hidden border-t border-white/10 z-10">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="flex items-center h-full gap-12 whitespace-nowrap"
            style={{ width: 'max-content' }}
          >
            {duplicatedFonts.map((font, i) => (
              <span
                key={i}
                className="text-white/20 text-2xl"
                style={{ fontFamily: font.family }}
              >
                {font.text}
              </span>
            ))}
          </motion.div>
        </div>
      )}

      {/* OPTION 2: Double Row Marquee - Dynamic Counter-Scrolling */}
      {MARQUEE_STYLE === 'double' && (
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden border-t border-white/10 z-10">
          {/* Top row - scrolling right to left */}
          <div className="h-1/2 overflow-hidden border-b border-white/5">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              className="flex items-center h-full gap-10 whitespace-nowrap"
              style={{ width: 'max-content' }}
            >
              {duplicatedFonts.map((font, i) => (
                <span
                  key={i}
                  className="text-white/15 text-xl"
                  style={{ fontFamily: font.family }}
                >
                  {font.text}
                </span>
              ))}
            </motion.div>
          </div>
          {/* Bottom row - scrolling left to right */}
          <div className="h-1/2 overflow-hidden">
            <motion.div
              animate={{ x: [-1920, 0] }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className="flex items-center h-full gap-10 whitespace-nowrap"
              style={{ width: 'max-content' }}
            >
              {duplicatedFonts.map((font, i) => (
                <span
                  key={i}
                  className="text-white/15 text-xl"
                  style={{ fontFamily: font.family }}
                >
                  {font.text}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      )}

      {/* OPTION 3: Minimal Spaced - Elegant & Subtle */}
      {MARQUEE_STYLE === 'minimal' && (
        <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden z-10">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="flex items-center h-full gap-24 whitespace-nowrap"
            style={{ width: 'max-content' }}
          >
            {duplicatedFonts.map((font, i) => (
              <span
                key={i}
                className="text-white/10 text-lg"
                style={{ fontFamily: font.family }}
              >
                {font.text}
              </span>
            ))}
          </motion.div>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent pointer-events-none" />
    </section>
  );
} 