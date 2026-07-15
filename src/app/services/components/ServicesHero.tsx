"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative pt-44 pb-24 md:pt-52 md:pb-36 bg-bg-inverse text-white overflow-hidden">
      {/* Abstract Glowing Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-[#ff8c69]/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Redesigned Services Experience</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1] text-balance"
        >
          Outcome-First <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-accent to-[#ff9f7e] bg-clip-text text-transparent">
            Digital Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We help businesses grow through modern websites, AI automation, and digital solutions designed to generate measurable business results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-accent/20 group animate-pulse-subtle"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact?type=consultation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all"
          >
            <Calendar className="w-5 h-5 text-gray-400" />
            Book a Free Consultation
          </Link>
        </motion.div>
      </div>

      {/* Elegant Bottom Transition Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}
