import ServiceCard from "./ServiceCard";
import { ServiceItem } from "@/types/service";

const services: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "High-performance React, Next.js and custom web applications engineered for speed, SEO and scalability.",
    icon: "laptop",
    isFeatured: true,
    gridClass: "col-span-6 md:col-span-3 lg:col-span-3",
    href: "#",
  },
  {
    id: "ai-auto",
    title: "AI Automation",
    description: "AI-powered workflows, chatbots and business automation that eliminate repetitive work.",
    icon: "bot",
    isFeatured: true,
    gridClass: "col-span-6 md:col-span-3 lg:col-span-3",
    href: "#",
  },
  {
    id: "local-seo",
    title: "Local SEO",
    description: "Dominate local search results and attract high-intent customers with technical SEO and local optimization.",
    icon: "search",
    isFeatured: false,
    gridClass: "col-span-6 md:col-span-3 lg:col-span-2",
    href: "#",
  },
  {
    id: "web-redesign",
    title: "Website Redesign",
    description: "Transform outdated websites into modern, conversion-focused digital experiences.",
    icon: "palette",
    isFeatured: false,
    gridClass: "col-span-6 md:col-span-3 lg:col-span-2",
    href: "#",
  },
  {
    id: "sys-maintenance",
    title: "System Maintenance",
    description: "Security updates, monitoring, backups and continuous improvements to keep your website running smoothly.",
    icon: "shield",
    isFeatured: false,
    gridClass: "col-span-6 md:col-span-6 lg:col-span-2",
    href: "#",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Outcome-First Solutions</h2>
          <p className="text-lg text-on-surface-variant">We don&apos;t sell hours. We deliver growth through technical excellence.</p>
        </div>
        <div className="grid grid-cols-6 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
