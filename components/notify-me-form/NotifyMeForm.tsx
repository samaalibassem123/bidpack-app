"use client";
import { useState } from "react";

export default function NotifyMeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxmeqTN3bqBreizj6BYNshzIeT3Wj1IshfRRg-fDIkfFT2Jgk2KI38OYkOz_5Dj2fZKkA/exec",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            secret:
              "AKfycbz1OWmXpLBx4trqKTTzEiNXhucA0S7Lifcvrc8hofwQBBViqQ9ku4V4FeOUUkof71h2jA",
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(res);
      setStatus("✅ Email added successfully!");
      setEmail("");
    } catch (err) {
      setStatus("❌ Something went wrong!");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 sm:w-fit w-full"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email address"
        className="border border-[#5473C133] sm:w-sm w-full outline-none  p-4 rounded-md"
      />
      <button className="border-y border-white/20 px-5 py-3 cursor-pointer  rounded-md bg-gradient-to-br from-[#5473C133] from-50% to-white/10  hover: ">
        Notify Me
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
