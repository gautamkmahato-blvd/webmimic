import { Navbar } from "./_components/Navbar";
import { TrustedMarquee } from "./_components/TrustedMarquee";
import Extract from "./_components/Extract";
import Motion from "./_components/Motion";
import EcoSystem from "./_components/EcoSystem";
import DesignInspirationGallery from "./_components/DesignInspirationGallery";
import AllFeatures from "./_components/AllFeatures";
import WhySwitch from "./_components/WhySwitch";
import SocialProof from "./_components/SocialProof";
import CTASection from "./_components/CTASection";
import Pricing from "./_components/Pricing";
import StatsBar from "./_components/StatsBar";
import { HeroPage } from "./_components/HeroPage";
import Footer from "./_components/Footer";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <TrustedMarquee />
      <StatsBar />
      <Extract />
      <Motion />
      <EcoSystem />
      <DesignInspirationGallery />
      <WhySwitch />
      <AllFeatures />
      <SocialProof />
      <Pricing />
      <CTASection />
      <Footer />
    </div>
  );
}
