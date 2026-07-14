export default function AdminServicesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl font-bold">Manage Services</h1>
        <button className="bg-accent text-white px-4 py-2 rounded-lg font-bold hover:bg-accent/90 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">add</span> Add Service
        </button>
      </div>
      <div className="bg-surface border border-outline rounded-2xl p-8 text-center text-on-surface-variant">
        Services CMS Table Placeholder
      </div>
    </div>
  );
}
