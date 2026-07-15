import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustIndicators from "@/components/sections/TrustIndicators";
import ProblemStatement from "@/components/sections/ProblemStatement";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FinalCta from "@/components/sections/FinalCta";
import FaqSection from "@/components/sections/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, type FaqItem } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Craftly Studio | Best Website Development Company in Vapi, Gujarat",
  description:
    "Craftly Studio is the best website development company in Vapi, Gujarat. Custom websites, e-commerce, SEO & AI solutions for manufacturing, healthcare & local businesses.",
  keywords:
    "website development Vapi, web development company Vapi, best website developer Vapi, website designer Gujarat, digital agency Vapi, web design Vapi",
  alternates: {
    canonical: "https://craftlystudio.com",
  },
};

const homeFaqs: FaqItem[] = [
  {
    question: "How much does a website cost in Vapi?",
    answer:
      "Website costs in Vapi range from ₹15,000 for a basic business website to ₹2,00,000+ for custom web applications. At Craftly Studio, we provide tailored solutions based on your business needs, industry, and features required. Contact us for a free quote.",
  },
  {
    question: "How long does website development take?",
    answer:
      "A standard business website takes 2-4 weeks. E-commerce sites typically require 4-6 weeks, and custom web applications can take 6-12 weeks depending on complexity. We follow agile development practices to deliver faster without compromising quality.",
  },
  {
    question: "Why does my business need a website?",
    answer:
      "A professional website builds trust, attracts customers 24/7, and gives you a competitive edge in Vapi's growing market. With 85% of consumers researching online before buying, your website is your most important marketing asset.",
  },
  {
    question: "Which company builds the best websites in Vapi?",
    answer:
      "Craftly Studio is a leading website development company in Vapi, Gujarat. We specialize in custom React and Next.js websites with modern design, SEO optimization, and fast performance for local businesses across manufacturing, healthcare, hospitality, and services.",
  },
  {
    question: "Do you provide SEO services along with website development?",
    answer:
      "Yes! Every website we build at Craftly Studio is SEO-optimized from the start. We also offer dedicated Local SEO services to help your business rank higher on Google for searches in Vapi, Daman, Silvassa, and surrounding areas.",
  },
  {
    question: "What is the difference between a website and a Facebook page for business?",
    answer:
      "A website is your owned digital property with full control over branding, SEO ranking, lead capture, and analytics. Facebook pages depend on algorithm changes and offer limited customization. Most successful businesses in Vapi use both, with their website as the primary conversion tool.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <HeroSection />
      <TrustIndicators />
      <ProblemStatement />
      <ServicesSection />
      <IndustriesSection />
      <PortfolioSection />
      <TestimonialSection />
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Common questions about website development in Vapi, Gujarat"
        faqs={homeFaqs}
      />
      <FinalCta />
    </>
  );
}
