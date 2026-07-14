export default function AdminDashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl font-bold">Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Views", value: "12,456", icon: "visibility" },
          { label: "Active Services", value: "8", icon: "design_services" },
          { label: "Blog Posts", value: "24", icon: "article" },
          { label: "New Inquiries", value: "3", icon: "mail" }
        ].map((stat) => (
          <div key={stat.label} className="bg-surface border border-outline rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-on-surface-variant font-bold text-sm">{stat.label}</p>
              <span className="material-symbols-outlined text-accent">{stat.icon}</span>
            </div>
            <p className="font-display text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-surface border border-outline rounded-2xl p-6 h-64 flex items-center justify-center text-on-surface-variant">
        Analytics Chart Placeholder
      </div>
    </div>
  );
}
