import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <Link
      href={"/register"}
      className="px-[16px] py-[8px] rounded-[8px] bg-[#5473C1] hover:opacity-80  transition-all font-semibold"
    >
      Sign Up
    </Link>
  );
}
