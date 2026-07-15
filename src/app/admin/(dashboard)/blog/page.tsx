"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getBlogPosts, deleteBlogPost } from "@/lib/firebase/blog";
import type { BlogPost } from "@/types/blog";

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "published" | "draft">("all");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      try {
        const data = await getBlogPosts(filter === "all" ? undefined : filter);
        if (!cancelled) setPosts(data);
      } catch (err) {
        console.error("Failed to fetch blog posts:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, [filter]);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeletingId(id);
    try {
      await deleteBlogPost(id);
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Failed to delete post:", err);
      alert("Failed to delete post. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (timestamp: unknown): string => {
    if (!timestamp) return "—";
    try {
      const date = timestamp instanceof Date ? timestamp : new Date(timestamp as string | number);
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    } catch {
      return "—";
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <h1 className="font-display text-3xl font-bold">Manage Blog</h1>
        <Link
          href="/admin/blog/new"
          className="bg-accent text-white px-4 py-2 rounded-lg font-bold hover:bg-accent/90 transition-colors flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">add</span> Create Post
        </Link>
      </div>

      <div className="flex items-center gap-2 mb-6">
        {(["all", "published", "draft"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors cursor-pointer ${
              filter === f
                ? "bg-accent text-white"
                : "bg-surface border border-outline text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="bg-surface border border-outline rounded-2xl p-12 text-center">
          <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-on-surface-variant">Loading posts...</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="bg-surface border border-outline rounded-2xl p-12 text-center">
          <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-4">article</span>
          <p className="text-on-surface-variant text-lg mb-4">No blog posts yet.</p>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">add</span> Create your first post
          </Link>
        </div>
      ) : (
        <div className="bg-surface border border-outline rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-outline">
                  <th className="px-6 py-4 text-sm font-bold text-on-surface-variant">Title</th>
                  <th className="px-6 py-4 text-sm font-bold text-on-surface-variant hidden md:table-cell">Category</th>
                  <th className="px-6 py-4 text-sm font-bold text-on-surface-variant hidden lg:table-cell">Author</th>
                  <th className="px-6 py-4 text-sm font-bold text-on-surface-variant hidden lg:table-cell">Date</th>
                  <th className="px-6 py-4 text-sm font-bold text-on-surface-variant">Status</th>
                  <th className="px-6 py-4 text-sm font-bold text-on-surface-variant text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b border-outline last:border-b-0 hover:bg-white transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-on-surface truncate max-w-[300px]">{post.title}</p>
                      <p className="text-sm text-on-surface-variant truncate max-w-[300px] mt-0.5">{post.excerpt}</p>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-sm text-on-surface-variant">{post.category}</span>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <span className="text-sm text-on-surface-variant">{post.author}</span>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <span className="text-sm text-on-surface-variant">{formatDate(post.createdAt)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                          post.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/blog/${post.slug}/edit`}
                          className="w-9 h-9 rounded-lg bg-outline/50 flex items-center justify-center text-on-surface-variant hover:bg-accent hover:text-white transition-colors"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id, post.title)}
                          disabled={deletingId === post.id}
                          className="w-9 h-9 rounded-lg bg-outline/50 flex items-center justify-center text-on-surface-variant hover:bg-red-500 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
                          title="Delete"
                        >
                          {deletingId === post.id ? (
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <span className="material-symbols-outlined text-lg">delete</span>
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
