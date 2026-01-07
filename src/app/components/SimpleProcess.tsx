"use client";

import { motion } from "motion/react";
import { Phone, Code, Rocket } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { PhoneGraphic } from "./PhoneGraphic";
import { LaptopGraphic } from "./LaptopGraphic";

export default function SimpleProcess() {
  const steps = [
    {
      number: "01",
      title: "Call",
      subtitle: "Let's Talk",
      description:
        "We start with a conversation. Understanding your vision, goals, and challenges is the foundation of everything we build together.",
      details: ["Discovery session", "Strategy planning", "Timeline & scope"],
      image: null, // Using custom graphic
      icon: Phone,
      imagePosition: "left" as const,
      customGraphic: true,
    },
    {
      number: "02",
      title: "Build",
      subtitle: "Create & Refine",
      description:
        "Our team brings your vision to life with pixel-perfect design and clean, scalable code. Constant communication keeps you in the loop.",
      details: [
        "Design & prototyping",
        "Development sprints",
        "Testing & refinement",
      ],
      image: null, // Using custom graphic
      icon: Code,
      imagePosition: "right" as const,
      customGraphic: true,
    },
    {
      number: "03",
      title: "Launch",
      subtitle: "Go Live",
      description:
        "Your project takes flight. We handle deployment, optimization, and provide ongoing support to ensure continued success.",
      details: [
        "Deployment & hosting",
        "Performance optimization",
        "Ongoing support",
      ],
      image:
        "https://images.unsplash.com/photo-1720214658819-2676e74b4c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2glMjBzcGFjZXxlbnwxfHx8fDE3Njc3MTI2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Rocket,
      imagePosition: "left" as const,
      customGraphic: false,
    },
  ];

  return (
    <section className="bg-white py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="text-sm text-gray-400 mb-4 tracking-[0.3em] font-light">
            PROCESS
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-[#0A1628]">
            How We Work
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                step.imagePosition === "left" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className={`${step.imagePosition === "left" ? "lg:order-2" : ""}`}>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: step.imagePosition === "right" ? -30 : 30,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Number and Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl font-light text-[#0A1628]/20">
                      {step.number}
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-[#0A1628] flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl md:text-6xl font-light text-[#0A1628] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-2xl text-gray-500 font-light mb-6">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-gray-600 font-light"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0A1628]" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Image */}
              <div className={`${step.imagePosition === "left" ? "lg:order-1" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: step.imagePosition === "right" ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`group relative ${
                    step.customGraphic
                      ? "rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 min-h-[600px] flex items-center justify-center"
                      : "rounded-3xl overflow-hidden aspect-[4/3]"
                  }`}
                >
                  {step.customGraphic ? (
                    step.title === "Build" ? <LaptopGraphic /> : <PhoneGraphic />
                  ) : (
                    <>
                      <ImageWithFallback
                        src={step.image as string}
                        alt={step.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

