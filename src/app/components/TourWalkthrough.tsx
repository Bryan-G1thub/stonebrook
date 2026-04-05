"use client";

import { useId } from "react";
import Link from "next/link";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewport = { once: true, amount: 0.4 } as const;

const phases = [
  {
    id: "discovery",
    label: "DISCOVERY",
    title: "We start with curiosity,",
    titleItalic: "not a spreadsheet",
    body: [
      "Nobody wants to fill out a forty-field intake form. We sit down (or Zoom in—Brooklyn weather is unpredictable) and actually listen.",
      "Your goals, your weird edge cases, what keeps you up at night—that’s the stuff we care about. By the end, we both know what “done” looks like.",
    ],
    theme: "light" as const,
  },
  {
    id: "mockups",
    label: "MOCKUPS",
    title: "You see it",
    titleItalic: "before it’s real",
    body: [
      "Real screens, real hierarchy, real copy placeholders that don’t say “Lorem ipsum” unless we’re being ironic.",
      "If something feels off, we fix it while it’s still pixels—not after launch when everything is expensive and emotional.",
    ],
    theme: "muted" as const,
  },
  {
    id: "revisions",
    label: "REVISIONS",
    title: "Iteration isn’t a dirty word",
    titleItalic: "here",
    body: [
      "We expect rounds. Design is a conversation, not a mic drop. Push back. Ask “what if.” We’re not precious—we’re trying to get it right with you.",
      "Fair scope, clear feedback, zero guilt trips. That’s the deal.",
    ],
    theme: "light" as const,
  },
  {
    id: "launch",
    label: "LAUNCH",
    title: "Flip the switch",
    titleItalic: "without the cold sweat",
    body: [
      "Going live should feel exciting, not like defusing a bomb. We handle the boring technical bits—hosting hooks, checks, performance—so you can focus on telling people it exists.",
      "Champagne optional. Deep breath included.",
    ],
    theme: "dark" as const,
  },
  {
    id: "support",
    label: "SUPPORT",
    title: "The internet breaks",
    titleItalic: "sometimes",
    body: [
      "Typos, analytics mysteries, “why does this look weird on my cousin’s phone”—it happens. We’re still around after launch, without making you re-audit our entire process just to ask a question.",
      "Low drama. Quick answers. Human beings on the other end.",
    ],
    theme: "muted" as const,
  },
];

