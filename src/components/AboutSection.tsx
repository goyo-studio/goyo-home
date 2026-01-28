"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-[40px] w-full px-[120px] py-[100px]"
    >
      {/* About Content */}
      <div className="flex flex-col items-center gap-[32px] w-[800px]">
        <span className="font-mono text-[12px] font-semibold text-accent-cyan tracking-[2px]">
          ABOUT
        </span>
        <h2 className="font-primary text-[40px] font-bold text-text-primary text-center">
          Built by engineers who ship
        </h2>
        <p className="font-primary text-[17px] text-text-secondary text-center leading-[1.8] w-[700px]">
          Goyo Studio is an independent software studio with a clear mission:
          build useful software and get it into people&apos;s hands. We believe
          that shipping real products matters more than perfect presentations.
          Our work is hands-on, engineering-focused, and driven by close
          collaboration with our clients. Every project follows the same
          principle—minimal scope, practical solutions, and fast delivery.
        </p>
      </div>
    </section>
  );
}
