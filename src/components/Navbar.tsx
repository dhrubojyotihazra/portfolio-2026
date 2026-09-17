"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-black/65 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      {/* Slit bottom glow line inspired by runs-on.dev */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-24">
        {/* Brand Logo */}
        <a
          href="#"
          className="text-[17px] tracking-[-0.01em] font-semibold text-white no-underline flex items-center gap-2 group"
        >
          <span className="w-2 h-2 rounded-full bg-neon-blue shadow-[0_0_8px_#00f0ff] group-hover:scale-125 transition-transform" />
          <span>dhruv</span>
          <span className="text-white/40 font-mono text-sm font-normal">.dev</span>
        </a>

        {/* Center Desktop Navigation */}
        <nav aria-label="Site" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.12em] font-medium text-white/50 no-underline transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Button (btn-pill style from runs-on.dev) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-white text-black hover:bg-white/90 active:translate-y-[1px] transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            <span>Get In Touch</span>
            <span aria-hidden="true" className="text-xs">↗</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/70 hover:text-white p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-white/10 bg-black/95 backdrop-blur-xl px-6 py-5 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-wider font-medium text-white/70 hover:text-white py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 mt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-white text-black hover:bg-white/90 transition-all"
                >
                  <span>Get In Touch</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
