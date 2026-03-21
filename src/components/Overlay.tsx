"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function Overlay() {
  const { scrollYProgress } = useScroll();

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [-100, 0, 100]);

  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [0, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [100, 0, -100]);

  return (
    <div className="fixed inset-0 z-10 pointer-events-none flex flex-col items-center justify-center p-8">
      
      {/* 0% -> Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 drop-shadow-2xl">
          Dhrubojyoti Hazra
        </h1>
        <p className="text-xl md:text-3xl font-light text-white/80">
          Data Science & Gen AI Developer.
        </p>
      </motion.div>

      {/* 30% -> Left */}
      <motion.div
        style={{ opacity: opacity2, x: x2 }}
        className="absolute top-1/3 left-[10%] text-left max-w-xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 title-glow">
          Engineering intelligence.
        </h2>
        <div className="h-1 w-24 bg-neon-blue rounded-full shadow-[0_0_10px_#00f0ff]" />
      </motion.div>

      {/* 60% -> Right */}
      <motion.div
        style={{ opacity: opacity3, x: x3 }}
        className="absolute bottom-1/3 right-[10%] text-right max-w-2xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Bridging raw data and <br/><span className="text-neon-orange font-black">generative experiences.</span>
        </h2>
        <div className="h-1 w-32 bg-neon-orange rounded-full shadow-[0_0_10px_#ff4d00] ml-auto" />
      </motion.div>

    </div>
  );
}
