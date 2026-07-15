import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { contactFormSchema } from "@/utils/validation";
import { sendContactEmails } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the incoming form data
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: "Validation failed", 
          details: validationResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }
    
    const { firstName, lastName, email, phone, company, message } = validationResult.data;
    const name = `${firstName} ${lastName}`.trim();

    console.log("[API contact] Request data validation succeeded. Preparing database lead payload.");
    
    // 1. Store lead in Firestore 'leads' collection
    const leadData = {
      name,
      email,
      phone: phone || "",
      company: company || "",
      message,
      source: "contact_form",
      status: "new",
      createdAt: serverTimestamp(),
    };
    
    console.log("[API contact] Storing lead in Firestore leads collection...");
    try {
      const dbPromise = addDoc(collection(db, "leads"), leadData);
      
      // Fallback timeout to prevent Firestore from hanging indefinitely if connection fails
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Firestore database write timed out")), 4000)
      );
      
      await Promise.race([dbPromise, timeoutPromise]);
      console.log("[API contact] Lead stored in Firestore successfully.");
    } catch (dbError: any) {
      console.error("[API contact] Warning: Firestore database write failed or timed out. Proceeding to email dispatch.", dbError.message || dbError);
    }
    
    // 2. Dispatch emails (auto-reply & notification)
    console.log("[API contact] Dispatching contact emails...");
    await sendContactEmails({
      name,
      email,
      phone,
      company,
      message,
    });
    console.log("[API contact] Emails sent successfully.");
    
    return NextResponse.json({ 
      success: true, 
      message: "Your inquiry has been submitted successfully." 
    });
  } catch (error: any) {
    console.error("Error handling contact form API:", error);
    return NextResponse.json(
      { 
        error: "Internal Server Error", 
        message: error.message || "An unexpected error occurred" 
      },
      { status: 500 }
    );
  }
}
