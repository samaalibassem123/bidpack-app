import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Hero({ children, className }: Props) {
  return (
    <section
      className={cn(
        "flex items-center sm:justify-center justify-evenly flex-col gap-10   w-full h-[90lvh] text-white",
        className
      )}
    >
      {children}
    </section>
  );
}
