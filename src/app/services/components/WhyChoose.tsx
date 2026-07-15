"use client";

import { motion } from "framer-motion";
import { 
  Zap, Search, Cpu, Sliders, 
  Layers, MessageSquare, Shield, TrendingUp 
} from "lucide-react";

interface FeatureItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: "Fast Performance",
    icon: Zap,
    description: "Sub-2-second load times. We achieve perfect Core Web Vitals to keep visitors engaged and reduce bounce rates."
  },
  {
    title: "SEO-First Development",
    icon: Search,
    description: "Semantic HTML layouts, JSON-LD structured schemas, and clean code paths engineered to rank highly on search engines."
  },
  {
    title: "Modern Technologies",
    icon: Cpu,
    description: "Built with Next.js App Router, React 19, Tailwind CSS v4, and TypeScript. No legacy bulk or heavy dependencies."
  },
  {
    title: "Custom Solutions",
    icon: Sliders,
    description: "Zero templates. Every design and workflow module is crafted from scratch to align perfectly with your operations."
  },
  {
    title: "Scalable Architecture",
    icon: Layers,
    description: "Modular coding principles and decoupled server services that support sudden traffic hikes and expand seamlessly."
  },
  {
    title: "Transparent Communication",
    icon: MessageSquare,
    description: "Direct slack channels, regular project updates on staging servers, and honest consultation. Zero hidden costs."
  },
  {
    title: "Long-Term Support",
    icon: Shield,
    description: "Uptime tracking, daily backups, prompt patches, and technical advice to keep your systems operating smoothly."
  },
  {
    title: "Business-Focused Results",
    icon: TrendingUp,
    description: "We focus on user conversion rates, qualified lead captures, and sales growth. Technical performance that aids ROI."
  }
];

export default function WhyChoose() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  } as const;

  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent uppercase tracking-widest font-bold text-xs">Our Core Values</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-3 mb-6">
            Why Choose Craftly Studio
          </h2>
          <p className="text-lg text-on-surface-variant">
            We merge premium aesthetics with solid engineering to build web assets that perform and generate actual business growth.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-white border border-outline hover:border-accent/40 rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-xl hover:shadow-[#ff6a3d]/[0.02] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-on-surface mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
