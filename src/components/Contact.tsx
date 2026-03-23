"use client";
import { Github, Linkedin, Instagram, ArrowUpRight, Download } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/button";
import { GlassButton } from "@/components/ui/glass-button";
import SocialFlipButton from "@/components/ui/social-flip-button";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaDiscord } from "react-icons/fa";


export function Contact() {
  return (
    <section id="contact" className="relative z-10 py-16 md:py-32 px-4 md:px-6 lg:px-24 flex justify-center group">
      <div className="w-full max-w-4xl relative rounded-[2.25rem] border-[0.75px] border-white/10 p-2 md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
          className="rounded-[2.25rem]"
        />
        <div className="relative z-10 w-full backdrop-blur-md bg-black/10 border border-white/5 rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-6 sm:p-10 md:p-20 text-center overflow-hidden">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 md:mb-12 tracking-tighter text-white">Let&apos;s Build Something Together</h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
            <Button asChild className="bg-white text-abyss hover:bg-white border-none relative text-lg font-bold rounded-full h-[60px] p-1 ps-8 pe-[72px] group/btn transition-all duration-500 hover:ps-[72px] hover:pe-8 w-fit overflow-hidden cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <a href="mailto:dhrubojyotihazra@gmail.com">
                <span className="relative z-10 transition-all duration-500">
                  Get In Touch
                </span>
                <div className="absolute right-1 w-[52px] h-[52px] bg-abyss text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover/btn:right-[calc(100%-53px)] group-hover/btn:rotate-45">
                  <ArrowUpRight size={24} />
                </div>
              </a>
            </Button>

            <a href="/Dhrubojyoti_Hazra_CV.pdf" target="_blank" rel="noreferrer">
              <GlassButton
                size="lg"
                contentClassName="flex items-center gap-2"
                className="bg-white/5 hover:bg-white/20 border border-white/20 text-white shadow-lg transition-all duration-300 backdrop-blur-xl h-[60px] flex items-center"
              >
                <span>Download Resume</span>
                <Download className="h-5 w-5" />
              </GlassButton>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
             <SocialFlipButton items={[
               { letter: "C", icon: <FaGithub size={20} />, label: "Github", href: "https://github.com/dhrubojyotihazra" },
               { letter: "O", icon: <FaTwitter size={20} />, label: "Twitter", href: "https://x.com/Kngdhruv" },
               { letter: "N", icon: <FaLinkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/dhrubojyoti-hazra-a71a9a325" },
               { letter: "T", icon: <FaInstagram size={20} />, label: "Instagram", href: "https://instagram.com/kngdhruv" },
               { letter: "A", icon: <FaFacebook size={20} />, label: "Facebook", href: "https://www.facebook.com/ruby.hazra.501/" },
               { letter: "C", icon: <FaEnvelope size={20} />, label: "Email", href: "mailto:dhrubojyotihazra@gmail.com" },
               { letter: "T", icon: <FaDiscord size={20} />, label: "Discord", href: "https://discord.com/users/1253311102507290695" }
             ]} />
          </div>
          <div className="mt-16 text-white/40 text-sm">
            <p>© {new Date().getFullYear()} Dhrubojyoti Hazra. Engineered intelligently.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
