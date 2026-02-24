import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MonthlySection from "@/components/MonthlySection";
import Footer from "@/components/Footer";
import { getAllProducts } from "@/lib/products";

export default function Home() {
  const products = getAllProducts();

  return (
    <main className="w-full min-h-full bg-bg-primary overflow-x-hidden">
      <Header />
      <HeroSection />
      <MonthlySection products={products} />
      <Footer />
    </main>
  );
}
