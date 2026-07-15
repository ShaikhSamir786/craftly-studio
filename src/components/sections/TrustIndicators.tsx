"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Box, Truck, BarChart3, Pill } from "lucide-react";

const LOGOS = [
  { name: "Vapi Steel", type: "Manufacturing", icon: Box },
  { name: "Daman Tech", type: "Software", icon: Cpu },
  { name: "Gujarat Polymers", type: "Chemicals", icon: ShieldCheck },
  { name: "Silvassa Logistics", type: "Supply Chain", icon: Truck },
  { name: "Mehta Industrial", type: "B2B Solutions", icon: BarChart3 },
  { name: "Western Pharma", type: "Healthcare", icon: Pill },
];

export default function TrustIndicators() {
  // Duplicate the array to create a seamless infinite marquee effect
  const marqueeLogos = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="py-16 bg-surface border-y border-outline overflow-hidden relative">
      {/* Visual fading masks at the edges of the marquee */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-8 text-center">
        <p className="text-[10px] md:text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
          Trusted by Vapi & Gujarat&apos;s Leading Enterprises
        </p>
      </div>

      {/* Marquee Track Wrapper */}
      <div className="flex w-full select-none overflow-hidden">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex gap-6 pr-6 w-max whitespace-nowrap"
        >
          {marqueeLogos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 bg-white border border-outline rounded-2xl px-6 py-4.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-accent/20 hover:shadow-[0_8px_20px_rgba(255,106,61,0.04)] hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
              >
                {/* Brand Logo Icon */}
                <div className="w-9 h-9 rounded-lg bg-neutral-50 text-neutral-400 group-hover:text-accent group-hover:bg-accent/5 flex items-center justify-center transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                
                {/* Brand Text */}
                <div className="text-left">
                  <p className="text-sm font-bold text-on-surface group-hover:text-black transition-colors">
                    {logo.name}
                  </p>
                  <p className="text-[10px] font-semibold text-on-surface-variant/70 uppercase tracking-wider">
                    {logo.type}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
