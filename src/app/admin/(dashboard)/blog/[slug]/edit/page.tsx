"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import BlogPostForm from "@/components/forms/BlogPostForm";
import { getBlogPostBySlug, updateBlogPost } from "@/lib/firebase/blog";
import type { BlogPost, BlogPostFormData } from "@/types/blog";

export default function EditBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getBlogPostBySlug(slug);
        if (data) {
          setPost(data);
        } else {
          setNotFound(true);
        }
      } catch (err) {
        console.error("Failed to fetch post:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  const handleSubmit = async (data: BlogPostFormData) => {
    if (!post) return;
    await updateBlogPost(post.id, data);
    setSaved(true);
    setTimeout(() => router.push("/admin/blog"), 1500);
  };

  if (loading) {
    return (
      <div className="bg-surface border border-outline rounded-2xl p-12 text-center">
        <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-on-surface-variant">Loading post...</p>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="bg-surface border border-outline rounded-2xl p-12 text-center">
        <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-4">error</span>
        <h2 className="font-display text-2xl font-bold mb-2">Post Not Found</h2>
        <p className="text-on-surface-variant mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
        <button
          onClick={() => router.push("/admin/blog")}
          className="bg-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors cursor-pointer"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  if (saved) {
    return (
      <div className="bg-surface border border-outline rounded-2xl p-12 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-3xl">check</span>
        </div>
        <h2 className="font-display text-2xl font-bold mb-2">Changes Saved!</h2>
        <p className="text-on-surface-variant">Redirecting to blog list...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold">Edit Post</h1>
        <p className="text-on-surface-variant mt-1">Editing &ldquo;{post.title}&rdquo;</p>
      </div>
      <BlogPostForm mode="edit" initialData={post} onSubmit={handleSubmit} />
    </div>
  );
}
