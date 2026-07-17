import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FinalCta from "@/components/sections/FinalCta";
import { buildMetadata } from "@/lib/seo/metadata";
import { SERVICES, INDUSTRIES } from "@/lib/seo/constants";

export const metadata: Metadata = buildMetadata({
  title: "Sitemap - Craftly Studio",
  description:
    "Browse all pages available on Craftly Studio. Find our services, industries, blog, portfolio, and more.",
  path: "/sitemap",
});

const mainPages = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Policies", href: "/terms" },
];

export default function SitemapPage() {
  return (
    <>
      <section className="pt-48 pb-24 bg-bg-inverse text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <Breadcrumbs items={[{ label: "Sitemap", href: "/sitemap" }]} />
          <div className="text-center">
            <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-8 text-balance">
              Sitemap
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Browse all pages available on our website.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="space-y-16">
            <div>
              <h2 className="font-display text-2xl font-bold mb-6 text-accent">
                Main Pages
              </h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {mainPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="block p-4 rounded-xl border border-outline hover:border-accent hover:bg-surface transition-all text-on-surface font-medium"
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-6 text-accent">
                Services
              </h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="block p-4 rounded-xl border border-outline hover:border-accent hover:bg-surface transition-all text-on-surface font-medium"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-6 text-accent">
                Industries
              </h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {INDUSTRIES.map((industry) => (
                  <li key={industry.id}>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="block p-4 rounded-xl border border-outline hover:border-accent hover:bg-surface transition-all text-on-surface font-medium"
                    >
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
