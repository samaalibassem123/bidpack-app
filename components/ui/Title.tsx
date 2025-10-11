import { cn } from "@/utils/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className }: Props) {
  return (
    <h1 className={cn(" text-7xl text-white font-semibold", className)}>
      {children}
    </h1>
  );
}
