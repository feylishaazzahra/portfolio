"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Zap } from "lucide-react";
import { GlassButton } from "@/components/ui/apple-tahoe-liquid-glass-button";

export default function GlassButtonDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonWrapperRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (containerRef.current && buttonWrapperRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = buttonWrapperRef.current.getBoundingClientRect();

      cursorX.set(containerRect.width / 2 - buttonRect.width / 2);
      cursorY.set(containerRect.height / 2 - buttonRect.height / 2);
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!buttonWrapperRef.current) return;

      const buttonRect = buttonWrapperRef.current.getBoundingClientRect();
      cursorX.set(event.clientX - buttonRect.width / 2);
      cursorY.set(event.clientY - buttonRect.height / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-screen w-full overflow-hidden bg-black"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      <motion.div
        ref={buttonWrapperRef}
        className="absolute left-0 top-0 z-10"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      >
        <GlassButton size="default" contentClassName="gap-2">
          <span>Generate</span>
          <Zap className="h-5 w-5" aria-hidden="true" />
        </GlassButton>
      </motion.div>
    </div>
  );
}
