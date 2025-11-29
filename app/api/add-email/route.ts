import { z } from "zod";

const EmailSchema = z.object({
  email: z.string().email().trim(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const CheckMail = EmailSchema.safeParse({ email: body.email });

    if (!CheckMail.success) {
      return Response.json(
        { success: false, message: "Invalid email. Try again!" },
        { status: 400 }
      );
    }

    // Send to Google Sheet
    const res = await fetch(process.env.GOOGLE_SHEET_LINK_APP ?? "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: body.email }),
    });

    const text = await res.text();
    const result = JSON.parse(text);

    if (result.success) {
      return Response.json({
        success: true,
        message: "Email added successfully to the waiting list",
      });
    }

    return Response.json(
      { success: false, message: result.message },
      { status: 400 }
    );
  } catch (error) {
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
