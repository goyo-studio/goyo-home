"use client";

import { Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-[32px] lg:gap-[40px] w-full px-[20px] lg:px-[120px] py-[60px] lg:py-[100px] bg-background-section"
    >
      {/* CTA Content */}
      <div className="flex flex-col items-center gap-[24px] w-full lg:w-[700px]">
        <h2 className="font-primary text-[28px] lg:text-[48px] font-bold text-text-primary text-center leading-[1.2] lg:leading-normal">
          Have a project in mind?
        </h2>
        <p className="font-primary text-[15px] lg:text-[18px] text-text-secondary text-center leading-[1.6] w-full lg:w-[550px]">
          We&apos;d love to hear about it. Reach out and let&apos;s discuss how
          we can help bring your idea to life.
        </p>
      </div>

      {/* CTA Button */}
      <a
        href="mailto:contact@goyostudio.com"
        className="flex items-center justify-center gap-[10px] px-[32px] lg:px-[40px] py-[16px] lg:py-[18px] bg-accent-cyan rounded-[8px] hover:opacity-90 transition-opacity w-full lg:w-auto"
      >
        <Mail className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] text-text-black" />
        <span className="font-primary text-[15px] lg:text-[16px] font-semibold text-text-black">
          Get in touch
        </span>
      </a>
    </section>
  );
}
