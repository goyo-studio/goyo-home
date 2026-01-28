"use client";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-[80px] px-[120px] w-full">
      {/* Logo */}
      <span className="font-mono text-[20px] font-semibold text-text-primary">
        Goyo Studio
      </span>

      {/* Navigation */}
      <nav className="flex items-center gap-[40px]">
        <a
          href="#services"
          className="font-primary text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors"
        >
          Services
        </a>
        <a
          href="#projects"
          className="font-primary text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors"
        >
          Projects
        </a>
        <a
          href="#process"
          className="font-primary text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors"
        >
          Process
        </a>
        <a
          href="#about"
          className="font-primary text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors"
        >
          About
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center px-[20px] py-[10px] bg-accent-cyan rounded-[6px] text-[14px] font-semibold text-text-black hover:opacity-90 transition-opacity"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
