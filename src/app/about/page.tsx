"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-[#2C3E50] via-[#34495e] to-[#2C3E50] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">About Stonebrook</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Where Brooklyn grit meets digital innovation
            </p>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative w-full h-96 lg:h-[500px]">
                  <Image
                    src="/brooklyn.jpg"
                    alt="Manhattan Bridge at dusk with New York City skyline"
                    fill
                    className="object-contain"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-sm font-medium opacity-90">Brooklyn, NY</div>
                    <div className="text-xs opacity-75">Our home, our inspiration</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">Our Story</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#2C3E50] to-[#34495e] rounded-full mb-8"></div>
                </div>

                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
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

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2C3E50]">50+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2C3E50]">100%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2C3E50]">3</div>
                    <div className="text-sm text-gray-600">Years Strong</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2C3E50] to-[#34495e] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We stay ahead of the curve, embracing new technologies and creative solutions that push boundaries 
                while maintaining the highest standards of quality and performance.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2C3E50] to-[#34495e] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of local businesses to strengthen communities. Every project we take on 
                is an investment in the neighborhoods and people we serve.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2C3E50] to-[#34495e] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We don&apos;t just build websites—we craft digital experiences that reflect the quality and care 
                that our clients put into their own businesses. Every detail matters.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section removed per design – handled in main About component on homepage */}
    </div>
  );
} 