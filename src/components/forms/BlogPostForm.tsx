"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogPostSchema } from "@/utils/validation";
import type { BlogPostFormData, BlogPost } from "@/types/blog";

interface BlogPostFormProps {
  initialData?: BlogPost;
  onSubmit: (data: BlogPostFormData) => Promise<void>;
  mode: "create" | "edit";
}

export default function BlogPostForm({ initialData, onSubmit, mode }: BlogPostFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogPostFormData>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: initialData
      ? {
          title: initialData.title,
          slug: initialData.slug,
          excerpt: initialData.excerpt,
          content: initialData.content,
          coverImage: initialData.coverImage,
          category: initialData.category,
          tags: initialData.tags.join(", "),
          author: initialData.author,
          status: initialData.status,
          seoTitle: initialData.seo?.title || "",
          seoDescription: initialData.seo?.description || "",
          seoKeywords: initialData.seo?.keywords?.join(", ") || "",
        }
      : {
          title: "",
          slug: "",
          excerpt: "",
          content: "",
          coverImage: "",
          category: "",
          tags: "",
          author: "",
          status: "draft",
          seoTitle: "",
          seoDescription: "",
          seoKeywords: "",
        },
  });

  const handleFormSubmit = async (data: BlogPostFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await onSubmit(data);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full bg-white border ${
      hasError ? "border-red-500 focus:border-red-500" : "border-outline focus:border-accent"
    } rounded-lg px-4 py-3 text-on-surface placeholder-gray-400 focus:outline-none transition-colors`;

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      {submitError && (
        <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-md text-red-700 text-sm">
          <p className="font-bold">Error</p>
          <p>{submitError}</p>
        </div>
      )}

      <div className="bg-surface border border-outline rounded-2xl p-6 space-y-6">
        <h2 className="font-display text-xl font-bold">Content</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-on-surface mb-2">
              Title <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              disabled={isSubmitting}
              {...register("title")}
              className={inputClass(!!errors.title)}
              placeholder="How to Build a High-Performing Website"
            />
            {errors.title && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.title.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-bold text-on-surface mb-2">
              Slug <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              disabled={isSubmitting}
              {...register("slug")}
              className={inputClass(!!errors.slug)}
              placeholder="how-to-build-high-performing-website"
            />
            {errors.slug && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.slug.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-on-surface mb-2">
            Excerpt <span className="text-accent">*</span>
          </label>
          <textarea
            disabled={isSubmitting}
            {...register("excerpt")}
            className={`${inputClass(!!errors.excerpt)} min-h-[80px] resize-y`}
            placeholder="A short summary of the article..."
          />
          {errors.excerpt && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.excerpt.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-on-surface mb-2">
            Content <span className="text-accent">*</span>
          </label>
          <textarea
            disabled={isSubmitting}
            {...register("content")}
            className={`${inputClass(!!errors.content)} min-h-[300px] resize-y font-mono text-sm`}
            placeholder="Write your blog post content here... (Markdown supported)"
          />
          {errors.content && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.content.message}</p>}
        </div>
      </div>

      <div className="bg-surface border border-outline rounded-2xl p-6 space-y-6">
        <h2 className="font-display text-xl font-bold">Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-bold text-on-surface mb-2">
              Category <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              disabled={isSubmitting}
              {...register("category")}
              className={inputClass(!!errors.category)}
              placeholder="Web Development"
            />
            {errors.category && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.category.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-bold text-on-surface mb-2">
              Tags <span className="text-on-surface-variant font-normal">(comma-separated)</span>
            </label>
            <input
              type="text"
              disabled={isSubmitting}
              {...register("tags")}
              className={inputClass(!!errors.tags)}
              placeholder="react, nextjs, performance"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-on-surface mb-2">
              Author <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              disabled={isSubmitting}
              {...register("author")}
              className={inputClass(!!errors.author)}
              placeholder="Craftly Studio"
            />
            {errors.author && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.author.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-on-surface mb-2">Cover Image URL</label>
            <input
              type="url"
              disabled={isSubmitting}
              {...register("coverImage")}
              className={inputClass(!!errors.coverImage)}
              placeholder="https://example.com/image.jpg"
            />
            {errors.coverImage && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.coverImage.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-bold text-on-surface mb-2">Status</label>
            <select
              disabled={isSubmitting}
              {...register("status")}
              className={inputClass(!!errors.status)}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-surface border border-outline rounded-2xl p-6 space-y-6">
        <h2 className="font-display text-xl font-bold">SEO</h2>

        <div>
          <label className="block text-sm font-bold text-on-surface mb-2">
            SEO Title <span className="text-on-surface-variant font-normal">(defaults to post title)</span>
          </label>
          <input
            type="text"
            disabled={isSubmitting}
            {...register("seoTitle")}
            className={inputClass(!!errors.seoTitle)}
            placeholder="SEO-optimized title"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-on-surface mb-2">
            SEO Description <span className="text-on-surface-variant font-normal">(defaults to excerpt)</span>
          </label>
          <textarea
            disabled={isSubmitting}
            {...register("seoDescription")}
            className={`${inputClass(!!errors.seoDescription)} min-h-[60px] resize-y`}
            placeholder="Meta description for search engines..."
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-on-surface mb-2">
            SEO Keywords <span className="text-on-surface-variant font-normal">(comma-separated)</span>
          </label>
          <input
            type="text"
            disabled={isSubmitting}
            {...register("seoKeywords")}
            className={inputClass(!!errors.seoKeywords)}
            placeholder="website design, web development, seo"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-accent text-white font-bold px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {mode === "create" ? "Creating..." : "Saving..."}
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-sm">{mode === "create" ? "add" : "check"}</span>
              {mode === "create" ? "Create Post" : "Save Changes"}
            </>
          )}
        </button>
      </div>
    </form>
  );
}
