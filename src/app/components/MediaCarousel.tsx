"use client";
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function MediaCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const velocityDecay = useRef<number | null>(null);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const velocity = Math.abs(currentScrollY - lastScrollY.current);
      lastScrollY.current = currentScrollY;
      setScrollVelocity(Math.min(velocity * 2, 100));

      if (velocityDecay.current) {
        clearTimeout(velocityDecay.current);
      }

      velocityDecay.current = window.setTimeout(() => {
        setScrollVelocity(0);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (velocityDecay.current) {
        clearTimeout(velocityDecay.current);
      }
    };
  }, []);

  const baseSpeed = 20;
  const speedMultiplier = 1 + scrollVelocity / 20;
  const effectiveSpeed = baseSpeed / speedMultiplier;

  const items1 = [
    { type: 'text' as const, content: 'BOLD', color: '#0A1628' },
    { type: 'image' as const, url: 'https://images.unsplash.com/photo-1767562521358-dc8670bdd0c7?q=80&w=3948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { type: 'text' as const, content: 'PURE', color: '#0A1628' },
    { type: 'image' as const, url: 'https://images.unsplash.com/photo-1767627875030-79f91c5a700b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { type: 'text' as const, content: 'FORM', color: '#0A1628' },
    { type: 'image' as const, url: 'https://images.unsplash.com/photo-1764583586837-145c51bb8840?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  const items2 = [
    { type: 'image' as const, url: 'https://images.unsplash.com/photo-1733826996743-b21ac2ddbaee?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { type: 'text' as const, content: 'CRAFT', color: '#0A1628' },
    { type: 'image' as const, url: 'https://images.unsplash.com/photo-1548266652-99cf27701ced?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { type: 'text' as const, content: 'FLOW', color: '#0A1628' },
    { type: 'image' as const, url: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { type: 'text' as const, content: 'ART', color: '#0A1628' },
  ];

  // Duplicate items multiple times for seamless infinite loop
  const duplicatedItems1 = [...items1, ...items1, ...items1];
  const duplicatedItems2 = [...items2, ...items2, ...items2];

  return (
    <section ref={containerRef} className="relative bg-white py-48 overflow-hidden">
      <motion.div 
        animate={{ x: ['-33.333%', '0%'] }}
        transition={{ 
          duration: effectiveSpeed,
          repeat: Infinity, 
          ease: 'linear',
          repeatType: 'loop'
        }}
        className="flex gap-12 mb-12"
      >
        {duplicatedItems1.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item.type === 'text' ? (
              <div 
                className="text-[18rem] font-light leading-none whitespace-nowrap"
                style={{ color: item.color }}
              >
                {item.content}
              </div>
            ) : (
              <div className="w-[800px] h-[600px] relative overflow-hidden">
                <img 
                  src={item.url} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </motion.div>

      <motion.div 
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{ 
          duration: effectiveSpeed * 1.2,
          repeat: Infinity, 
          ease: 'linear',
          repeatType: 'loop'
        }}
        className="flex gap-12"
      >
        {duplicatedItems2.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item.type === 'text' ? (
              <div 
                className="text-[18rem] font-light leading-none whitespace-nowrap"
                style={{ color: item.color }}
              >
                {item.content}
              </div>
            ) : (
              <div className="w-[800px] h-[600px] relative overflow-hidden">
                <img 
                  src={item.url} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </motion.div>

      <div className="absolute top-8 right-8 text-[#0A1628]/10 text-9xl font-light">
        01
      </div>
    </section>
  );
}
