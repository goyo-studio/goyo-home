"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-[24px] lg:gap-[32px] w-full px-[20px] lg:px-[120px] py-[32px] lg:py-[48px] bg-footer-bg">
      {/* Top */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[24px]">
        {/* Logo + Tagline */}
        <div className="flex flex-col gap-[8px]">
          <Link href="/" className="flex items-baseline gap-[4px]">
            <span className="font-primary text-[22px] font-medium text-white tracking-[0.4px]">
              Goyo
            </span>
            <span className="font-primary text-[18px] font-light text-text-footer tracking-[0.2px]">
              Studio
            </span>
          </Link>
          <p className="font-primary text-[14px] text-text-footer">
            Focus on real problems. Build minimal. Nothing more.
          </p>
        </div>

        {/* Links */}
        <Link
          href="#projects"
          className="font-primary text-[14px] font-medium text-text-footer hover:text-white transition-colors duration-150 ease-out"
        >
          Products
        </Link>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-footer-divider" />

      {/* Bottom */}
      <div className="flex items-center justify-between">
        <span className="font-primary text-[13px] text-text-footer">
          &copy; 2026 Goyo Studio. All rights reserved.
        </span>
        <div className="flex items-center gap-[16px]">
          <a
            href="mailto:developer@goyostudio.io"
            className="text-text-footer hover:text-white transition-colors duration-150 ease-out"
          >
            <Mail className="w-[18px] h-[18px]" />
          </a>
          <a
            href="https://x.com/goyo_studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-footer hover:text-white transition-colors duration-150 ease-out"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
