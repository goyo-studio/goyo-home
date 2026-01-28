"use client";

interface StepProps {
  number: string;
  title: string;
  description: string;
}

function DesktopStep({ number, title, description }: StepProps) {
  return (
    <div className="hidden lg:flex flex-col items-center gap-[16px] w-[320px]">
      {/* Step Number */}
      <div className="flex items-center justify-center w-[48px] h-[48px] bg-accent-cyan rounded-full">
        <span className="font-mono text-[20px] font-bold text-text-black">
          {number}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-primary text-[20px] font-semibold text-text-primary text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="font-primary text-[15px] text-text-secondary text-center leading-[1.6] w-[280px]">
        {description}
      </p>
    </div>
  );
}

function MobileStep({ number, title, description }: StepProps) {
  return (
    <div className="flex lg:hidden gap-[16px] w-full">
      {/* Step Number */}
      <div className="flex items-center justify-center w-[40px] h-[40px] bg-accent-cyan rounded-full shrink-0">
        <span className="font-mono text-[16px] font-bold text-text-black">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[8px] flex-1">
        <h3 className="font-primary text-[17px] font-semibold text-text-primary">
          {title}
        </h3>
        <p className="font-primary text-[14px] text-text-secondary leading-[1.5]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HowWeWorkSection() {
  const steps: StepProps[] = [
    {
      number: "1",
      title: "Understand",
      description:
        "We listen to the problem and understand the real usage context before writing any code.",
    },
    {
      number: "2",
      title: "Design",
      description:
        "We design minimal, practical solutions that focus on what matters most.",
    },
    {
      number: "3",
      title: "Ship & Iterate",
      description:
        "We build, ship fast, and iterate based on real-world usage and feedback.",
    },
  ];

  return (
    <section
      id="process"
      className="flex flex-col gap-[40px] lg:gap-[60px] w-full px-[20px] lg:px-[120px] py-[60px] lg:py-[100px] bg-background-section"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center gap-[12px] lg:gap-[16px] w-full">
        <span className="font-mono text-[11px] lg:text-[12px] font-semibold text-accent-cyan tracking-[2px]">
          PROCESS
        </span>
        <h2 className="font-primary text-[28px] lg:text-[40px] font-bold text-text-primary text-center">
          How we work
        </h2>
      </div>

      {/* Desktop Steps Grid */}
      <div className="hidden lg:flex gap-[48px] justify-center w-full">
        {steps.map((step, index) => (
          <DesktopStep key={index} {...step} />
        ))}
      </div>

      {/* Mobile Steps Grid */}
      <div className="flex lg:hidden flex-col gap-[32px] w-full">
        {steps.map((step, index) => (
          <MobileStep key={index} {...step} />
        ))}
      </div>
    </section>
  );
}
