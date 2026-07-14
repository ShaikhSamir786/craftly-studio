"use client";

import { useAuth } from "@/hooks/useAuth";

export default function AdminTopbar() {
  const { user, signOut } = useAuth();

  return (
    <header className="h-16 bg-surface border-b border-outline flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <h2 className="font-display font-bold text-lg hidden sm:block">Admin Dashboard</h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-on-surface-variant text-right hidden sm:block">
          <p className="font-bold text-on-surface">{user?.email || "Admin User"}</p>
          <p className="text-xs">Administrator</p>
        </div>
        <button 
          onClick={signOut}
          className="w-10 h-10 rounded-full bg-outline flex items-center justify-center text-on-surface hover:bg-accent hover:text-white transition-colors cursor-pointer"
          title="Sign Out"
        >
          <span className="material-symbols-outlined">logout</span>
        </button>
      </div>
    </header>
  );
}
