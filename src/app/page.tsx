import { SideNav } from "@/components/SideNav";
import { Background } from "@/components/Background";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { About } from "@/components/About";
import { WhatIDo } from "@/components/WhatIDo";
import { Projects } from "@/components/Projects";
import { SkillsTrail } from "@/components/SkillsTrail";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <SideNav />
      <Background />
      <ScrollyCanvas />
      <About />
      <WhatIDo />
      <Projects />
      <SkillsTrail />
      <Experience />
      <Contact />
    </main>
  );
}
