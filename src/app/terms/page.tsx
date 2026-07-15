import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Craftly Studio terms of service. Read our terms and conditions for website development and digital services.",
  path: "/terms",
  noIndex: false,
});

export default function TermsPage() {
  return (
    <div className="pt-48 pb-24 max-w-3xl mx-auto px-6">
      <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms" }]} />
      <h1 className="font-display text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-on-surface-variant mb-4">
        Last updated: January 2025
      </p>
      <div className="prose prose-gray max-w-none">
        <p>This is a placeholder for the Terms of Service.</p>
      </div>
    </div>
  );
}
