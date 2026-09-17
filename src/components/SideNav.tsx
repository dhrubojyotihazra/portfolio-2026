"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
  offsetY: number; // offset from center (0px is middle)
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "about",
    label: "About Me",
    offsetY: -96,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
        <path d="M10 6h8v4h-8V6Z" />
      </svg>
    ),
  },
  {
    id: "what-i-do",
    label: "What I Do",
    offsetY: -48,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 17H5" />
        <path d="M19 7h-9" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="7" cy="7" r="3" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    offsetY: 0,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    offsetY: 48,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v16" />
        <path d="M16 13h2" />
        <path d="M16 9h2" />
        <path d="M20.001 19A2 2 0 0 0 22 17V5a2 2 0 0 0-1.999-2L16 3.002A5 5 0 0 0 12 5a5 5 0 0 0-4-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 1.999 2H8a5 5 0 0 1 4 2 5 5 0 0 1 4-2z" />
        <path d="M6 13h2" />
        <path d="M6 9h2" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    offsetY: 96,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    ),
  },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeItem = NAV_ITEMS.find((item) => item.id === activeSection) || NAV_ITEMS[0];

  return (
    <aside
      aria-label="Page navigation"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 select-none w-[56px] h-[380px] flex items-center justify-end"
      role="navigation"
    >
      {/* SVG Notch Background with Runs-On Curve */}
      <svg
        className="absolute right-0 top-0 h-full w-[56px] pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 56 380"
      >
        <defs>
          <linearGradient id="notchInnerShadow" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.22)" />
            <stop offset="35%" stopColor="rgba(255, 255, 255, 0.0)" />
          </linearGradient>
        </defs>
        {/* Curved dark background matching #0a0a0c */}
        <path
          d="M 56,0 C 56,45 4,50 4,95 L 4,285 C 4,330 56,335 56,380 Z"
          fill="#0a0a0c"
        />
        {/* Subtle glowing curved border stroke */}
        <path
          d="M 56,1 C 55,45 5,50 5,95 L 5,285 C 5,330 55,335 56,379"
          fill="none"
          stroke="url(#notchInnerShadow)"
          strokeWidth="2"
        />
      </svg>

      {/* Sliding Active Pill Indicator */}
      <motion.div
        className="absolute right-[9px] w-[34px] h-[38px] rounded-full bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] z-10 pointer-events-none flex items-center justify-center"
        initial={false}
        animate={{
          y: activeItem.offsetY,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 28,
        }}
      />

      {/* Nav Icons Container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center pointer-events-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <div
              key={item.id}
              className="absolute right-[9px] w-[34px] h-[34px] flex items-center justify-center cursor-pointer group"
              style={{
                top: `calc(50% + ${item.offsetY}px)`,
                marginTop: "-17px",
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => scrollToSection(item.id)}
            >
              {/* Tooltip on hover */}
              {hoveredItem === item.id && (
                <div className="absolute right-[46px] whitespace-nowrap px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-900 border border-white/10 text-white shadow-xl pointer-events-none transition-all">
                  {item.label}
                  <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-neutral-900 border-t border-r border-white/10" />
                </div>
              )}

              {/* Icon */}
              <button
                aria-label={item.label}
                className={`relative z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 outline-none ${
                  isActive
                    ? "text-black scale-105"
                    : "text-white/40 hover:text-white hover:scale-110"
                }`}
              >
                {item.icon}
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
