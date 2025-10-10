"use server";

import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();
  console.log("Using client email:", process.env.GOOGLE_CLIENT_EMAIL);
  console.log("Private key loaded:", !!process.env.GOOGLE_PRIVATE_KEY);
  console.log("Private key loaded:", !!process.env.GOOGLE_SHEET_ID);

  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:A",
      valueInputOption: "RAW",
      requestBody: {
        values: [[email, new Date().toLocaleString()]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
