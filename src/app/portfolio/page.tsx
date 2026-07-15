import type { Metadata } from "next";
import PortfolioSection from "@/components/sections/PortfolioSection";
import FinalCta from "@/components/sections/FinalCta";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Our Work - Website Portfolio | Craftly Studio Vapi",
  description:
    "View our portfolio of custom websites, e-commerce stores, and web applications built for businesses in Vapi, Gujarat. Real results for manufacturing, healthcare & local businesses.",
  path: "/portfolio",
  keywords: [
    "web development portfolio Vapi",
    "website design examples Gujarat",
    "Craftly Studio work",
    "website case studies",
    "web development projects Vapi",
  ],
});

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-48 pb-24 bg-bg-inverse text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <Breadcrumbs items={[{ label: "Portfolio", href: "/portfolio" }]} />
          <div className="text-center">
            <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-8">
              Our Work
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real results for forward-thinking businesses in Vapi, Gujarat, and beyond. Custom websites and digital solutions that drive growth.
            </p>
          </div>
        </div>
      </section>

      <PortfolioSection />
      
      <FinalCta />
    </>
  );
}
