import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { LeadRecord } from "@/types/lead";

const COLLECTION = "leads";

export async function getLeads(): Promise<LeadRecord[]> {
  const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as LeadRecord));
}

export async function getLeadsCount(): Promise<number> {
  const snap = await getCountFromServer(collection(db, COLLECTION));
  return snap.data().count;
}

export async function getNewLeadsCount(): Promise<number> {
  const q = query(collection(db, COLLECTION), where("status", "==", "new"));
  const snap = await getCountFromServer(q);
  return snap.data().count;
}
