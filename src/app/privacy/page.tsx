import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Craftly Studio privacy policy. Learn how we collect, use, and protect your personal information when you use our website and services.",
  path: "/privacy",
  noIndex: false,
});

export default function PrivacyPage() {
  return (
    <div className="pt-48 pb-24 max-w-3xl mx-auto px-6">
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} />
      <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-on-surface-variant mb-4">
        Last updated: January 2025
      </p>
      <div className="prose prose-gray max-w-none">
        <p>This is a placeholder for the Privacy Policy.</p>
      </div>
    </div>
  );
}
