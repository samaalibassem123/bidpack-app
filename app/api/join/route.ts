"use server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbyNMD3jPT9JMIMzZvYHB_NMBPpZaQK50DzfDUxJuF81gUxJoXby8c2hurxM74385zS-pw/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    );

    const text = await res.text();
    const result = JSON.parse(text);
    console.log(result);

    return NextResponse.json({ success: res });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
