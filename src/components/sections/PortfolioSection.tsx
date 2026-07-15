"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const PROJECTS = [
  {
    id: "vapi-steel",
    client: "Vapi Steel Solutions",
    industry: "Manufacturing Giant",
    challenge: "An outdated site wasn't converting high-value B2B inquiries or showcasing engineering capability.",
    solution: "Engineered a lightning-fast catalog system with optimized procurement RFQ forms and clean UI.",
    metrics: [
      { label: "Inquiry Growth", value: "3.2x" },
      { label: "Mobile Page Speed", value: "98/100" },
    ],
    tags: ["Next.js 16", "Tailwind CSS v4", "B2B Catalog"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-CcCP4pelmuDkUTfIB6iBv_QZ06SFdsvEvnBNz_YHP9v6Ritaoq733KYa0MbnPEbKl6_UPDrHhqAHG0i304xQJb1dJXPUjsIUWqmFAdhQH4ASBkHoPXSeZPhxCgL2M2F8RwF75wJNZ_xLhdeKTcUtX5dCX0TVchfCLNrkPQRQ2YuD3JZtvxYxQdp8sWh4Gigv9n3zoAej2Cwo-pmvqrURsHq1EBJMyG3nEUMjxLo9kkddjXjpw9Od",
    href: "/portfolio/vapi-steel",
  },
  {
    id: "daman-pharma",
    client: "Daman Pharma Labs",
    industry: "Healthcare & Labs",
    challenge: "Complex client booking systems and secure lab reports were sluggish and prone to errors.",
    solution: "Created a secure, HIPAA-compliant patient dashboard with real-time PDF report delivery.",
    metrics: [
      { label: "Load Reduction", value: "85%" },
      { label: "User Trust Score", value: "99.9%" },
    ],
    tags: ["React 19", "Firebase Auth", "API Sync"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPhecCwmsxbNV5t8XbdjEtkqtI2nMb_CFO5XTNEQt0soXWKJH3zxNx68FwiGEEEfB1Lmmh-mfRMeJSjuD5rq147vx2gmLw-PeGVCBfAFAQZDcccYGqO_YlXmlbLv6jDXTDcVH4vNQBTg9yI_eK7LS9P40BPTjOA-jUMyXttvAZ2TaI9b2BorYubLAeKSJ3yRsoyZNi02EEzimgZ3tGpexieafAghws8_-bkCQfzKt6rfqd5eIdm6Xf",
    href: "/portfolio/daman-pharma",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-20">
          <div>
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Proven Results
            </span>
            <h2 className="font-display text-4xl font-extrabold tracking-tight">
              Selected Case Studies
            </h2>
          </div>
          <Link 
            href="/portfolio" 
            className="group/all inline-flex items-center gap-2 text-accent font-bold transition-all hover:text-accent/80 text-lg cursor-pointer"
          >
            All Projects 
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/all:translate-x-1 group-hover/all:-translate-y-1" />
          </Link>
        </div>

        {/* Projects Stack */}
        <div className="space-y-24 md:space-y-36">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                
                {/* Image Container (swaps order based on index) */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`lg:col-span-6 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  {/* Decorative background frame */}
                  <div className="absolute inset-0 bg-neutral-50 rounded-[32px] transform translate-x-3 translate-y-3 -z-10 border border-neutral-100" />
                  
                  {/* Main image card */}
                  <div className="bg-white rounded-[32px] p-4 border border-neutral-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden relative group">
                    <div className="aspect-[4/3] bg-neutral-50 rounded-2xl overflow-hidden relative">
                      {/* Orange overlay on hover */}
                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                      
                      <Image 
                        src={project.image} 
                        alt={project.client} 
                        fill 
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Content Container */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                  className={`lg:col-span-6 flex flex-col items-start ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-widest mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    {project.industry}
                  </span>

                  <h3 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface mb-6 tracking-tight">
                    {project.client}
                  </h3>

                  {/* Challenge & Solution details */}
                  <div className="space-y-6 mb-8 w-full">
                    <div className="bg-neutral-50/50 p-4.5 rounded-2xl border border-neutral-100/50">
                      <p className="text-[10px] font-extrabold uppercase text-on-surface-variant/80 tracking-wider mb-1">The Challenge</p>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{project.challenge}</p>
                    </div>
                    <div className="bg-accent/5 p-4.5 rounded-2xl border border-accent/10">
                      <p className="text-[10px] font-extrabold uppercase text-accent tracking-wider mb-1">The Solution</p>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full bg-neutral-50 text-on-surface-variant border border-neutral-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-8 w-full pt-6 border-t border-neutral-100">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-3xl font-black text-accent tracking-tight mb-1">{metric.value}</p>
                        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
