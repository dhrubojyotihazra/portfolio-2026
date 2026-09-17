"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";

const FRAME_COUNT = 160;

function getCurrentFrame(index: number) {
  const zeroIndexed = index - 1;
  const paddedIndex = zeroIndexed.toString().padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.05s.webp`;
}

export function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Track scroll specifically for this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  // Overlay Transforms for Name & Subheading
  const opacity1 = useTransform(scrollYProgress, [0, 0.10, 0.18, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.10, 0.18, 1], [0, 0, -100, -100]);

  useEffect(() => {
    const preloadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getCurrentFrame(i);
      preloadedImages.push(img);

      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) {
          // draw first frame once the very first image loads
          if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) renderFrame(img, canvasRef.current, ctx);
          }
        } else {
          // If user is already scrolled, force a render of the correct frame if it just loaded
          const currentIndex = Math.round(frameIndex.get()) - 1;
          if (i - 1 === currentIndex && canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) renderFrame(img, canvasRef.current, ctx);
          }
        }
      };
    }
    setImages(preloadedImages);
  }, []);

  const renderFrame = (img: HTMLImageElement, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    if (!img.complete || img.naturalWidth === 0) return; // safeguard against broken/unloaded images

    const { width, height } = canvas;
    const hRatio = width / img.naturalWidth;
    const vRatio = height / img.naturalHeight;
    const ratio = Math.max(hRatio, vRatio); // object-fit: cover
    const centerShift_x = (width - img.naturalWidth * ratio) / 2;
    const centerShift_y = (height - img.naturalHeight * ratio) / 2;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(
      img,
      0,
      0,
      img.naturalWidth,
      img.naturalHeight,
      centerShift_x,
      centerShift_y,
      img.naturalWidth * ratio,
      img.naturalHeight * ratio
    );
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.round(latest) - 1; // 0-indexed
    const img = images[index];
    if (img && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        // use requestAnimationFrame to prevent rendering tearing during fast scrolls
        requestAnimationFrame(() => renderFrame(img, canvasRef.current!, ctx));
      }
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const index = Math.round(frameIndex.get()) - 1;
        const img = images[index];
        if (img) {
          const ctx = canvasRef.current.getContext("2d");
          if (ctx) renderFrame(img, canvasRef.current, ctx);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative bg-abyss">
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

        {/* Overlay Text Inside the Sticky Container */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center">

          {/* 0% -> Center — Name & Subheading */}
          <motion.div
            style={{ opacity: opacity1, y: y1 }}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center px-6 w-full"
          >
            <h1 className="text-[clamp(2rem,7vw,5rem)] font-bold tracking-tighter mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] whitespace-nowrap overflow-hidden text-ellipsis">
              Dhrubojyoti Hazra
            </h1>
            <p className="text-[clamp(1rem,3vw,2rem)] font-light text-white/80 whitespace-nowrap overflow-hidden text-ellipsis">
              Data Science &amp; Gen AI Developer.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
