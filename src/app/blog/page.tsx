import type { Metadata } from "next";
import FinalCta from "@/components/sections/FinalCta";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Web Development Blog | Tips & Insights",
  description:
    "Expert insights on web development, SEO, AI automation & digital strategy for businesses in Vapi, Gujarat. Learn how to grow your business online.",
  path: "/blog",
  keywords: [
    "web development blog",
    "SEO tips Vapi",
    "digital marketing insights",
    "website tips for businesses",
    "AI automation blog",
    "Next.js tutorial blog India",
    "React best practices blog",
    "local SEO guide Vapi",
    "ecommerce growth tips Gujarat",
    "AEO answer engine optimization guide",
    "GEO generative engine optimization",
    "how to rank on Google Vapi",
    "small business marketing India",
    "web design trends 2026",
    "UI UX tips for founders",
    "conversion rate optimization blog",
    "Core Web Vitals guide",
    "schema markup tutorial",
    "Craftly Studio blog",
  ],
});

export default function BlogPage() {
  return (
    <>
      <section className="pt-48 pb-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
          <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-8 text-center">
            Insights &amp; Updates
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto text-center mb-16">
            The latest thoughts on digital infrastructure, SEO, and modern web development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Link href={`/blog/post-${i}`} key={i} className="group flex flex-col bg-white border border-outline rounded-2xl overflow-hidden hover:border-accent transition-all duration-300">
                <div className="aspect-video bg-gray-100 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">Image Placeholder</div>
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-bold text-accent uppercase tracking-widest mb-3">
                    <span>Engineering</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">How to Optimize Core Web Vitals in 2024</h3>
                  <p className="text-on-surface-variant line-clamp-3 mb-6 flex-1">
                    A deep dive into the latest strategies for improving loading speed, interactivity, and visual stability for Next.js applications.
                  </p>
                  <span className="text-sm font-bold flex items-center gap-2 group-hover:text-accent">Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
