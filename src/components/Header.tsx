"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between h-[64px] lg:h-[80px] px-[20px] lg:px-[120px] w-full relative">
      {/* Logo */}
      <span className="font-mono text-[16px] lg:text-[20px] font-semibold text-text-primary">
        Goyo Studio
      </span>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-[40px]">
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

      {/* Mobile Menu Button */}
      <button
        className="flex lg:hidden items-center justify-center w-[40px] h-[40px] rounded-[8px]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-[24px] h-[24px] text-text-primary" />
        ) : (
          <Menu className="w-[24px] h-[24px] text-text-primary" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-[64px] left-0 right-0 bg-background-dark border-b border-card-border lg:hidden z-50">
          <nav className="flex flex-col p-[20px] gap-[16px]">
            <a
              href="#services"
              className="font-primary text-[16px] font-medium text-text-secondary hover:text-text-primary transition-colors py-[8px]"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#projects"
              className="font-primary text-[16px] font-medium text-text-secondary hover:text-text-primary transition-colors py-[8px]"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#process"
              className="font-primary text-[16px] font-medium text-text-secondary hover:text-text-primary transition-colors py-[8px]"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="#about"
              className="font-primary text-[16px] font-medium text-text-secondary hover:text-text-primary transition-colors py-[8px]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center px-[20px] py-[12px] bg-accent-cyan rounded-[6px] text-[14px] font-semibold text-text-black hover:opacity-90 transition-opacity mt-[8px]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
