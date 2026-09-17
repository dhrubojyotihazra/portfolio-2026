"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ABOUT_TEXT =
  "I'M DHRUBOJYOTI HAZRA (DHRUV), AN ASPIRING DATA SCIENTIST AND GEN AI DEVELOPER. A 3RD-YEAR COMPUTER SCIENCE STUDENT DEDICATED TO BUILDING INTELLIGENT SYSTEMS OUT OF RAW DATA. I BUILD SCALABLE DATA PIPELINES AND RAG-BASED ARCHITECTURES THAT TRANSFORM RAW DATA INTO MEANINGFUL INSIGHTS, FOCUSED ON DEVELOPING REAL-WORLD SOLUTIONS AND CONTINUOUSLY PUSHING TECHNICAL BOUNDARIES.";

interface WordProps {
  children: string;
  range: [number, number];
  progress: any;
}

const Word = ({ children, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <span className="inline-block mr-[0.28em] my-1 relative">
      <motion.span style={{ opacity }} className="text-white transition-opacity duration-150">
        {children}
      </motion.span>
    </span>
  );
};

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const words = ABOUT_TEXT.split(" ");

  return (
    <section id="about" ref={containerRef} className="relative z-10 py-24 md:py-36 px-4 md:px-6 lg:px-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        {/* Auton Style Top Badge with Green Accent Dot */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-10 md:mb-14">
          <span className="w-2 h-2 rounded-[2px] bg-[#32d74b] shadow-[0_0_8px_#32d74b]" />
          <span className="text-xs uppercase tracking-[0.14em] font-medium text-white/80">
            About Me
          </span>
        </div>

        {/* Text Container with Visual Hierarchy Flanking Lines */}
        <div className="relative w-full text-center">
          {/* Left Flanking Line with Square Dot */}
          <div className="hidden lg:flex items-center absolute left-[-40px] xl:left-[-60px] top-1/2 -translate-y-1/2 w-28 xl:w-44 pointer-events-none -translate-x-full">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-white/30" />
            <span className="w-1.5 h-1.5 bg-white/70 rounded-[1px] shadow-[0_0_6px_rgba(255,255,255,0.6)] shrink-0 ml-2" />
          </div>

          {/* Right Flanking Line with Square Dot */}
          <div className="hidden lg:flex items-center absolute right-[-40px] xl:right-[-60px] top-1/2 -translate-y-1/2 w-28 xl:w-44 pointer-events-none translate-x-full">
            <span className="w-1.5 h-1.5 bg-white/70 rounded-[1px] shadow-[0_0_6px_rgba(255,255,255,0.6)] shrink-0 mr-2" />
            <div className="h-[1px] w-full bg-gradient-to-l from-transparent to-white/30" />
          </div>

          {/* Large Scroll-Revealing Display Text */}
          <p className="text-2xl sm:text-3xl md:text-[38px] lg:text-[44px] font-semibold leading-[1.32] tracking-[-0.01em] uppercase font-sans select-none px-4">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} range={[start, end]} progress={scrollYProgress}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}