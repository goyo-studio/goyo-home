"use client";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full px-[20px] lg:px-[120px] pt-[80px] lg:pt-[180px] pb-[80px] lg:pb-[120px] bg-cover bg-center"
      style={{ backgroundImage: "url('/minimal_background.jpg')" }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #0A0F1C40 0%, #0A0F1C90 70%, #0A0F1CE8 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-[16px] lg:gap-[20px] w-full lg:w-[900px]">
        <h1 className="font-primary text-[36px] lg:text-[64px] font-light text-white tracking-[-0.8px] lg:tracking-[-1px] leading-[1.15] text-center">
          Building minimal software
        </h1>
        <p className="font-primary text-[17px] lg:text-[22px] text-[#FFFFFFCC] text-center lg:w-[720px] leading-[1.6]">
          Simplifying, refining — steadily
        </p>
      </div>
    </section>
  );
}
