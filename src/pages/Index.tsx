import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustMetrics from "@/components/TrustMetrics";
import CuratedProducts from "@/components/CuratedProducts";
import InstallmentAdvisor from "@/components/InstallmentAdvisor";
import CharityImpact from "@/components/CharityImpact";
import InvestorHub from "@/components/InvestorHub";
import Newsroom from "@/components/Newsroom";
import PremiumFooter from "@/components/PremiumFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      <main>
        <HeroSection />
        <TrustMetrics />
        <CuratedProducts />
        <InstallmentAdvisor />
        <CharityImpact />
        <InvestorHub />
        <Newsroom />
      </main>
      <PremiumFooter />
    </div>
  );
};

export default Index;
