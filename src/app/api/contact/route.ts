import { NextResponse } from "next/server";
import { contactFormSchema } from "@/utils/validation";
import { createContactSubmission } from "@/lib/firebase/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    await createContactSubmission(validationResult.data);

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been submitted successfully.",
    });
  } catch (error: unknown) {
    console.error("Error handling contact form API:", error);
    const message = error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message,
      },
      { status: 500 }
    );
  }
}