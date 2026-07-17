import { NextResponse } from "next/server";
import { cloudinary } from "@/lib/cloudinary";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<Record<string, unknown>>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "craftly-studio/media",
          resource_type: "auto",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result as Record<string, unknown>);
        }
      );
      uploadStream.end(buffer);
    });

    const fileUrl = result.secure_url as string;
    const publicId = result.public_id as string;

    const docRef = await addDoc(collection(db, "media"), {
      fileName: file.name,
      fileUrl,
      fileType: file.type,
      fileSize: file.size,
      publicId,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({
      id: docRef.id,
      fileName: file.name,
      fileUrl,
      fileType: file.type,
      fileSize: file.size,
      publicId,
    });
  } catch (error: unknown) {
    console.error("Error uploading media:", error);
    const message = error instanceof Error ? error.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
