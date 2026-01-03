import Link from "next/link";
import React from "react";
const REGISTER_URL = "https://bidpackapp.com/login/magic-link";
export default function Register() {
  return (
    <Link
      href={REGISTER_URL}
      className="px-[16px] py-[8px] rounded-[8px] bg-[#5473C1] hover:opacity-80  transition-all font-semibold"
    >
      Sign Up
    </Link>
  );
}
