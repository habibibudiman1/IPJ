import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";
import { z } from "zod";

// Zod schema for server-side validation and anti-spam verification
const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email format"),
  phone: z.string().trim().min(5, "Phone number is too short").max(30),
  company: z.string().trim().min(2, "Company name is too short").max(100),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1500),
  website: z.string().max(0).optional(), // Honeypot field (must be empty)
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Validate inputs using Zod
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      const firstError = validation.error.issues[0]?.message || "Invalid input data";
      return NextResponse.json(
        { success: false, error: firstError },
        { status: 400 }
      );
    }

    const { name, email, phone, company, message, website } = validation.data;

    // 2. Honeypot check (spam bot detection)
    if (website !== undefined && website.length > 0) {
      console.warn(`[Spam Blocked] Bot filled honeypot field: name="${name}", email="${email}"`);
      // Return a fake success response to trick the bot into thinking it succeeded
      return NextResponse.json(
        { success: true, message: "Inquiry submitted successfully." },
        { status: 200 }
      );
    }

    // 3. Write to Supabase using client SDK (HTTP REST)
    const { data, error: dbError } = await supabase
      .from("leads")
      .insert([
        {
          name,
          email,
          phone,
          company,
          message,
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error("Supabase Database Error:", dbError);
      return NextResponse.json(
        { success: false, error: "Failed to store lead information." },
        { status: 500 }
      );
    }

    // 4. Send Email via Resend (optional/fail-safe)
    const resendApiKey = process.env.RESEND_API_KEY;
    const senderEmail = process.env.RESEND_SENDER_EMAIL;
    const recipientEmail = process.env.CONTACT_EMAIL || "faridalfarizi@intiboga.com";

    if (resendApiKey && resendApiKey !== "your_resend_api_key") {
      const resend = new Resend(resendApiKey);
      const fromSender = senderEmail || "onboarding@resend.dev"; // Fallback to Resend sandbox if custom domain not verified

      try {
        await resend.emails.send({
          from: `PT Intiboga Leads <${fromSender}>`,
          to: recipientEmail,
          subject: `B2B Inquiry: ${company}`,
          html: `
            <h2>New B2B Lead Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; font-family: sans-serif; background-color: #f7f7f7; padding: 15px; border-radius: 8px;">${message}</p>
          `,
        });
      } catch (emailError) {
        console.error("Resend Email Notification Failed:", emailError);
        // Do not return a 500 error since the lead has already been successfully saved to Supabase
      }
    } else {
      console.warn("Resend API Key is missing or default. Email notification skipped.");
    }

    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error("Contact API Internal Error:", error);
    return NextResponse.json(
      { success: false, error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
