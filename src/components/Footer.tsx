export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-8 h-8 bg-background/90 backdrop-blur-md border-t border-outline-variant text-on-surface-variant font-mono text-label-sm">
      <div className="font-bold text-on-surface">
        © 2025 ANANT_TIRUPATI // BUILD_V4.2.0
      </div>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/ananttirupati/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors uppercase"
        >
          LINKEDIN
        </a>
        <a
          href="https://github.com/ananttirupati"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors uppercase"
        >
          GITHUB
        </a>
        <a
          href="mailto:ananttirupati@gmail.com"
          className="hover:text-primary transition-colors uppercase"
        >
          EMAIL
        </a>
      </div>
    </footer>
  );
}
