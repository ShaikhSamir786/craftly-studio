"use client";

import { motion } from "framer-motion";
import { 
  Factory, HeartPulse, Utensils, BedDouble, 
  Home, TrendingUp, Palette, GraduationCap, ArrowUpRight 
} from "lucide-react";
import Link from "next/link";

interface IndustryItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  solution: string;
  slug: string;
}

const industries: IndustryItem[] = [
  {
    name: "Manufacturing Companies",
    icon: Factory,
    description: "Display factory scale, ISO certifications, and product catalogs to overseas or domestic B2B buyers.",
    solution: "B2B Catalogs & Custom CRM integrations",
    slug: "manufacturing"
  },
  {
    name: "Clinics",
    icon: HeartPulse,
    description: "Build doctor-patient trust, showcase treatments, and allow patients to secure slots quickly.",
    solution: "Patient portals & automated appointment bookings",
    slug: "healthcare-clinics"
  },
  {
    name: "Restaurants",
    icon: Utensils,
    description: "Attract local food lovers with appetising visual design, dynamic menus, and direct ordering channels.",
    solution: "Online menus & direct food-ordering systems",
    slug: "restaurants-cafes"
  },
  {
    name: "Hotels",
    icon: BedDouble,
    description: "Display beautiful rooms, highlight local Daman/Silvassa tourism, and secure bookings directly.",
    solution: "Room showcases & integrated booking engines",
    slug: "hotels-resorts"
  },
  {
    name: "Real Estate",
    icon: Home,
    description: "Enable prospective home buyers to browse listings, filter by price, and contact agents instantly.",
    solution: "Property listing boards & lead capture funnels",
    slug: "real-estate"
  },
  {
    name: "CA Firms",
    icon: TrendingUp,
    description: "Establish a reputable online presence, share tax calculators, and interact securely with clients.",
    solution: "Secure document exchange & client consultation portals",
    slug: "ca-firms"
  },
  {
    name: "Interior Designers",
    icon: Palette,
    description: "Display high-resolution design renders, before-and-after work, and gather direct project leads.",
    solution: "Media-optimized portfolio grids & contact funnels",
    slug: "interior-designers"
  },
  {
    name: "Educational Institutes",
    icon: GraduationCap,
    description: "Keep parents informed, handle admission enquiries, and deliver course materials online.",
    solution: "LMS systems, admission forms & school portals",
    slug: "education"
  }
];

export default function IndustriesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  } as const;

  return (
    <section className="py-24 md:py-32 bg-bg-inverse text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-accent uppercase tracking-widest font-bold text-xs">Targeted Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-3 mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-400">
            We don&apos;t believe in generic templates. Our digital architectures are customized specifically to address the workflows, challenges, and user conversion funnels of your industry.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                variants={itemVariants}
                className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-6 hover:bg-white/[0.04] hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#ff8c69] mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  {/* Industry Title */}
                  <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {industry.name}
                  </h3>
                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {industry.description}
                  </p>
                </div>
                {/* Solution Box */}
                <div className="border-t border-white/5 pt-4 mt-auto">
                  <span className="text-[10px] text-gray-500 uppercase font-bold block mb-1">Recommended Solution</span>
                  <div className="flex items-center justify-between text-xs text-[#ff8c69] font-medium">
                    <span>{industry.solution}</span>
                    <Link href={`/industries/${industry.slug}`} className="text-gray-400 hover:text-accent transition-colors p-1">
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
