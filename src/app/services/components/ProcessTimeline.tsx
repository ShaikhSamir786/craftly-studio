"use client";

import { motion } from "framer-motion";
import { 
  Compass, Eye, Palette, Code, 
  FileCheck, Rocket, LineChart, ChevronRight 
} from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    icon: Eye,
    description: "Deep dive workshops to align on business metrics, map competitors, and define scope."
  },
  {
    step: "02",
    title: "Strategy",
    icon: Compass,
    description: "Sitemap blueprints, tech stack decisions, and keyword research reports."
  },
  {
    step: "03",
    title: "UI/UX Design",
    icon: Palette,
    description: "High fidelity wireframes, user personas, interactive prototypes, and custom UI style guides."
  },
  {
    step: "04",
    title: "Development",
    icon: Code,
    description: "High performance Next.js coding, clean components, database models, and API links."
  },
  {
    step: "05",
    title: "Testing",
    icon: FileCheck,
    description: "Page speed optimization, security checklist validation, QA scripts, and browser compatibility runs."
  },
  {
    step: "06",
    title: "Launch",
    icon: Rocket,
    description: "Server deployment, domains linkage, SSL setup, and Google Search Console indexation."
  },
  {
    step: "07",
    title: "Growth Support",
    icon: LineChart,
    description: "Monthly maintenance checklists, backup logs, conversion optimization audits, and feature scaling."
  }
];

export default function ProcessTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  } as const;

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mb-20">
          <span className="text-accent uppercase tracking-widest font-bold text-xs">How We Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-3 mb-6">
            Our Development Process
          </h2>
          <p className="text-lg text-on-surface-variant">
            From initial research to continuous scaling, we employ a modern, structured engineering framework to deliver high speed and zero downtime.
          </p>
        </div>

        {/* Desktop Horizontal Scroll Timeline Wrapper */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden xl:flex items-stretch justify-between relative"
        >
          {/* Horizontal connecting line */}
          <div className="absolute top-14 left-10 right-10 h-[1.5px] bg-neutral-100 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.step}
                variants={itemVariants}
                className="flex-1 px-4 flex flex-col items-center text-center relative z-10"
              >
                {/* Step Circle with Icon */}
                <div className="w-16 h-16 rounded-full bg-surface border border-outline hover:border-accent text-on-surface hover:text-accent shadow-sm flex items-center justify-center mb-6 transition-all duration-300 relative group cursor-pointer">
                  {/* Step number badge */}
                  <span className="absolute -top-1.5 -right-1.5 bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {step.step}
                  </span>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Arrow indicator between steps (except last one) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-10 right-[-12%] translate-x-1/2 text-neutral-300 hidden 2xl:block">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}

                <h3 className="font-display font-bold text-base text-on-surface mb-2">{step.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed max-w-[150px]">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile / Tablet Vertical Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="xl:hidden space-y-8 relative"
        >
          {/* Vertical connecting line */}
          <div className="absolute top-8 bottom-8 left-7 w-[1.5px] bg-neutral-100 z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="flex gap-6 relative z-10"
              >
                {/* Step Circle */}
                <div className="w-14 h-14 rounded-full bg-surface border border-outline flex items-center justify-center shrink-0 shadow-sm text-accent">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Step Text Content */}
                <div className="bg-surface border border-outline rounded-2xl p-5 flex-1 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-lg text-on-surface">{step.title}</h3>
                    <span className="text-xs font-extrabold text-accent bg-accent/10 px-2 py-0.5 rounded-full">Step {step.step}</span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
