import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ProductLNB from "@/components/ProductLNB";
import ProductDetailContent from "@/components/ProductDetailContent";
import Footer from "@/components/Footer";
import { getAllProducts, getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
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

  return (
    <main className="w-full min-h-full bg-bg-primary overflow-x-hidden">
      <Header bordered />

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
