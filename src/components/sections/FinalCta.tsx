"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Main CTA Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0b0b0b] rounded-[40px] p-10 md:p-24 text-center relative overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
        >
          {/* Deep glowing background meshes */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Tag/Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md text-accent text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Let&apos;s Collaborate
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight text-balance">
              Ready to outpace your competition?
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-400 mb-12 leading-relaxed max-w-xl text-balance">
              Stop settling for a website that just sits there. Let&apos;s build a digital engine that actively brings in qualified leads and grows your brand.
            </p>

            {/* Main Button */}
            <Link 
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 cursor-pointer"
            >
              Book Your Free Strategy Session
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>

            {/* Trust Badges / Microcopy */}
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-12 text-xs font-semibold text-gray-500 tracking-wide uppercase">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                100% Free Website Audit
              </span>
              <span className="hidden sm:inline text-white/10">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                15-Minute Zoom Call
              </span>
              <span className="hidden sm:inline text-white/10">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                No Hidden Commitments
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
