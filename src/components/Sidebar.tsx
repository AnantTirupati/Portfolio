"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  onContactClick: () => void;
}

export default function Sidebar({ onContactClick }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-12 h-[calc(100vh-48px)] hidden md:flex flex-col p-4 w-64 z-40 border-r border-outline-variant bg-surface-container-low text-on-surface">
      {/* Operator Card */}
      <div className="mb-6 border border-outline-variant p-3 bg-surface-container-lowest relative">
        <div className="hud-border::before top-[-1px] left-[-1px] w-2 h-2 border-t border-l border-primary-fixed-dim absolute"></div>
        <div className="hud-border::after bottom-[-1px] right-[-1px] w-2 h-2 border-b border-r border-primary-fixed-dim absolute"></div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-primary-fixed-dim flex items-center justify-center bg-background relative corner-bracket overflow-hidden">
            <span className="material-symbols-outlined text-primary-fixed-dim absolute z-10 text-[24px]">
              person
            </span>
            <div className="absolute inset-0 bg-primary-fixed-dim opacity-10"></div>
          </div>
          <div>
            <h2 className="text-label-md font-mono text-secondary-fixed tracking-widest font-semibold">
              ANANT_TIRUPATI
            </h2>
            <p className="text-label-sm font-mono text-on-surface-variant uppercase tracking-widest mt-0.5">
              FULL-STACK // AI BUILDER
            </p>
          </div>
        </div>
      </div>

      {/* Nav Menu */}
      <nav className="flex-grow flex flex-col gap-1.5 font-mono text-label-sm">
        <Link
          href="/"
          className={`flex items-center gap-3 p-2.5 transition-colors duration-150 uppercase tracking-widest ${
            pathname === "/"
              ? "bg-secondary-container/10 border-l-4 border-secondary-fixed text-secondary-fixed font-bold glow-secondary"
              : "text-on-surface-variant opacity-75 hover:bg-surface-variant hover:opacity-100"
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">person</span>
          <span>PROFILE / HQ</span>
        </Link>
        <Link
          href="/skills"
          className={`flex items-center gap-3 p-2.5 transition-colors duration-150 uppercase tracking-widest ${
            pathname === "/skills"
              ? "bg-secondary-container/10 border-l-4 border-secondary-fixed text-secondary-fixed font-bold glow-secondary"
              : "text-on-surface-variant opacity-75 hover:bg-surface-variant hover:opacity-100"
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">account_tree</span>
          <span>SKILLS TREE</span>
        </Link>
        <Link
          href="/logs"
          className={`flex items-center gap-3 p-2.5 transition-colors duration-150 uppercase tracking-widest ${
            pathname === "/logs"
              ? "bg-secondary-container/10 border-l-4 border-secondary-fixed text-secondary-fixed font-bold glow-secondary"
              : "text-on-surface-variant opacity-75 hover:bg-surface-variant hover:opacity-100"
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">assignment</span>
          <span>MISSIONS LOGS</span>
        </Link>
        <Link
          href="/loadout"
          className={`flex items-center gap-3 p-2.5 transition-colors duration-150 uppercase tracking-widest ${
            pathname === "/loadout"
              ? "bg-secondary-container/10 border-l-4 border-secondary-fixed text-secondary-fixed font-bold glow-secondary"
              : "text-on-surface-variant opacity-75 hover:bg-surface-variant hover:opacity-100"
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">military_tech</span>
          <span>TROPHIES</span>
        </Link>
        <Link
          href="/loadout#telemetry"
          className="flex items-center gap-3 p-2.5 transition-all text-on-surface-variant opacity-75 hover:bg-surface-variant hover:opacity-100 uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-[18px]">query_stats</span>
          <span>STATS</span>
        </Link>
      </nav>

      {/* Social Links */}
      <div className="flex gap-2 mb-3 font-mono text-label-sm">
        <a
          href="https://github.com/ananttirupati"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border border-outline-variant text-on-surface-variant py-1.5 text-center uppercase tracking-wider hover:border-primary-fixed-dim hover:text-primary-fixed-dim transition-colors text-xs"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/ananttirupati/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border border-outline-variant text-on-surface-variant py-1.5 text-center uppercase tracking-wider hover:border-primary-fixed-dim hover:text-primary-fixed-dim transition-colors text-xs"
        >
          LINKEDIN
        </a>
      </div>

      {/* Initiation Action */}
      <div className="mt-auto">
        <button
          onClick={onContactClick}
          className="w-full border border-primary-fixed-dim text-primary-fixed-dim text-label-md font-mono py-2.5 uppercase hover:bg-primary-fixed-dim hover:text-background transition-all duration-300 glow-primary active:scale-95 tracking-widest clip-button cursor-pointer font-bold text-center"
        >
          INITIATE_CONTACT
        </button>
      </div>
    </aside>
  );
}
