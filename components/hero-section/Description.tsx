import { cn } from "@/utils/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Description({ children, className }: Props) {
  return (
    <p className={cn(" text-center text-xl text-[#B2B2B2]", className)}>
      {children}
    </p>
  );
}
