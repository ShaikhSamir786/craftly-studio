import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { BlogPostFormData } from "@/types/blog";
import { slugify, estimateReadTime, parseTags } from "./blog-utils";

const COLLECTION = "blogPosts";

export async function createBlogPost(data: BlogPostFormData): Promise<string> {
  const tags = parseTags(data.tags || "");
  const readTime = estimateReadTime(data.content);
  const slug = data.slug || slugify(data.title);
  const now = serverTimestamp();

  const docRef = await addDoc(collection(db, COLLECTION), {
    title: data.title,
    slug,
    excerpt: data.excerpt,
    content: data.content,
    coverImage: data.coverImage || "",
    category: data.category,
    tags,
    author: data.author,
    status: data.status,
    readTime,
    seo: {
      title: data.seoTitle || data.title,
      description: data.seoDescription || data.excerpt,
      keywords: parseTags(data.seoKeywords || ""),
    },
    publishedAt: data.status === "published" ? now : null,
    createdAt: now,
    updatedAt: now,
  });

  return docRef.id;
}

export async function updateBlogPost(id: string, data: BlogPostFormData): Promise<void> {
  const tags = parseTags(data.tags || "");
  const readTime = estimateReadTime(data.content);
  const slug = data.slug || slugify(data.title);

  const docRef = doc(db, COLLECTION, id);
  const existing = await getDoc(docRef);
  const existingData = existing.data();

  const updateData: Record<string, unknown> = {
    title: data.title,
    slug,
    excerpt: data.excerpt,
    content: data.content,
    coverImage: data.coverImage || "",
    category: data.category,
    tags,
    author: data.author,
    status: data.status,
    readTime,
    seo: {
      title: data.seoTitle || data.title,
      description: data.seoDescription || data.excerpt,
      keywords: parseTags(data.seoKeywords || ""),
    },
    updatedAt: serverTimestamp(),
  };

  if (data.status === "published" && existingData?.status !== "published") {
    updateData.publishedAt = serverTimestamp();
  }

  await updateDoc(docRef, updateData);
}

export async function deleteBlogPost(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}
