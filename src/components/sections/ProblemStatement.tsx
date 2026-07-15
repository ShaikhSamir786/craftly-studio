"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, ArrowUpRight, Sparkles } from "lucide-react";

export default function ProblemStatement() {
  const points = [
    "Millisecond load times for better user retention",
    "Localized SEO to dominate Vapi search results",
    "User-centric design that builds immediate trust",
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-6 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              The Hard Truth
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-8">
              Most websites are just digital business cards. <br />
              <span className="text-accent">We build digital engines.</span>
            </h2>
            <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
              In Vapi&apos;s competitive market, a slow, generic website is costing you customers every single day. You don&apos;t just need a &quot;site&quot;—you need a high-performance marketing machine engineered to convert local searchers into paying clients.
            </p>
          </motion.div>

          <ul className="space-y-4">
            {points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-start gap-3 text-base text-on-surface font-medium"
              >
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Dashboard: Comparison Mockup */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#0b0b0b] rounded-[32px] p-6 md:p-8 shadow-2xl border border-white/[0.06] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[30px] pointer-events-none" />
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
              <span className="text-xs font-bold text-gray-500 font-mono">Performance Auditing</span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
            </div>

            {/* Comparison Cards Stack */}
            <div className="space-y-6">
              
              {/* Bad Solution (Slow Template) */}
              <div className="bg-white/[0.02] border border-white/[0.04] p-5 rounded-2xl relative overflow-hidden">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 mb-0.5">Slow Template Site</h4>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">WordPress/Wix Template</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Poor SEO
                  </span>
                </div>
                
                {/* Score bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-bold text-gray-500">
                    <span>Performance Rating</span>
                    <span className="text-red-400">38 / 100</span>
                  </div>
                  <div className="w-full h-2 bg-white/[0.05] rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-red-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "38%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4 pt-3 border-t border-white/[0.03]">
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold block mb-0.5">Load Speed</span>
                    <span className="text-sm font-bold text-red-400">4.8 seconds</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold block mb-0.5">Visitor Bounce</span>
                    <span className="text-sm font-bold text-red-400">65% loss</span>
                  </div>
                </div>
              </div>

              {/* Good Solution (Craftly Custom Engine) */}
              <div className="bg-white/[0.03] border border-accent/20 p-5 rounded-2xl relative overflow-hidden shadow-lg shadow-accent/5">
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] via-transparent to-transparent pointer-events-none" />
                
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">Craftly Engineered Engine</h4>
                    <p className="text-[10px] text-accent font-semibold uppercase tracking-wider">Custom React/Next.js</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    SEO Dominant
                  </span>
                </div>
                
                {/* Score bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-bold text-gray-400">
                    <span>Performance Rating</span>
                    <span className="text-accent font-extrabold">99 / 100</span>
                  </div>
                  <div className="w-full h-2 bg-white/[0.05] rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: "99%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4 pt-3 border-t border-white/[0.03]">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold block mb-0.5">Load Speed</span>
                    <span className="text-sm font-bold text-accent">0.3 seconds</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold block mb-0.5">Visitor Bounce</span>
                    <span className="text-sm font-bold text-accent">Under 12%</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Floating Lead Increase Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 100 }}
            className="absolute -bottom-6 -left-6 bg-accent px-6 py-5.5 rounded-2xl text-white shadow-2xl max-w-[200px] border border-white/10 hidden sm:block"
          >
            <div className="flex items-center gap-1 mb-1">
              <span className="text-3xl font-extrabold tracking-tight">120%</span>
              <ArrowUpRight className="w-6 h-6 shrink-0" />
            </div>
            <p className="text-[11px] font-bold text-white/90 uppercase tracking-wider leading-relaxed">
              Average Sales Inquiry Increase
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
