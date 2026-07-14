export default function ProblemStatement() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-8">Most websites are just digital business cards. <span className="text-accent">We build digital engines.</span></h2>
          <p className="text-lg text-on-surface-variant mb-6">In a crowded market, a slow, generic website is costing you customers every day. You don&apos;t need just a &quot;site&quot;—you need a strategy that converts visitors into loyal clients.</p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
              <span>Millisecond load times for better retention</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
              <span>Localized SEO to dominate Vapi search results</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
              <span>User-centric design that builds immediate trust</span>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="bg-bg-inverse rounded-2xl p-4 shadow-2xl">
            <div className="bg-white rounded-lg overflow-hidden border border-outline">
              <div className="h-6 bg-gray-100 flex items-center px-3 gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <div className="aspect-video bg-gray-50 flex items-center justify-center">
                <span className="text-sm text-gray-400">Interactive Analytics Mockup</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-xl text-white shadow-xl hidden md:block">
            <p className="text-3xl font-bold">120%</p>
            <p className="text-sm font-medium">Average Lead Increase</p>
          </div>
        </div>
      </div>
    </section>
  );
}
