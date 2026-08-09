import type { Metadata } from "next";
import FinalCta from "@/components/sections/FinalCta";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { websiteSchema } from "@/lib/seo/schemas";
import { BLOG_POSTS } from "@/lib/blog/posts";
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
      <JsonLd data={websiteSchema()} />
      <section className="pt-48 pb-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
          <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-8 text-center">
            Insights &amp; Updates
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto text-center mb-16">
            The latest thoughts on digital infrastructure, SEO, and modern web
            development — written for businesses in Vapi and Gujarat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className="group flex flex-col bg-white border border-outline rounded-2xl overflow-hidden hover:border-accent transition-all duration-300"
              >
                <div className="aspect-video bg-surface overflow-hidden relative flex items-center justify-center">
                  <span className="material-symbols-outlined text-5xl text-outline-variant group-hover:text-accent transition-colors">
                    article
                  </span>
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-bold text-accent uppercase tracking-widest mb-3">
                    <span>{post.category}</span>
                    <span className="text-on-surface-variant">•</span>
                    <span className="text-on-surface-variant">{post.readTime} min read</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-on-surface-variant line-clamp-3 mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant">
                      {new Date(post.datePublished).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-sm font-bold flex items-center gap-2 group-hover:text-accent">
                      Read Article{" "}
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                  </div>
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
