import HeroSection from "@/components/sections/HeroSection";
import TrustIndicators from "@/components/sections/TrustIndicators";
import ProblemStatement from "@/components/sections/ProblemStatement";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <ProblemStatement />
      <ServicesSection />
      <IndustriesSection />
      <PortfolioSection />
      <TestimonialSection />
      <FinalCta />
    </>
  );
}
