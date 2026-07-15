"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BlogPostForm from "@/components/forms/BlogPostForm";
import { createBlogPost } from "@/lib/firebase/blog";
import type { BlogPostFormData } from "@/types/blog";

export default function NewBlogPostPage() {
  const router = useRouter();
  const [created, setCreated] = useState(false);

  const handleSubmit = async (data: BlogPostFormData) => {
    await createBlogPost(data);
    setCreated(true);
    setTimeout(() => router.push("/admin/blog"), 1500);
  };

  if (created) {
    return (
      <div className="bg-surface border border-outline rounded-2xl p-12 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-3xl">check</span>
        </div>
        <h2 className="font-display text-2xl font-bold mb-2">Post Created!</h2>
        <p className="text-on-surface-variant">Redirecting to blog list...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold">Create New Post</h1>
        <p className="text-on-surface-variant mt-1">Fill in the details below to publish a new blog post.</p>
      </div>
      <BlogPostForm mode="create" onSubmit={handleSubmit} />
    </div>
  );
}
