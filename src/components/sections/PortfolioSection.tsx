import Link from "next/link";
import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-display text-4xl font-bold">Selected Work</h2>
          <Link href="#" className="text-accent font-bold flex items-center gap-2">All Projects <span className="material-symbols-outlined">arrow_outward</span></Link>
        </div>
        <div className="space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-surface rounded-3xl p-8 border border-outline">
              <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-CcCP4pelmuDkUTfIB6iBv_QZ06SFdsvEvnBNz_YHP9v6Ritaoq733KYa0MbnPEbKl6_UPDrHhqAHG0i304xQJb1dJXPUjsIUWqmFAdhQH4ASBkHoPXSeZPhxCgL2M2F8RwF75wJNZ_xLhdeKTcUtX5dCX0TVchfCLNrkPQRQ2YuD3JZtvxYxQdp8sWh4Gigv9n3zoAej2Cwo-pmvqrURsHq1EBJMyG3nEUMjxLo9kkddjXjpw9Od" alt="Work 1" fill className="object-cover" />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-accent uppercase tracking-widest mb-4 block">Manufacturing Giant</span>
              <h3 className="font-display text-3xl font-bold mb-6">Vapi Steel Solutions</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase text-on-surface-variant mb-1">The Challenge</p>
                  <p className="text-on-surface">Outdated site wasn&apos;t converting high-value B2B inquiries.</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-on-surface-variant mb-1">The Solution</p>
                  <p className="text-on-surface">Built a high-performance catalog system with optimized lead forms.</p>
                </div>
                <div className="pt-4 border-t border-outline flex gap-8">
                  <div>
                    <p className="text-2xl font-extrabold text-accent">3.2x</p>
                    <p className="text-xs font-bold text-on-surface-variant">Inquiry Growth</p>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-accent">98</p>
                    <p className="text-xs font-bold text-on-surface-variant">Page Speed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
