import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function HeroButtonsContainer({ children, className }: Props) {
  return (
    <nav
      className={cn("flex sm:flex-row flex-col items-center  gap-5", className)}
    >
      {children}
    </nav>
  );
}
