"use client";

import { motion } from "framer-motion";
import { Factory, HeartPulse, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

const INDUSTRIES = [
  {
    id: "industrial",
    title: "Industrial Manufacturing",
    description: "Showcasing capability, engineering scale, and global catalogs designed for heavy B2B procurement cycles.",
    icon: Factory,
    href: "/services#industrial",
    accentColor: "from-[#ff6a3d]/20 to-[#ff6a3d]/5",
    accentBorder: "group-hover:border-[#ff6a3d]/30",
  },
  {
    id: "healthcare",
    title: "Clinics & Healthcare",
    description: "Building immediate local trust with seamless patient appointment engines and strict compliance structures.",
    icon: HeartPulse,
    href: "/services#healthcare",
    accentColor: "from-emerald-500/20 to-emerald-500/5",
    accentBorder: "group-hover:border-emerald-500/30",
  },
  {
    id: "services",
    title: "Service Agencies",
    description: "High-conversion lead capture, interactive calculators, and customized scheduling workflows that qualify buyers.",
    icon: Briefcase,
    href: "/services#services",
    accentColor: "from-blue-500/20 to-blue-500/5",
    accentBorder: "group-hover:border-blue-500/30",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 md:py-32 bg-[#050505] text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            Tailored Solutions
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Specialized for Local Success
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            We don&apos;t build generic sites. We design industry-specific systems custom-engineered for Vapi&apos;s key sectors.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Background card with glassmorphism */}
                <div className={`h-full rounded-[28px] border border-white/[0.05] bg-white/[0.02] p-8 md:p-10 flex flex-col justify-between min-h-[340px] transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-2xl hover:shadow-accent/5 ${ind.accentBorder}`}>
                  
                  {/* Decorative glowing gradient inside card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-transparent to-transparent pointer-events-none rounded-[28px]" />

                  <div>
                    {/* Icon container */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ind.accentColor} flex items-center justify-center mb-8 border border-white/[0.05] group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-bold mb-4 tracking-tight">
                      {ind.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                      {ind.description}
                    </p>
                  </div>

                  {/* CTA Footer */}
                  <div className="pt-4 border-t border-white/[0.04]">
                    <Link
                      href={ind.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all group/btn"
                    >
                      Explore Industry Strategy
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
