"use client";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const experiences = [
  {
    role: "Data Analytics Trainee",
    company: "Euphoria GenX",
    date: "Jan 2026 - Present",
  },
  {
    role: "Software Development Trainee",
    company: "Samsung Innovation Campus",
    date: "Oct 2025",
  }
];

export function Experience() {
  return (
    <section className="relative z-10 py-32 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-16 tracking-tighter text-white">
          Experience.
        </h2>
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 md:pl-0">
              <span className="absolute -left-[41px] md:-left-[41px] top-4 w-4 h-4 rounded-full bg-neon-blue shadow-[0_0_10px_#00f0ff] z-20" />
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }}
                className="group relative block w-full"
              >
                <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                    className="rounded-[1.25rem]"
                  />
                  <div className="relative z-10 bg-black/10 backdrop-blur-md p-8 rounded-xl border border-white/5 transition-all overflow-hidden">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="text-neon-blue font-medium mb-4 text-lg">{exp.company}</div>
                    <div className="text-white/50 text-sm">{exp.date}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
