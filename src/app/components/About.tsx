"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Code2, Palette } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

export default function About() {
  // Using plain mouse coordinates for background motion; motion values removed to keep types simple.
  const mouseX = { current: 0 };
  const mouseY = { current: 0 };

  const x = mouseX.current;
  const y = mouseY.current;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="bg-[#0A1628] py-32 px-6 md:px-12 relative overflow-hidden" id="about">
      {/* Cursor Followers */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-3xl pointer-events-none"
        style={{
          left: x,
          top: y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-pink-500/20 to-yellow-500/20 blur-3xl pointer-events-none"
        style={{
          left: x,
          top: y,
          translateX: "-25%",
          translateY: "-25%",
        }}
      />

      {/* Artistic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-400 rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main About Section */}
        <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-6xl md:text-7xl mb-6 tracking-tight text-white"
              >
                About{" "}
                <span className="relative inline-block">
                  <span className="italic text-blue-400">Us</span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <motion.path
                      d="M0 4 Q50 0, 100 4 T200 4"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
              </motion.h2>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Stonebrook is a small group comprised of Brooklyn-based talents driven by the pursuit of digital awareness. We
                believe in the small businesses that drive urban life, so we pave the way for these businesses to scale leveraging
                the power of a simple domain.
              </p>
              <p>
                Born from the vibrant streets of Brooklyn, we understand the pulse of urban entrepreneurship. Every coffee shop,
                every local store, every neighborhood service—these are the heartbeats of our communities. We&apos;re here to
                amplify their voices in the digital world.
              </p>
              <p>
                Our approach is simple yet powerful: we transform complex digital challenges into elegant, user-friendly solutions
                that help small businesses thrive in an increasingly digital marketplace.
              </p>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0A1628] px-10 py-4 rounded-full flex items-center gap-3 group shadow-xl font-medium"
            >
              <span>Let&apos;s Collaborate</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Artistic Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image with artistic frame */}
            <div className="relative">
              {/* Decorative corner elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-cyan-400 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-cyan-400 rounded-br-3xl" />

              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/5] group border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1694026378536-edcc502aa704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwY2xlYW58ZW58MXx8fHwxNzY3NzA0NzYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern architecture"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />

                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Artistic Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              animate={{ y: [0, -10, 0] }}
              style={{ transition: "y 3s ease-in-out infinite" }}
              className="absolute -left-6 top-24 bg-black/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-xl"
            >
              <div className="w-11 h-11 bg-cyan-400/20 rounded-xl flex items-center justify-center mb-3 border border-cyan-400/30">
                <Code2 className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-sm font-semibold text-white">Clean Code</div>
              <div className="text-xs text-gray-400">Crafted with precision</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              animate={{ y: [0, 10, 0] }}
              style={{ transition: "y 4s ease-in-out infinite" }}
              className="absolute -right-6 bottom-32 bg-black/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-xl"
            >
              <div className="w-11 h-11 bg-blue-400/20 rounded-xl flex items-center justify-center mb-3 border border-blue-400/30">
                <Palette className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-sm font-semibold text-white">Pixel Perfect</div>
              <div className="text-xs text-gray-400">Design excellence</div>
            </motion.div>

            {/* Animated Lines */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-8 -right-8 w-24 h-24 opacity-20"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  className="text-cyan-400"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  className="text-blue-400"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section - "Let's Create Something Extraordinary" */}
        <div className="relative z-10 mt-48">
          {/* Artistic Background - Behind the text */}
          <div className="absolute inset-0 h-[600px] overflow-hidden -z-10">
            {/* Minimalist Floating Frames */}
            <motion.div
              className="absolute left-[15%] top-[20%] w-[400px] h-[300px] border border-cyan-400/30 rounded-2xl"
              animate={{
                rotate: [0, 5, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute right-[10%] top-[35%] w-[350px] h-[250px] border border-blue-400/30 rounded-2xl"
              animate={{
                rotate: [0, -8, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            <motion.div
              className="absolute left-[35%] bottom-[15%] w-[300px] h-[200px] border border-purple-400/20 rounded-2xl"
              animate={{
                rotate: [0, 3, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />

            {/* Gradient Orbs */}
            <motion.div
              className="absolute left-[25%] top-[30%] w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-500/20 blur-2xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute right-[30%] bottom-[25%] w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/35 to-purple-500/15 blur-2xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.35, 0.65, 0.35],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />

            {/* Floating Dots */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/60 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 4,
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="text-7xl md:text-9xl font-light text-white mb-12 leading-none">
              Let&apos;s Create
              <br />
              Something
              <br />
              Extraordinary
            </h2>

            {/* Hashtags */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {["#design", "#innovation", "#awwwards", "#webgl", "#creative", "#digital"].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/70 text-sm hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white text-[#0A1628] text-lg rounded-full font-light hover:bg-white/90 transition-colors duration-300 shadow-2xl"
            >
              Start a Project
            </motion.button>
          </motion.div>

          {/* Geometric Designs */}
          <div className="absolute top-1/4 left-10 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" className="text-white">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 right-10 w-40 h-40 opacity-10">
            <svg viewBox="0 0 100 100" className="text-white">
              <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <polygon points="50,25 75,75 25,75" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
