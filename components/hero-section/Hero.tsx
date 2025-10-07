import { cn } from "@/utils/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Hero({ children, className }: Props) {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-col gap-10 w-full h-[80svh] text-white",
        className
      )}
    >
      {children}
    </div>
  );
}
