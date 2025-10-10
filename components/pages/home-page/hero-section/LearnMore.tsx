import Link from "next/link";
import React from "react";

export default function LearnMore() {
  return (
    <Link
      href={"#learn-more"}
      className=" bg-gradient-to-br  hover:opacity-80 transition-all from-[#31394f] to-white/5 inset-shadow-lg w-[180px] text-center px-[24px] py-[10px]   border-t border-l shadow-2xs shadow-white/20  border-white/20 rounded-[12px]"
    >
      Learn More
    </Link>
  );
}
