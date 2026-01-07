"use client";

import { motion } from "motion/react";

export function LaptopGraphic() {
  const codeLines = [
    { indent: 0, text: "const buildApp = async () => {", color: "text-purple-400" },
    { indent: 1, text: "const design = await createDesign();", color: "text-blue-400" },
    { indent: 1, text: "const code = compile(design);", color: "text-blue-400" },
    { indent: 1, text: "", color: "" },
    { indent: 1, text: "return {", color: "text-yellow-400" },
    { indent: 2, text: 'pixels: "perfect",', color: "text-green-400" },
    { indent: 2, text: 'performance: "optimized",', color: "text-green-400" },
    { indent: 2, text: "scalable: true", color: "text-green-400" },
    { indent: 1, text: "};", color: "text-yellow-400" },
    { indent: 0, text: "};", color: "text-purple-400" },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      {/* Laptop Device */}
      <div className="relative max-w-full w-full">
        {/* Laptop Screen */}
        <div className="relative max-w-full">
          {/* Screen Bezel */}
          <div className="bg-gray-900 rounded-t-2xl p-2 sm:p-3 shadow-2xl border-4 sm:border-8 border-gray-900 max-w-full">
            {/* Screen Content */}
            <div className="w-full max-w-[400px] sm:max-w-[500px] bg-[#0A1628] rounded-t-lg overflow-hidden relative mx-auto" style={{ minHeight: '320px', height: '320px' }}>
              {/* Terminal Header */}
              <div className="h-8 bg-gray-800/50 flex items-center px-4 gap-2 border-b border-gray-700/50 flex-shrink-0">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-gray-400 ml-4 font-mono">build.ts</div>
              </div>

              {/* Code Editor */}
              <div className="p-4 sm:p-6 font-mono text-xs overflow-x-hidden overflow-y-auto" style={{ height: 'calc(100% - 2rem)' }}>
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center mb-2 min-w-0"
                  >
                    <span className="text-gray-600 w-6 text-right mr-2 sm:mr-4 select-none text-[10px] flex-shrink-0">
                      {index + 1}
                    </span>
                    <span
                      className={`${line.color} break-words overflow-wrap-anywhere`}
                      style={{ paddingLeft: `${line.indent * 1.5}rem` }}
                    >
                      {line.text}
                    </span>
                  </motion.div>
                ))}

                {/* Cursor Blink */}
                <motion.div
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-1.5 h-4 bg-blue-400 ml-2"
                  style={{ marginTop: "-4px" }}
                />
              </div>

              {/* Floating Code Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 right-8 text-4xl opacity-30"
              >
                <span className="text-blue-400/20">{"{ }"}</span>
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-16 right-8 text-3xl opacity-20"
              >
                <span className="text-purple-400/20">{"</>"}</span>
              </motion.div>
            </div>
          </div>

          {/* Laptop Base/Keyboard */}
          <div className="relative max-w-full">
            {/* Keyboard section */}
            <div className="h-6 sm:h-8 bg-gray-800 rounded-b-2xl shadow-xl max-w-full" />

            {/* Base shadow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] max-w-[450px] sm:max-w-[550px] h-3 bg-gray-900/50 rounded-full blur-xl" />
          </div>
        </div>

        {/* Status Indicator */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-green-400/30"
        >
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs text-green-400 font-mono">Building...</span>
        </motion.div>
      </div>
    </div>
  );
}

