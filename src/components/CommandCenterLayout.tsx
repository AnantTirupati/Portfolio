"use client";

import { useState, useEffect } from "react";
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ContactModal from "./ContactModal";

export default function CommandCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [contactOpen, setContactOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setContactOpen(true);
    window.addEventListener("open-contact", handleOpen);
    return () => window.removeEventListener("open-contact", handleOpen);
  }, []);

  return (
    <div className="bg-background text-on-surface min-h-screen relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Global CRT and Monitor Overlay Scanlines */}
      <div className="fixed inset-0 z-50 scanline mix-blend-overlay pointer-events-none"></div>
      <div className="crt-overlay"></div>

      {/* Top Navbar */}
      <TopNavbar sidebarOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Mobile Sidebar backdrop overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-background/60 backdrop-blur-xs z-30 md:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex min-h-screen pt-12">
        {/* Navigation Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onContactClick={() => {
            setContactOpen(true);
            setSidebarOpen(false);
          }}
        />

        {/* Dynamic Page Container */}
        <main className="flex-1 md:ml-64 relative flex flex-col justify-between">
          <div className="w-full relative">{children}</div>
          <div className="h-8 shrink-0"></div> {/* Space for Fixed Footer offset */}
        </main>
      </div>

      {/* Shared Footer */}
      <Footer />

      {/* Cyber Contact Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
