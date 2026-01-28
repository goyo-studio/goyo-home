"use client";

import { Rocket, Brain, Wrench } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  descriptions: string[];
}

function ServiceCard({ icon, title, descriptions }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-[20px] p-[32px] bg-card-background rounded-[12px] border border-card-border flex-1">
      {/* Icon */}
      <div className="flex items-center justify-center w-[48px] h-[48px] bg-accent-cyan-light rounded-[8px]">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-primary text-[20px] font-semibold text-text-primary">
        {title}
      </h3>

      {/* Descriptions */}
      <div className="flex flex-col gap-[12px] w-full">
        {descriptions.map((desc, index) => (
          <p
            key={index}
            className="font-primary text-[15px] text-text-secondary leading-[1.5]"
          >
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const services: ServiceCardProps[] = [
    {
      icon: <Rocket className="w-[24px] h-[24px] text-accent-cyan" />,
      title: "Micro SaaS & MVP Development",
      descriptions: [
        "• Fast, focused MVPs built to validate ideas quickly",
        "• Practical technology choices over trendy stacks",
        "• Production-ready and minimal architecture",
      ],
    },
    {
      icon: <Brain className="w-[24px] h-[24px] text-accent-cyan" />,
      title: "AI-Powered Product Development",
      descriptions: [
        "• LLM integration (OpenAI, Azure, and others)",
        "• Automation pipelines and intelligent workflows",
        "• Adding AI features to existing products",
      ],
    },
    {
      icon: <Wrench className="w-[24px] h-[24px] text-accent-cyan" />,
      title: "Utility & Productivity Tools",
      descriptions: [
        "• Lightweight utilities that solve specific problems",
        "• Emphasis on simplicity, speed, and reliability",
        "• Desktop or web-based tools for everyday use",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="flex flex-col gap-[60px] w-full px-[120px] py-[100px] bg-background-section"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center gap-[16px] w-full">
        <span className="font-mono text-[12px] font-semibold text-accent-cyan tracking-[2px]">
          SERVICES
        </span>
        <h2 className="font-primary text-[40px] font-bold text-text-primary text-center">
          What we build
        </h2>
      </div>

      {/* Services Grid */}
      <div className="flex gap-[24px] w-full">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
