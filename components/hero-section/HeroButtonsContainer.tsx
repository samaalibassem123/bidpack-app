import { cn } from "@/utils/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function HeroButtonsContainer({ children, className }: Props) {
  return (
    <div
      className={cn("flex sm:flex-row flex-col items-center  gap-5", className)}
    >
      {children}
    </div>
  );
}
