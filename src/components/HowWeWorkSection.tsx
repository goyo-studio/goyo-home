"use client";

interface StepProps {
  number: string;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="flex flex-col items-center gap-[16px] w-[320px]">
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
      className="flex flex-col gap-[60px] w-full px-[120px] py-[100px] bg-background-section"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center gap-[16px] w-full">
        <span className="font-mono text-[12px] font-semibold text-accent-cyan tracking-[2px]">
          PROCESS
        </span>
        <h2 className="font-primary text-[40px] font-bold text-text-primary text-center">
          How we work
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="flex gap-[48px] justify-center w-full">
        {steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </div>
    </section>
  );
}
