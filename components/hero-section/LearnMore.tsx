import Link from "next/link";
import React from "react";

export default function LearnMore() {
  return (
    <Link
      href={"/register"}
      className=" bg-gradient-to-br  hover:opacity-80 transition-all from-bg-[#F6F6F614] to-white/10 inset-shadow-lg w-[180px] text-center px-[24px] py-[10px]  backdrop-blur-[8px] border-y border-y-white/20 rounded-[12px]"
    >
      Learn More
    </Link>
  );
}
