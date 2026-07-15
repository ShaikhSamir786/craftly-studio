import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { BlogPost, BlogPostFormData } from "@/types/blog";

const COLLECTION = "blogPosts";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function estimateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

function parseTags(tagsStr: string): string[] {
  return tagsStr
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

export async function getBlogPosts(status?: "draft" | "published"): Promise<BlogPost[]> {
  let q;
  if (status) {
    q = query(collection(db, COLLECTION), where("status", "==", status), orderBy("createdAt", "desc"));
  } else {
    q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
  }
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as BlogPost));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const q = query(collection(db, COLLECTION), where("slug", "==", slug));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const docSnap = snapshot.docs[0];
  return { id: docSnap.id, ...docSnap.data() } as BlogPost;
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  const docSnap = await getDoc(doc(db, COLLECTION, id));
  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() } as BlogPost;
}

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
