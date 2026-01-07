"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Target, Sparkles, Code2 } from 'lucide-react';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

export default function OurOffering() {
  // Same fonts as Hero for perfect sync
  const fonts = [
    { family: "'Bebas Neue', sans-serif", text: 'STONEBROOK' },
    { family: "'Orbitron', sans-serif", text: 'STONEBROOK' },
    { family: "'Rubik Spray Paint', cursive", text: 'STONEBROOK' }, // Urban graffiti
    { family: "'Righteous', sans-serif", text: 'STONEBROOK' },
    { family: "'Audiowide', sans-serif", text: 'STONEBROOK' },
    { family: "'Creepster', cursive", text: 'STONEBROOK' },
    { family: "'Monoton', cursive", text: 'STONEBROOK' },
    { family: "'Fira Code', monospace", text: 'STONEBROOK' },
  ];

  // Duplicate for seamless loop
  const duplicatedFonts = [...fonts, ...fonts, ...fonts];

  const metrics = [
    { value: '<0.8s', label: 'Load Time', sublabel: 'Average first paint' },
    { value: '98+', label: 'Performance', sublabel: 'Lighthouse score' },
    { value: '3.2x', label: 'Conversions', sublabel: 'Average increase' },
    { value: '100%', label: 'Mobile-First', sublabel: 'Responsive by default' },
  ];

  const services = [
    {
      icon: Zap,
      title: 'Performance Engineering',
      description: 'Sub-second load times, optimized assets, and intelligent caching strategies that convert.',
      stat: '40% faster',
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Target,
      title: 'Conversion Architecture',
      description: 'Every element strategically designed to guide users toward action and maximize ROI.',
      stat: '3.2x growth',
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Sparkles,
      title: 'Experience Design',
      description: 'Pixel-perfect interfaces with micro-interactions that delight and engage your audience.',
      stat: '95% satisfaction',
      color: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      icon: Code2,
      title: 'Technical Excellence',
      description: 'Clean, scalable code built with modern frameworks. SEO-optimized and future-proof.',
      stat: 'A+ grade',
      color: 'from-orange-500/20 to-amber-500/20',
    },
  ];

  return (
    <section className="relative bg-white py-32 px-4 sm:px-8 overflow-hidden" id="offering">
      {/* Top Marquee - Transparent Blue (synced with Hero bottom marquee) */}
      <div className="absolute top-0 left-0 right-0 h-14 overflow-hidden border-b border-[#2a6f8f]/10">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="flex items-center h-full gap-12 whitespace-nowrap"
          style={{ width: 'max-content' }}
        >
          {duplicatedFonts.map((font, i) => (
            <span
              key={i}
              className="text-[#2a6f8f]/25 text-2xl"
              style={{ fontFamily: font.family }}
            >
              {font.text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0A1628 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-[1600px] mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="inline-block mb-6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[1px] bg-gradient-to-r from-[#0A1628] to-transparent mb-4"
            />
            <span className="text-sm tracking-[0.3em] text-[#0A1628]/60 uppercase">What We Deliver</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#0A1628] font-light leading-[1.05] mb-8 max-w-5xl">
            Websites that do not just look good.
            <br />
            <span 
              className="italic bg-gradient-to-r from-[#2a6f8f] via-[#14a5aa] to-[#3a8fb7] bg-clip-text text-transparent" 
              style={{ fontFamily: "var(--font-playfair-display), 'Playfair Display', serif" }}
            >
              They perform.
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-[#0A1628]/60 font-light max-w-3xl leading-relaxed">
            We engineer digital experiences that combine blazing performance with 
            stunning aesthetics. Every project is optimized for speed, conversions, 
            and lasting impact.
          </p>
        </motion.div>

        {/* Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-24"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-[#0A1628]/5 to-transparent border border-[#0A1628]/10 rounded-2xl p-6 sm:p-8 hover:border-[#0A1628]/30 transition-all duration-500 hover:shadow-xl">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0A1628] mb-2">{metric.value}</div>
                <div className="text-xs sm:text-sm font-medium text-[#0A1628] mb-1">{metric.label}</div>
                <div className="text-xs text-[#0A1628]/50">{metric.sublabel}</div>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2a6f8f] to-[#14a5aa] rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid - Bento Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">
          {/* Large Feature Card - Services */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-[#0A1628] rounded-3xl p-8 sm:p-12 overflow-hidden relative"
          >
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-light text-white mb-8 sm:mb-12">
                Our Core <span className="italic" style={{ fontFamily: "var(--font-playfair-display), 'Playfair Display', serif" }}>Expertise</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} backdrop-blur-sm`}>
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-base sm:text-lg font-medium text-white">{service.title}</h4>
                          <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed mb-3">
                          {service.description}
                        </p>
                        <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                          {service.stat}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative gradient orbs */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-[#2a6f8f] to-[#14a5aa] rounded-full blur-3xl opacity-20" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-gradient-to-br from-[#1e4d6b] to-[#3a8fb7] rounded-full blur-3xl opacity-20" />
          </motion.div>

          {/* Interactive Card - NetworkVisualization */}
          <NetworkVisualization />
        </div>

        {/* Bottom Grid - Code + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Code Snippet Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#0A1628] rounded-3xl p-6 sm:p-8 overflow-hidden relative"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-white/60 text-xs tracking-widest uppercase mb-2">Technical Stack</div>
                <div className="text-white text-xl sm:text-2xl font-light">Modern & Fast</div>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
            </div>
            
            <div className="bg-black/30 rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm">
              <div className="text-purple-400">const</div>
              <div className="text-white ml-4">performance = {`{`}</div>
              <div className="text-cyan-300 ml-8">
                framework: <span className="text-green-300">React</span>,
              </div>
              <div className="text-cyan-300 ml-8">
                styling: <span className="text-green-300">Tailwind</span>,
              </div>
              <div className="text-cyan-300 ml-8">
                optimization: <span className="text-green-300">Extreme</span>,
              </div>
              <div className="text-cyan-300 ml-8">
                loadTime: <span className="text-orange-300">&lt;800ms</span>
              </div>
              <div className="text-white ml-4">{`}`};</div>
            </div>
          </motion.div>

          {/* Color Palette Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-gradient-to-br from-[#0A1628] to-[#1e4d6b] rounded-3xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="text-white/60 text-xs tracking-widest uppercase mb-2">Design System</div>
              <div className="text-white text-xl sm:text-2xl font-light mb-6">Color Palette</div>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { color: '#0A1628', name: 'Deep Navy', hex: '#0A1628' },
                  { color: '#2a6f8f', name: 'Ocean Blue', hex: '#2a6f8f' },
                  { color: '#14a5aa', name: 'Cyan Tide', hex: '#14a5aa' },
                  { color: '#FFFFFF', name: 'Pure White', hex: '#FFFFFF' },
                ].map((item, i) => (
                  <motion.div
                    key={item.hex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg border border-white/20 shadow-lg"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <div className="text-white text-xs font-medium">{item.name}</div>
                      <div className="text-white/40 text-xs font-mono">{item.hex}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white border-2 border-[#0A1628] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:bg-[#0A1628] group transition-all duration-500 cursor-pointer relative overflow-hidden"
          >
            <div>
              <div className="text-[#0A1628] group-hover:text-white text-xs tracking-widest uppercase mb-4 transition-colors">
                Ready to start?
              </div>
              <div className="text-[#0A1628] group-hover:text-white text-xl sm:text-2xl font-light mb-8 transition-colors">
                Let’s build something incredible
              </div>
            </div>
            
            <Link href="/contact" className="flex items-center gap-2 text-[#0A1628] group-hover:text-white transition-colors">
              <span className="text-sm font-medium">Get Started</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>

            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#2a6f8f]/0 to-[#14a5aa]/0 group-hover:from-[#2a6f8f]/20 group-hover:to-[#14a5aa]/20 transition-all duration-500"
            />
          </motion.div>
        </div>

        {/* Hashtags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center text-[#0A1628]/30 text-sm font-light tracking-wider"
        >
          #PerformanceFirst #ConversionOptimized #PixelPerfect #WebExcellence
        </motion.div>
      </div>
    </section>
  );
}

// Network Visualization Card - Microservices Architecture
function NetworkVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const packetsRef = useRef<Array<{ 
    from: number; 
    to: number; 
    progress: number; 
    speed: number;
  }>>([]);

  // Define actual microservices architecture
  const services = useRef([
    // Client Layer
    { x: 0.5, y: 0.15, label: 'Client', type: 'client', size: 8, color: '#3a8fb7' },
    
    // Load Balancer
    { x: 0.5, y: 0.3, label: 'Load Balancer', type: 'infrastructure', size: 10, color: '#14a5aa' },
    
    // API Gateway
    { x: 0.5, y: 0.45, label: 'API Gateway', type: 'gateway', size: 12, color: '#2a6f8f' },
    
    // Service Layer
    { x: 0.25, y: 0.6, label: 'Auth', type: 'service', size: 9, color: '#14a5aa' },
    { x: 0.5, y: 0.6, label: 'API', type: 'service', size: 11, color: '#14a5aa' },
    { x: 0.75, y: 0.6, label: 'WebSocket', type: 'service', size: 8, color: '#14a5aa' },
    
    // Data Layer
    { x: 0.2, y: 0.8, label: 'Cache', type: 'data', size: 9, color: '#3a8fb7' },
    { x: 0.4, y: 0.8, label: 'Database', type: 'data', size: 11, color: '#3a8fb7' },
    { x: 0.6, y: 0.8, label: 'Queue', type: 'data', size: 8, color: '#3a8fb7' },
    { x: 0.8, y: 0.8, label: 'CDN', type: 'data', size: 9, color: '#3a8fb7' },
  ]);

  // Define connections (actual service dependencies)
  const connections = useRef([
    // Client → Load Balancer
    { from: 0, to: 1 },
    // Load Balancer → API Gateway
    { from: 1, to: 2 },
    // API Gateway → Services
    { from: 2, to: 3 }, // Auth
    { from: 2, to: 4 }, // API
    { from: 2, to: 5 }, // WebSocket
    // Services → Data Layer
    { from: 3, to: 6 }, // Auth → Cache
    { from: 3, to: 7 }, // Auth → Database
    { from: 4, to: 6 }, // API → Cache
    { from: 4, to: 7 }, // API → Database
    { from: 4, to: 8 }, // API → Queue
    { from: 5, to: 7 }, // WebSocket → Database
    { from: 0, to: 9 }, // Client → CDN (static assets)
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Spawn data packets periodically
    const spawnPacket = () => {
      const connection = connections.current[Math.floor(Math.random() * connections.current.length)];
      packetsRef.current.push({
        from: connection.from,
        to: connection.to,
        progress: 0,
        speed: 0.01 + Math.random() * 0.02,
      });
    };

    const packetInterval = setInterval(spawnPacket, 800);

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      // Clear
      ctx.fillStyle = '#0A1628';
      ctx.fillRect(0, 0, width, height);

      // Convert relative positions to absolute
      const absoluteServices = services.current.map(s => ({
        ...s,
        absX: s.x * width,
        absY: s.y * height,
      }));

      // Draw connections
      connections.current.forEach(conn => {
        const from = absoluteServices[conn.from];
        const to = absoluteServices[conn.to];

        ctx.beginPath();
        ctx.moveTo(from.absX, from.absY);
        ctx.lineTo(to.absX, to.absY);
        ctx.strokeStyle = 'rgba(20, 165, 170, 0.15)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Update and draw packets
      packetsRef.current = packetsRef.current.filter(packet => {
        packet.progress += packet.speed;
        
        if (packet.progress >= 1) return false; // Remove completed packets

        const from = absoluteServices[packet.from];
        const to = absoluteServices[packet.to];
        
        const x = from.absX + (to.absX - from.absX) * packet.progress;
        const y = from.absY + (to.absY - from.absY) * packet.progress;

        // Draw packet glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
        gradient.addColorStop(0, 'rgba(20, 165, 170, 0.8)');
        gradient.addColorStop(0.5, 'rgba(20, 165, 170, 0.4)');
        gradient.addColorStop(1, 'rgba(20, 165, 170, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Draw packet core
        ctx.fillStyle = '#14a5aa';
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      // Draw service nodes
      absoluteServices.forEach((service, i) => {
        const isHovered = Math.abs(mouseRef.current.x - service.absX) < 50 && 
                         Math.abs(mouseRef.current.y - service.absY) < 50;

        // Outer glow
        const glowSize = isHovered ? service.size * 2 : service.size * 1.5;
        const gradient = ctx.createRadialGradient(
          service.absX, service.absY, 0, 
          service.absX, service.absY, glowSize
        );
        gradient.addColorStop(0, `${service.color}cc`);
        gradient.addColorStop(0.5, `${service.color}66`);
        gradient.addColorStop(1, `${service.color}00`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(service.absX, service.absY, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Node ring
        ctx.beginPath();
        ctx.arc(service.absX, service.absY, service.size, 0, Math.PI * 2);
        ctx.strokeStyle = service.color;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Node fill
        ctx.fillStyle = isHovered ? service.color : `${service.color}40`;
        ctx.fill();

        // Inner highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(service.absX - 2, service.absY - 2, 2, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.fillStyle = isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.7)';
        ctx.font = `${isHovered ? '11px' : '10px'} -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(service.label, service.absX, service.absY + service.size + 8);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(packetInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left),
      y: (e.clientY - rect.top),
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="lg:col-span-4 rounded-3xl overflow-hidden relative h-full min-h-[400px] bg-gradient-to-br from-[#0A1628] via-[#0d1a2e] to-[#0A1628] p-6 sm:p-8"
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="text-white/60 text-xs tracking-widest uppercase mb-2">System Architecture</div>
          <div className="text-white text-xl sm:text-2xl font-light">Microservices</div>
        </div>

        {/* Canvas */}
        <div className="flex-1 relative rounded-xl overflow-hidden bg-[#0A1628]/50">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Stats */}
        <div className="mt-6 flex justify-between text-xs">
          <div className="text-white/40">
            <span className="text-[#14a5aa]">●</span> 10 Services
          </div>
          <div className="text-white/40">
            Live Data Flow
          </div>
        </div>
      </div>
    </motion.div>
  );
}
