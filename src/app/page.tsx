import { Background } from "@/components/Background";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Projects } from "@/components/Projects";
import { WhatIDo } from "@/components/WhatIDo";
import { About } from "@/components/About";
import { SkillsTrail } from "@/components/SkillsTrail";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <Background />
      <ScrollyCanvas />
      <Projects />
      <WhatIDo />
      <About />
      <SkillsTrail />
      <Experience />
      <Contact />
    </main>
  );
}
