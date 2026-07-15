import {
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { BlogPost } from "@/types/blog";

const COLLECTION = "blogPosts";

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
