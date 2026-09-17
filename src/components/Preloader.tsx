"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GREETINGS = [
  { word: "Hello", lang: "en" },
  { word: "Hola", lang: "es" },
  { word: "Bonjour", lang: "fr" },
  { word: "Ciao", lang: "it" },
  { word: "Hallo", lang: "de" },
  { word: "Namaste", lang: "hi" },
  { word: "مرحبا", lang: "ar" },
  { word: "안녕", lang: "ko" },
  { word: "Welcome", lang: "en" },
];

export function Preloader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable scroll while preloader is active
    document.body.style.overflow = "hidden";

    // Cycle through greetings
    const stepDuration = 220; // ms per word
    const totalWords = GREETINGS.length;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < totalWords - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          // Pause on final word before curtain pulls up
          setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "unset";
          }, 450);
          return prev;
        }
      });
    }, stepDuration);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white select-none pointer-events-auto"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.12)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative flex flex-col items-center justify-center overflow-hidden h-32 px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: 35, opacity: 0, filter: "blur(6px)" }}
                animate={{
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.2,
                    ease: [0.68, 0, 0.22, 0.98],
                  },
                }}
                exit={{
                  y: -35,
                  opacity: 0,
                  filter: "blur(6px)",
                  transition: {
                    duration: 0.16,
                    ease: [0.68, 0, 0.22, 0.98],
                  },
                }}
                className="flex items-center gap-3"
              >
                {/* Accent dot indicator */}
                <span className="w-2.5 h-2.5 rounded-full bg-neon-orange shadow-[0_0_12px_#ff4d00] animate-pulse" />
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  {GREETINGS[currentIndex].word}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress bar at bottom */}
          <div className="absolute bottom-10 inset-x-8 max-w-xs mx-auto">
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-orange to-white"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentIndex + 1) / GREETINGS.length) * 100}%` }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between items-center mt-2 text-[11px] font-mono text-white/40 tracking-wider uppercase">
              <span>Loading Experience</span>
              <span>{Math.round(((currentIndex + 1) / GREETINGS.length) * 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
