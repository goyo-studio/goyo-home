import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MonthlySection from "@/components/MonthlySection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-full bg-background-dark overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <MonthlySection />
      <HowWeWorkSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
