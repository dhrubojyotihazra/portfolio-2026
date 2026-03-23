"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const projects = [
  {
    title: "Aprovify",
    description: "Loan approval prediction model powered by advanced ML algorithms.",
    color: "group-hover:text-neon-blue",
    border: "group-hover:border-neon-blue",
    link: "https://aprovify.onrender.com"
  },
  {
    title: "CodeGalaxy",
    description: "Visualize your GitHub repository as an interactive 3D galaxy.",
    color: "group-hover:text-neon-purple",
    border: "group-hover:border-neon-purple",
    link: "https://codegalaxy-web.onrender.com"
  },
  {
    title: "OpinionIQ",
    description: "Dynamic Customer Review and sentiment analysis with executive reports and chat with your data.",
    color: "group-hover:text-neon-pink",
    border: "group-hover:border-neon-pink",
    link: "https://github.com/dhrubojyotihazra/OpinionIQ"
  },
  {
    title: "Vitals",
    description: "Health tracker to predict diseases early using predictive analytics.",
    color: "group-hover:text-neon-blue",
    border: "group-hover:border-neon-blue",
    link: "https://vitals-and-health-tracker.streamlit.app"
  },
  {
    title: "NovaTrade AI",
    description: "Crypto Trading Analysis Dashboard for real-time market insights.",
    color: "group-hover:text-orange-500 [text-shadow:_0_4px_4px_rgb(0_0_0_/_1)]",
    border: "group-hover:border-neon-orange",
    link: "https://novatrde-ai.streamlit.app"
  },
];

export function Projects() {
  return (
    <section className="relative z-20 text-white py-16 md:py-32 px-4 md:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 md:mb-16 tracking-tighter">
            Selected <span className="text-white/50">Works.</span>
          </h2>
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative min-h-[300px] list-none block"
            >
              <div className="relative h-full rounded-[1.5rem] border-[0.75px] border-white/10 p-2 md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                  className="rounded-[1.5rem]"
                />
                
                <div className={`relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-xl border-[0.75px] border-white/5 bg-black/10 backdrop-blur-md p-8 shadow-sm transition-all duration-500 ${project.border}`}>
                  <div>
                    <h3 className={`text-xl md:text-3xl font-bold mb-3 transition-colors duration-300 ${project.color}`}>
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-base md:text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </ul>
      </div>
    </section>
  );
}
