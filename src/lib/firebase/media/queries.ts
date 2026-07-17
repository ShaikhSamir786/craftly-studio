import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { MediaItem } from "@/types/media";

const COLLECTION = "media";

export async function getMediaItems(): Promise<MediaItem[]> {
  const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as MediaItem));
}

export async function createMediaRecord(data: Omit<MediaItem, "id">): Promise<MediaItem> {
  const docRef = await addDoc(collection(db, COLLECTION), {
    fileName: data.fileName,
    fileUrl: data.fileUrl,
    fileType: data.fileType,
    fileSize: data.fileSize,
    publicId: data.publicId,
    createdAt: serverTimestamp(),
  });
  return { id: docRef.id, ...data };
}

export async function deleteMediaRecord(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function getMediaCount(): Promise<number> {
  const snap = await getCountFromServer(collection(db, COLLECTION));
  return snap.data().count;
}
