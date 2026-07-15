import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema, type FaqItem } from "@/lib/seo/schemas";
import { buildMetadata } from "@/lib/seo/metadata";
import { SERVICES } from "@/lib/seo/constants";

import ServicesHero from "./components/ServicesHero";
import ServicesDetail from "./components/ServicesDetail";
import IndustriesGrid from "./components/IndustriesGrid";
import ProcessTimeline from "./components/ProcessTimeline";
import WhyChoose from "./components/WhyChoose";
import ServicesCta from "./components/ServicesCta";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "Web Development Services in Vapi, Gujarat",
  description:
    "Professional web development services in Vapi, Gujarat. Website design, e-commerce, SEO, AI solutions & business automation for manufacturing, healthcare & local businesses.",
  path: "/services",
  keywords: [
    "web development services Vapi",
    "website development Gujarat",
    "web design services Vapi",
    "digital services Vapi",
    "SEO services Gujarat",
    "AI solutions Vapi",
  ],
});

const servicesFaqs: FaqItem[] = [
  {
    question: "How long does a website take?",
    answer:
      "A standard business website takes 2-4 weeks. More complex e-commerce stores or custom web applications take 4-12 weeks depending on scope, integrations, and customization. We employ structured milestones to deliver high quality on time.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes! We offer complete website redesign services. We'll analyze your current site, identify speed bottlenecks, SEO shortcomings, and UX friction points, then rebuild it with modern tech for higher conversions.",
  },
  {
    question: "Do you provide SEO?",
    answer:
      "Yes, every website we build is optimized for SEO out-of-the-box (fast speeds, responsive viewports, proper tags). We also provide specialized Local SEO packages to boost your Google Maps and regional rank.",
  },
  {
    question: "Do you build custom software?",
    answer:
      "Yes, we build custom business applications including custom CRM systems, client portals, B2B product catalogs, workflow tracking, and automated data sync with existing tools like Tally.",
  },
  {
    question: "Can AI automate my business?",
    answer:
      "Absolutely. We design AI chatbots for customer support, lead qualification sequences on WhatsApp/Email, internal knowledge base helpers, and custom integrations to automate repetitive tasks.",
  },
  {
    question: "Do you offer maintenance?",
    answer:
      "Yes, we provide ongoing website maintenance. This includes server uptime tracking, daily cloud backups, security scans, software updates, regular bug fixes, and monthly performance reports.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {SERVICES.map((service) => (
        <JsonLd
          key={service.id}
          data={serviceSchema({
            name: service.name,
            description: service.shortDescription,
            slug: service.slug,
          })}
        />
      ))}

      {/* Services Hero Section */}
      <ServicesHero />

      {/* Breadcrumbs for SEO */}
      <div className="bg-bg-primary py-2 border-b border-outline">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
        </div>
      </div>

      {/* Services Alternating Detail Sections */}
      <ServicesDetail />

      {/* Industries We Serve Grid */}
      <IndustriesGrid />

      {/* Process Timeline Section */}
      <ProcessTimeline />

      {/* Why Choose Craftly Studio Grid */}
      <WhyChoose />

      {/* FAQ Section */}
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Common queries about our web development and digital solutions"
        faqs={servicesFaqs}
      />

      {/* Final Call To Action */}
      <ServicesCta />
    </>
  );
}
