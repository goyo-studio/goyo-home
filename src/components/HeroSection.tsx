"use client";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-[32px] lg:gap-[40px] w-full px-[20px] lg:px-[120px] pt-[60px] lg:pt-[120px] pb-[80px] lg:pb-[140px]">
      {/* Hero Content */}
      <div className="flex flex-col items-center gap-[20px] lg:gap-[24px] w-full lg:w-[900px]">
        <h1 className="font-primary text-[32px] lg:text-[56px] font-bold text-text-primary text-center leading-[1.2] lg:leading-[1.1] w-full lg:w-[900px]">
          Building AI-powered products, Micro SaaS, and practical utilities
        </h1>
        <p className="font-primary text-[16px] lg:text-[20px] text-text-secondary text-center leading-[1.6] w-full lg:w-[700px]">
          We design, build, and ship production-ready software with a strong
          focus on simplicity, speed, and real-world usefulness.
        </p>
      </div>

      {/* Hero CTAs */}
      <div className="flex flex-col lg:flex-row items-center gap-[12px] lg:gap-[16px] w-full lg:w-auto">
        <a
          href="#contact"
          className="flex items-center justify-center gap-[8px] px-[24px] lg:px-[32px] py-[14px] lg:py-[16px] bg-accent-cyan rounded-[8px] text-[15px] lg:text-[16px] font-semibold text-text-black hover:opacity-90 transition-opacity w-full lg:w-auto"
        >
          Contact for a project
        </a>
        <a
          href="#projects"
          className="flex items-center justify-center gap-[8px] px-[24px] lg:px-[32px] py-[14px] lg:py-[16px] rounded-[8px] border border-[#475569] text-[15px] lg:text-[16px] font-medium text-text-primary hover:border-text-secondary transition-colors w-full lg:w-auto"
        >
          View current projects
        </a>
      </div>
    </section>
  );
}
