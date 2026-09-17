"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative z-10 py-16 md:py-32 px-4 md:px-6 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading matching What I Do / Selected Works style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 md:mb-16 tracking-tighter text-white">
            About <span className="text-white/50">Me.</span>
          </h2>
        </motion.div>

        {/* Content Container with Visual Hierarchy Flanking Lines */}
        <div className="relative">
          {/* Left Flanking Line with Square Dot */}
          <div className="hidden xl:flex items-center absolute left-[-60px] top-10 pointer-events-none -translate-x-full">
            <div className="h-[1px] w-24 xl:w-36 bg-gradient-to-r from-transparent to-white/30" />
            <span className="w-1.5 h-1.5 bg-white/70 rounded-[1px] shadow-[0_0_6px_rgba(255,255,255,0.6)] shrink-0 ml-2" />
          </div>

          {/* Right Flanking Line with Square Dot */}
          <div className="hidden xl:flex items-center absolute right-[-60px] top-10 pointer-events-none translate-x-full">
            <span className="w-1.5 h-1.5 bg-white/70 rounded-[1px] shadow-[0_0_6px_rgba(255,255,255,0.6)] shrink-0 mr-2" />
            <div className="h-[1px] w-24 xl:w-36 bg-gradient-to-l from-transparent to-white/30" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Tagline Statement */}
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tighter text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] max-w-4xl leading-tight">
              Building intelligent systems out of raw data.
            </h3>

            {/* Original Restored Paragraphs with ASPIRING */}
            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-white/60 font-light space-y-5 max-w-3xl">
              <p>
                I&apos;m Dhrubojyoti Hazra (Dhruv), an <span className="text-white font-medium">aspiring</span> Data Science and Generative AI developer, currently in my 4th year of Computer Science.
              </p>
              <p>
                I build scalable data pipelines and RAG-based systems that transform raw data into meaningful insights.
              </p>
              <p>
                With a strong interest in emerging technologies, I&apos;m focused on developing real-world solutions and continuously pushing my technical boundaries.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}