import HeroSection from "@/components/main/HeroSection";
import BestKiaSection from "@/components/main/BestKiaSection";
import QuickAccessCardsSection from "@/components/main/QuickAccessCardsSection";
import NewsSection from "@/components/main/NewsSection";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Best Kia Section */}
      <BestKiaSection />

      {/* Quick Access Cards Section */}
      <QuickAccessCardsSection />

      {/* News Section */}
      <NewsSection />
    </main>
  );
}
