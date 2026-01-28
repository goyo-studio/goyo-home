"use client";

import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-[40px] w-full px-[120px] py-[60px] bg-background-dark border-t border-divider">
      {/* Footer Top */}
      <div className="flex items-center justify-between w-full">
        {/* Brand */}
        <div className="flex flex-col gap-[8px]">
          <span className="font-mono text-[18px] font-semibold text-text-primary">
            Goyo Studio
          </span>
          <span className="font-primary text-[14px] text-text-muted">
            Building software that ships.
          </span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-[32px]">
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
            href="#about"
            className="font-primary text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="font-primary text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-card-background" />

      {/* Footer Bottom */}
      <div className="flex items-center justify-between w-full">
        {/* Copyright */}
        <span className="font-primary text-[13px] text-text-dark">
          &copy; 2025 Goyo Studio. All rights reserved.
        </span>

        {/* Social Icons */}
        <div className="flex items-center gap-[16px]">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            <Github className="w-[20px] h-[20px]" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            <Twitter className="w-[20px] h-[20px]" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            <Linkedin className="w-[20px] h-[20px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
