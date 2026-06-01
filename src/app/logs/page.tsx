"use client";

interface MissionData {
  id: string;
  codeName: string;
  number: string;
  title: string;
  story: string;
  techStack: string[];
  icon: string;
  metricsPercent: number;
  period: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

const declassifiedMissions: MissionData[] = [
  {
    id: "nutrisafe",
    codeName: "NUTRISAFE",
    number: "01",
    title: "AI HEALTH & NUTRITION SAAS",
    period: "JAN 2025 – PRESENT",
    story: "Built serverless Next.js API routes with Zod schema validation interfacing AWS Bedrock LLMs to generate personalised fitness regimens and diet plans, reducing manual planning time by 70%. Implemented end-to-end Razorpay payment gateway with zero reported transaction failures.",
    techStack: ["NEXT.JS", "MONGODB", "AWS_BEDROCK", "NEXTAUTH.JS", "RAZORPAY", "ZOD"],
    icon: "monitor_heart",
    metricsPercent: 100,
    highlights: ["70% reduction in planning time", "Zero transaction failures", "Role-based access control", "JWT Edge Middleware"],
    githubUrl: "https://github.com/AnantTirupati/nutrisafe",
    liveUrl: "https://nutrisafe-rust.vercel.app/",
  },
  {
    id: "aigenpres",
    codeName: "AI_PRES_GEN",
    number: "02",
    title: "AUTOMATED PPT SAAS",
    period: "AUG 2024 – DEC 2024",
    story: "Integrated LLMs to autonomously synthesise slide outlines, body text, and speaker notes from natural-language prompts, cutting end-to-end presentation creation time by 90%. Engineered a real-time slide canvas engine with Recharts-driven visualisations and a custom .pptx export pipeline.",
    techStack: ["REACT_19", "TYPESCRIPT", "VITE", "FIREBASE", "CLERK", "RECHARTS", "RAZORPAY", "IMAGEKIT"],
    icon: "auto_awesome",
    metricsPercent: 100,
    highlights: ["90% faster presentation creation", "Credit-based freemium model", "Custom .pptx export pipeline", "Pexels API + ImageKit CDN"],
    githubUrl: "https://github.com/AnantTirupati/AIpptGenerator",
    liveUrl: "https://ai-ppt-generator-seven.vercel.app/",
  },
  {
    id: "roborumble",
    codeName: "ROBORUMBLE",
    number: "03",
    title: "NATIONAL TECH FEST PLATFORM",
    period: "MAR 2024 – JUL 2024",
    story: "Architected a full-stack event platform (Next.js 16 App Router, TypeScript, MongoDB) handling multi-event registrations, team formation, and real-time dashboards scaled to 4,000+ concurrent users. Built a custom Admin CMS with secure manual payment verification workflow.",
    techStack: ["NEXT.JS_16", "TYPESCRIPT", "MONGODB", "NEXTAUTH.JS_V5", "REACT_THREE_FIBER", "TAILWIND_V4"],
    icon: "smart_toy",
    metricsPercent: 100,
    highlights: ["4,000+ concurrent users", "Custom Admin CMS", "3D graphics with React Three Fiber", "Server-side auth guards"],
    githubUrl: "https://github.com/AnantTirupati/Roborumble3.0",
    liveUrl: "https://roborumble.in/",
  },
];

export default function LogsPage() {
  return (
    <div className="min-h-screen bg-background relative z-10 px-4 md:px-8 py-12 select-none overflow-y-auto">
      <div className="max-w-[1200px] mx-auto font-mono pb-12">
        
        {/* Page Title Header */}
        <div className="mb-8 border-b border-outline-variant pb-3 flex justify-between items-end">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-on-surface uppercase tracking-tight flex items-center gap-2">
              <span className="text-primary-fixed-dim opacity-50">/</span> MISSION LOGS
            </h1>
            <p className="text-xs text-outline mt-1">// DECLASSIFIED PROJECT FILES // STATUS: ARCHIVED</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-secondary-fixed">
            <span className="w-2 h-2 bg-secondary-fixed shadow-[0_0_5px_#81ff1e] glow-green block animate-pulse"></span>
            SECURE LINK ACTIVE
          </div>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          
          {declassifiedMissions.map((mission, index) => {
            const isFullWidth = index === 2;
            const colSpanClass = isFullWidth ? "xl:col-span-2" : "col-span-1";

            return (
              <div
                key={mission.id}
                className={`tactical-border bg-surface-container-lowest p-5 relative overflow-hidden group hover:border-outline-variant transition-colors flex flex-col justify-between min-h-[300px] ${colSpanClass}`}
              >
                {/* Tactical COMPLETE Stamp */}
                <div className="absolute top-4 right-4 transform rotate-[-12deg] opacity-80 border-2 border-secondary-fixed text-secondary-fixed text-[11px] font-bold px-2 py-0.5 z-10 bg-background/90 backdrop-blur-sm shadow-[0_0_10px_rgba(129,255,30,0.15)] tracking-widest uppercase">
                  MISSION COMPLETE
                </div>

                {/* Card Title Block */}
                <div>
                  <div className="flex items-center gap-4 mb-4 border-b border-surface-container-highest pb-2">
                    <span className="text-xl font-bold text-primary-fixed-dim tracking-tighter">
                      {mission.number}
                    </span>
                    <div className="flex-1 pr-16 xs:pr-24 sm:pr-0">
                      <h2 className="text-sm md:text-md font-bold text-on-surface uppercase tracking-wider">
                        {mission.codeName}
                      </h2>
                      <p className="text-[10px] text-outline mt-0.5 tracking-widest">{mission.period}</p>
                    </div>
                    <span className="material-symbols-outlined text-outline-variant text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>
                      {mission.icon}
                    </span>
                  </div>

                  {/* Story & Tech Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 text-xs text-on-surface-variant">
                    {/* Story Dossier */}
                    <div className="space-y-1.5 md:col-span-2 leading-relaxed text-justify">
                      <h3 className="text-[10px] text-outline font-bold uppercase tracking-widest">MISSION BRIEF</h3>
                      <p>{mission.story}</p>
                    </div>

                    {/* Tech Stacks */}
                    <div className="space-y-1.5 leading-relaxed">
                      <h3 className="text-[10px] text-outline font-bold uppercase tracking-widest">LOADOUT EQUIP</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {mission.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="border border-surface-container-highest px-1.5 py-[2px] text-[10px] font-semibold text-on-surface-variant bg-surface-container-low"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-4">
                    <h3 className="text-[10px] text-outline font-bold uppercase tracking-widest mb-2">KEY METRICS</h3>
                    <div className="flex flex-wrap gap-2">
                      {mission.highlights.map((h) => (
                        <span key={h} className="text-[10px] text-primary-fixed-dim border border-primary-fixed-dim/30 px-2 py-0.5 bg-primary-container/5">
                          ▸ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress Indicators & Action Buttons */}
                <div>
                  <div className="mb-5 w-full md:max-w-[50%]">
                    <h3 className="text-[10px] text-outline font-bold uppercase tracking-widest mb-1.5">METRICS INTEGRITY</h3>
                    <div className="flex items-center gap-3">
                      <div className="flex-grow bg-surface-container-low h-2.5 border border-surface-container-highest flex gap-[2px]">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div key={i} className="flex-1 bg-secondary-fixed/60 shadow-[0_0_4px_rgba(129,255,30,0.2)]"></div>
                        ))}
                      </div>
                      <span className="text-[10px] text-secondary-fixed font-bold shrink-0">{mission.metricsPercent}%</span>
                    </div>
                  </div>

                  <div className="flex gap-4 border-t border-surface-container-highest pt-4 w-full md:max-w-[50%]">
                    <a
                      href={mission.liveUrl}
                      className="flex-1 border border-primary-fixed-dim text-primary-fixed-dim text-xs font-bold py-1.5 hover:bg-primary-fixed-dim hover:text-background transition-colors flex items-center justify-center gap-1.5 clip-button cursor-pointer uppercase"
                    >
                      <span className="material-symbols-outlined text-[14px]">visibility</span>
                      LIVE
                    </a>
                    <a
                      href={mission.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-outline text-outline-variant text-xs font-bold py-1.5 hover:border-primary-fixed-dim hover:text-primary-fixed-dim transition-colors flex items-center justify-center gap-1.5 clip-button cursor-pointer uppercase"
                    >
                      <span className="material-symbols-outlined text-[14px]">code</span>
                      GITHUB
                    </a>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}
