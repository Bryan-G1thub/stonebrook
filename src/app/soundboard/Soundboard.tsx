"use client";

import { useRef, useState } from "react";

type Pad = {
  id: string;
  label: string;
  /** Path under /public when ready, e.g. "/sounds/kick.mp3" */
  src: string | null;
  accent: string;
};

const PADS: Pad[] = [
  { id: "01", label: "FAHHHH", src: "/sounds/fahhhhhhhhhhhhhh.mp3", accent: "#8a8680" },
  { id: "02", label: "VINE BOOM", src: "/sounds/vine-boom.mp3", accent: "#7a7670" },
  { id: "03", label: "WOW", src: "/sounds/anime-wow-sound-effect.mp3", accent: "#6e6a64" },
  { id: "04", label: "HEAVENLY", src: "/sounds/heavenly-music.mp3", accent: "#908c86" },
  { id: "05", label: "GAH DAYUM", src: "/sounds/gah-dayum.mp3", accent: "#75716b" },
  { id: "06", label: "WHAT DA DOG DOING", src: "/sounds/yt1s_wU4BGgD.mp3", accent: "#84807a" },
  { id: "07", label: "AWW SO CUTE", src: "/sounds/aww-so-cute-ishowspeed.mp3", accent: "#6a6660" },
  { id: "08", label: "Pad 08", src: null, accent: "#8c8882" },
  { id: "09", label: "Pad 09", src: null, accent: "#787470" },
  { id: "10", label: "Pad 10", src: null, accent: "#82807a" },
  { id: "11", label: "Pad 11", src: null, accent: "#726e68" },
  { id: "12", label: "Pad 12", src: null, accent: "#86827c" },
];

export default function Soundboard() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const audioCache = useRef<Map<string, HTMLAudioElement>>(new Map());

  const playPad = (pad: Pad) => {
    setActiveId(pad.id);
    window.setTimeout(() => {
      setActiveId((current) => (current === pad.id ? null : current));
    }, 180);

    if (!pad.src) return;

    let audio = audioCache.current.get(pad.id);
    if (!audio) {
      audio = new Audio(pad.src);
      audioCache.current.set(pad.id, audio);
    }
    audio.currentTime = 0;
    void audio.play().catch(() => {
      /* ignore until real files exist */
    });
  };

  return (
    <div
      className="min-h-screen text-[#e8e6e3]"
      style={{
        fontFamily: "var(--font-soundboard-body), system-ui, sans-serif",
        background: "#111110",
      }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-0 w-full">
        {PADS.map((pad) => {
          const isActive = activeId === pad.id;
          const ready = Boolean(pad.src);

          return (
            <button
              key={pad.id}
              type="button"
              onClick={() => playPad(pad)}
              aria-label={
                ready ? `Play ${pad.label}` : `${pad.label} (no sound yet)`
              }
              className="group relative aspect-square overflow-hidden bg-[#1a1918] text-left outline-none transition-transform duration-150 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/40 active:scale-[0.98]"
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

              <span className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6 md:p-8">
                <span
                  className="inline-flex h-3 w-3 rounded-full transition-shadow duration-150"
                  style={{
                    backgroundColor: pad.accent,
                    boxShadow: isActive ? `0 0 12px ${pad.accent}` : undefined,
                  }}
                  aria-hidden
                />
                <span>
                  <span className="block font-mono text-xs tracking-[0.2em] text-white/35 uppercase">
                    {pad.id}
                  </span>
                  <span className="mt-1 block text-xl font-medium tracking-tight text-white sm:text-2xl md:text-3xl">
                    {pad.label}
                  </span>
                  {!ready && (
                    <span className="mt-1 block text-sm tracking-wide text-white/30">
                      awaiting file
                    </span>
                  )}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
