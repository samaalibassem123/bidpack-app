import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function DescriptionText({ children, className }: Props) {
  return <p className={cn("text-md text-[#B2B2B2]", className)}>{children}</p>;
}
