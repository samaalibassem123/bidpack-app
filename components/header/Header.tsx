import { cn } from "@/utils/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Header({ children, className }: Props) {
  return (
    <div
      className={cn(
        " relative px-[80px] py-[10px] text-white flex items-center justify-between backdrop-blur-[8px] border-y border-y-white/20 bg-white/10 rounded-[50px]",
        className
      )}
    >
      {children}
    </div>
  );
}
