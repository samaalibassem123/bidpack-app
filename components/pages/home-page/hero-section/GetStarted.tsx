import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function GetStarted() {
  return (
    <Link
      href={"/register"}
      className={cn(
        "motion-delay-160 bg-[#5473C1] sm:text-md hover:opacity-80 transition-all px-[24px] py-[10px] font-semibold rounded-[12px] "
      )}
    >
      Get Started For Free
    </Link>
  );
}
