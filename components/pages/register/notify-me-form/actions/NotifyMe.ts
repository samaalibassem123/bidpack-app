"use server";
import { z } from "zod";

// Schema
const EmailSchema = z.object({
  email: z.email().trim(),
});

export const addEmailToGoogleSheet = async (state: any, data: FormData) => {
  const email = data.get("email");
  const CheckMail = EmailSchema.safeParse({ email });
  if (!CheckMail.success) {
    return { MailError: "Invalid email try again !" };
  }

  try {
    const res = await fetch(process.env.GOOGLE_SHEET_LINK_APP ?? "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const text = await res.text();
    const result = JSON.parse(text);

    if (result.success) {
      return { success: "Email Added Succefully to the waiting List" };
    } else {
      return { MailError: result.message };
    }
  } catch (error) {
    throw error;
  }
};
