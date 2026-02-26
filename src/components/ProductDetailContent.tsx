"use client";

import Image from "next/image";
import { Calendar, ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

export default function ProductDetailContent({
  product,
}: {
  product: Product;
}) {
  const sectionPx = "p-[32px_20px] lg:p-[56px_64px]";
  const hasSteps = product.happyCaseSteps.length > 0;
  const hasVideo = !!product.videoUrl;

  return (
    <article className="flex flex-col w-full min-w-0">
      {/* Hero */}
      <section className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[16px] ${sectionPx} border-b border-border-subtle`}>
        <div className="flex flex-col gap-[16px] lg:flex-row lg:items-center lg:gap-[24px] min-w-0">
          {product.logoPath && (
            <Image
              src={product.logoPath}
              alt={product.name}
              width={64}
              height={64}
              className="rounded-[14px] shrink-0"
            />
          )}
          <div className="flex flex-col gap-[6px] min-w-0">
            <h1 className="font-primary text-[28px] lg:text-[36px] font-semibold text-text-dark tracking-[-0.8px]">
              {product.name}
            </h1>
            <p className="font-primary text-[16px] lg:text-[18px] text-text-secondary leading-[1.5]">
              {product.subtitle}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-[8px] shrink-0">
          <span
            className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-[20px] font-primary text-[14px] font-semibold text-accent-positive"
            style={{
              backgroundColor: "#4A7C5915",
              border: "1px solid #4A7C5930",
            }}
          >
            <span className="w-[8px] h-[8px] rounded-full bg-accent-positive" />
            {product.status}
          </span>
          <span className="flex items-center gap-[6px] font-mono text-[13px] font-medium text-text-tertiary">
            <Calendar size={14} />
            {product.date}
          </span>
        </div>
      </section>

      {/* Primary Visual */}
      {product.capturePath && (
        <section className="p-[32px_20px] lg:p-[48px_64px] border-b border-border-subtle bg-white">
          <Image
            src={product.capturePath}
            alt={`${product.name} screenshot`}
            width={960}
            height={600}
            className="w-full rounded-[8px]"
            style={{
              boxShadow: "0 1px 4px #0000000A, 0 4px 20px #00000015",
            }}
          />
        </section>
      )}

      {/* Problem */}
      {product.problem && (
        <section className={`flex flex-col gap-[16px] ${sectionPx} border-b border-border-subtle`}>
          <h2 className="font-primary text-[13px] font-semibold text-text-tertiary tracking-[3px] uppercase">
            PROBLEM
          </h2>
          <p className="font-primary text-[16px] lg:text-[18px] text-text-primary leading-[1.8]">
            {product.problem}
          </p>
        </section>
      )}

      {/* How to Solve */}
      {product.description && (
        <section className={`flex flex-col gap-[16px] ${sectionPx} border-b border-border-subtle`}>
          <h2 className="font-primary text-[13px] font-semibold text-text-tertiary tracking-[3px] uppercase">
            HOW TO SOLVE
          </h2>
          <p className="font-primary text-[16px] lg:text-[18px] text-text-primary leading-[1.8] whitespace-pre-line">
            {product.description}
          </p>
        </section>
      )}

      {/* How It Works + Video (2-column on desktop) */}
      {(hasSteps || hasVideo) && (
        <section className={`flex flex-col gap-[24px] ${sectionPx} border-b border-border-subtle`}>
          <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[48px]">
            {/* Left: Steps */}
            {hasSteps && (
              <div className="flex flex-col gap-[24px] flex-1">
                <h2 className="font-primary text-[13px] font-semibold text-text-tertiary tracking-[3px] uppercase">
                  HOW IT WORKS
                </h2>
                <ol className="flex flex-col gap-[12px]">
                  {product.happyCaseSteps.map((step, i) => (
                    <li key={i} className="flex items-center gap-[12px]">
                      <span className="flex items-center justify-center w-[28px] h-[28px] rounded-full bg-accent-primary font-primary text-[13px] font-semibold text-white shrink-0">
                        {i + 1}
                      </span>
                      <span className="font-primary text-[16px] lg:text-[18px] font-medium text-text-primary leading-[1.6]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Right: Video */}
            {hasVideo && (
              <div className="flex flex-col gap-[16px] flex-1">
                <h2 className="font-primary text-[13px] font-semibold text-text-tertiary tracking-[3px] uppercase">
                  VIDEO
                </h2>
                {getYouTubeId(product.videoUrl) ? (
                  <div className="relative w-full aspect-video rounded-[8px] overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(product.videoUrl)}`}
                      title={`${product.name} video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                ) : (
                  <a
                    href={product.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-primary text-[16px] text-accent-primary underline hover:text-accent-hover transition-colors duration-150"
                  >
                    Watch video
                  </a>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Access */}
      {product.accessUrl && (
        <section className={`flex flex-col gap-[20px] p-[32px_20px] lg:p-[56px_64px_80px_64px]`}>
          <h2 className="font-primary text-[13px] font-semibold text-text-tertiary tracking-[3px] uppercase">
            ACCESS
          </h2>
          <a
            href={product.accessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-[10px] px-[28px] py-[16px] bg-accent-primary hover:bg-accent-hover text-text-on-accent font-primary text-[16px] font-semibold rounded-[8px] transition-colors duration-150 w-full lg:w-fit"
          >
            Get the app
            <ArrowUpRight className="w-[18px] h-[18px]" />
          </a>
        </section>
      )}
    </article>
  );
}
