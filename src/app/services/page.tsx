import ServicesSection from "@/components/sections/ServicesSection";
import FinalCta from "@/components/sections/FinalCta";

export const metadata = {
  title: "Services | Craftly Studio",
  description: "Explore our web development, SEO, and AI automation services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-48 pb-24 bg-surface text-center">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-8">
            Digital Solutions
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
            Comprehensive technical services engineered for high performance and measurable growth.
          </p>
        </div>
      </section>

      <ServicesSection />
      
      <FinalCta />
    </>
  );
}
