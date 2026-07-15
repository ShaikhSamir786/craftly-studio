import type { Metadata } from "next";
import Link from "next/link";
import ServicesSection from "@/components/sections/ServicesSection";
import FinalCta from "@/components/sections/FinalCta";
import FaqSection from "@/components/sections/FaqSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema, type FaqItem } from "@/lib/seo/schemas";
import { buildMetadata } from "@/lib/seo/metadata";
import { SERVICES } from "@/lib/seo/constants";

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
    question: "What web development services do you offer in Vapi?",
    answer:
      "We offer comprehensive web development services including custom website development, e-commerce solutions, web applications, SEO services, AI automation, business automation & CRM development, branding & UI/UX design, and landing page design. All services are tailored for businesses in Vapi, Daman, Silvassa, and Gujarat.",
  },
  {
    question: "Do you build websites for specific industries?",
    answer:
      "Yes! We specialize in websites for manufacturing companies, clinics & hospitals, restaurants, hotels & resorts, real estate agencies, CA firms, interior designers, and educational institutions. Each industry gets a tailored solution addressing specific business needs.",
  },
  {
    question: "What technologies do you use for website development?",
    answer:
      "We use modern, cutting-edge technologies including React, Next.js, TypeScript, Node.js, and Tailwind CSS. These ensure fast loading speeds, excellent SEO performance, and scalable architecture that grows with your business.",
  },
  {
    question: "Can you help my existing website rank higher on Google?",
    answer:
      "Absolutely. Our SEO services include technical SEO audits, local SEO optimization for Vapi and surrounding areas, content optimization, and performance improvements. We help businesses achieve top rankings for relevant local searches.",
  },
  {
    question: "Do you provide ongoing maintenance after website launch?",
    answer:
      "Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, content updates, backups, and technical support. We ensure your website stays secure, fast, and up-to-date.",
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

      <section className="pt-48 pb-24 bg-surface text-center">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
          <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-8">
            Web Development Services in Vapi
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
            Comprehensive digital solutions engineered for high performance and measurable growth. From custom websites to AI-powered automation, we help businesses in Vapi, Gujarat dominate their market.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="px-4 py-2 text-sm font-medium bg-white border border-outline rounded-full hover:border-accent hover:text-accent transition-colors"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />

      <FaqSection
        title="Services FAQ"
        subtitle="Common questions about our web development services in Vapi"
        faqs={servicesFaqs}
      />
      
      <FinalCta />
    </>
  );
}
