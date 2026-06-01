"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import TerminalWidget from "@/components/TerminalWidget";

export default function HQPage() {
  const [latency, setLatency] = useState(14);

  // Sync floating diagnostic latencies
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1;
        const next = prev + delta;
        return next > 8 && next < 25 ? next : prev;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center px-4 md:px-8 py-12 select-none overflow-hidden">
      {/* Background 3D Workstation Layout Layer */}
      <div className="absolute inset-0 z-[-1] overflow-hidden bg-background">
        <div className="grid-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1200px] h-[60vh] tech-frame opacity-25 pointer-events-none rounded-3xl"></div>
        
        {/* Workstation Tactical Image */}
        <img
          className="w-full h-full object-cover opacity-8 filter grayscale contrast-150 mix-blend-screen pointer-events-none"
          alt="Tactical workstation grid visual"
          src="https://lh3.googleusercontent.com/aida/ADBb0ujPHODiIHxq3_VjsSsgd41ahgMl7ptvfiC5-KCG4WQcZBUJApQZ9q-C4txBkVLELaCN-eMtKnU4nogHj-LzM8uB5QAej4x_J6IEGfI1eLLZM2vQdL839WrJaQwz-UOZMOsV8O_SURwqO3IftXrnbQcDsZANi2NQWmkEXDTMF0mzdUJJDksGOykh-hicsWMcxNXILijlUYbkndajPi378GE7mkFkn6RpZmT8UP5TR9wa4Tc85KPXpVFRFVQ"
        />
      </div>

      {/* Floating HUD Badges (Desktop Only) */}
      <div className="fixed top-16 left-72 z-30 hidden lg:block pointer-events-none font-mono">
        <div className="text-label-sm text-primary-fixed-dim/60 mb-1">
          SYSTEM_STATUS: <span className="text-secondary-fixed-dim">STABLE</span>
        </div>
        <div className="text-label-sm text-primary-fixed-dim/60">
          OPERATOR_LATENCY: <span className="animate-pulse text-secondary-fixed">{latency}MS</span>
        </div>
        <div className="w-24 h-px bg-primary-fixed-dim/30 mt-2 relative">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-primary-fixed-dim breathe-primary"></div>
        </div>
      </div>

      <div className="fixed top-16 right-8 z-30 hidden lg:block pointer-events-none font-mono text-right">
        <div className="text-label-sm text-primary-fixed-dim/60 mb-1">SECURE_UPLINK: ACTIVE</div>
        <div className="text-label-sm text-primary-fixed-dim/60">GRID_COORDS: 26.4499°N, 80.3319°E</div>
        <div className="flex justify-end mt-2 gap-1.5">
          <div className="w-2.5 h-2.5 border border-primary-fixed-dim/50"></div>
          <div className="w-2.5 h-2.5 bg-primary-fixed-dim/80 breathe-primary"></div>
          <div className="w-2.5 h-2.5 border border-primary-fixed-dim/50"></div>
        </div>
      </div>

      {/* Floating HUD Animated Radar Spin (Bottom Right) */}
      <div className="fixed bottom-12 right-8 z-30 hidden lg:block pointer-events-none">
        <div className="w-14 h-14 rounded-full border border-primary-fixed-dim/30 relative flex items-center justify-center">
          <div className="absolute inset-1.5 rounded-full border-t border-primary-fixed-dim/70 animate-spin" style={{ animationDuration: "2.5s" }}></div>
          <div className="w-1.5 h-1.5 bg-secondary-fixed-dim rounded-full animate-ping"></div>
        </div>
      </div>

      {/* HQ Welcome Dashboard Hero */}
      <div className="max-w-[1000px] w-full mx-auto relative z-10 flex flex-col items-center text-center mt-6 md:mt-0 p-4 xs:p-6 sm:p-8 tech-frame backdrop-blur-sm">
        <div className="mb-4 inline-flex items-center gap-2 border border-secondary-fixed-dim text-secondary-fixed-dim px-3 py-1 text-label-sm font-mono hud-border bg-surface-container-highest/80 backdrop-blur">
          <span className="w-2 h-2 bg-secondary-fixed-dim rounded-none glow-secondary animate-pulse"></span>
          SYSTEM_ONLINE
        </div>
        
        <h1 className="text-display-lg font-mono text-primary-fixed-dim mb-3 uppercase tracking-tighter breathe-primary drop-shadow-[0_0_12px_rgba(0,218,243,0.7)] font-bold text-[24px] xs:text-[32px] sm:text-[44px] md:text-[52px]">
          [ANANT TIRUPATI]
        </h1>
        
        <h2 className="text-headline-sm sm:text-headline-md font-mono text-on-surface-variant mb-6 sm:mb-8 uppercase flex flex-wrap items-center justify-center gap-2 tracking-wide text-[10px] xs:text-xs sm:text-sm">
          <span className="text-secondary-fixed-dim opacity-50 font-bold">&lt;</span>
          FULL STACK ENGINEER // AI BUILDER // HACKATHON COMPETITOR
          <span className="text-secondary-fixed-dim opacity-50 font-bold">&gt;</span>
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 w-full sm:w-auto">
          <Link
            href="/logs"
            className="border border-primary-fixed-dim text-primary-fixed-dim hover:bg-primary-fixed-dim hover:text-background px-6 sm:px-8 py-3 text-label-md font-mono uppercase transition-all duration-300 glow-primary active:scale-95 flex items-center justify-center gap-2.5 clip-button glow-primary-hover font-semibold cursor-pointer text-xs sm:text-sm"
          >
            <span className="material-symbols-outlined text-[18px]">visibility</span>
            [VIEW PROJECTS]
          </Link>
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(new Event("open-contact"));
              }
            }}
            className="border border-outline text-on-surface-variant hover:border-primary-fixed-dim hover:text-primary-fixed-dim px-6 sm:px-8 py-3 text-label-md font-mono uppercase transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5 bg-surface-container-low/80 backdrop-blur clip-button hover:bg-surface-container-highest font-semibold cursor-pointer text-xs sm:text-sm"
          >
            <span className="material-symbols-outlined text-[18px]">login</span>
            [ENTER COMMAND CENTER]
          </button>
        </div>

        {/* Interactive CLI Terminal Widget */}
        <TerminalWidget />
      </div>
    </div>
  );
}
