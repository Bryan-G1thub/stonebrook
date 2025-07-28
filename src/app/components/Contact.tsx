export default function Contact() {
  return (
    <section className="w-full py-16 sm:py-20 px-4" id="contact">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2C3E50] mb-4 sm:mb-6">Let&apos;s build something great</h2>
        <a 
          href="mailto:hello@stonebrooknyc.com" 
          className="inline-flex items-center justify-center bg-[#2C3E50] text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow hover:bg-[#1a2533] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 mb-4 sm:mb-6"
        >
          Schedule a Call
        </a>
        <p className="text-[#333] mt-2 sm:mt-4 text-sm sm:text-base">
          Or email us at{' '}
          <a 
            href="mailto:hello@stonebrooknyc.com" 
            className="underline hover:text-[#2C3E50] transition-colors"
          >
            hello@stonebrooknyc.com
          </a>
        </p>
      </div>
    </section>
  );
} 