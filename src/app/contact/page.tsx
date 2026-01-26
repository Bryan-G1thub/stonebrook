"use client";
import { useState } from "react";
import { motion } from "motion/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mvgqrqvg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: ""
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-[#0A1628] overflow-hidden flex items-center justify-center">
        {/* Morphing blobs */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="contactGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e4d6b" />
              <stop offset="50%" stopColor="#2a6f8f" />
              <stop offset="100%" stopColor="#3a8fb7" />
            </linearGradient>
            <linearGradient id="contactGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d7377" />
              <stop offset="50%" stopColor="#14a5aa" />
              <stop offset="100%" stopColor="#32cdd1" />
            </linearGradient>
          </defs>
          <motion.circle
            cx="200"
            cy="500"
            r="120"
            fill="url(#contactGradient1)"
            animate={{
              cx: [200, 250, 200],
              cy: [500, 450, 500],
              r: [120, 150, 120],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="800"
            cy="500"
            r="140"
            fill="url(#contactGradient2)"
            opacity={0.65}
            animate={{
              cx: [800, 750, 800],
              cy: [500, 550, 500],
              r: [140, 170, 140],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          />
        </svg>

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 
              className="text-5xl md:text-7xl lg:text-[90px] font-light tracking-tight leading-[0.9] mb-6"
              style={{ 
                mixBlendMode: 'difference',
                fontFamily: "'Playfair Display', serif"
              }}
            >
              Let&apos;s <span className="italic">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
              Ready to bring your vision to life?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-[#f9f9f9] rounded-2xl p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-light text-[#0A1628] mb-8">Start Your Project</h2>
                
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-green-800 font-light">Message sent successfully! We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p className="text-red-800 font-light">Something went wrong. Please try again or email us directly.</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-light text-gray-600 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3a8fb7] focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 font-light"
                        placeholder="John Doe"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-light text-gray-600 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3a8fb7] focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 font-light"
                        placeholder="john@company.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-light text-gray-600 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3a8fb7] focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 font-light"
                      placeholder="Your Company"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Project Type and Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-light text-gray-600 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3a8fb7] focus:border-transparent transition-all duration-300 text-gray-900 font-light"
                        disabled={isSubmitting}
                      >
                        <option value="">Select project type</option>
                        <option value="website">Website Design</option>
                        <option value="ecommerce">E-commerce Site</option>
                        <option value="webapp">Web Application</option>
                        <option value="branding">Branding & Identity</option>
                        <option value="consulting">Digital Consulting</option>
                        <option value="call">Schedule a Call</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-light text-gray-600 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3a8fb7] focus:border-transparent transition-all duration-300 text-gray-900 font-light"
                        disabled={isSubmitting}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                        <option value="discuss">Let&apos;s discuss</option>
                      </select>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-light text-gray-600 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3a8fb7] focus:border-transparent transition-all duration-300 text-gray-900 font-light"
                      disabled={isSubmitting}
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-months">1-2 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-plus-months">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-light text-gray-600 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3a8fb7] focus:border-transparent transition-all duration-300 resize-none text-gray-900 placeholder-gray-400 font-light"
                      placeholder="Tell us about your project, goals, and vision..."
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-8 rounded-full font-light text-lg transition-all duration-300 ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed text-white' 
                          : 'bg-[#0A1628] text-white hover:bg-[#0A1628]/90 hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="space-y-10">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light text-[#0A1628] mb-6 tracking-tight">
                    Get in{" "}
                    <span className="italic" style={{ color: '#3a8fb7' }}>Touch</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    Ready to transform your digital presence? We&apos;re here to help you build something amazing. 
                    Let&apos;s discuss your project and see how we can bring your vision to life.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2a6f8f] to-[#3a8fb7] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-[#0A1628] mb-1">Email</h3>
                      <p className="text-gray-600 font-light">hello@stonebrooknyc.com</p>
                      <p className="text-sm text-gray-400 font-light">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0d7377] to-[#32cdd1] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-[#0A1628] mb-1">Location</h3>
                      <p className="text-gray-600 font-light">Brooklyn, New York</p>
                      <p className="text-sm text-gray-400 font-light">Serving clients worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1e4d6b] to-[#2a6f8f] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-[#0A1628] mb-1">Response Time</h3>
                      <p className="text-gray-600 font-light">Within 24 hours</p>
                      <p className="text-sm text-gray-400 font-light">Monday - Friday, 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-[#f9f9f9] rounded-2xl p-6 md:p-8">
                  <h3 className="text-xl font-light text-[#0A1628] mb-4">Why Choose Stonebrook?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#3a8fb7] rounded-full"></div>
                      <span className="text-gray-600 font-light">Personalized approach for every project</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#32cdd1] rounded-full"></div>
                      <span className="text-gray-600 font-light">Transparent pricing and timelines</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#2a6f8f] rounded-full"></div>
                      <span className="text-gray-600 font-light">Ongoing support and maintenance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#0d7377] rounded-full"></div>
                      <span className="text-gray-600 font-light">Brooklyn-based, globally minded</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 px-6 md:px-12 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-light text-[#0A1628] mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Everything you need to know about working with us
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What's your typical project timeline?",
                a: "Most projects take 4-8 weeks from start to finish. Simple websites can be completed in 2-4 weeks, while complex applications may take 8-12 weeks. We'll provide a detailed timeline during our initial consultation."
              },
              {
                q: "Do you provide ongoing support?",
                a: "Absolutely! We offer maintenance packages and ongoing support to ensure your website continues to perform at its best. We're here for the long haul, not just the initial build."
              },
              {
                q: "What's included in your pricing?",
                a: "Our pricing includes design, development, testing, launch, and 30 days of post-launch support. We're transparent about costs and will provide a detailed breakdown before we begin."
              },
              {
                q: "Do you work with clients outside NYC?",
                a: "Yes! While we're based in Brooklyn, we work with clients worldwide. Our digital-first approach means we can collaborate effectively regardless of location."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
              >
                <h3 className="text-lg md:text-xl font-light text-[#0A1628] mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
