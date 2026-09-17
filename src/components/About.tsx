"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, GraduationCap, Wifi } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

const ABOUT_PARAGRAPH = 
  "I'M A PASSIONATE DATA SCIENTIST AND GEN AI DEVELOPER DEDICATED TO CREATING INTELLIGENT, DATA-DRIVEN EXPERIENCES. FROM BUILDING SCALABLE ETL PIPELINES AND RAG ARCHITECTURES TO FINE-TUNING LLM AGENTS AND DEVELOPING INTUITIVE INTERFACES, I HELP TRANSFORM RAW COMPLEX DATA INTO HIGH-IMPACT PRODUCTS.";

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

  const words = ABOUT_PARAGRAPH.split(" ");

  return (
    <section id="about" ref={containerRef} className="relative z-10 py-24 md:py-36 px-4 md:px-6 lg:px-24">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        {/* Auton Style Top Badge with Green Accent Dot */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-10 md:mb-14">
          <span className="w-2 h-2 rounded-[2px] bg-[#32d74b] shadow-[0_0_8px_#32d74b]" />
          <span className="text-xs uppercase tracking-[0.14em] font-medium text-white/80">
            About Me
          </span>
        </div>

        {/* Auton Style Large Scroll-Revealing Display Text */}
        <div className="w-full text-center mb-12 md:mb-16">
          <p className="text-2xl sm:text-3xl md:text-[40px] lg:text-[46px] font-semibold leading-[1.32] tracking-[-0.01em] uppercase font-sans select-none">
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

        {/* Status and Location Badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mt-2">
          <GradientButton asChild>
            <a href="https://maps.app.goo.gl/EHue33T6NgNtCy5MA" target="_blank" rel="noreferrer">
              <MapPin className="h-4 w-4 shrink-0 text-neon-orange" />
              <span>Kolkata, West Bengal</span>
            </a>
          </GradientButton>

          <GradientButton asChild>
            <a href="https://brainwareuniversity.ac.in" target="_blank" rel="noreferrer">
              <GraduationCap className="h-4 w-4 shrink-0 text-neon-blue" />
              <span>Brainware University</span>
            </a>
          </GradientButton>

          <GradientButton>
            <Wifi className="h-4 w-4 shrink-0 text-[#32d74b]" />
            <span>Available for Onsite / Remote</span>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}