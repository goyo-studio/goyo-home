"use client";

import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductLNB({
  products,
  currentSlug,
}: {
  products: Product[];
  currentSlug: string;
}) {
  return (
    <nav className="w-[260px] shrink-0 bg-bg-section border-r border-border-subtle py-[32px]">
      <span className="block px-[20px] pb-[16px] font-primary text-[13px] font-bold text-text-tertiary tracking-[3px] uppercase">
        PRODUCTS
      </span>
      <ul className="flex flex-col">
        {products.map((product) => {
          const isActive = product.slug === currentSlug;
          return (
            <li key={product.slug}>
              <Link
                href={`/products/${product.slug}`}
                className={`block px-[20px] py-[10px] text-[15px] transition-all duration-150 ease-out ${
                  isActive
                    ? "font-bold text-text-primary bg-bg-primary border-l-[3px] border-border-strong"
                    : "text-[#8896A1] hover:text-text-primary hover:bg-[#F7F5F010] border-l-[3px] border-transparent"
                }`}
              >
                {product.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
