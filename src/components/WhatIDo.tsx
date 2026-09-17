"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "DATA SCIENCE",
    description: "Developing predictive models, machine learning algorithms, and deep statistical reasoning for complex domains.",
    image: "/services/data_science.jpg",
  },
  {
    id: "02",
    title: "DATA ANALYTICS",
    description: "Architecting end-to-end data pipelines, ETL workflows, and actionable business intelligence dashboards.",
    image: "/services/data_analytics.jpg",
  },
  {
    id: "03",
    title: "GEN AI & AGENTS",
    description: "Building production RAG systems, autonomous multi-agent frameworks, and fine-tuned LLM architectures.",
    image: "/services/gen_ai.jpg",
  },
  {
    id: "04",
    title: "UI/UX & FRONTEND",
    description: "Crafting fluid, high-performance web experiences that bridge engineering intelligence with sleek intuitive design.",
    image: "/services/ui_ux.jpg",
  },
];

export function WhatIDo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="what-i-do" className="relative z-10 py-16 md:py-32 px-4 md:px-6 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading kept exactly as is */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 md:mb-16 tracking-tighter text-white">
            What I <span className="text-white/50">Do.</span>
          </h2>
        </motion.div>

        {/* Auton-Style Interactive Service Rows */}
        <div className="relative border-t border-white/15">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative border-b border-white/15 transition-colors duration-300"
              >
                {/* Active White Background Card (Auton style) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      layoutId="hoveredServiceBg"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="absolute inset-0 bg-white rounded-2xl z-0 pointer-events-none shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    />
                  )}
                </AnimatePresence>

                {/* Service Row Content */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 px-6 md:px-10 transition-all duration-300 gap-4">
                  {/* Title on the Left */}
                  <h3
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight transition-colors duration-200 select-none ${
                      isHovered ? "text-black" : "text-white/90 group-hover:text-white"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description on the Right */}
                  <div className="md:max-w-md lg:max-w-lg md:text-right">
                    <p
                      className={`text-sm sm:text-base leading-relaxed transition-colors duration-200 ${
                        isHovered ? "text-neutral-700 font-normal" : "text-white/50 font-light"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Floating Image Preview (Auton signature effect) */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -6, y: -20 }}
                        animate={{ opacity: 1, scale: 1, rotate: -3, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: -6, y: -20 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        className="hidden md:block absolute left-[32%] lg:left-[35%] -top-8 z-30 pointer-events-none"
                      >
                        <div className="p-1.5 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/20">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-[220px] lg:w-[260px] h-[140px] lg:h-[160px] object-cover rounded-xl"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
