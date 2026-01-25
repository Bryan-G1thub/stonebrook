"use client";
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function MediaCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const lastScrollY = useRef(0);
  const velocityDecay = useRef<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
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
  }, [isMounted]);

  const baseSpeed = 12;
  const speedMultiplier = 1 + scrollVelocity / 20;
  const effectiveSpeed = isMounted ? baseSpeed / speedMultiplier : baseSpeed;

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

  // Additional items for mobile layers 3 and 4
  const items3 = [
    { type: 'text' as const, content: 'DESIGN', color: '#0A1628' },
    { type: 'image' as const, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { type: 'text' as const, content: 'CREATE', color: '#0A1628' },
    { type: 'image' as const, url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { type: 'text' as const, content: 'INNOVATE', color: '#0A1628' },
    { type: 'image' as const, url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0' },
  ];

  const items4 = [
    { type: 'image' as const, url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { type: 'text' as const, content: 'BUILD', color: '#0A1628' },
    { type: 'image' as const, url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { type: 'text' as const, content: 'SHAPE', color: '#0A1628' },
    { type: 'image' as const, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { type: 'text' as const, content: 'DREAM', color: '#0A1628' },
  ];

  // Duplicate items multiple times for seamless infinite loop
  const duplicatedItems1 = [...items1, ...items1, ...items1];
  const duplicatedItems2 = [...items2, ...items2, ...items2];
  const duplicatedItems3 = [...items3, ...items3, ...items3];
  const duplicatedItems4 = [...items4, ...items4, ...items4];

  return (
    <section ref={containerRef} className="relative bg-white py-48 overflow-hidden">
      {/* Layer 1 */}
      <div className="overflow-hidden mb-6 md:mb-12">
        <motion.div 
          initial={{ x: '0%' }}
          animate={{ x: '-33.333%' }}
          transition={{ 
            duration: effectiveSpeed,
            repeat: Infinity, 
            ease: 'linear',
            repeatType: 'loop',
            repeatDelay: 0
          }}
          style={{ willChange: 'transform' }}
          className="flex gap-6 md:gap-12"
        >
          {duplicatedItems1.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              {item.type === 'text' ? (
                <div 
                  className="text-[4rem] md:text-[8rem] font-light leading-none whitespace-nowrap"
                  style={{ color: item.color }}
                >
                  {item.content}
                </div>
              ) : (
                <div className="w-[200px] h-[150px] md:w-[400px] md:h-[300px] relative overflow-hidden rounded-xl">
                  <img 
                    src={item.url} 
                    alt="" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Layer 2 */}
      <div className="overflow-hidden mb-6 md:mb-12">
        <motion.div 
          initial={{ x: '-33.333%' }}
          animate={{ x: '0%' }}
          transition={{ 
            duration: effectiveSpeed * 1.2,
            repeat: Infinity, 
            ease: 'linear',
            repeatType: 'loop',
            repeatDelay: 0
          }}
          style={{ willChange: 'transform' }}
          className="flex gap-6 md:gap-12"
        >
          {duplicatedItems2.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              {item.type === 'text' ? (
                <div 
                  className="text-[4rem] md:text-[8rem] font-light leading-none whitespace-nowrap"
                  style={{ color: item.color }}
                >
                  {item.content}
                </div>
              ) : (
                <div className="w-[200px] h-[150px] md:w-[400px] md:h-[300px] relative overflow-hidden rounded-xl">
                  <img 
                    src={item.url} 
                    alt="" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Layer 3 - Mobile Only */}
      <div className="overflow-hidden mb-6 md:hidden">
        <motion.div 
          initial={{ x: '0%' }}
          animate={{ x: '-33.333%' }}
          transition={{ 
            duration: effectiveSpeed * 0.9,
            repeat: Infinity, 
            ease: 'linear',
            repeatType: 'loop',
            repeatDelay: 0
          }}
          style={{ willChange: 'transform' }}
          className="flex gap-6"
        >
          {duplicatedItems3.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              {item.type === 'text' ? (
                <div 
                  className="text-[4rem] font-light leading-none whitespace-nowrap"
                  style={{ color: item.color }}
                >
                  {item.content}
                </div>
              ) : (
                <div className="w-[200px] h-[150px] relative overflow-hidden rounded-xl">
                  <img 
                    src={item.url} 
                    alt="" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Layer 4 - Mobile Only */}
      <div className="overflow-hidden md:hidden">
        <motion.div 
          initial={{ x: '-33.333%' }}
          animate={{ x: '0%' }}
          transition={{ 
            duration: effectiveSpeed * 1.1,
            repeat: Infinity, 
            ease: 'linear',
            repeatType: 'loop',
            repeatDelay: 0
          }}
          style={{ willChange: 'transform' }}
          className="flex gap-6"
        >
          {duplicatedItems4.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              {item.type === 'text' ? (
                <div 
                  className="text-[4rem] font-light leading-none whitespace-nowrap"
                  style={{ color: item.color }}
                >
                  {item.content}
                </div>
              ) : (
                <div className="w-[200px] h-[150px] relative overflow-hidden rounded-xl">
                  <img 
                    src={item.url} 
                    alt="" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-8 right-8 text-[#0A1628]/10 text-9xl font-light">
        01
      </div>
    </section>
  );
}
