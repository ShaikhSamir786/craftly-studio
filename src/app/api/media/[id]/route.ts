import { NextResponse } from "next/server";
import { cloudinary } from "@/lib/cloudinary";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const docRef = doc(db, "media", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json({ error: "Media item not found" }, { status: 404 });
    }

    const data = docSnap.data();
    const publicId = data.publicId as string | undefined;

    if (publicId) {
      try {
        await cloudinary.uploader.destroy(publicId);
      } catch (err) {
        console.warn("Failed to delete Cloudinary asset, removing metadata only:", err);
      }
    }

    await deleteDoc(docRef);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Error deleting media:", error);
    const message = error instanceof Error ? error.message : "Delete failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
