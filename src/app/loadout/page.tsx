"use client";

import { useEffect, useState } from "react";

type CommitCell = {
  intensity: number;
  dateIndex: number;
};

export default function LoadoutPage() {
  const [commitGrid, setCommitGrid] = useState<CommitCell[][]>([]);
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  // Generate 5 rows of 52 columns of commit activity cells with random densities
  useEffect(() => {
    const rows = Array.from({ length: 5 }, () =>
      Array.from({ length: 52 }, (_, i) => ({
        intensity: Math.random(),
        dateIndex: i,
      }))
    );
    setCommitGrid(rows);
  }, []);

  const getIntensityColor = (intensity: number) => {
    if (intensity > 0.82) return "bg-secondary-fixed shadow-[0_0_8px_#81ff1e] border-secondary-fixed-dim";
    if (intensity > 0.55) return "bg-secondary-container opacity-85";
    if (intensity > 0.3) return "bg-secondary-fixed-dim/35";
    return "bg-surface-variant/40";
  };

  return (
    <div id="telemetry" className="min-h-screen bg-background relative z-10 px-4 md:px-8 py-12 select-none overflow-y-auto">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 pb-12 font-mono">
        
        {/* Page Title Header */}
        <div className="col-span-1 lg:col-span-12 mb-2 border-b border-outline-variant pb-3 flex justify-between items-end">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-on-surface uppercase tracking-tight flex items-center gap-2">
              <span className="text-primary-fixed-dim opacity-50">/</span> ACHIEVEMENTS & LOADOUT
            </h1>
            <p className="text-xs text-outline-variant mt-1">// OPERATIONAL GEAR dossier // ACCESS_LEVEL: COMPLETED</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-secondary-fixed">
            <span className="w-2 h-2 bg-secondary-fixed glow-green block rounded-none animate-pulse"></span>
            SECURE LINK NOMINAL
          </div>
        </div>

        {/* SEC_01 // TROPHY CABINET */}
        <div className="col-span-1 lg:col-span-7 border border-outline-variant bg-surface relative corner-bracket flex flex-col">
          {/* Section Header */}
          <div className="h-6 border-b border-outline-variant bg-surface-container-highest flex items-center justify-between px-3">
            <span className="text-[10px] text-on-surface-variant font-bold tracking-widest">
              SEC_01 // TROPHY_CABINET
            </span>
            <div className="w-2 h-2 rounded-full bg-secondary-fixed shadow-[0_0_5px_#81ff1e] glow-green"></div>
          </div>

          <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 flex-grow">
            
            {/* Trophy 1 */}
            <div className="border border-outline-variant bg-surface-container-low p-4 flex flex-col items-center text-center group hover:bg-surface-container-high transition-colors relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.01)_50%,transparent_75%)] bg-[length:8px_8px] pointer-events-none"></div>
              <div className="w-14 h-14 mb-4 border border-outline-variant rounded flex items-center justify-center bg-surface group-hover:border-primary-fixed-dim transition-colors relative">
                <span className="material-symbols-outlined text-[28px] text-on-surface-variant group-hover:text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  public
                </span>
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t border-r border-primary-fixed-dim opacity-0 group-hover:opacity-100"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b border-l border-primary-fixed-dim opacity-0 group-hover:opacity-100"></div>
              </div>
              <h3 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-1 leading-snug">
                Google Student Ambassador
              </h3>
              <p className="text-[10px] text-on-surface-variant tracking-widest mt-1 uppercase">2025</p>
              <p className="text-[10px] text-on-surface-variant tracking-widest mt-auto uppercase">
                CLASS: GLOBAL
              </p>
            </div>

            {/* Trophy 2: Rare glowing item */}
            <div className="border border-tertiary-container bg-surface-container-low p-4 flex flex-col items-center text-center group hover:bg-surface-container-high transition-colors relative overflow-hidden glow-tertiary">
              <div className="absolute top-0 right-0 bg-tertiary-container text-on-tertiary-container text-[9px] font-bold px-1.5 py-0.5">
                RARE
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_25%,rgba(255,197,152,0.03)_50%,transparent_75%)] bg-[length:8px_8px] pointer-events-none"></div>
              <div className="w-14 h-14 mb-4 border border-tertiary-container rounded flex items-center justify-center bg-surface relative">
                <span className="material-symbols-outlined text-[28px] text-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  emoji_events
                </span>
              </div>
              <h3 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-1 leading-snug">
                HackShodh 2026 — 2nd Runner-Up
              </h3>
              <p className="text-[10px] text-tertiary-container opacity-85 tracking-widest mt-1 uppercase">200+ teams</p>
              <p className="text-[10px] text-tertiary-container opacity-85 tracking-widest mt-auto uppercase">
                CLASS: NATIONAL HACKATHON
              </p>
            </div>

            {/* Trophy 3 */}
            <div className="border border-outline-variant bg-surface-container-low p-4 flex flex-col items-center text-center group hover:bg-surface-container-high transition-colors relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.01)_50%,transparent_75%)] bg-[length:8px_8px] pointer-events-none"></div>
              <div className="w-14 h-14 mb-4 border border-outline-variant rounded flex items-center justify-center bg-surface group-hover:border-primary-fixed-dim transition-colors relative">
                <span className="material-symbols-outlined text-[28px] text-on-surface-variant group-hover:text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  groups
                </span>
              </div>
              <h3 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-1 leading-snug">
                RoboRumble Core Team
              </h3>
              <p className="text-[10px] text-on-surface-variant tracking-widest mt-1 uppercase">4,000+ participants</p>
              <p className="text-[10px] text-on-surface-variant tracking-widest mt-auto uppercase">
                CLASS: NATIONAL TECH FEST
              </p>
            </div>

          </div>
        </div>

        {/* SEC_02 // ACTIVE LOADOUT GEAR */}
        <div className="col-span-1 lg:col-span-5 border border-outline-variant bg-surface relative corner-bracket flex flex-col">
          {/* Section Header */}
          <div className="h-6 border-b border-outline-variant bg-surface-container-highest flex items-center justify-between px-3">
            <span className="text-[10px] text-on-surface-variant font-bold tracking-widest">
              SEC_02 // ACTIVE_LOADOUT
            </span>
            <div className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_5px_#00e5ff] glow-cyan"></div>
          </div>

          <div className="p-4 flex flex-col gap-2.5 flex-grow justify-center">
            
            {/* SLOT 01 WEAPON */}
            <div className="border border-outline-variant bg-surface-container flex items-center p-2.5 group hover:border-primary-container transition-colors cursor-default">
              <div className="w-10 h-10 border border-outline-variant bg-surface-container-lowest flex items-center justify-center mr-4 group-hover:bg-primary-container/10 group-hover:border-primary-container transition-all">
                <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>
                  swords
                </span>
              </div>
              <div className="flex-1">
                <div className="text-[9px] text-on-surface-variant uppercase font-semibold">[ SLOT_01 :: WEAPON ]</div>
                <div className="text-xs font-bold text-on-surface tracking-wider">REACT.JS / NEXT.JS</div>
              </div>
              <div className="text-[9px] font-bold text-primary-fixed-dim px-2 py-0.5 border border-primary-fixed-dim/30 bg-primary-container/5 uppercase">
                EQUIPPED
              </div>
            </div>

            {/* SLOT 02 ARMOR */}
            <div className="border border-outline-variant bg-surface-container flex items-center p-2.5 group hover:border-outline transition-colors cursor-default">
              <div className="w-10 h-10 border border-outline-variant bg-surface-container-lowest flex items-center justify-center mr-4 group-hover:border-outline transition-all">
                <span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1" }}>
                  shield
                </span>
              </div>
              <div className="flex-1">
                <div className="text-[9px] text-on-surface-variant uppercase font-semibold">[ SLOT_02 :: ARMOR ]</div>
                <div className="text-xs font-bold text-on-surface tracking-wider">NODE.JS / EXPRESS</div>
              </div>
              <div className="text-[9px] font-bold text-on-surface-variant px-2 py-0.5 border border-outline-variant bg-background/30 uppercase">
                EQUIPPED
              </div>
            </div>

            {/* SLOT 03 UTILITY */}
            <div className="border border-outline-variant bg-surface-container flex items-center p-2.5 group hover:border-outline transition-colors cursor-default">
              <div className="w-10 h-10 border border-outline-variant bg-surface-container-lowest flex items-center justify-center mr-4 group-hover:border-outline transition-all">
                <span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1" }}>
                  build
                </span>
              </div>
              <div className="flex-1">
                <div className="text-[9px] text-on-surface-variant uppercase font-semibold">[ SLOT_03 :: UTILITY ]</div>
                <div className="text-xs font-bold text-on-surface tracking-wider">MONGODB / FIREBASE</div>
              </div>
              <div className="text-[9px] font-bold text-on-surface-variant px-2 py-0.5 border border-outline-variant bg-background/30 uppercase">
                EQUIPPED
              </div>
            </div>

            {/* SLOT 04 ULTIMATE */}
            <div className="border border-outline-variant bg-surface-container flex items-center p-2.5 group hover:border-secondary-fixed transition-colors cursor-default">
              <div className="w-10 h-10 border border-outline-variant bg-surface-container-lowest flex items-center justify-center mr-4 group-hover:bg-secondary-fixed/10 group-hover:border-secondary-fixed transition-all">
                <span className="material-symbols-outlined text-secondary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>
                  electric_bolt
                </span>
              </div>
              <div className="flex-1">
                <div className="text-[9px] text-on-surface-variant uppercase font-semibold">[ SLOT_04 :: ULTIMATE ]</div>
                <div className="text-xs font-bold text-secondary-fixed tracking-wider">AWS BEDROCK / LLMs</div>
              </div>
              <div className="text-[9px] font-bold text-secondary-fixed px-2 py-0.5 border border-secondary-fixed/30 bg-secondary-fixed/5 uppercase animate-pulse">
                READY
              </div>
            </div>

          </div>
        </div>

        {/* SEC_03 // TELEMETRY DATA COMMIT CHART */}
        <div className="col-span-1 lg:col-span-12 border border-outline-variant bg-surface relative corner-bracket">
          {/* Section Header */}
          <div className="h-auto py-1 sm:h-6 border-b border-outline-variant bg-surface-container-highest flex flex-col sm:flex-row sm:items-center justify-between px-3 gap-1">
            <span className="text-[10px] text-on-surface-variant font-bold tracking-widest uppercase">
              SEC_03 // TELEMETRY_DATA :: GITHUB_COMMITS
            </span>
            <div className="flex items-center justify-between sm:justify-end gap-3">
              <div className="text-[9px] text-primary-fixed-dim/70 flex items-center gap-1 sm:hidden font-bold">
                <span className="material-symbols-outlined text-[12px] animate-pulse">swipe</span> SWIPE TO INSPECT
              </div>
              <div className="text-[10px] text-secondary-fixed flex items-center gap-1 font-bold">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping"></span> MOCK STATS LIVE
              </div>
            </div>
          </div>

          <div className="p-5 overflow-x-auto custom-scrollbar">
            <div className="min-w-[650px] flex flex-col gap-1 select-none">
              
              {/* Commit Rows Grid */}
              {commitGrid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-1">
                  {row.map((cell, colIndex) => {
                    const commitCount = Math.floor(cell.intensity * 12);
                    return (
                      <div
                        key={colIndex}
                        onMouseEnter={() =>
                          setHoveredMetric(
                            `W_${colIndex + 1} R_${rowIndex + 1}: ${commitCount} telemetry commit packets transmitted.`
                          )
                        }
                        onMouseLeave={() => setHoveredMetric(null)}
                        className={`w-3.5 h-3.5 rounded-[1px] border border-transparent transition-all duration-150 cursor-crosshair hover:scale-110 hover:border-primary-fixed ${getIntensityColor(
                          cell.intensity
                        )}`}
                      ></div>
                    );
                  })}
                </div>
              ))}

              {/* Legend & Hover Data Block */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-4 pt-2 border-t border-surface-container-highest text-[10px] text-on-surface-variant font-bold">
                
                {/* Metric Readout display */}
                <div className="min-h-[14px] text-primary-fixed-dim">
                  {hoveredMetric ? hoveredMetric : "// Hover commit grid parameters to decrypt telemetry details."}
                </div>

                {/* Legend markers */}
                <div className="flex items-center gap-1.5 uppercase tracking-wider">
                  <span>Less</span>
                  <div className="w-3.5 h-3.5 rounded-[1px] bg-surface-variant/40"></div>
                  <div className="w-3.5 h-3.5 rounded-[1px] bg-secondary-fixed-dim/35"></div>
                  <div className="w-3.5 h-3.5 rounded-[1px] bg-secondary-container"></div>
                  <div className="w-3.5 h-3.5 rounded-[1px] bg-secondary-fixed shadow-[0_0_5px_#81ff1e]"></div>
                  <span>More</span>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
