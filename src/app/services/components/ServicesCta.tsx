"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function ServicesCta() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-bg-inverse rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle Background Gradients */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-12 -right-12 w-[350px] h-[350px] bg-accent rounded-full blur-[100px]" />
            <div className="absolute -bottom-12 -left-12 w-[350px] h-[350px] bg-accent rounded-full blur-[100px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Ready to Build Something Great?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed"
            >
              Let&apos;s discuss your business goals and create a solution that helps you grow.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-10 py-4.5 rounded-full font-bold text-lg transition-all shadow-lg shadow-accent/20 group"
              >
                Start Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact?type=consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-10 py-4.5 rounded-full font-bold text-lg transition-all"
              >
                <Calendar className="w-5 h-5 text-gray-400" />
                Schedule Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
