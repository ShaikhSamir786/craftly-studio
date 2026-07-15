"use client";

import { useState } from "react";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, type FaqItem } from "@/lib/seo/schemas";

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
}

/**
 * Reusable FAQ accordion section with FAQPage schema.
 * Renders semantic details/summary for accessibility and SEO.
 */
export default function FaqSection({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-on-surface-variant text-center mb-12">
              {subtitle}
            </p>
          )}
          {!subtitle && <div className="mb-12" />}

          <JsonLd data={faqSchema(faqs)} />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-outline rounded-2xl overflow-hidden"
                open={openIndex === index}
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) {
                    setOpenIndex(index);
                  } else if (openIndex === index) {
                    setOpenIndex(null);
                  }
                }}
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-bold text-lg hover:bg-white/50 transition-colors">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined text-accent shrink-0 transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
