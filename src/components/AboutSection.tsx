"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-[24px] lg:gap-[40px] w-full px-[20px] lg:px-[120px] py-[60px] lg:py-[100px]"
    >
      {/* About Content */}
      <div className="flex flex-col items-center gap-[24px] lg:gap-[32px] w-full lg:w-[800px]">
        <span className="font-mono text-[11px] lg:text-[12px] font-semibold text-accent-cyan tracking-[2px]">
          ABOUT
        </span>
        <h2 className="font-primary text-[26px] lg:text-[40px] font-bold text-text-primary text-center leading-[1.2] lg:leading-normal">
          Built by engineers who ship
        </h2>
        <p className="font-primary text-[15px] lg:text-[17px] text-text-secondary text-center leading-[1.7] lg:leading-[1.8] w-full lg:w-[700px]">
          Goyo Studio is an independent software studio with a clear mission:
          build useful software and get it into people&apos;s hands. We believe
          that shipping real products matters more than perfect presentations.
          Our work is hands-on, engineering-focused, and driven by close
          collaboration with our clients.
          <span className="hidden lg:inline">
            {" "}
            Every project follows the same principle—minimal scope, practical
            solutions, and fast delivery.
          </span>
        </p>
      </div>
    </section>
  );
}
