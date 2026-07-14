import PortfolioSection from "@/components/sections/PortfolioSection";
import FinalCta from "@/components/sections/FinalCta";

export const metadata = {
  title: "Portfolio | Craftly Studio",
  description: "View our recent work and case studies.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-48 pb-24 bg-bg-inverse text-white text-center">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-8">
            Our Work
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real results for forward-thinking businesses.
          </p>
        </div>
      </section>

      <PortfolioSection />
      
      <FinalCta />
    </>
  );
}
