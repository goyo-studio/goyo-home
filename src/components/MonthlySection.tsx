"use client";

import { Download, Calendar, Plus } from "lucide-react";

export default function MonthlySection() {
  return (
    <section
      id="projects"
      className="flex flex-col gap-[40px] lg:gap-[60px] w-full px-[20px] lg:px-[120px] py-[60px] lg:py-[100px]"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center gap-[12px] lg:gap-[16px] w-full">
        <span className="font-mono text-[10px] lg:text-[12px] font-semibold text-accent-cyan tracking-[2px]">
          MONTHLY GOYO STUDIO
        </span>
        <h2 className="font-primary text-[24px] lg:text-[40px] font-bold text-text-primary text-center leading-[1.3] lg:leading-normal">
          Shipping one product every month
        </h2>
        <p className="font-primary text-[14px] lg:text-[18px] text-text-secondary text-center leading-[1.5] w-full lg:w-[600px]">
          Real products, publicly accessible. Focused on usability, minimal
          scope, and fast delivery.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[24px] justify-center w-full">
        {/* YouTube Downloader Card */}
        <div className="flex flex-col w-full lg:w-[400px] bg-card-background rounded-[12px] border border-card-border overflow-hidden">
          {/* Card Top */}
          <div className="flex items-center justify-between px-[20px] lg:px-[24px] py-[16px] lg:py-[20px] bg-accent-cyan-subtle w-full">
            {/* Status Badge */}
            <div className="flex items-center gap-[6px] px-[10px] lg:px-[12px] py-[5px] lg:py-[6px] bg-accent-cyan-light rounded-full">
              <div className="w-[6px] h-[6px] bg-accent-cyan rounded-full" />
              <span className="font-mono text-[12px] font-medium text-accent-cyan">
                Developing
              </span>
            </div>
            <Download className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] text-text-muted" />
          </div>

          {/* Card Content */}
          <div className="flex flex-col gap-[12px] lg:gap-[16px] p-[20px] lg:p-[24px] w-full">
            <h3 className="font-primary text-[17px] lg:text-[20px] font-semibold text-text-primary">
              Simple YouTube Downloader
            </h3>
            <p className="font-primary text-[14px] lg:text-[15px] text-text-secondary leading-[1.5] lg:leading-[1.6]">
              A minimal desktop utility for unlimited, high-quality YouTube
              video downloads. Focused on simplicity, speed, and practical
              everyday use.
            </p>
            {/* Release Date */}
            <div className="flex items-center gap-[6px]">
              <Calendar className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] text-text-muted" />
              <span className="font-mono text-[11px] lg:text-[12px] font-medium text-text-muted">
                Expected: January 2026
              </span>
            </div>
          </div>
        </div>

        {/* Upcoming Project Card */}
        <div className="flex flex-col items-center justify-center gap-[12px] lg:gap-[16px] w-full lg:w-[400px] h-[160px] lg:h-[220px] p-[20px] lg:p-[24px] bg-[#1E293B40] rounded-[12px] border border-card-border">
          <Plus className="w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] text-text-dark" />
          <span className="font-primary text-[14px] lg:text-[16px] font-medium text-text-muted text-center">
            More projects coming soon
          </span>
          <span className="font-mono text-[11px] lg:text-[12px] text-text-dark text-center">
            New project every month
          </span>
        </div>
      </div>
    </section>
  );
}
