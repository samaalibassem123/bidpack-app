"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Header({ children, className }: Props) {
  return (
    <header
      className={cn(
        " sticky top-10 sm:px-[80px] px-5  py-[10px] text-white  z-50 transition-all     duration-400 delay-150   flex items-center justify-between backdrop-blur-[8px] border-y border-y-white/20 bg-white/10 rounded-[50px]",
        className
      )}
    >
      {children}
    </header>
  );
}
