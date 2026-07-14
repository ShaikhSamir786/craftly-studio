export default function IndustriesSection() {
  return (
    <section className="py-24 bg-bg-inverse text-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-16 text-center">Specialized for Local Success</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-4xl mb-6">🏗️</div>
            <h4 className="text-xl font-bold mb-2">Industrial Manufacturing</h4>
            <p className="text-gray-400">Showcasing capability and scale for B2B procurement.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-6">🏥</div>
            <h4 className="text-xl font-bold mb-2">Clinics &amp; Healthcare</h4>
            <p className="text-gray-400">Automated booking and patient trust-building interfaces.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-6">🏢</div>
            <h4 className="text-xl font-bold mb-2">Service Agencies</h4>
            <p className="text-gray-400">Lead generation funnels that capture and qualify prospects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
