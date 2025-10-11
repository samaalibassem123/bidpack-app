import { cn } from "@/utils/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ButtonsContainer({ children, className }: Props) {
  return (
    <nav className={cn("flex items-center gap-5", className)}>{children}</nav>
  );
}
