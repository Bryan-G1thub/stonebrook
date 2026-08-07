"use client";

import { useEffect, useRef, useState } from "react";

type Pad = {
  id: string;
  label: string;
  src: string;
  accent: string;
};

const PADS: Pad[] = [
  { id: "01", label: "FAHHHH", src: "/sounds/fahhhhhhhhhhhhhh.mp3", accent: "#8a8680" },
  { id: "02", label: "VINE BOOM", src: "/sounds/vine-boom.mp3", accent: "#7a7670" },
  { id: "03", label: "WOW", src: "/sounds/anime-wow-sound-effect.mp3", accent: "#6e6a64" },
  { id: "04", label: "HOLY", src: "/sounds/holy.mp3", accent: "#908c86" },
  { id: "05", label: "GAH DAYUM", src: "/sounds/gah-dayum.mp3", accent: "#75716b" },
  { id: "06", label: "WHAT DA DOG DOING", src: "/sounds/yt1s_wU4BGgD.mp3", accent: "#84807a" },
  { id: "07", label: "AWW SO CUTE", src: "/sounds/aww-so-cute-ishowspeed.mp3", accent: "#6a6660" },
  { id: "08", label: "FAIRY", src: "/sounds/fairy.mp3", accent: "#8c8882" },
];

function fitGrid(count: number, width: number, height: number) {
  if (count <= 0) return { cols: 1, rows: 1 };

  const aspect = width / Math.max(height, 1);
  let best = { cols: count, rows: 1, score: Number.POSITIVE_INFINITY };

  for (let cols = 1; cols <= count; cols++) {
    const rows = Math.ceil(count / cols);
    const cellAspect = width / cols / (height / rows);
    const empty = cols * rows - count;
    const squarePenalty = Math.abs(Math.log(cellAspect || 1));
    const orientationPenalty =
      aspect >= 1 ? (cols >= rows ? 0 : 0.35) : rows >= cols ? 0 : 0.35;
    const score = squarePenalty + empty * 0.6 + orientationPenalty;

    if (score < best.score) {
      best = { cols, rows, score };
    }
  }

  return { cols: best.cols, rows: best.rows };
}

export default function Soundboard() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [grid, setGrid] = useState({ cols: 4, rows: 2 });
  const audioCache = useRef<Map<string, HTMLAudioElement>>(new Map());

  useEffect(() => {
    const update = () => {
      setGrid(fitGrid(PADS.length, window.innerWidth, window.innerHeight));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const playPad = (pad: Pad) => {
    setActiveId(pad.id);
    window.setTimeout(() => {
      setActiveId((current) => (current === pad.id ? null : current));
    }, 180);

    let audio = audioCache.current.get(pad.id);
    if (!audio) {
      audio = new Audio(pad.src);
      audioCache.current.set(pad.id, audio);
    }
    audio.currentTime = 0;
    void audio.play().catch(() => {
      /* ignore autoplay / load errors */
    });
  };

  return (
    <div
      className="h-dvh w-dvw overflow-hidden text-[#e8e6e3]"
      style={{
        fontFamily: "var(--font-soundboard-body), system-ui, sans-serif",
        background: "#111110",
      }}
    >
      <div
        className="grid h-full w-full gap-0"
        style={{
          gridTemplateColumns: `repeat(${grid.cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${grid.rows}, minmax(0, 1fr))`,
        }}
      >
        {PADS.map((pad) => {
          const isActive = activeId === pad.id;

          return (
            <button
              key={pad.id}
              type="button"
              onClick={() => playPad(pad)}
              aria-label={`Play ${pad.label}`}
              className="group relative min-h-0 min-w-0 overflow-hidden bg-[#1a1918] text-left outline-none transition-transform duration-150 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/40 active:scale-[0.98]"
              style={{
                transform: isActive ? "scale(0.98)" : undefined,
              }}
            >
              <span
                className="absolute inset-0 opacity-90 transition-opacity duration-200 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(145deg, color-mix(in srgb, ${pad.accent} 40%, #1a1918) 0%, #1a1918 72%)`,
                }}
              />
              <span
                className="absolute inset-0 border border-white/[0.06]"
                aria-hidden
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent transition-opacity duration-200 ${
                  isActive ? "opacity-100" : "opacity-60 group-hover:opacity-80"
                }`}
                aria-hidden
              />

              <span className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5 md:p-6">
                <span
                  className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full transition-shadow duration-150 sm:h-3 sm:w-3"
                  style={{
                    backgroundColor: pad.accent,
                    boxShadow: isActive ? `0 0 12px ${pad.accent}` : undefined,
                  }}
                  aria-hidden
                />
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase sm:text-xs">
                    {pad.id}
                  </span>
                  <span className="mt-1 block truncate text-base font-medium tracking-tight text-white sm:text-xl md:text-2xl">
                    {pad.label}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
