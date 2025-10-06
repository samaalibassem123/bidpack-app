import { cn } from "@/utils/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ButtonsContainer({ children, className }: Props) {
  return (
    <div className={cn("flex items-center gap-[13px]", className)}>
      {children}
    </div>
  );
}
