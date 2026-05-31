"use client";

import { useState } from "react";

interface SkillNodeData {
  id: string;
  title: string;
  icon?: string;
  status: "locked" | "unlocked" | "completed";
  desc: string;
  top: string;
  left: string;
  width: string;
  height: string;
}

const skillNodes: SkillNodeData[] = [
  {
    id: "core",
    title: "CORE",
    icon: "developer_board",
    status: "completed",
    desc: "Foundational software development practices, algorithmic architecture, and computing principles.",
    top: "252px",
    left: "452px",
    width: "w-24",
    height: "h-24",
  },
  {
    id: "frontend",
    title: "FRONTEND",
    icon: "web",
    status: "completed",
    desc: "Interactive UI styling, component modularity, fluid responsiveness, and premium user aesthetics.",
    top: "260px",
    left: "160px",
    width: "w-20",
    height: "h-20",
  },
  {
    id: "react",
    title: "REACT",
    status: "completed",
    desc: "Advanced hooks architecture, concurrent rendering, virtual DOM state machines, and context optimization.",
    top: "200px",
    left: "85px",
    width: "w-16",
    height: "h-16",
  },
  {
    id: "nextjs",
    title: "NEXT.JS",
    status: "completed",
    desc: "App Router optimization, Server Components (RSC), hydration systems, static site compilation, and SEO.",
    top: "200px",
    left: "250px",
    width: "w-16",
    height: "h-16",
  },
  {
    id: "threejs",
    title: "THREE.JS",
    status: "locked",
    desc: "WebGL 3D matrix coordinate rendering, shaders, custom mesh materials, and interactive camera rigging.",
    top: "380px",
    left: "168px",
    width: "w-16",
    height: "h-16",
  },
  {
    id: "backend",
    title: "BACKEND",
    icon: "dns",
    status: "unlocked",
    desc: "Scalable server infrastructures, memory-efficient databases, custom security authentications, and REST protocols.",
    top: "260px",
    left: "760px",
    width: "w-20",
    height: "h-20",
  },
  {
    id: "nodejs",
    title: "NODE.JS",
    status: "unlocked",
    desc: "Event loop asynchronous non-blocking handling, filesystem APIs, server setups, and microservices streams.",
    top: "186px",
    left: "768px",
    width: "w-16",
    height: "h-16",
  },
  {
    id: "apis",
    title: "APIs",
    status: "unlocked",
    desc: "Decoupled web gateways, high-availability endpoints routing, security CORS handshakes, and token auth.",
    top: "380px",
    left: "768px",
    width: "w-16",
    height: "h-16",
  },
  {
    id: "ai",
    title: "AI INTEGRATION",
    icon: "smart_toy",
    status: "unlocked",
    desc: "Advanced LLM orchestration, RAG embeddings pipelines, multi-agent frameworks, and model training.",
    top: "140px",
    left: "460px",
    width: "w-20",
    height: "h-20",
  },
  {
    id: "awsbedrock",
    title: "AWS BEDROCK",
    status: "unlocked",
    desc: "Serverless LLM deployment hosting, foundation models finetuning, and high-security enterprise AI setups.",
    top: "144px",
    left: "370px",
    width: "w-20",
    height: "h-12",
  },
  {
    id: "llms",
    title: "LLMs",
    status: "unlocked",
    desc: "Prompt engineering optimization, model tuning thresholds, JSON schema parsing outputs, and context locks.",
    top: "144px",
    left: "550px",
    width: "w-16",
    height: "h-12",
  },
  {
    id: "database",
    title: "DATABASE",
    icon: "database",
    status: "completed",
    desc: "Structured schemas definitions, low-latency search indices, collection partitions, and atomic operations.",
    top: "480px",
    left: "460px",
    width: "w-20",
    height: "h-20",
  },
  {
    id: "mongodb",
    title: "MONGODB",
    status: "completed",
    desc: "Document aggregates pipelines indexing, horizontal replicas architectures, cluster setups, and cloud syncs.",
    top: "484px",
    left: "370px",
    width: "w-20",
    height: "h-12",
  },
  {
    id: "supabase",
    title: "SUPABASE",
    status: "locked",
    desc: "PostgreSQL databases, automated Row-Level Security policies, serverless Edge Functions, and real-time triggers.",
    top: "484px",
    left: "550px",
    width: "w-20",
    height: "h-12",
  },
];

