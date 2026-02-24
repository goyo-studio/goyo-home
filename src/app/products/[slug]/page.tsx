import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ProductLNB from "@/components/ProductLNB";
import ProductDetailContent from "@/components/ProductDetailContent";
import Footer from "@/components/Footer";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import {
  breadcrumbJsonLd,
  softwareApplicationJsonLd,
  howToJsonLd,
  videoObjectJsonLd,
} from "@/lib/jsonld";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const description =
    (product.description || product.subtitle).slice(0, 160);

  return {
    title: product.name,
    description,
    alternates: {
      canonical: `/products/${slug}`,
    },
    openGraph: {
      title: product.name,
      description,
      url: `/products/${slug}`,
      ...(product.capturePath && {
        images: [{ url: product.capturePath }],
      }),
    },
    twitter: {
      title: product.name,
      description,
      ...(product.capturePath && {
        images: [product.capturePath],
      }),
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const allProducts = getAllProducts();

  const jsonLdItems = [
    breadcrumbJsonLd(product),
    softwareApplicationJsonLd(product),
    howToJsonLd(product),
    videoObjectJsonLd(product),
  ].filter(Boolean);

  return (
    <main className="w-full min-h-full bg-bg-primary overflow-x-hidden">
      <Header bordered />

      {jsonLdItems.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      {/* Desktop: LNB + Content */}
      <div className="hidden lg:flex min-h-[calc(100vh-72px)] px-[120px]">
        <ProductLNB products={allProducts} currentSlug={slug} />
        <div className="flex-1 bg-bg-section">
          <ProductDetailContent product={product} />
        </div>
      </div>

      {/* Mobile: Content only */}
      <div className="flex lg:hidden">
        <ProductDetailContent product={product} />
      </div>

      <Footer />
    </main>
  );
}
