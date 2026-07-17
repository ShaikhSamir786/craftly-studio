"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getBlogPosts } from "@/lib/firebase/blog";
import { getLeadsCount } from "@/lib/firebase/lead";

export default function AdminDashboardPage() {
  const [blogCount, setBlogCount] = useState<number | null>(null);
  const [newInquiries, setNewInquiries] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const [posts, inquiries] = await Promise.allSettled([
          getBlogPosts(),
          getLeadsCount(),
        ]);
        if (!cancelled) {
          setBlogCount(posts.status === "fulfilled" ? posts.value.length : 0);
          setNewInquiries(inquiries.status === "fulfilled" ? inquiries.value : 0);
        }
      } catch (err) {
        console.error("Failed to load dashboard stats:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, []);

  const statCards = [
    { label: "Blog Posts", value: blogCount, icon: "article", live: true },
    { label: "Total Inquiries", value: newInquiries, icon: "mail", live: true },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          <div key={stat.label} className="bg-surface border border-outline rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-on-surface-variant font-bold text-sm">{stat.label}</p>
              <span className="material-symbols-outlined text-accent">{stat.icon}</span>
            </div>
            {stat.live && loading ? (
              <div className="w-12 h-8 bg-outline/30 rounded animate-pulse" />
            ) : (
              <p className="font-display text-3xl font-bold">
                {typeof stat.value === "number" ? stat.value.toLocaleString() : stat.value}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="bg-surface border border-outline rounded-2xl p-6">
        <h2 className="font-display text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/admin/blog/new" className="flex items-center gap-3 p-4 rounded-xl border border-outline hover:border-accent hover:bg-accent/5 transition-colors">
            <span className="material-symbols-outlined text-accent">add</span>
            <span className="font-bold text-sm">New Blog Post</span>
          </Link>
          <Link href="/admin/media" className="flex items-center gap-3 p-4 rounded-xl border border-outline hover:border-accent hover:bg-accent/5 transition-colors">
            <span className="material-symbols-outlined text-accent">upload</span>
            <span className="font-bold text-sm">Upload Media</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
