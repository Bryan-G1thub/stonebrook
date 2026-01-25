"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-[#0A1628] overflow-hidden flex items-center justify-center">
        {/* Morphing blobs - matching home page style */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="aboutGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e4d6b" />
              <stop offset="50%" stopColor="#2a6f8f" />
              <stop offset="100%" stopColor="#3a8fb7" />
            </linearGradient>
            <linearGradient id="aboutGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d7377" />
              <stop offset="50%" stopColor="#14a5aa" />
              <stop offset="100%" stopColor="#32cdd1" />
            </linearGradient>
          </defs>
          <motion.circle
            cx="250"
            cy="500"
            r="140"
            fill="url(#aboutGradient1)"
            animate={{
              cx: [250, 300, 250],
              cy: [500, 450, 500],
              r: [140, 170, 140],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="750"
            cy="500"
            r="150"
            fill="url(#aboutGradient2)"
            opacity={0.65}
            animate={{
              cx: [750, 700, 750],
              cy: [500, 550, 500],
              r: [150, 185, 150],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          />
        </svg>

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 
              className="text-5xl md:text-7xl lg:text-[110px] font-light tracking-tight leading-[0.9] mb-6"
              style={{ 
                mixBlendMode: 'difference',
                fontFamily: "'Playfair Display', serif"
              }}
            >
              About{" "}
              <span className="italic">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
              Where we started
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-20 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="/brooklyn.jpg"
                  alt="Manhattan Bridge at dusk with New York City skyline"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm font-light opacity-90 tracking-wider">Brooklyn, NY</div>
                  <div className="text-xs opacity-75 font-light italic">Our home, our inspiration</div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="space-y-10">
                <div>
                  <h2 className="text-5xl md:text-6xl font-light text-[#0A1628] mb-6 tracking-tight">
                    Our{" "}
                    <span className="relative inline-block">
                      <span className="italic" style={{ color: '#3a8fb7' }}>Story</span>
                      <motion.svg
                        className="absolute -bottom-2 left-0 w-full"
                        height="8"
                        viewBox="0 0 200 8"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      >
                        <motion.path
                          d="M0 4 Q50 0, 100 4 T200 4"
                          stroke="url(#storyGradient)"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="storyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2a6f8f" />
                            <stop offset="100%" stopColor="#3a8fb7" />
                          </linearGradient>
                        </defs>
                      </motion.svg>
                    </span>
                  </h2>
                </div>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light">
                  <p>
                    Stonebrook was born from the vibrant streets of Brooklyn, where every corner tells a story of resilience, 
                    creativity, and community. We&apos;re a small but mighty team of digital artisans who believe that great design 
                    should be accessible to every business, no matter the size.
                  </p>
                  
                  <p>
                    Our journey began with a simple observation: small businesses are the heartbeat of our communities, 
                    yet they often struggle to establish a meaningful digital presence. We saw an opportunity to bridge 
                    this gap, combining Brooklyn&apos;s authentic spirit with cutting-edge web technology.
                  </p>
                  
                  <p>
                    Today, we&apos;re proud to serve businesses that share our values—authenticity, quality, and a commitment 
                    to their communities. Every project we touch becomes a testament to our unwavering dedication to 
                    excellence and our deep understanding of what makes small businesses thrive.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-20 md:py-32 px-6 md:px-12 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light text-[#0A1628] mb-6 tracking-tight">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              The principles that guide every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#2a6f8f] to-[#3a8fb7] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-[#0A1628] mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                We stay ahead of the curve, embracing new technologies and creative solutions that push boundaries 
                while maintaining the highest standards of quality and performance.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0d7377] to-[#32cdd1] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-[#0A1628] mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                We believe in the power of local businesses to strengthen communities. Every project we take on 
                is an investment in the neighborhoods and people we serve.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1e4d6b] to-[#2a6f8f] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-[#0A1628] mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                We don&apos;t just build websites—we craft digital experiences that reflect the quality and care 
                that our clients put into their own businesses. Every detail matters.
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* CTA Section removed per design – handled in main About component on homepage */}
    </div>
  );
} 