"use client";

import { Rocket, Brain, Wrench } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  mobileIcon: React.ReactNode;
  title: string;
  descriptions: string[];
  mobileDescription: string;
}

function ServiceCard({
  icon,
  mobileIcon,
  title,
  descriptions,
  mobileDescription,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-[16px] lg:gap-[20px] p-[24px] lg:p-[32px] bg-card-background rounded-[12px] border border-card-border lg:flex-1">
      {/* Icon */}
      <div className="flex items-center justify-center w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] bg-accent-cyan-light rounded-[8px]">
        <span className="hidden lg:block">{icon}</span>
        <span className="block lg:hidden">{mobileIcon}</span>
      </div>

      {/* Title */}
      <h3 className="font-primary text-[17px] lg:text-[20px] font-semibold text-text-primary">
        {title}
      </h3>

      {/* Descriptions - Desktop */}
      <div className="hidden lg:flex flex-col gap-[12px] w-full">
        {descriptions.map((desc, index) => (
          <p
            key={index}
            className="font-primary text-[15px] text-text-secondary leading-[1.5]"
          >
            {desc}
          </p>
        ))}
      </div>

      {/* Description - Mobile */}
      <p className="block lg:hidden font-primary text-[14px] text-text-secondary leading-[1.5]">
        {mobileDescription}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  const services: ServiceCardProps[] = [
    {
      icon: <Rocket className="w-[24px] h-[24px] text-accent-cyan" />,
      mobileIcon: <Rocket className="w-[20px] h-[20px] text-accent-cyan" />,
      title: "Micro SaaS & MVP Development",
      descriptions: [
        "• Fast, focused MVPs built to validate ideas quickly",
        "• Practical technology choices over trendy stacks",
        "• Production-ready and minimal architecture",
      ],
      mobileDescription:
        "Fast, focused MVPs with practical technology choices. Production-ready and minimal architecture.",
    },
    {
      icon: <Brain className="w-[24px] h-[24px] text-accent-cyan" />,
      mobileIcon: <Brain className="w-[20px] h-[20px] text-accent-cyan" />,
      title: "AI-Powered Product Development",
      descriptions: [
        "• LLM integration (OpenAI, Azure, and others)",
        "• Automation pipelines and intelligent workflows",
        "• Adding AI features to existing products",
      ],
      mobileDescription:
        "LLM integration, automation pipelines, and adding AI features to existing products.",
    },
    {
      icon: <Wrench className="w-[24px] h-[24px] text-accent-cyan" />,
      mobileIcon: <Wrench className="w-[20px] h-[20px] text-accent-cyan" />,
      title: "Utility & Productivity Tools",
      descriptions: [
        "• Lightweight utilities that solve specific problems",
        "• Emphasis on simplicity, speed, and reliability",
        "• Desktop or web-based tools for everyday use",
      ],
      mobileDescription:
        "Lightweight utilities that solve specific problems with emphasis on simplicity and reliability.",
    },
  ];

  return (
    <section
      id="services"
      className="flex flex-col gap-[40px] lg:gap-[60px] w-full px-[20px] lg:px-[120px] py-[60px] lg:py-[100px] bg-background-section"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center gap-[12px] lg:gap-[16px] w-full">
        <span className="font-mono text-[11px] lg:text-[12px] font-semibold text-accent-cyan tracking-[2px]">
          SERVICES
        </span>
        <h2 className="font-primary text-[28px] lg:text-[40px] font-bold text-text-primary text-center">
          What we build
        </h2>
      </div>

      {/* Services Grid */}
      <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[24px] w-full">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
