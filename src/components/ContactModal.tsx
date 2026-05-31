"use client";

import { useEffect, useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type LogLine = string;

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [transmissionLogs, setTransmissionLogs] = useState<LogLine[]>([]);

  useEffect(() => {
    if (!isOpen) {
      // Reset state on close
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
      setIsComplete(false);
      setTransmissionLogs([]);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTransmissionLogs([
      "C:\\Users\\Operator> initiate_transmission --direct",
      "ESTABLISHING SECURE ENCRYPTED COMMS CHANNEL...",
    ]);

    const logs = [
      "SYNCHRONIZING PING COORDINATES... DONE (14ms)",
      "DECRYPTING UPLINK PACKET PROTOCOLS...",
      "PORT INJECTED AT PORT_ID_4882...",
      "COMPRESSING MESSAGE TEXT TO SECURE BYTE ARRAY...",
      "TRANSMITTING BYTE PACKETS TO OPERATOR_01 PORTFOLIO...",
      "TRANSMISSION SUCCESSFUL! COMMS DISCONNECTED NOMINALLY.",
    ];

    logs.forEach((logText, index) => {
      setTimeout(() => {
        setTransmissionLogs((prev) => [...prev, logText]);
        if (index === logs.length - 1) {
          setIsComplete(true);
        }
      }, (index + 1) * 600);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md px-4 select-none">
      <div className="w-full max-w-[550px] hud-border bg-surface-container-lowest p-1 shadow-[0_0_25px_rgba(0,218,243,0.25)] text-left font-mono">
        {/* Modal Header */}
        <div className="h-7 border-b border-outline-variant flex items-center px-3 justify-between bg-surface-container-high text-xs">
          <div className="text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">secure</span>
            SECURE_TRANSMISSION.EXE
          </div>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-error transition-colors cursor-pointer text-sm font-bold"
          >
            [X]
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 relative">
          {!isSubmitting ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
              <div className="text-center mb-2 border-b border-outline-variant pb-2">
                <h3 className="text-primary-fixed-dim font-bold tracking-widest text-md">
                  // CONTACT UPLINK MODULE
                </h3>
                <p className="text-xs text-on-surface-variant mt-1">
                  Establish a secure communication line with the command center.
                </p>
              </div>

              {/* Name Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-outline uppercase tracking-wider">
                  Operator Name:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background border-b border-outline-variant focus:border-primary-container focus:outline-none p-2 text-primary font-medium tracking-wide"
                  placeholder="Enter alias..."
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-outline uppercase tracking-wider">
                  Uplink Terminal Email:
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background border-b border-outline-variant focus:border-primary-container focus:outline-none p-2 text-primary font-medium tracking-wide"
                  placeholder="Enter email coordinate..."
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-outline uppercase tracking-wider">
                  Tactical Transmission Content:
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-background border border-outline-variant focus:border-primary-container focus:outline-none p-2 text-primary font-medium tracking-wide resize-none"
                  placeholder="Type secure transmission logs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 w-full border border-primary-fixed-dim text-primary-fixed-dim font-bold py-3 uppercase hover:bg-primary-fixed-dim hover:text-background transition-all duration-300 glow-primary active:scale-95 tracking-widest clip-button text-center cursor-pointer"
              >
                [ TRANSMIT COMMAND ]
              </button>
            </form>
          ) : (
            <div className="min-h-[280px] flex flex-col justify-between text-xs text-primary-fixed-dim">
              <div className="space-y-1.5 p-2 bg-background border border-outline-variant h-[240px] overflow-y-auto rounded-sm selection:bg-primary-container selection:text-background">
                {transmissionLogs.map((log, index) => {
                  let colorClass = "text-primary-fixed-dim";
                  if (log.startsWith("C:")) colorClass = "text-secondary-fixed-dim";
                  if (log.includes("SUCCESSFUL")) colorClass = "text-secondary-container font-bold";
                  return (
                    <div key={index} className={`font-mono leading-relaxed ${colorClass}`}>
                      {log}
                    </div>
                  );
                })}
                {!isComplete && (
                  <div className="flex items-center mt-1">
                    <span className="typewriter-cursor"></span>
                  </div>
                )}
              </div>

              {isComplete && (
                <button
                  onClick={onClose}
                  className="mt-4 w-full border border-secondary-fixed text-secondary-fixed hover:bg-secondary-fixed hover:text-background font-bold py-2.5 uppercase transition-all duration-300 glow-secondary active:scale-95 tracking-widest clip-button text-center cursor-pointer"
                >
                  [ COMMS RE-ESTABLISHED. CLOSE SHELL ]
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
