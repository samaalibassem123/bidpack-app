import Link from "next/link";
import React from "react";

export default function GetStarted() {
  return (
    <Link
      href={"/register"}
      className="bg-[#5473C1] hover:opacity-80 transition-all px-[24px] py-[10px] font-semibold rounded-[12px]"
    >
      Get Started For Free
    </Link>
  );
}
