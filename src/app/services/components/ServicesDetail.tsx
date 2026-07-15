"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Laptop, Bot, Search, RefreshCw, Shield, 
  Check, X, ArrowRight, MessageSquare, 
  MapPin, CheckCircle, Smartphone, Server 
} from "lucide-react";

export default function ServicesDetail() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
  } as const;

  return (
    <section className="py-24 md:py-32 bg-white space-y-32 md:space-y-48">
      {/* ─── Service 1: Website Development ──────────────────────────────── */}
      <div id="web-dev" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop scroll-mt-28">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold">
              <Laptop className="w-4 h-4" />
              <span>Development</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold text-on-surface">
              Website Development
            </h2>
            
            <p className="text-xl font-medium text-accent leading-snug">
              Websites built to convert visitors into customers.
            </p>
            
            <p className="text-on-surface-variant leading-relaxed">
              We engineer custom business websites, corporate portals, and high-converting landing pages. Built with an SEO-first architecture, optimized for sub-second load times, and crafted using mobile-first practices to ensure your security and scalability.
            </p>

            <div className="space-y-3">
              <p className="font-bold text-on-surface text-sm uppercase tracking-wider">Deliverables</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {[
                  "Responsive Design",
                  "Next.js Development",
                  "SEO Optimization",
                  "Contact Forms",
                  "Analytics Integration",
                  "WhatsApp Integration",
                  "CMS Integration"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-on-surface-variant text-sm">
                    <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <p className="font-bold text-on-surface text-sm uppercase tracking-wider mb-3">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Node.js"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-semibold bg-surface border border-outline rounded-full text-on-surface">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact?service=website-development"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg group"
              >
                Build My Website
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Visual Element (IDE / Code Editor Mockup) */}
          <motion.div variants={itemVariants} className="lg:col-span-6">
            <div className="relative rounded-[24px] overflow-hidden border border-neutral-200 bg-neutral-900 shadow-2xl p-6 font-mono text-xs md:text-sm text-gray-300">
              {/* Editor Header */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="text-gray-500 text-xs ml-2 font-mono">ServiceCard.tsx</span>
                </div>
                <span className="text-xs text-gray-600 bg-neutral-800 px-2.5 py-1 rounded">Next.js 16</span>
              </div>
              {/* Code lines */}
              <div className="space-y-1.5 select-none overflow-x-auto">
                <p><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-300">&quot;react&quot;</span>;</p>
                <p><span className="text-purple-400">import</span> &#123; motion &#125; <span className="text-purple-400">from</span> <span className="text-green-300">&quot;framer-motion&quot;</span>;</p>
                <p className="text-gray-500">// Optimized for Google Core Web Vitals</p>
                <p><span className="text-blue-400">export default function</span> <span className="text-yellow-300">Hero</span>() &#123;</p>
                <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                <p className="pl-8 text-[#ff6a3d]">&lt;<span className="text-blue-300">motion.div</span></p>
                <p className="pl-12 text-[#ff8c69]">initial=&#123;&#123; opacity: 0, y: 20 &#125;&#125;</p>
                <p className="pl-12 text-[#ff8c69]">animate=&#123;&#123; opacity: 1, y: 0 &#125;&#125;</p>
                <p className="pl-12 text-[#ff8c69]">className=<span className="text-green-300">&quot;text-center px-4&quot;</span></p>
                <p className="pl-8 text-[#ff6a3d]">&gt;</p>
                <p className="pl-12">&lt;<span className="text-blue-300">h1</span> className=<span className="text-green-300">&quot;font-display text-6xl&quot;</span>&gt;</p>
                <p className="pl-16 text-white font-bold">Outcome-First Solutions</p>
                <p className="pl-12">&lt;/<span className="text-blue-300">h1</span>&gt;</p>
                <p className="pl-8 text-[#ff6a3d]">&lt;/<span className="text-blue-300">motion.div</span>&gt;</p>
                <p className="pl-4">);</p>
                <p>&#125;</p>
              </div>
              {/* Subtle overlay decorative blur */}
              <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-accent/20 rounded-full blur-[40px] pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Service 2: AI Automation ───────────────────────────────────── */}
      <div id="ai-auto" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop scroll-mt-28">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Visual Element (Chatbot Mockup) - LEFT on desktop */}
          <motion.div variants={itemVariants} className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-[24px] overflow-hidden border border-neutral-200 bg-surface shadow-xl p-5 md:p-6">
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-neutral-100 pb-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm">Lead Qualification Bot</h4>
                  <p className="text-xs text-on-surface-variant flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" /> Online & Active
                  </p>
                </div>
              </div>
              {/* Chat Area */}
              <div className="space-y-4 mb-4">
                <div className="flex items-start gap-2.5 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent text-xs font-bold shrink-0">AI</div>
                  <div className="bg-white border border-outline rounded-2xl p-3.5 text-sm text-on-surface leading-relaxed shadow-sm">
                    Hi! I see you are looking for web development in Gujarat. May I know your project budget and estimated timeline?
                  </div>
                </div>
                <div className="flex items-start gap-2.5 max-w-[85%] ml-auto justify-end">
                  <div className="bg-accent text-white rounded-2xl p-3.5 text-sm leading-relaxed shadow-sm">
                    Yes, looking for a manufacturing website in Vapi with around ₹1.5L budget, ready in 1 month.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent text-xs font-bold shrink-0">AI</div>
                  <div className="bg-white border border-outline rounded-2xl p-3.5 text-sm text-on-surface leading-relaxed shadow-sm">
                    Perfect! That fits our onboarding criteria. I will immediately schedule a consultation call with our team for you.
                  </div>
                </div>
              </div>
              {/* Input box mockup */}
              <div className="flex items-center gap-2 border border-outline rounded-xl p-2 bg-white">
                <div className="flex-1 text-xs text-gray-400 pl-2">Type your message...</div>
                <button className="bg-accent text-white p-2 rounded-lg"><MessageSquare className="w-4 h-4" /></button>
              </div>
            </div>
          </motion.div>

          {/* Text Content - RIGHT on desktop */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-semibold">
              <Bot className="w-4 h-4" />
              <span>AI & Integration</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold text-on-surface">
              AI Automation
            </h2>
            
            <p className="text-xl font-medium text-[#3B82F6] leading-snug">
              Automate repetitive work and save hours every week.
            </p>
            
            <p className="text-on-surface-variant leading-relaxed">
              Eliminate friction. We build intelligent AI Chatbots, automated Customer Support assistants, Lead Qualification bots, WhatsApp and Email marketing funnels, CRM integrations, and customized internal workflows that run 24/7 without intervention.
            </p>

            <div className="space-y-3 pt-2">
              <p className="font-bold text-on-surface text-sm uppercase tracking-wider">Benefits</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Save Time: Reduce manual process times by 70%",
                  "Reduce Manual Work: Let software handle data entry",
                  "Faster Responses: Sub-30 second response times",
                  "Better UX: Constant, error-free customer support"
                ].map((benefit) => {
                  const [title, desc] = benefit.split(": ");
                  return (
                    <div key={title} className="p-3 bg-surface rounded-xl border border-outline">
                      <div className="flex items-center gap-2 font-bold text-on-surface text-sm mb-0.5">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{title}</span>
                      </div>
                      <p className="text-xs text-on-surface-variant pl-6">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact?service=ai-automation"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg group"
              >
                Automate My Business
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Service 3: Local SEO ───────────────────────────────────────── */}
      <div id="local-seo" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop scroll-mt-28">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-semibold">
              <Search className="w-4 h-4" />
              <span>Search Optimization</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold text-on-surface">
              Local SEO
            </h2>
            
            <p className="text-xl font-medium text-[#10B981] leading-snug">
              Get found when customers search for your business.
            </p>
            
            <p className="text-on-surface-variant leading-relaxed">
              Dominate regional search rankings. Our team handles complete Google Business Profile optimization, local keyword research, directory citations, technical SEO fixes, reviews generation systems, and performance tuning to capture customers right when they look for you.
            </p>

            <div className="pt-2">
              <p className="font-bold text-on-surface text-sm uppercase tracking-wider mb-3">Key Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Google Business Optimization",
                  "Local Keywords",
                  "Citation Building",
                  "Technical Audits",
                  "Review Strategy",
                  "Site Performance"
                ].map((item) => (
                  <span key={item} className="px-3.5 py-1.5 text-xs font-semibold bg-surface border border-outline rounded-full text-on-surface-variant">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact?service=local-seo"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg group"
              >
                Improve My Rankings
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Visual Element (Flow Chart) */}
          <motion.div variants={itemVariants} className="lg:col-span-6">
            <div className="bg-surface border border-outline rounded-[24px] p-8 relative overflow-hidden">
              <h4 className="font-display text-lg font-bold text-on-surface mb-6 text-center">Local Conversion Pipeline</h4>
              
              <div className="flex flex-col gap-4 relative z-10">
                {/* Step 1 */}
                <div className="flex items-center gap-4 bg-white border border-outline p-4 rounded-xl shadow-sm hover:border-accent transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-on-surface">1. Google Search</div>
                    <div className="text-xs text-on-surface-variant">Customer searches for local manufacturers or clinics</div>
                  </div>
                </div>

                <div className="flex justify-center -my-1">
                  <span className="text-accent text-xl font-bold animate-bounce">↓</span>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-4 bg-white border border-outline p-4 rounded-xl shadow-sm hover:border-accent transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-on-surface">2. Google Maps</div>
                    <div className="text-xs text-on-surface-variant">Your high-ranking business profile catches their eye</div>
                  </div>
                </div>

                <div className="flex justify-center -my-1">
                  <span className="text-accent text-xl font-bold animate-bounce">↓</span>
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-4 bg-white border border-outline p-4 rounded-xl shadow-sm hover:border-accent transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-on-surface">3. Your Website</div>
                    <div className="text-xs text-on-surface-variant">Fast loading site builds credibility and exhibits solutions</div>
                  </div>
                </div>

                <div className="flex justify-center -my-1">
                  <span className="text-accent text-xl font-bold animate-bounce">↓</span>
                </div>

                {/* Step 4 */}
                <div className="flex items-center gap-4 bg-[#ff6a3d]/5 border border-accent/20 p-4 rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-accent text-white flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#ff6a3d]">4. Customer Inquiry</div>
                    <div className="text-xs text-on-surface-variant">Lead qualified, contact form sent, project started</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Service 4: Website Redesign ────────────────────────────────── */}
      <div id="web-redesign" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop scroll-mt-28">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Visual Element (Before / After Comparison) - LEFT on desktop */}
          <motion.div variants={itemVariants} className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Before Panel */}
              <div className="bg-red-50/40 border border-red-100 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-[280px]">
                <div className="absolute top-3 right-3 text-red-500 bg-red-100 p-1.5 rounded-full"><X className="w-4 h-4" /></div>
                <div>
                  <span className="text-xs font-semibold text-red-600 bg-red-100/60 px-2 py-0.5 rounded">Before Redesign</span>
                  <h4 className="font-bold text-lg text-on-surface mt-3">Slow & Outdated</h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Frustrating user journey with layout breaks.</p>
                </div>
                <div className="space-y-1.5 border-t border-red-100/50 pt-4">
                  <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                    <span>Page Load Speed</span>
                    <span className="text-red-600 font-bold">6.8s (Fail)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                    <span>Mobile Adaptability</span>
                    <span className="text-red-600 font-bold">Zoom-to-Read</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                    <span>Conversion Rate</span>
                    <span className="text-red-600 font-bold">0.8%</span>
                  </div>
                </div>
              </div>

              {/* After Panel */}
              <div className="bg-[#e8f5e9]/40 border border-emerald-100 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-[280px] shadow-lg shadow-emerald-500/5">
                <div className="absolute top-3 right-3 text-emerald-500 bg-emerald-100 p-1.5 rounded-full"><Check className="w-4 h-4" /></div>
                <div>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-100/60 px-2 py-0.5 rounded">After Redesign</span>
                  <h4 className="font-bold text-lg text-on-surface mt-3">Blazing Fast & Sleek</h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Smooth custom UI designed to attract clients.</p>
                </div>
                <div className="space-y-1.5 border-t border-emerald-100/50 pt-4">
                  <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                    <span>Page Load Speed</span>
                    <span className="text-emerald-600 font-bold">0.9s (Excellent)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                    <span>Mobile Adaptability</span>
                    <span className="text-emerald-600 font-bold">100% Responsive</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                    <span>Conversion Rate</span>
                    <span className="text-emerald-600 font-bold">4.2% (+425%)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content - RIGHT on desktop */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm font-semibold">
              <RefreshCw className="w-4 h-4" />
              <span>Website Redesign</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold text-on-surface">
              Website Redesign
            </h2>
            
            <p className="text-xl font-medium text-[#8B5CF6] leading-snug">
              Transform outdated websites into modern conversion machines.
            </p>
            
            <p className="text-on-surface-variant leading-relaxed">
              First impressions matter. Don&apos;t lose valuable business to competitors with better-looking sites. We take your outdated legacy website and recreate it with a modern aesthetic, smooth page transitions, responsive styling, and strong call-to-action structures.
            </p>

            <div className="space-y-3 pt-2">
              <p className="font-bold text-on-surface text-sm uppercase tracking-wider">Before & After comparison</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-on-surface-variant">
                <div className="space-y-2 bg-neutral-50 p-4 rounded-xl border border-outline">
                  <div className="font-bold text-red-500 flex items-center gap-1.5">
                    <X className="w-4 h-4" /> Outdated Site
                  </div>
                  <ul className="space-y-1 text-xs">
                    <li>❌ Slow loading (drops visitor interest)</li>
                    <li>❌ Old style, hard-to-read grids</li>
                    <li>❌ Poor mobile viewport experiences</li>
                    <li>❌ Very low conversion / zero inquiries</li>
                  </ul>
                </div>
                <div className="space-y-2 bg-accent/5 p-4 rounded-xl border border-accent/20">
                  <div className="font-bold text-accent flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Craftly Rebuild
                  </div>
                  <ul className="space-y-1 text-xs">
                    <li>✔ Blazing-fast loading scores</li>
                    <li>✔ Sleek, premium modern UI designs</li>
                    <li>✔ Responsive, thumb-friendly UX</li>
                    <li>✔ Optimized flows for higher conversions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact?service=website-redesign"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg group"
              >
                Redesign My Website
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Service 5: Website Maintenance ────────────────────────────── */}
      <div id="sys-maintenance" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop scroll-mt-28">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold">
              <Shield className="w-4 h-4" />
              <span>Operations & Security</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold text-on-surface">
              Website Maintenance
            </h2>
            
            <p className="text-xl font-medium text-accent leading-snug">
              We keep your website secure, updated, and performing.
            </p>
            
            <p className="text-on-surface-variant leading-relaxed">
              Stay secure, worry-free. Our monthly maintenance programs provide real-time uptime monitoring, security audits, database backups, priority bug fixes, prompt content updates, and easy-to-read performance reports to ensure you stay ahead of the game.
            </p>

            <div className="space-y-3 pt-2">
              <p className="font-bold text-on-surface text-sm uppercase tracking-wider">Maintenance Plan Checklist</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-on-surface-variant">
                {[
                  "Security Updates & Patching",
                  "Performance Monitoring",
                  "Regular Automated Backups",
                  "Technical Support & Bug Fixes",
                  "99.9% Uptime Verification",
                  "Detailed Monthly Reports"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact?service=website-maintenance"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg group"
              >
                Maintain My Website
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Visual Element (Operations & Security Status Panel) */}
          <motion.div variants={itemVariants} className="lg:col-span-6">
            <div className="bg-[#0c0c0e] text-[#a9b1d6] border border-neutral-800 rounded-[24px] p-6 shadow-2xl relative overflow-hidden font-mono text-xs md:text-sm">
              <div className="absolute top-0 right-0 w-36 h-36 bg-accent/10 rounded-full blur-[35px] pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Server className="w-4 h-4 text-accent" />
                  <span>CRAFTLY-MONITOR</span>
                </div>
                <div className="px-2.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> ALL SYSTEMS NORMAL
                </div>
              </div>

              <div className="space-y-4">
                {/* Metric 1 */}
                <div className="bg-neutral-900/60 border border-neutral-800 p-3.5 rounded-xl">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-gray-400">Server Uptime</span>
                    <span className="text-emerald-400 font-bold">99.98%</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[99.98%]" />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-neutral-900/60 border border-neutral-800 p-3.5 rounded-xl text-center">
                    <span className="text-xs text-gray-500 block mb-1">Backups</span>
                    <span className="text-white font-bold block text-sm">DAILY SECURE</span>
                    <span className="text-[10px] text-gray-500 mt-1 block">Last: 4h ago</span>
                  </div>
                  <div className="bg-neutral-900/60 border border-neutral-800 p-3.5 rounded-xl text-center">
                    <span className="text-xs text-gray-500 block mb-1">Security Firewall</span>
                    <span className="text-[#10B981] font-bold block text-sm">ENABLED</span>
                    <span className="text-[10px] text-gray-500 mt-1 block">Threats blocked: 0</span>
                  </div>
                </div>

                {/* Console output mock */}
                <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-900 text-gray-500 text-[11px] leading-relaxed h-[96px] overflow-hidden space-y-1">
                  <p className="text-accent">&gt; node check-security-integrity.js</p>
                  <p>&gt; Checking packages for vulnerability leaks...</p>
                  <p className="text-emerald-400">&gt; Status: 0 vulnerabilities found.</p>
                  <p className="text-gray-400">&gt; Database backup complete and synced to cloud storage.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
