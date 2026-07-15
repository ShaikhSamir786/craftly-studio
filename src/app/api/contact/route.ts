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
    
    await addDoc(collection(db, "leads"), leadData);
    
    // 2. Dispatch emails (auto-reply & notification)
    await sendContactEmails({
      name,
      email,
      phone,
      company,
      message,
    });
    
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