function TourBlobs({ variant }: { variant: "light" | "dark" }) {
  const uid = useId().replace(/:/g, "");
  const g1 = `tour-b1-${uid}`;
  const g2 = `tour-b2-${uid}`;
  const opacity = variant === "dark" ? 0.5 : 0.35;
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1000 1000"
      aria-hidden
    >
      <defs>
        <linearGradient id={g1} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e4d6b" />
          <stop offset="50%" stopColor="#2a6f8f" />
          <stop offset="100%" stopColor="#3a8fb7" />
        </linearGradient>
        <linearGradient id={g2} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d7377" />
          <stop offset="50%" stopColor="#14a5aa" />
          <stop offset="100%" stopColor="#32cdd1" />
        </linearGradient>
      </defs>
      <motion.circle
        cx="200"
        cy="400"
        r="160"
        fill={`url(#${g1})`}
        opacity={opacity}
        animate={{ cx: [200, 260, 200], cy: [400, 360, 400], r: [160, 190, 160] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="820"
        cy="520"
        r="140"
        fill={`url(#${g2})`}
        opacity={opacity * 0.85}
        animate={{ cx: [820, 760, 820], cy: [520, 580, 520], r: [140, 165, 140] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </svg>
  );
}

export default function TourWalkthrough() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const progressOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div className="relative bg-white">
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-0.5 origin-left bg-gradient-to-r from-[#2a6f8f] via-[#3a8fb7] to-[#32cdd1]"
        style={{ scaleX, opacity: progressOpacity }}
        aria-hidden
      />

      <main>
        {/* Hero */}
        <section
          className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 md:px-12 bg-[#0A1628] text-white overflow-hidden"
          aria-labelledby="tour-hero-heading"
        >
          <TourBlobs variant="dark" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: smoothEase }}
              className="text-sm text-white/50 mb-6 tracking-[0.35em] font-light"
            >
              STONEBROOK
            </motion.p>
            <motion.h1
              id="tour-hero-heading"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: smoothEase }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-8"
              style={{ fontFamily: "var(--font-playfair-display), 'Playfair Display', serif" }}
            >
              How we work,{" "}
              <span className="italic text-white/90">for real</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.28, ease: smoothEase }}
              className="text-lg md:text-xl text-white/65 font-light leading-relaxed max-w-2xl mx-auto mb-16"
            >
              No jargon tour. No “synergy.” Just the actual steps we take with clients—told like a founder at coffee, not a slide deck.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col items-center gap-2 text-white/40 text-sm font-light"
            >
              <span>Scroll</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-5 h-5" aria-hidden />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Five phases */}
        {phases.map((phase, index) => {
          const bg =
            phase.theme === "dark"
              ? "bg-[#0A1628] text-white"
              : phase.theme === "muted"
                ? "bg-[#f9f9f9] text-[#0A1628]"
                : "bg-white text-[#0A1628]";
          const subtext =
            phase.theme === "dark" ? "text-white/65" : "text-gray-600";
          const labelCls =
            phase.theme === "dark" ? "text-white/45" : "text-gray-400";

          return (
            <section
              key={phase.id}
              id={phase.id}
              className={`relative min-h-[100dvh] flex items-center justify-center px-6 md:px-12 py-24 overflow-hidden ${bg}`}
              aria-labelledby={`tour-${phase.id}-title`}
            >
              {phase.theme === "dark" && <TourBlobs variant="dark" />}
              <motion.div
                className="relative z-10 max-w-3xl mx-auto w-full"
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: smoothEase }}
                viewport={viewport}
              >
                <motion.p
                  className={`text-sm mb-5 tracking-[0.3em] font-light ${labelCls}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.05, ease: smoothEase }}
                  viewport={viewport}
                >
                  {phase.label}{" "}
                  <span className="tabular-nums opacity-60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.p>
                <motion.h2
                  id={`tour-${phase.id}-title`}
                  className="text-3xl sm:text-5xl md:text-6xl font-light leading-[1.1] mb-10"
                  style={{ fontFamily: "var(--font-playfair-display), 'Playfair Display', serif" }}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.12, ease: smoothEase }}
                  viewport={viewport}
                >
                  {phase.title}{" "}
                  <span className="italic" style={{ color: phase.theme === "dark" ? "#7eb8d6" : "#3a8fb7" }}>
                    {phase.titleItalic}
                  </span>
                </motion.h2>
                <div className={`space-y-6 text-lg md:text-xl font-light leading-relaxed ${subtext}`}>
                  {phase.body.map((p, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.75, delay: 0.22 + i * 0.1, ease: smoothEase }}
                      viewport={viewport}
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            </section>
          );
        })}

        {/* Closing CTA */}
        <section
          className="relative min-h-[70dvh] flex items-center justify-center px-6 md:px-12 py-28 bg-white border-t border-gray-100"
          aria-labelledby="tour-cta-heading"
        >
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: smoothEase }}
            viewport={viewport}
          >
            <h2
              id="tour-cta-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0A1628] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair-display), 'Playfair Display', serif" }}
            >
              Still here?{" "}
              <span className="italic text-[#3a8fb7]">Good.</span>
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-4">
              No pressure, no “book a call in the next ten minutes” nonsense. If this process sounds like your speed, tell us what you&apos;re building—we&apos;ll take it from there.
            </p>
            <p className="text-base text-gray-500 font-light mb-12">
              Or don&apos;t. The site will still be here tomorrow. We&apos;re not going anywhere.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0A1628] text-white px-10 py-4 text-sm font-medium tracking-wide hover:bg-[#152a45] transition-colors duration-300"
              >
                Say hello
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <Link
                href="/"
                className="text-sm text-gray-500 font-light hover:text-[#0A1628] transition-colors underline underline-offset-4"
              >
                Back to home
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
