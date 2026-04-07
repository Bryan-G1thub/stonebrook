"use client";

import { useId } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Calendar,
  Camera,
  CheckCircle2,
  FormInput,
  MapPin,
  Search,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { PhoneGraphic } from "./PhoneGraphic";
import { LaptopGraphic } from "./LaptopGraphic";

const smoothEase = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.5 } as const;

type SlideTone = "dark" | "light" | "muted" | "dramatic";

const slides: {
  key:
    | "cost"
    | "transform"
    | "mobile"
    | "features"
    | "seo"
    | "commitment"
    | "cta";
  kicker: string;
  title: string;
  titleAccent?: string;
  sub?: string;
  tone: SlideTone;
}[] = [
  {
    key: "cost",
    kicker: "THE QUIET COST",
    title: "No site (or a bad one)",
    titleAccent: "is expensive",
    sub: "It’s not just aesthetics—it’s trust, calls, and sales you never get the chance to earn.",
    tone: "dark",
  },
  {
    key: "transform",
    kicker: "THE FLIP",
    title: "A great site turns",
    titleAccent: "maybe into yes",
    sub: "Clear story. Clear next step. The kind of polish that makes people feel safe hitting “book.”",
    tone: "dramatic",
  },
  {
    key: "mobile",
    kicker: "MOBILE FIRST",
    title: "Looks right on",
    titleAccent: "every screen",
    sub: "Because your customers are probably standing outside your door… on their phone.",
    tone: "muted",
  },
  {
    key: "features",
    kicker: "BUILT FOR LOCAL",
    title: "Booking. Forms.",
    titleAccent: "Galleries",
    sub: "Practical features that actually help a small business run smoother—without bloat.",
    tone: "light",
  },
  {
    key: "seo",
    kicker: "FINDABLE",
    title: "Google can’t rank",
    titleAccent: "what it can’t read",
    sub: "Solid structure, speed, and basics that make you show up where customers are already searching.",
    tone: "muted",
  },
  {
    key: "commitment",
    kicker: "OUR PROMISE",
    title: "We ship fast.",
    titleAccent: "We stick around",
    sub: "Craft, communication, and momentum—without the agency fog machine.",
    tone: "dark",
  },
  {
    key: "cta",
    kicker: "LOW PRESSURE",
    title: "Want a site that",
    titleAccent: "pulls its weight?",
    sub: "Tell us what you do. We’ll tell you what we’d build—and how fast we’d ship it.",
    tone: "light",
  },
];

function GrainOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage: `url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")`,
      }}
      aria-hidden
    />
  );
}

