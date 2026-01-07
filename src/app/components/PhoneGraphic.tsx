"use client";

import { motion } from "motion/react";
import { Phone, Video, Mic, PhoneOff } from "lucide-react";

export function PhoneGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      {/* Phone Device */}
      <div className="relative">
        {/* Phone Frame */}
        <div className="w-[280px] h-[560px] bg-black rounded-[3rem] p-3 shadow-2xl border-8 border-gray-900">
          {/* Screen */}
          <div className="w-full h-full bg-gradient-to-b from-[#0A1628] to-[#1a2942] rounded-[2.5rem] overflow-hidden relative">
            {/* Top Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10" />

            {/* Call Screen Content */}
            <div className="relative z-0 h-full flex flex-col items-center justify-between py-16 px-6">
              {/* Contact Info */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-6 flex items-center justify-center"
                >
                  <span className="text-3xl text-white font-light">JD</span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-2xl text-white font-light mb-2"
                >
                  John Doe
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-sm text-gray-400"
                >
                  Calling...
                </motion.p>

                {/* Animated Dots */}
                <div className="flex gap-1 justify-center mt-4">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      className="w-2 h-2 rounded-full bg-blue-400"
                    />
                  ))}
                </div>
              </div>

              {/* Call Buttons */}
              <div className="w-full">
                {/* Top Row Buttons */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto"
                  >
                    <Video className="w-6 h-6 text-white" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto"
                  >
                    <Mic className="w-6 h-6 text-white" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto"
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </motion.button>
                </div>

                {/* End Call Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(239, 68, 68, 0.3)",
                      "0 0 30px rgba(239, 68, 68, 0.5)",
                      "0 0 20px rgba(239, 68, 68, 0.3)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                    },
                  }}
                  className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center mx-auto"
                >
                  <PhoneOff className="w-8 h-8 text-white" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

