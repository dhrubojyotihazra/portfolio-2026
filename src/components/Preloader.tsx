"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GREETINGS = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "Hallo",
  "Namaste",
  "مرحبا",
  "안녕",
  "Welcome",
];

export function Preloader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while preloader runs
    document.body.style.overflow = "hidden";

    const stepDuration = 220; // ms per greeting
    const total = GREETINGS.length;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < total - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "unset";
          }, 380);
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] text-white select-none pointer-events-auto"
        >
          {/* Ambient center radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1)_0%,transparent_70%)] pointer-events-none" />

          {/* Crisp, unblurred greeting typography (zero blur, purely sharp text) */}
          <div className="relative flex items-center justify-center h-28 px-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: 24, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.18,
                    ease: [0.33, 1, 0.68, 1],
                  },
                }}
                exit={{
                  y: -24,
                  opacity: 0,
                  transition: {
                    duration: 0.15,
                    ease: [0.32, 0, 0.67, 0],
                  },
                }}
                className="flex items-center gap-3.5"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-neon-orange shadow-[0_0_10px_#ff4d00]" />
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                  {GREETINGS[currentIndex]}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
