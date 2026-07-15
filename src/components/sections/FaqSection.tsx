"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, type FaqItem } from "@/lib/seo/schemas";

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
}

interface FaqItemRowProps {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItemRow({ faq, isOpen, onToggle }: FaqItemRowProps) {
  return (
    <div className="border border-outline rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:border-accent/30 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_20px_rgba(255,106,61,0.02)]">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-6 p-6 cursor-pointer text-left font-bold text-base md:text-lg text-on-surface transition-colors"
      >
        <span className="leading-snug">{faq.question}</span>
        <div className={`w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 shrink-0 transition-all duration-300 ${
          isOpen ? "bg-accent/10 text-accent rotate-180" : "group-hover:bg-neutral-100"
        }`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-on-surface-variant text-sm md:text-base leading-relaxed border-t border-neutral-50/50 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base md:text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <JsonLd data={faqSchema(faqs)} />

          {/* Accordion Stack */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItemRow
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
