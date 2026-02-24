import Link from "next/link";

export default function Header({ bordered }: { bordered?: boolean }) {
  return (
    <header
      className={`flex items-center h-[56px] lg:h-[72px] px-[20px] lg:px-[120px] w-full bg-[#FFFFFF] lg:bg-transparent ${
        bordered
          ? "border-b border-[#E8E8E8]"
          : "border-b border-[#E8E8E8] lg:border-b-0"
      }`}
    >
      <Link href="/" className="flex items-baseline gap-[4px]">
        <span className="font-primary text-[18px] lg:text-[20px] font-medium text-[#000000] lg:text-text-primary">
          Goyo
        </span>
        <span className="font-primary text-[15px] lg:text-[17px] font-light text-[#000000] lg:text-text-primary">
          Studio
        </span>
      </Link>
    </header>
  );
}
