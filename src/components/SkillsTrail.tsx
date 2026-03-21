"use client";
import { motion } from "framer-motion";

const skills = [
  "Python", "SQL", "Power BI", "React", "Next.js", "FastAPI", 
  "Scikit-learn", "Hugging Face", "Gemini API", "RAG", "Cursor"
];

export function SkillsTrail() {
  return (
    <section className="relative z-10 py-24 overflow-hidden mask-fade-edges">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 min-w-max px-6"
        >
          {[...skills, ...skills, ...skills].map((skill, i) => (
            <div key={i} className="px-8 py-4 glass rounded-full border border-white/10 text-xl font-bold text-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