export default function SkillsPage() {
  const [activeNode, setActiveNode] = useState<SkillNodeData>(skillNodes[0]);

  // Total XP Segment configurations
  const totalXP = 10000;
  const currentXP = 5400;
  const devLevel = 99;

  return (
    <div className="min-h-screen bg-background relative z-10 flex flex-col overflow-hidden pb-12">
      {/* Top Profile Status Bar */}
      <section className="border-b border-surface-container-highest bg-surface p-4 shrink-0 relative z-20 font-mono">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 max-w-[1440px] mx-auto w-full select-none">
          {/* Identity Block */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-surface-container-highest border border-outline-variant flex items-center justify-center hex-clip shrink-0">
              <span className="material-symbols-outlined text-primary-container text-[24px]">terminal</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold text-on-surface tracking-tighter uppercase cursor-default hover:text-primary transition-colors">
                ANANT_TIRUPATI
              </h1>
              <p className="text-xs text-on-surface-variant">
                CLASSES: <span className="text-primary-fixed-dim">Full-Stack Dev, AI Builder, Hackathon Finalist</span>
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex gap-8 w-full md:w-auto text-xs">
            {/* Dev Level */}
            <div className="flex flex-col gap-1 w-24">
              <div className="flex justify-between font-semibold">
                <span className="text-on-surface-variant">DEV_LEVEL</span>
                <span className="text-secondary-fixed glow-text-secondary">{devLevel}</span>
              </div>
              <div className="h-2 w-full bg-surface-container-highest flex gap-[2px]">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-secondary-fixed shadow-[0_0_5px_#81ff1e]"></div>
                ))}
              </div>
            </div>

            {/* XP progress */}
            <div className="flex flex-col gap-1 flex-grow md:w-48">
              <div className="flex justify-between font-semibold">
                <span className="text-on-surface-variant">XP</span>
                <span className="text-primary-fixed glow-text-primary">
                  {currentXP.toLocaleString()} / {totalXP.toLocaleString()}
                </span>
              </div>
              <div className="h-2 w-full bg-surface-container-highest flex gap-[2px]">
                {Array.from({ length: 20 }).map((_, i) => {
                  const isFilled = i < 11;
                  return (
                    <div
                      key={i}
                      className={`flex-1 ${
                        isFilled ? "bg-primary-container shadow-[0_0_5px_#00e5ff]" : "bg-surface-container-highest"
                      }`}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Skill Tree Area */}
      <section className="flex-grow relative bg-grid-pattern overflow-auto p-4 md:p-8 custom-scrollbar">
        {/* Radar Coordinates Overlay */}
        <div className="absolute top-4 left-4 text-[10px] font-mono text-outline-variant opacity-60 select-none leading-relaxed">
          COORD: [26.44, 80.33]
          <br />
          STATUS: ACTIVE_LINK
          <br />
          NODE_COUNT: 14 / 14
        </div>

        {/* Skill Tree Grid Wrapper */}
        <div className="relative w-[1000px] h-[720px] mx-auto mt-6">
          {/* SVG CONNECTION PATH LINES */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <svg className="w-full h-full" style={{ strokeWidth: 2 }}>
              {/* Lines from Core (452+48=500, 252+48=300) to main branches */}
              {/* Core to DB: (500, 300) to (500, 480) */}
              <line x1="500" y1="300" x2="500" y2="480" className="stroke-secondary-container filter drop-shadow-[0_0_4px_#81ff1e]" />
              {/* Core to AI: (500, 300) to (500, 240) */}
              <line x1="500" y1="300" x2="500" y2="240" className="stroke-primary-container filter drop-shadow-[0_0_4px_#00e5ff]" />
              {/* Core to FE: (500, 300) to (240, 300) */}
              <line x1="500" y1="300" x2="240" y2="300" className="stroke-secondary-container filter drop-shadow-[0_0_4px_#81ff1e]" />
              {/* Core to BE: (500, 300) to (760, 300) */}
              <line x1="500" y1="300" x2="760" y2="300" className="stroke-primary-container filter drop-shadow-[0_0_4px_#00e5ff]" />

              {/* Sub-lines FE (200, 300 center) to React (117, 232), Next (282, 232), Three (200, 412) */}
              <line x1="200" y1="300" x2="117" y2="232" className="stroke-secondary-container filter drop-shadow-[0_0_4px_#81ff1e]" />
              <line x1="200" y1="300" x2="282" y2="232" className="stroke-secondary-container filter drop-shadow-[0_0_4px_#81ff1e]" />
              <line x1="200" y1="300" x2="200" y2="412" className="stroke-outline-variant" />

              {/* Sub-lines BE (800, 300 center) to Node (800, 218), APIs (800, 412) */}
              <line x1="800" y1="300" x2="800" y2="218" className="stroke-primary-container filter drop-shadow-[0_0_4px_#00e5ff]" />
              <line x1="800" y1="300" x2="800" y2="412" className="stroke-primary-container filter drop-shadow-[0_0_4px_#00e5ff]" />

              {/* Sub-lines AI (500, 180 center) to AWS Bedrock (410, 162), LLMs (570, 162) */}
              <line x1="500" y1="180" x2="410" y2="162" className="stroke-primary-container filter drop-shadow-[0_0_4px_#00e5ff]" />
              <line x1="500" y1="180" x2="570" y2="162" className="stroke-primary-container filter drop-shadow-[0_0_4px_#00e5ff]" />

              {/* Sub-lines DB (500, 520 center) to MongoDB (410, 502), Supabase (570, 502) */}
              <line x1="500" y1="520" x2="410" y2="502" className="stroke-secondary-container filter drop-shadow-[0_0_4px_#81ff1e]" />
              <line x1="500" y1="520" x2="570" y2="502" className="stroke-outline-variant" />
            </svg>
          </div>

          {/* DYNAMIC NODES RENDER */}
          {skillNodes.map((node) => {
            const isCompleted = node.status === "completed";
            const isUnlocked = node.status === "unlocked";
            const isLocked = node.status === "locked";
            const isActiveHover = activeNode.id === node.id;

            let statusBorder = "border-outline-variant";
            if (isCompleted) statusBorder = "border-secondary-container shadow-[0_0_8px_rgba(129,255,30,0.3)] bg-surface-container-low/90";
            if (isUnlocked) statusBorder = "border-primary-container shadow-[0_0_8px_rgba(0,229,255,0.2)] bg-surface-container-low/90";
            if (isLocked) statusBorder = "border-outline-variant bg-surface-container-lowest/50 opacity-40 grayscale";

            return (
              <div
                key={node.id}
                onMouseEnter={() => !isLocked && setActiveNode(node)}
                style={{ top: node.top, left: node.left }}
                className={`absolute select-none font-mono flex flex-col items-center justify-center border-2 transition-all duration-200 ${node.width} ${node.height} ${statusBorder} ${
                  !isLocked ? "cursor-pointer hover:scale-105" : "cursor-not-allowed"
                } ${isActiveHover ? "scale-105 border-primary shadow-[0_0_15px_#00e5ff]" : ""}`}
              >
                {/* Corner indicators for primary core element */}
                {node.id === "core" && (
                  <>
                    <div className="hud-corner tl"></div>
                    <div className="hud-corner tr"></div>
                    <div className="hud-corner bl"></div>
                    <div className="hud-corner br"></div>
                  </>
                )}

                {/* Render icons or titles */}
                {node.icon ? (
                  <>
                    <span
                      className={`material-symbols-outlined text-[28px] mb-1 ${
                        isCompleted ? "text-secondary-fixed" : "text-primary-container"
                      }`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {node.icon}
                    </span>
                    <span className="text-[10px] font-bold tracking-tighter text-center px-1">
                      {node.title}
                    </span>
                  </>
                ) : (
                  <span
                    className={`text-[11px] font-bold text-center px-1.5 ${
                      isCompleted ? "text-secondary-container" : isUnlocked ? "text-primary-container" : "text-on-surface-variant"
                    }`}
                  >
                    {node.title}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Info Panel overlay (Absolute position bottom-right or overlaying layout) */}
        <div className="absolute bottom-6 right-6 w-80 bg-surface-container-high border border-outline-variant p-5 hud-border z-30 font-mono shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <div className="hud-corner tl"></div>
          <div className="hud-corner tr"></div>
          <div className="hud-corner bl"></div>
          <div className="hud-corner br"></div>
          
          <div className="flex items-center gap-2 mb-3 border-b border-surface-container-highest pb-2.5 text-xs text-on-surface-variant font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-primary-container text-[16px]">info</span>
            NODE STATS INSPECTOR
          </div>
          
          <h3 className="text-lg font-bold text-primary-fixed-dim mb-1 uppercase tracking-wider">
            {activeNode.title}
          </h3>
          
          <p className="text-xs text-on-surface-variant leading-relaxed min-h-[50px] mb-4">
            {activeNode.desc}
          </p>
          
          <div className="flex justify-between items-center bg-surface-container-lowest p-2 border border-surface-container-highest">
            <span className="text-[10px] text-outline font-bold uppercase tracking-widest">INTEGRATION STATE</span>
            <span
              className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${
                activeNode.status === "completed"
                  ? "text-secondary-container glow-text-secondary"
                  : activeNode.status === "unlocked"
                  ? "text-primary-container glow-text-primary animate-pulse"
                  : "text-on-surface-variant"
              }`}
            >
              {activeNode.status === "completed" ? "MASTERED" : activeNode.status === "unlocked" ? "ACTIVE" : "LOCKED"}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