function SlideBlobs({
  uid,
  intensity,
}: {
  uid: string;
  intensity: number;
}) {
  const g1 = `tour-sb1-${uid}`;
  const g2 = `tour-sb2-${uid}`;
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
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
        cx="240"
        cy="460"
        r="200"
        fill={`url(#${g1})`}
        opacity={0.32 * intensity}
        animate={{ cx: [240, 300, 240], cy: [460, 410, 460], r: [200, 230, 200] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="820"
        cy="520"
        r="160"
        fill={`url(#${g2})`}
        opacity={0.25 * intensity}
        animate={{ cx: [820, 760, 820], cy: [520, 590, 520], r: [160, 185, 160] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.circle
        cx="560"
        cy="180"
        r="90"
        fill={`url(#${g2})`}
        opacity={0.12 * intensity}
        animate={{ cy: [180, 220, 180], opacity: [0.08 * intensity, 0.15 * intensity, 0.08 * intensity] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

function toneClasses(tone: SlideTone) {
  switch (tone) {
    case "dark":
      return {
        section: "bg-[#0A1628] text-white",
        kicker: "text-white/50",
        sub: "text-white/70",
        accent: "text-[#7eb8d6]",
      };
    case "dramatic":
      return {
        section: "bg-[#0c1f35] text-white",
        kicker: "text-white/50",
        sub: "text-white/75",
        accent: "text-[#7eb8d6]",
      };
    case "muted":
      return {
        section: "bg-[#f4f4f2] text-[#0A1628]",
        kicker: "text-gray-400",
        sub: "text-gray-600",
        accent: "text-[#3a8fb7]",
      };
    default:
      return {
        section: "bg-white text-[#0A1628]",
        kicker: "text-gray-400",
        sub: "text-gray-600",
        accent: "text-[#3a8fb7]",
      };
  }
}

function FeaturePills() {
  const items = [
    { icon: Calendar, label: "Booking" },
    { icon: FormInput, label: "Contact forms" },
    { icon: Camera, label: "Galleries" },
    { icon: MapPin, label: "Maps & hours" },
    { icon: CheckCircle2, label: "Reviews" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: smoothEase }}
      viewport={viewport}
      className="mt-10 flex flex-wrap items-center justify-center gap-3"
    >
      {items.map((it) => (
        <div
          key={it.label}
          className="inline-flex items-center gap-2 rounded-full border border-[#0A1628]/10 bg-white/70 px-4 py-2 text-sm font-light text-[#0A1628] backdrop-blur-sm"
        >
          <it.icon className="h-4 w-4 text-[#3a8fb7]" aria-hidden />
          <span>{it.label}</span>
        </div>
      ))}
    </motion.div>
  );
}

function SeoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: smoothEase }}
      viewport={viewport}
      className="mt-10 mx-auto w-full max-w-2xl"
    >
      <div className="rounded-2xl border border-[#0A1628]/10 bg-white/70 p-5 md:p-6 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A1628]">
            <Search className="h-5 w-5 text-white" aria-hidden />
          </div>
          <div className="flex-1">
            <div className="h-10 w-full rounded-xl bg-[#0A1628]/5 px-4 flex items-center text-sm text-[#0A1628]/60 font-light">
              “best coffee in brooklyn”
            </div>
          </div>
        </div>
        <div className="mt-5 space-y-3">
          {[
            "Fast pages (Core Web Vitals)",
            "Clean headings + structure",
            "Metadata + sitemap basics",
          ].map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.25 + i * 0.08, ease: smoothEase }}
              viewport={viewport}
              className="flex items-center gap-3 text-sm text-gray-600 font-light"
            >
              <div className="h-2 w-2 rounded-full bg-[#3a8fb7]" />
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function TourWalkthrough() {
  const uid = useId().replace(/:/g, "");

  return (
    <main className="bg-white">
      <div
        className="h-[100dvh] w-full overflow-y-auto overscroll-y-contain scroll-smooth snap-y snap-mandatory"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {slides.map((s) => {
          const t = toneClasses(s.tone);
          const blobIntensity =
            s.tone === "dark" || s.tone === "dramatic" ? 1 : 0.6;

          return (
            <section
              key={s.key}
              id={s.key}
              className={`relative min-h-[100dvh] snap-start flex items-center justify-center px-6 md:px-12 py-20 overflow-hidden ${t.section}`}
              aria-labelledby={`tour-${s.key}-title`}
            >
              <SlideBlobs uid={`${uid}-${s.key}`} intensity={blobIntensity} />
              <GrainOverlay />

              <div className="relative z-10 w-full max-w-6xl mx-auto">
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: smoothEase }}
                  viewport={viewport}
                  className={`text-xs tracking-[0.35em] font-light mb-6 ${t.kicker}`}
                >
                  {s.kicker}
                </motion.p>

                <motion.h1
                  id={`tour-${s.key}-title`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.05, ease: smoothEase }}
                  viewport={viewport}
                  className="text-[clamp(2.6rem,6.6vw,5.6rem)] font-light leading-[0.95] tracking-tight"
                  style={{
                    fontFamily:
                      "var(--font-playfair-display), 'Playfair Display', serif",
                  }}
                >
                  {s.title}{" "}
                  {s.titleAccent ? (
                    <span className={`italic ${t.accent}`}>{s.titleAccent}</span>
                  ) : null}
                </motion.h1>

                {s.sub ? (
                  <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.14,
                      ease: smoothEase,
                    }}
                    viewport={viewport}
                    className={`mt-8 max-w-2xl text-lg md:text-xl font-light leading-relaxed ${t.sub}`}
                  >
                    {s.sub}
                  </motion.p>
                ) : null}

                {/* Scene-specific visual showcases */}
                {s.key === "mobile" ? (
                  <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.18,
                        ease: smoothEase,
                      }}
                      viewport={viewport}
                      className="rounded-3xl bg-white/60 border border-[#0A1628]/10 backdrop-blur-sm p-6 md:p-8 flex items-center justify-center min-h-[360px]"
                    >
                      <PhoneGraphic />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.22,
                        ease: smoothEase,
                      }}
                      viewport={viewport}
                      className="rounded-3xl bg-white/60 border border-[#0A1628]/10 backdrop-blur-sm p-6 md:p-8 flex items-center justify-center min-h-[360px]"
                    >
                      <LaptopGraphic />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.26,
                        ease: smoothEase,
                      }}
                      viewport={viewport}
                      className="lg:col-span-2 flex items-center justify-center gap-3 text-sm text-gray-600 font-light"
                    >
                      <Smartphone className="h-4 w-4 text-[#3a8fb7]" aria-hidden />
                      Thumb-friendly. Fast. No weird zooming.
                    </motion.div>
                  </div>
                ) : null}

                {s.key === "features" ? <FeaturePills /> : null}
                {s.key === "seo" ? <SeoCard /> : null}

                {s.key === "commitment" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.18,
                      ease: smoothEase,
                    }}
                    viewport={viewport}
                    className="mt-10 inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-sm font-light text-white/85"
                  >
                    <Sparkles className="h-4 w-4 text-white" aria-hidden />
                    Fast shipping, clean handoff, real support.
                  </motion.div>
                ) : null}

                {s.key === "cta" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.18,
                      ease: smoothEase,
                    }}
                    viewport={viewport}
                    className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-[#0A1628] text-white px-10 py-4 text-sm font-medium tracking-wide hover:bg-[#152a45] transition-colors duration-300"
                    >
                      Let’s build yours
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <span className="text-sm text-gray-500 font-light">
                      No pressure. If it’s not the right time, that’s fine too.
                    </span>
                  </motion.div>
                ) : null}
              </div>
            </section>
          );
        })}

        {/* bottom spacer for snap comfort on some browsers */}
        <div className="h-2 snap-end" aria-hidden />
      </div>
    </main>
  );
}
