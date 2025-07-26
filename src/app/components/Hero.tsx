import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full relative min-h-[60vh] flex items-center justify-center text-center px-4" style={{backgroundColor: '#f9f9f9'}}>
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Warm abstract background"
          fill
          style={{objectFit: 'cover'}}
          className="pointer-events-none select-none"
          priority
        />
        {/* Black overlay for contrast */}
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full py-20">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white drop-shadow-lg">Websites with clarity and craft.</h1>
        <p className="text-lg sm:text-xl mb-8 text-white max-w-xl drop-shadow">Stonebrook builds high-performing websites for small businesses that care about design.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="inline-block bg-[#2C3E50] text-white rounded-full px-8 py-3 text-lg font-semibold shadow hover:bg-[#1a2533] transition">Get a Quote</Link>
          <Link href="/contact" className="inline-block border-2 border-white text-white rounded-full px-8 py-3 text-lg font-semibold hover:bg-white hover:text-[#2C3E50] transition">Schedule a Call</Link>
        </div>
      </div>
    </section>
  );
} 