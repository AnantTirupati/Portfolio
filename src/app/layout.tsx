import type { Metadata, Viewport } from "next";
import "./globals.css";
import CommandCenterLayout from "@/components/CommandCenterLayout";

export const metadata: Metadata = {
  title: "Anant Tirupati // Command Center",
  description: "Tactical mission-critical operations dashboard, player portfolio, and professional hub of Anant Tirupati - Full Stack Engineer, AI Specialist, and Tech Competitor.",
  keywords: ["Anant Tirupati", "Command Center", "Full Stack Developer", "AI Specialist", "Cyber Brutalist Portfolio"],
  authors: [{ name: "Anant Tirupati" }],
  icons: {
    icon: "/ghost.jpg",
    apple: "/ghost.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        {/* Google Fonts: JetBrains Mono & Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Google Material Symbols Outlined */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/ghost.jpg" />
      </head>
      <body className="font-sans antialiased min-h-full bg-background text-on-surface">
        <CommandCenterLayout>{children}</CommandCenterLayout>
      </body>
    </html>
  );
}
