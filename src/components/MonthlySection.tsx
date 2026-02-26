"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import type { Product } from "@/lib/products";

export default function MonthlySection({ products }: { products: Product[] }) {
  return (
    <section
      id="projects"
      className="flex flex-col gap-[40px] lg:gap-[60px] w-full px-[20px] lg:px-[120px] py-[60px] lg:py-[100px]"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center gap-[12px] lg:gap-[16px] w-full">
        <span className="font-mono text-[13px] font-medium text-text-tertiary tracking-[3px] uppercase">
          MONTHLY GOYO STUDIO
        </span>
        <h2 className="font-primary text-[28px] lg:text-[36px] font-normal text-text-dark tracking-[-0.5px] text-center">
          Building one product every month
        </h2>
        <p className="font-primary text-[16px] lg:text-[18px] text-text-secondary leading-[1.6] text-center lg:w-[640px]">
          Focused on usability, minimal scope, and fast delivery.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[16px] lg:gap-[32px] w-full">
        {products.map((product) => (
          <ProjectCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ product }: { product: Product }) {
  const dateLabel =
    product.status === "Released"
      ? product.date
      : `Expected: ${product.date}`;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col bg-bg-surface cursor-pointer transition-all duration-200 ease-out"
      style={{
        boxShadow: "0 2px 8px #00000012, 0 8px 24px #0000000F",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 4px 16px #00000018, 0 16px 40px #00000018";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0 2px 8px #00000012, 0 8px 24px #0000000F";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Visual area */}
      <div className="relative aspect-[19/11] bg-[#F5F3EF] p-[2px]">
        {product.capturePath ? (
          <Image
            src={product.capturePath}
            alt={product.name}
            fill
            className="object-contain p-[2px]"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <span className="font-primary text-[20px] text-text-tertiary">
              {product.status}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[8px] p-[20px] lg:p-[24px]">
        <span className="font-primary text-[12px] font-medium text-[#999999] tracking-[2px] uppercase">
          {product.status}
        </span>
        <h3 className="font-primary text-[22px] font-semibold text-text-dark tracking-[-0.3px]">
          {product.name}
        </h3>
        <p className="font-primary text-[16px] text-[#777777] leading-[1.65]">
          {product.subtitle}
        </p>
        <span className="flex items-center gap-[6px] lg:gap-[6px] font-mono text-[12px] lg:text-[13px] font-medium text-text-tertiary">
          <Calendar className="w-[13px] h-[13px] lg:w-[14px] lg:h-[14px]" />
          {dateLabel}
        </span>
      </div>
    </Link>
  );
}
