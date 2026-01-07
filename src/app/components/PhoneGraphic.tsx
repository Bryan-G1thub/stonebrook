"use client";

import { motion } from "motion/react";
import { Phone, Video, Mic, PhoneOff } from "lucide-react";

export function PhoneGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Phone Device */}
      <div className="relative scale-75 md:scale-90">
        {/* Phone Frame */}
        <div className="w-[200px] h-[400px] bg-black rounded-[2rem] p-2 shadow-2xl border-6 border-gray-900">
          {/* Screen */}
          <div className="w-full h-full bg-gradient-to-b from-[#0A1628] to-[#1a2942] rounded-[1.75rem] overflow-hidden relative">
            {/* Top Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-b-2xl z-10" />

            {/* Call Screen Content */}
            <div className="relative z-0 h-full flex flex-col items-center justify-between py-10 px-4">
              {/* Contact Info */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-4 flex items-center justify-center"
                >
                  <span className="text-xl text-white font-light">SB</span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-white font-light mb-1"
                >
                  Stonebrook
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xs text-gray-400"
                >
                  Calling...
                </motion.p>

                {/* Animated Dots */}
                <div className="flex gap-1 justify-center mt-3">
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
                      className="w-1.5 h-1.5 rounded-full bg-blue-400"
                    />
                  ))}
                </div>
              </div>

              {/* Call Buttons */}
              <div className="w-full">
                {/* Top Row Buttons */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto"
                  >
                    <Video className="w-4 h-4 text-white" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto"
                  >
                    <Mic className="w-4 h-4 text-white" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto"
                  >
                    <Phone className="w-4 h-4 text-white" />
                  </motion.button>
                </div>

                {/* End Call Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(239, 68, 68, 0.3)",
                      "0 0 25px rgba(239, 68, 68, 0.5)",
                      "0 0 15px rgba(239, 68, 68, 0.3)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                    },
                  }}
                  className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center mx-auto"
                >
                  <PhoneOff className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

