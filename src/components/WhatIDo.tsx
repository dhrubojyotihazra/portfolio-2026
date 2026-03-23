"use client";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const whatIDoItems = [
  {
    title: "Data Science Student",
    description: "Focus on algorithms, statistical modeling, and academic rigor."
  },
  {
    title: "Data Analyst",
    description: "Focus on building analytical pipelines and business intelligence."
  },
  {
    title: "Gen AI Engineer",
    description: "Focus on RAG architectures, LLMs, and intelligent agents."
  },
  {
    title: "UI/UX Developer",
    description: "Focus on bridging design and engineering with performant frontends."
  }
];

export function WhatIDo() {
  return (
    <section className="relative z-10 py-16 md:py-32 px-4 md:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 md:mb-16 tracking-tighter text-white">
          What I <span className="text-white/50">Do.</span>
        </h2>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whatIDoItems.map((item, i) => (
            <motion.li 
              key={i}
              initial={{opacity:0, y:30}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true, margin:"-50px"}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative min-h-[200px] md:min-h-[250px] list-none block"
            >
              <div className="relative h-full rounded-[2.25rem] border-[0.75px] border-white/10 p-2 md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                  className="rounded-[2.25rem]"
                />
                <div className="relative z-10 flex flex-col justify-center h-full bg-black/10 backdrop-blur-md border border-white/5 rounded-[1.75rem] p-6 md:p-10 shadow-sm transition-all duration-500 overflow-hidden">
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
