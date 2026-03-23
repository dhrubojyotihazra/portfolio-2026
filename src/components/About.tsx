"use client";
import { motion } from "framer-motion";
import OrbitingSkills from "@/components/ui/orbiting-skills";
import { GradientButton } from "@/components/ui/gradient-button";
import { MapPin, GraduationCap, Wifi } from "lucide-react";

export function About() {
  return (
    <section className="relative z-10 py-16 md:py-32 px-4 md:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left: Orbiting Skills Animation */}
        <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center">
          <OrbitingSkills />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]">
            Building intelligent systems out of raw data.
          </h2>

          <div className="text-base sm:text-lg md:text-xl leading-relaxed text-white/70 mb-6 md:mb-8 font-light space-y-4">
            <p>
              I&apos;m Dhrubojyoti Hazra (Dhruv), a 3rd-year Computer Science student
              specializing in Data Science and Generative AI.
            </p>
            <p>
              I build scalable data pipelines and RAG-based systems that transform raw
              data into meaningful insights.
            </p>
            <p>
              With a strong interest in emerging technologies, I&apos;m focused on developing
              real-world solutions and continuously pushing my technical boundaries.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            <GradientButton asChild>
              <a href="https://maps.app.goo.gl/EHue33T6NgNtCy5MA" target="_blank" rel="noreferrer">
                <MapPin className="h-4 w-4 shrink-0" />
                Kolkata, West Bengal
              </a>
            </GradientButton>

            <GradientButton asChild>
              <a href="https://brainwareuniversity.ac.in" target="_blank" rel="noreferrer">
                <GraduationCap className="h-4 w-4 shrink-0" />
                Brainware University
              </a>
            </GradientButton>

            <GradientButton>
              <Wifi className="h-4 w-4 shrink-0" />
              Available for Onsite/Remote
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}