"use client";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-[40px] w-full px-[120px] pt-[120px] pb-[140px]">
      {/* Hero Content */}
      <div className="flex flex-col items-center gap-[24px] w-[900px]">
        <h1 className="font-primary text-[56px] font-bold text-text-primary text-center leading-[1.1] w-[900px]">
          Building AI-powered products, Micro SaaS, and practical utilities
        </h1>
        <p className="font-primary text-[20px] text-text-secondary text-center leading-[1.6] w-[700px]">
          We design, build, and ship production-ready software with a strong
          focus on simplicity, speed, and real-world usefulness.
        </p>
      </div>

      {/* Hero CTAs */}
      <div className="flex items-center gap-[16px]">
        <a
          href="#contact"
          className="flex items-center justify-center gap-[8px] px-[32px] py-[16px] bg-accent-cyan rounded-[8px] text-[16px] font-semibold text-text-black hover:opacity-90 transition-opacity"
        >
          Contact for a project
        </a>
        <a
          href="#projects"
          className="flex items-center justify-center gap-[8px] px-[32px] py-[16px] rounded-[8px] border border-[#475569] text-[16px] font-medium text-text-primary hover:border-text-secondary transition-colors"
        >
          View current projects
        </a>
      </div>
    </section>
  );
}
