"use client";

import { useEffect, useRef, useState } from "react";

type LogItem = {
  text: string;
  type: "system" | "input" | "output" | "error" | "success";
};

export default function TerminalWidget() {
  const [history, setHistory] = useState<LogItem[]>([]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize terminal diagnostics
  useEffect(() => {
    setHistory([
      { text: "Anant_OS (v4.2.0) loaded. Access level: ROOT.", type: "system" },
      { text: "Establishing secure sync hooks... OK", type: "system" },
      { text: "Initializing telemetry node graphs... OK", type: "system" },
      { text: "System online. Awaiting tactical operator input.", type: "success" },
      { text: "Type 'help' to review directory execution parameters.", type: "output" },
    ]);
  }, []);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const commandText = inputVal.trim();
    if (!commandText) return;

    const newLogs: LogItem[] = [
      ...history,
      { text: `C:\\Users\\Operator> ${commandText}`, type: "input" },
    ];

    const args = commandText.toLowerCase().split(" ");
    const cmd = args[0];

    switch (cmd) {
      case "help":
      case "?":
        newLogs.push({
          text: `AVAILABLE COMMAND PARAMETERS:
  ABOUT     - Operator background bio dossier
  SKILLS    - Inspect specialization skill points
  MISSIONS  - Review archived declassified logs
  CONTACT   - Open secure uplink transmission portal
  CLEAR     - Purge terminal terminal history logs
  WHOAMI    - Inspect operator access metrics`,
          type: "output",
        });
        break;

      case "about":
      case "bio":
        newLogs.push({
          text: " dossier: ANANT TIRUPATI // FULL STACK DEVELOPER & AI BUILDER\n--------------------------------------------------------------\n2nd-year CSE student at CSJM University, Kanpur. Engineers production-grade SaaS apps, REST APIs, LLM integrations, and cloud deployments. Hackathon finalist and Google Student Ambassador with a track record of shipping scalable systems for 4,000+ users.",
          type: "output",
        });
        break;

      case "skills":
      case "tree":
        newLogs.push({
          text: "SPECIALIZATIONS:\n  [FRONTEND] - React.js | Next.js | TailwindCSS | Framer Motion | React Three Fiber\n  [BACKEND]  - Node.js | Express.js | REST APIs | NextAuth.js v5 | JWT | Zod\n  [AI]       - AWS Bedrock LLMs | Prompt Engineering\n  [DATABASE] - MongoDB | Firebase | Supabase\n  [CLOUD]    - Vercel | Render | Railway | ImageKit CDN | Razorpay SDK",
          type: "output",
        });
        break;

      case "missions":
      case "logs":
        newLogs.push({
          text: "ARCHIVED DECLASSIFIED RECORDS:\n  [01] NUTRISAFE      - AI Health & Nutrition SaaS (Next.js/MongoDB/AWS Bedrock/Razorpay)\n  [02] AI_PRES_GEN    - Automated PPT SaaS, 90% faster presentations (React/Firebase/Clerk)\n  [03] ROBORUMBLE     - National Tech Fest Platform, 4000+ users (Next.js/MongoDB/R3F)",
          type: "output",
        });
        break;

      case "contact":
      case "uplink":
        newLogs.push({
          text: "INITIALIZING ENCRYPTED COMMS TUNNEL PROTOCOLS... DISPATCHED SUCCESSFUL.",
          type: "success",
        });
        // Fire custom window event to trigger ContactModal
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("open-contact"));
        }
        break;

      case "clear":
      case "cls":
        setHistory([]);
        setInputVal("");
        return;

      case "whoami":
        newLogs.push({
          text: "OPERATOR: ANANT TIRUPATI\nLOCATION: KANPUR, INDIA\nEMAIL: ananttirupati@gmail.com\nGITHUB: github.com/ananttirupati\nLINKEDIN: linkedin.com/in/ananttirupati",
          type: "output",
        });
        break;

      default:
        newLogs.push({
          text: `'${commandText}' is not recognized as an internal or external executable command. Type 'help' for directory parameters.`,
          type: "error",
        });
        break;
    }

    setHistory(newLogs);
    setInputVal("");
  };

  return (
    <div
      onClick={focusInput}
      className="w-full max-w-[800px] hud-border bg-surface-container-lowest/90 backdrop-blur-md p-1 shadow-[0_0_20px_rgba(0,0,0,0.6)] text-left font-mono text-xs md:text-sm cursor-text select-text"
    >
      {/* Terminal Title Bar */}
      <div className="h-6 border-b border-outline-variant flex items-center px-2 justify-between bg-surface-container-high">
        <div className="text-label-sm text-on-surface-variant flex items-center gap-2">
          <span className="material-symbols-outlined text-[14px]">terminal</span>
          terminal.exe // root@anant_os
        </div>
        <div className="flex gap-1">
          <span className="w-2.5 h-2.5 bg-error-container block rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-tertiary-container block rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-primary-container block rounded-full"></span>
        </div>
      </div>

      {/* Terminal Content Screen */}
      <div className="p-4 text-primary-fixed-dim min-h-[220px] max-h-[350px] overflow-y-auto space-y-1.5 custom-scrollbar bg-background/50 selection:bg-primary-container selection:text-background">
        {history.map((log, index) => {
          let colorClass = "text-primary-fixed-dim";
          if (log.type === "system") colorClass = "text-on-surface-variant opacity-75";
          if (log.type === "input") colorClass = "text-secondary-fixed-dim";
          if (log.type === "success") colorClass = "text-secondary-container glow-text-secondary";
          if (log.type === "error") colorClass = "text-error font-semibold";
          return (
            <div key={index} className="whitespace-pre-wrap leading-relaxed">
              {log.text}
            </div>
          );
        })}
        
        {/* User Input Prompt */}
        <form onSubmit={handleCommand} className="flex items-center mt-2">
          <span className="text-secondary-fixed-dim shrink-0 mr-2 drop-shadow-[0_0_5px_rgba(108,224,0,0.6)] font-bold">
            C:\Users\Operator&gt;
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-grow bg-transparent focus:outline-none focus:ring-0 text-primary-fixed border-none p-0 m-0 font-mono text-xs md:text-sm"
            autoFocus
            autoComplete="off"
            spellCheck={false}
          />
          {inputVal === "" && <span className="typewriter-cursor shrink-0"></span>}
        </form>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}
