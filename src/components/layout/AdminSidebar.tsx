"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: "dashboard" },
  { label: "Services", href: "/admin/services", icon: "design_services" },
  { label: "Blog", href: "/admin/blog", icon: "article" },
  { label: "Portfolio", href: "/admin/portfolio", icon: "work" },
  { label: "Testimonials", href: "/admin/testimonials", icon: "star" },
  { label: "Media", href: "/admin/media", icon: "image" },
  { label: "Settings", href: "/admin/settings", icon: "settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-surface border-r border-outline hidden md:flex flex-col h-full sticky top-0">
      <div className="p-6 border-b border-outline">
        <Link href="/" className="font-display font-bold text-xl tracking-tight text-accent flex items-center gap-2">
            <span className="material-symbols-outlined">layers</span>
            Craftly Studio
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/admin");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-colors ${
                isActive 
                  ? "bg-accent text-white" 
                  : "text-on-surface-variant hover:bg-outline hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-xl">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-outline">
        <p className="text-xs text-on-surface-variant text-center">Craftly CMS v1.0</p>
      </div>
    </aside>
  );
}
