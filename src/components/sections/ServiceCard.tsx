"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Laptop, Bot, Search, Palette, ShieldCheck } from "lucide-react";
import { ServiceItem } from "@/types/service";

const iconMap = {
  laptop: Laptop,
  bot: Bot,
  search: Search,
  palette: Palette,
  shield: ShieldCheck,
};

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { title, description, isFeatured, href } = service;
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Laptop;

  return (
    <Link href={href} className={`${service.gridClass} group block h-full`}>
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className={`h-full relative overflow-hidden rounded-[24px] border border-neutral-100 bg-white p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-colors duration-300 group-hover:bg-[#fffcf9] group-hover:shadow-[0_20px_40px_rgba(255,106,61,0.06)] flex flex-col justify-between ${
          isFeatured ? "min-h-[400px] lg:min-h-[440px]" : "min-h-[350px]"
        }`}
      >
        {/* Subtle decorative gradient background for featured cards */}
        {isFeatured && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6a3d]/[0.03] via-transparent to-transparent pointer-events-none" />
        )}

        {/* Top & Middle Content Container */}
        <div>
          {/* Icon Container with Hover Glow */}
          <div className="relative inline-block mb-8">
            {/* Soft orange glow behind icon on hover */}
            <div className="absolute inset-0 bg-[#ff6a3d]/25 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
            
            {/* Actual Icon Box (56px for standard, 64px for featured) */}
            <div className={`relative flex items-center justify-center bg-[#ff6a3d]/10 text-[#ff6a3d] rounded-2xl transition-all duration-300 ${
              isFeatured ? "w-16 h-16" : "w-14 h-14"
            }`}>
              <Icon className={isFeatured ? "w-8 h-8" : "w-6 h-6"} />
            </div>
          </div>

          {/* Service Title */}
          <h3 className={`font-display font-bold text-on-surface mb-4 transition-colors group-hover:text-black ${
            isFeatured ? "text-3xl md:text-4xl" : "text-2xl"
          }`}>
            {title}
          </h3>
          
          {/* Service Description */}
          <p className={`text-on-surface-variant leading-relaxed transition-colors group-hover:text-on-surface/90 ${
            isFeatured ? "text-lg max-w-xl" : "text-base"
          }`}>
            {description}
          </p>
        </div>

        {/* Bottom Content (Divider and CTA) */}
        <div className="mt-8">
          {/* Thin Divider that expands left to right on hover */}
          <div className="relative w-full h-[1px] bg-neutral-100 mb-6 overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full bg-[#ff6a3d] origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100" />
          </div>

          {/* Learn More CTA */}
          <span className="inline-flex items-center gap-2 text-[#ff6a3d] font-medium transition-colors">
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-2" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
