import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}
export default function Copyright({ className }: Props) {
  return (
    <span className={cn("text-sm text-[#B2B2B2] text-center", className)}>
      © 2025-2026 Vision Age Company - All rights reserved.
    </span>
  );
}
