"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function TopNavbar() {
  const pathname = usePathname();
  const [latency, setLatency] = useState(14);

  // Simulate floating latency ping values
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = prev + delta;
        return next > 6 && next < 30 ? next : prev;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-8 h-12 border-b border-outline-variant bg-surface-container-lowest text-on-surface">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-label-lg font-mono font-bold text-primary-fixed-dim hover:text-primary transition-colors tracking-tighter">
          [ANANT_TIRUPATI_OS]
        </Link>
        <div className="hidden md:flex gap-6 items-center pt-1 font-mono text-label-md">
          <Link
            href="/"
            className={`transition-all duration-100 uppercase tracking-widest px-2 py-0.5 border-b-2 hover:text-primary ${
              pathname === "/"
                ? "text-primary border-primary glow-text-primary"
                : "text-on-surface-variant border-transparent"
            }`}
          >
            HQ
          </Link>
          <Link
            href="/loadout"
            className={`transition-all duration-100 uppercase tracking-widest px-2 py-0.5 border-b-2 hover:text-primary ${
              pathname === "/loadout"
                ? "text-primary border-primary glow-text-primary"
                : "text-on-surface-variant border-transparent"
            }`}
          >
            LOADOUT
          </Link>
          <Link
            href="/skills"
            className={`transition-all duration-100 uppercase tracking-widest px-2 py-0.5 border-b-2 hover:text-primary ${
              pathname === "/skills"
                ? "text-primary border-primary glow-text-primary"
                : "text-on-surface-variant border-transparent"
            }`}
          >
            SKILLS
          </Link>
          <Link
            href="/logs"
            className={`transition-all duration-100 uppercase tracking-widest px-2 py-0.5 border-b-2 hover:text-primary ${
              pathname === "/logs"
                ? "text-primary border-primary glow-text-primary"
                : "text-on-surface-variant border-transparent"
            }`}
          >
            LOGS
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4 text-primary-fixed-dim">
        <div className="hidden lg:flex items-center gap-4 text-xs font-mono mr-4 text-on-surface-variant opacity-75">
          <div>PING: <span className="text-secondary-fixed-dim animate-pulse">{latency}MS</span></div>
          <div className="h-3 w-px bg-outline-variant"></div>
          <div>SECURE_UPLINK: <span className="text-secondary-container">ACTIVE</span></div>
        </div>
        <a
          href="https://github.com/ananttirupati"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-mono text-on-surface-variant hover:text-primary-fixed-dim transition-colors uppercase tracking-wider"
          title="GitHub Profile"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/ananttirupati/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-mono text-on-surface-variant hover:text-primary-fixed-dim transition-colors uppercase tracking-wider"
          title="LinkedIn Profile"
        >
          LINKEDIN
        </a>
      </div>
    </nav>
  );
}
