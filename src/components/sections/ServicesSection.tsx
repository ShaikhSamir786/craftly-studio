import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Outcome-First Solutions</h2>
          <p className="text-lg text-on-surface-variant">We don&apos;t sell hours. We deliver growth through technical excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group p-10 bg-surface border border-outline rounded-3xl hover:bg-bg-inverse hover:border-bg-inverse transition-all duration-500">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">developer_mode</span>
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-white">Custom Website Development</h3>
            <p className="text-on-surface-variant group-hover:text-gray-400 mb-8 leading-relaxed">High-performance React &amp; Next.js applications engineered for speed, SEO, and massive scalability. We build assets, not just pages.</p>
            <Link href="#" className="inline-flex items-center gap-2 text-accent font-bold">Learn More <span className="material-symbols-outlined">arrow_forward</span></Link>
          </div>
          <div className="group p-10 bg-surface border border-outline rounded-3xl hover:bg-bg-inverse hover:border-bg-inverse transition-all duration-500">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">query_stats</span>
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-white">Local SEO Domination</h3>
            <p className="text-on-surface-variant group-hover:text-gray-400 mb-8 leading-relaxed">Algorithmic optimization focused on capturing high-intent search traffic in Gujarat&apos;s industrial hubs.</p>
            <Link href="#" className="inline-flex items-center gap-2 text-accent font-bold">Learn More <span className="material-symbols-outlined">arrow_forward</span></Link>
          </div>
          <div className="group p-10 bg-surface border border-outline rounded-3xl hover:bg-bg-inverse hover:border-bg-inverse transition-all duration-500">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">smart_toy</span>
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-white">AI Automation</h3>
            <p className="text-on-surface-variant group-hover:text-gray-400 mb-8 leading-relaxed">Intelligent workflows and chatbots that handle repetitive tasks so your team can focus on what matters.</p>
            <Link href="#" className="inline-flex items-center gap-2 text-accent font-bold">Learn More <span className="material-symbols-outlined">arrow_forward</span></Link>
          </div>
          <div className="group p-10 bg-surface border border-outline rounded-3xl hover:bg-bg-inverse hover:border-bg-inverse transition-all duration-500">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">verified_user</span>
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-white">System Maintenance</h3>
            <p className="text-on-surface-variant group-hover:text-gray-400 mb-8 leading-relaxed">Proactive security, uptime monitoring, and continuous updates to ensure your digital engine never stops.</p>
            <Link href="#" className="inline-flex items-center gap-2 text-accent font-bold">Learn More <span className="material-symbols-outlined">arrow_forward</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
